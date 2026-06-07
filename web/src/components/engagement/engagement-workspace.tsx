'use client';

import { type ChangeEvent, useEffect, useRef, useState } from 'react';

import { PreviewPanel } from './preview-panel';
import { ResultPanel } from './result-panel';
import { UploadSection } from './upload-section';

const IMAGE_FILE_PATTERN = /\.(png|jpe?g|gif|webp|bmp|svg|avif|heic|heif)$/i;

export function EngagementWorkspace() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const previewUrlRef = useRef<string | null>(null);

  useEffect(() => {
    return () => {
      if (previewUrlRef.current) {
        URL.revokeObjectURL(previewUrlRef.current);
      }
    };
  }, []);

  function onFileChange(e: ChangeEvent<HTMLInputElement>) {
    const selectedFile = e.target.files?.[0];
    setResult(null);
    setUploadError(null);

    if (previewUrlRef.current) {
      URL.revokeObjectURL(previewUrlRef.current);
      previewUrlRef.current = null;
    }

    if (!selectedFile) {
      setFile(null);
      setPreview(null);
      return;
    }

    const isImage =
      selectedFile.type.startsWith('image/') ||
      IMAGE_FILE_PATTERN.test(selectedFile.name);

    if (isImage) {
      const objectUrl = URL.createObjectURL(selectedFile);
      previewUrlRef.current = objectUrl;
      setFile(selectedFile);
      setPreview(objectUrl);
      if ('value' in e.target) e.target.value = '';
      return;
    }

    setFile(null);
    setPreview(null);
    setUploadError('Pilih file gambar yang valid ya — JPG, PNG, WEBP, dll.');
    if ('value' in e.target) e.target.value = '';
  }

  async function onProcess() {
    if (!file) return;

    setLoading(true);
    setResult(null);

    await new Promise((resolve) => setTimeout(resolve, 900));

    const name = file.name || '';
    const score =
      name.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0) % 3;
    const labels = ['Positive', 'Neutral', 'Negative'];

    setResult(labels[score]);
    setLoading(false);
  }

  return (
    <>
      <UploadSection
        disabled={!file || loading}
        error={uploadError}
        fileName={file?.name ?? null}
        loading={loading}
        onFileChange={onFileChange}
        onProcess={onProcess}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <PreviewPanel preview={preview} />
        <ResultPanel result={result} />
      </div>
    </>
  );
}
