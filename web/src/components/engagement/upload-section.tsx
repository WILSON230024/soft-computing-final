'use client';

import { cn } from '@/lib/utils';
import { CheckCircle2, Upload } from 'lucide-react';
import type { ChangeEvent, DragEvent } from 'react';
import { useRef, useState } from 'react';

interface UploadSectionProps {
  disabled: boolean;
  error: string | null;
  fileName: string | null;
  loading: boolean;
  onFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onProcess: () => void;
}

const FORMATS = ['PNG', 'JPG', 'WEBP', 'GIF', 'HEIC', 'AVIF', 'SVG', 'BMP'];

export function UploadSection({
  disabled,
  error,
  fileName,
  loading,
  onFileChange,
  onProcess,
}: UploadSectionProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  function handleDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (!file) return;
    // Synthesise a change event the parent handler can consume
    const dt = new DataTransfer();
    dt.items.add(file);
    const syntheticEvent = {
      target: { files: dt.files, value: '' },
    } as unknown as ChangeEvent<HTMLInputElement>;
    onFileChange(syntheticEvent);
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      {/* Card header */}
      <div className="flex items-center gap-3 border-b border-border px-6 py-4">
        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl ig-gradient">
          <Upload className="h-4 w-4 text-white" />
        </div>
        <div>
          <p className="text-sm font-bold text-card-foreground">Upload Foto</p>
          <p className="text-xs text-muted-foreground">
            Pilih satu foto dari perangkatmu, lalu jalankan analisis.
          </p>
        </div>
      </div>

      {/* Card body */}
      <div className="space-y-4 p-6">
        {/* Drop zone */}
        <div
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          className={cn(
            'ig-gradient-border flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-transparent px-6 py-10 text-center transition-all duration-200',
            dragging && 'scale-[1.01] opacity-90',
          )}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100">
            <Upload className="h-6 w-6 text-purple-500" />
          </div>
          <div>
            <p className="text-sm font-bold text-foreground">
              Seret foto ke sini, atau{' '}
              <span className="ig-gradient-text">pilih file</span>
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Semua format gambar didukung
            </p>
          </div>
          <input
            ref={inputRef}
            type="file"
            accept="image/*,.png,.jpg,.jpeg,.gif,.webp,.bmp,.svg,.avif,.heic,.heif"
            onChange={onFileChange}
            className="hidden"
          />
        </div>

        {/* Format chips */}
        <div className="flex flex-wrap gap-2">
          {FORMATS.map((fmt) => (
            <span
              key={fmt}
              className="rounded-full bg-purple-50 px-3 py-1 text-[11px] font-semibold text-purple-700"
            >
              {fmt}
            </span>
          ))}
        </div>

        {/* Selected file indicator */}
        {fileName && (
          <div className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3">
            <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-green-600" />
            <p className="flex-1 truncate text-sm font-semibold text-green-800">
              {fileName}
            </p>
            <span className="text-xs font-medium text-green-600">Siap</span>
          </div>
        )}

        {/* Error */}
        {error && (
          <p className="text-sm font-medium text-destructive">{error}</p>
        )}

        {/* CTA button */}
        <button
          onClick={onProcess}
          disabled={disabled}
          className={cn(
            'ig-gradient w-full rounded-full py-3.5 text-sm font-bold text-white shadow-lg shadow-pink-200 transition-all duration-200',
            'hover:-translate-y-0.5 hover:shadow-xl hover:shadow-pink-300',
            'disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none disabled:translate-y-0',
          )}
        >
          {loading ? '⏳ Memproses...' : '✨ Analisis Sekarang'}
        </button>

        {loading && (
          <div className="h-1.5 overflow-hidden rounded-full bg-muted">
            <div
              className="ig-gradient h-full animate-pulse rounded-full"
              style={{ width: '70%' }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
