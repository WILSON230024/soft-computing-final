import {
  EngagementWorkspace,
  PageHeader,
  WarningCard,
} from '@/components/engagement';

export default function Home() {
  return (
    <main className="min-h-screen bg-muted/30">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-6 px-4 py-10 sm:px-6 lg:px-8">
        <PageHeader />
        <WarningCard />
        <EngagementWorkspace />
      </div>
    </main>
  );
}
