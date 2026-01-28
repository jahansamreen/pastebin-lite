import { neon } from '@neondatabase/serverless';

export async function POST(request: Request) {
  try {
    const { content, expiresIn, maxViews } = await request.json();
    
    if (!content || content.trim().length === 0) {
      return Response.json({ error: 'Content is required' }, { status: 400 });
    }

    const sql = neon(process.env.DATABASE_URL!);
    const id = Math.random().toString(36).substring(2, 10);
    
    let expiresAt = null;
    if (expiresIn && expiresIn > 0) {
      expiresAt = new Date(Date.now() + expiresIn * 60 * 1000).toISOString();
    }

    await sql`
      INSERT INTO pastes (id, content, expires_at, max_views)
      VALUES (${id}, ${content}, ${expiresAt}, ${maxViews || null})
    `;

    return Response.json({ id, url: `${request.headers.get('origin')}/${id}` });
  } catch (error) {
    console.error('Error creating paste:', error);
    return Response.json({ error: 'Failed to create paste' }, { status: 500 });
  }
}
