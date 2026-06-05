import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { cn } from '@/lib/utils';
import { Sparkles, TrendingDown, TrendingUp } from 'lucide-react';

export function ResultBadge({ result }: { result: string }) {
  const content =
    result === 'Positive'
      ? {
          title: 'Positive engagement',
          description:
            'This image is estimated to have strong engagement signals.',
          icon: TrendingUp,
          className:
            'border-emerald-200 bg-emerald-50 text-emerald-950 dark:border-emerald-900/60 dark:bg-emerald-950/30 dark:text-emerald-100',
        }
      : result === 'Negative'
        ? {
            title: 'Negative engagement',
            description:
              'This image is estimated to have weak engagement signals.',
            icon: TrendingDown,
            className: 'border-destructive/30 bg-destructive/5 text-foreground',
          }
        : {
            title: 'Neutral engagement',
            description:
              'This image is estimated to fall in a steady engagement range.',
            icon: Sparkles,
            className:
              'border-border bg-muted/40 text-foreground dark:bg-muted/20',
          };

  const Icon = content.icon;

  return (
    <Alert className={cn('border', content.className)}>
      <Icon className="size-4" />
      <AlertTitle>{content.title}</AlertTitle>
      <AlertDescription>{content.description}</AlertDescription>
    </Alert>
  );
}
