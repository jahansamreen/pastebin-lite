import { neon } from '@neondatabase/serverless';
import { notFound } from 'next/navigation';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const sql = neon(process.env.DATABASE_URL!);

        const result = await sql`
      SELECT id, content, expires_at, max_views, view_count
      FROM pastes
      WHERE id = ${id}
    `;

        if (result.length === 0) {
            return Response.json({ error: 'Paste not found' }, { status: 404 });
        }

        const paste = result[0];

        // Check if expired by time
        if (paste.expires_at && new Date(paste.expires_at) < new Date()) {
            await sql`DELETE FROM pastes WHERE id = ${id}`;
            return Response.json({ error: 'Paste has expired' }, { status: 410 });
        }

        // Check if expired by views
        if (paste.max_views && paste.view_count >= paste.max_views) {
            await sql`DELETE FROM pastes WHERE id = ${id}`;
            return Response.json({ error: 'Paste has expired' }, { status: 410 });
        }

        // Increment view count
        await sql`
      UPDATE pastes
      SET view_count = view_count + 1
      WHERE id = ${id}
    `;

        return Response.json({
            content: paste.content,
            viewCount: paste.view_count + 1,
            maxViews: paste.max_views,
            expiresAt: paste.expires_at
        });
    } catch (error) {
        console.error('Error fetching paste:', error);
        return Response.json({ error: 'Failed to fetch paste' }, { status: 500 });
    }
}
