import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ShieldAlert } from 'lucide-react';

export function WarningCard() {
  return (
    <Alert>
      <ShieldAlert className="size-4" />
      <AlertTitle>Image privacy</AlertTitle>
      <AlertDescription>
        Your image is used only for analysis on this page and is not stored,
        backed up, or shared.
      </AlertDescription>
    </Alert>
  );
}
