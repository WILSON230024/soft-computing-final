import { Button } from '@/components/ui/button';

export function WarningCard() {
  return (
    <div className="mb-6 rounded-3xl border border-red-500/30 bg-red-500/10 p-5 text-sm text-red-100 shadow-sm shadow-red-500/10">
      <p>
        Peringatan: Gambar Anda hanya digunakan untuk analisis di sini dan tidak
        disimpan, dicadangkan, atau dibagikan.
      </p>
    </div>
  );
}

export function PageHeader() {
  return (
    <div className="mb-6 space-y-3">
      <h1 className="text-3xl font-semibold tracking-tight text-white">
        Penilaian Engagement Gambar
      </h1>
      <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
        Unggah foto, lalu tekan tombol Proses untuk melihat apakah engagement
        dianggap positif, netral, atau negatif.
      </p>
    </div>
  );
}

interface UploadSectionProps {
  disabled: boolean;
  loading: boolean;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onProcess: () => void;
}

export function UploadSection({
  disabled,
  loading,
  onFileChange,
  onProcess,
}: UploadSectionProps) {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_14px_60px_-15px_rgba(59,130,246,0.45)] md:flex-row md:items-end md:gap-6">
      <label className="flex w-full flex-col gap-3 text-sm text-slate-200 md:flex-1">
        <span className="font-medium">Unggah foto Anda</span>
        <input
          type="file"
          accept="image/*"
          onChange={onFileChange}
          className="h-14 rounded-3xl border border-dashed border-slate-500/60 bg-slate-950/60 px-4 text-sm text-slate-100 transition hover:border-slate-300/70 file:mr-4 file:rounded-full file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-sm file:text-white"
        />
      </label>

      <Button
        onClick={onProcess}
        disabled={disabled}
        className="h-14 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500 px-6 text-white shadow-lg shadow-blue-500/20 transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? 'Memproses...' : 'Proses'}
      </Button>
    </div>
  );
}

interface PreviewPanelProps {
  preview: string | null;
}

export function PreviewPanel({ preview }: PreviewPanelProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 shadow-lg shadow-slate-950/20">
      {preview ? (
        <img
          src={preview}
          alt="preview"
          className="max-h-96 w-full rounded-3xl object-contain"
        />
      ) : (
        <div className="flex h-72 items-center justify-center rounded-3xl border border-dashed border-slate-600/70 bg-slate-950/60 text-slate-400">
          Pratinjau gambar akan muncul di sini
        </div>
      )}
    </div>
  );
}

interface ResultPanelProps {
  result: string | null;
}

export function ResultPanel({ result }: ResultPanelProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 shadow-lg shadow-slate-950/20">
      <div className="mb-3 text-sm uppercase tracking-[0.25em] text-slate-400">
        Hasil Penilaian
      </div>
      <div className="min-h-[120px] rounded-3xl border border-slate-700/70 bg-slate-950/90 p-5 text-center text-lg font-semibold text-white">
        {result ? (
          <ResultBadge result={result} />
        ) : (
          <div className="text-slate-400">
            Belum ada hasil. Unggah gambar lalu tekan Proses.
          </div>
        )}
      </div>
    </div>
  );
}

export function ResultBadge({ result }: { result: string }) {
  const styles =
    result === 'Positif'
      ? 'inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-800'
      : result === 'Negatif'
        ? 'inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-sm text-red-800'
        : 'inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-800';

  return <span className={styles}>{result}</span>;
}
