import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import type { ChangeEvent } from 'react';

interface UploadSectionProps {
  disabled: boolean;
  error: string | null;
  fileName: string | null;
  loading: boolean;
  onFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onProcess: () => void;
}

export function UploadSection({
  disabled,
  error,
  fileName,
  loading,
  onFileChange,
  onProcess,
}: UploadSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload image</CardTitle>
        <CardDescription>
          Choose an image from your device and preview it before running the
          analysis.
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="space-y-4 pt-6">
        <div className="space-y-2">
          <Label htmlFor="image-upload">Image file</Label>
          <Input
            id="image-upload"
            type="file"
            accept="image/*,.png,.jpg,.jpeg,.gif,.webp,.bmp,.svg,.avif,.heic,.heif"
            onChange={onFileChange}
            className="min-h-11 h-auto py-2 leading-normal file:mr-4 file:h-8 file:rounded-md file:border file:border-border file:bg-muted file:px-3 file:py-0 file:text-sm file:font-medium file:leading-6 file:text-foreground hover:file:bg-accent"
          />
          <p
            className={cn(
              'text-sm',
              fileName ? 'text-foreground' : 'text-muted-foreground',
            )}
          >
            {fileName ? `Selected: ${fileName}` : 'No file selected'}
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          Supported formats include PNG, JPG, GIF, WEBP, BMP, SVG, AVIF, HEIC,
          and HEIF.
        </p>
        {error ? <p className="text-sm text-destructive">{error}</p> : null}
      </CardContent>
      <CardFooter className="flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <p className="text-sm text-muted-foreground">
          After you choose a file, the image preview will appear immediately.
        </p>
        <Button onClick={onProcess} disabled={disabled}>
          {loading ? 'Processing...' : 'Process'}
        </Button>
      </CardFooter>
    </Card>
  );
}
