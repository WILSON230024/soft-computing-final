export function PageHeader() {
  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-muted-foreground">
        Engagement analysis demo
      </p>
      <div className="space-y-1">
        <h1 className="text-3xl font-semibold tracking-tight">
          Image Engagement Assessment
        </h1>
        <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
          Upload one image, review the preview, then run the process to see
          whether engagement is estimated as positive, neutral, or negative.
        </p>
      </div>
    </div>
  );
}
