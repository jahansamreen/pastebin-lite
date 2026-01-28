'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function PastePage() {
    const params = useParams();
    const router = useRouter();
    const [paste, setPaste] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const fetchPaste = async () => {
            try {
                const response = await fetch(`/api/paste/${params.id}`);
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error || 'Failed to fetch paste');
                }

                setPaste(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPaste();
    }, [params.id]);

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(paste.content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
                <div className="text-white text-xl">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-6 py-4 rounded-xl mb-4">
                        {error}
                    </div>
                    <button
                        onClick={() => router.push('/')}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg"
                    >
                        Create New Paste
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-4xl font-bold text-white">Paste View</h1>
                    <button
                        onClick={() => router.push('/')}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm"
                    >
                        New Paste
                    </button>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 mb-4">
                    <div className="flex justify-between items-center mb-4">
                        <div className="text-purple-200 text-sm space-y-1">
                            {paste.maxViews && (
                                <div>
                                    Views: {paste.viewCount} / {paste.maxViews}
                                </div>
                            )}
                            {paste.expiresAt && (
                                <div>
                                    Expires: {new Date(paste.expiresAt).toLocaleString()}
                                </div>
                            )}
                        </div>
                        <button
                            onClick={copyToClipboard}
                            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
                        >
                            {copied ? 'Copied!' : 'Copy'}
                        </button>
                    </div>

                    <pre className="bg-slate-800/50 text-white rounded-lg p-4 border border-purple-500/30 overflow-x-auto font-mono text-sm whitespace-pre-wrap break-words">
                        {paste.content}
                    </pre>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                    <label className="block text-white text-sm font-medium mb-2">
                        Share URL
                    </label>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={shareUrl}
                            readOnly
                            className="flex-1 bg-slate-800/50 text-white rounded-lg p-3 border border-purple-500/30 font-mono text-sm"
                        />
                        <button
                            onClick={async () => {
                                await navigator.clipboard.writeText(shareUrl);
                            }}
                            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm"
                        >
                            Copy URL
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
