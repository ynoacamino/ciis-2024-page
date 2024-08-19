import { cn } from '@/lib/utils';

export default function IEEEOfficial({ className }: { className?: string }) {
  return (
    <div className={cn("bg-[url('/logos/CIIS_title.png')] dark:bg-[url('/logos/CIIS_title_dark.png')] aspect-[24/9] bg-contain bg-center bg-no-repeat", className)}>
      <span className="sr-only">CSS-2024</span>
    </div>
  );
}
