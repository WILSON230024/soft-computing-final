'use client';

import {
  PageHeader,
  PreviewPanel,
  ResultPanel,
  UploadSection,
  WarningCard,
} from '@/components/ui/engagement';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const previewUrlRef = useRef<string | null>(null);

  useEffect(() => {
    return () => {
      if (previewUrlRef.current) {
        URL.revokeObjectURL(previewUrlRef.current);
      }
    };
  }, []);

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files && e.target.files[0];
    setResult(null);

    if (previewUrlRef.current) {
      URL.revokeObjectURL(previewUrlRef.current);
      previewUrlRef.current = null;
    }

    if (f && f.type.startsWith('image/')) {
      const objectUrl = URL.createObjectURL(f);
      previewUrlRef.current = objectUrl;
      setFile(f);
      setPreview(objectUrl);
    } else {
      setFile(null);
      setPreview(null);
    }
  }

  async function onProcess() {
    if (!file) return;
    setLoading(true);
    setResult(null);
    await new Promise((r) => setTimeout(r, 900));
    const name = file.name || '';
    const score = name.split('').reduce((s, ch) => s + ch.charCodeAt(0), 0) % 3;
    const labels = ['Positif', 'Netral', 'Negatif'];
    setResult(labels[score]);
    setLoading(false);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#050714] via-[#080b1f] to-[#120838] font-sans p-6 text-white">
      <main className="w-full max-w-3xl rounded-[32px] border border-white/10 bg-[#090b16]/95 p-8 shadow-[0_30px_80px_-30px_rgba(96,165,250,0.8)] backdrop-blur-xl">
        <WarningCard />
        <PageHeader />
        <UploadSection
          disabled={!file || loading}
          loading={loading}
          onFileChange={onFileChange}
          onProcess={onProcess}
        />

        <div className="mt-6 grid gap-4 lg:grid-cols-[2fr_1fr]">
          <PreviewPanel preview={preview} />
          <ResultPanel result={result} />
        </div>
      </main>
    </div>
  );
}
