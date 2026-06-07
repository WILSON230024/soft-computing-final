import { cn } from '@/lib/utils';
import { Minus, TrendingDown, TrendingUp } from 'lucide-react';

const RESULT_CONFIG = {
  Positive: {
    icon: TrendingUp,
    emoji: '🔥',
    label: 'Engagement Tinggi!',
    desc: 'Foto ini punya sinyal keterlibatan yang kuat. Kemungkinan besar akan menarik banyak perhatian dan interaksi.',
    wrapper: 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200',
    iconBg: 'bg-green-100 text-green-700',
    labelColor: 'text-green-800',
    descColor: 'text-green-700',
  },
  Negative: {
    icon: TrendingDown,
    emoji: '📉',
    label: 'Engagement Rendah',
    desc: 'Foto ini memiliki sinyal keterlibatan yang lemah. Coba ganti pencahayaan, komposisi, atau subjek foto.',
    wrapper: 'bg-gradient-to-br from-red-50 to-rose-50 border-red-200',
    iconBg: 'bg-red-100 text-red-700',
    labelColor: 'text-red-800',
    descColor: 'text-red-700',
  },
  Neutral: {
    icon: Minus,
    emoji: '😐',
    label: 'Engagement Biasa',
    desc: 'Foto ini berada di kisaran engagement yang stabil — tidak terlalu rendah, tapi ada ruang untuk ditingkatkan.',
    wrapper: 'bg-gradient-to-br from-slate-50 to-gray-50 border-slate-200',
    iconBg: 'bg-slate-100 text-slate-600',
    labelColor: 'text-slate-800',
    descColor: 'text-slate-600',
  },
};

export function ResultBadge({ result }: { result: string }) {
  const config =
    RESULT_CONFIG[result as keyof typeof RESULT_CONFIG] ??
    RESULT_CONFIG.Neutral;
  const Icon = config.icon;

  return (
    <div className={cn('rounded-xl border p-5 text-center', config.wrapper)}>
      <div className="mb-3 text-4xl">{config.emoji}</div>
      <div
        className={cn(
          'mb-1 flex items-center justify-center gap-2 text-base font-extrabold',
          config.labelColor,
        )}
      >
        <Icon className="h-4 w-4" />
        {config.label}
      </div>
      <p className={cn('text-sm leading-relaxed', config.descColor)}>
        {config.desc}
      </p>
    </div>
  );
}
