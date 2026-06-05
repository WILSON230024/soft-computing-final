import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ImageIcon } from 'lucide-react';
import Image from 'next/image';

interface PreviewPanelProps {
  preview: string | null;
}

export function PreviewPanel({ preview }: PreviewPanelProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ImageIcon className="size-4 text-muted-foreground" />
          Preview
        </CardTitle>
        <CardDescription>
          The selected image will appear here before processing.
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="pt-6">
        {preview ? (
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border bg-muted/30">
            <Image
              src={preview}
              alt="Preview of the selected image"
              fill
              sizes="(min-width: 1024px) 42rem, 100vw"
              unoptimized
              className="object-contain"
            />
          </div>
        ) : (
          <div className="flex min-h-72 items-center justify-center rounded-lg border border-dashed bg-muted/30 px-6 text-center text-sm text-muted-foreground">
            Your image preview will appear here after you choose a file.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
