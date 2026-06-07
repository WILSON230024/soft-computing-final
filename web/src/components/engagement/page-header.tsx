export function PageHeader() {
  return (
    <div className="space-y-3 text-center">
      <p className="ig-gradient-text text-[11px] font-bold uppercase tracking-[2.5px]">
        AI Image Analysis
      </p>
      <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
        Cek <span className="ig-gradient-text">Engagement</span>
        <br />
        Foto Kamu
      </h1>
      <p className="mx-auto max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
        Upload foto, lihat hasilnya dalam hitungan detik. Kami menganalisis
        potensi engagement gambarmu — seberapa kuat daya tariknya.
      </p>
    </div>
  );
}
