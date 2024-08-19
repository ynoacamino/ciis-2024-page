import { cn } from '@/lib/utils';

export default function IEEELogo({ className }: { className?: string }) {
  return (
    <div className={cn("bg-[url('/logos/CIIS_logo.png')] dark:bg-[url('/logos/CIIS_logo_dark.png')] aspect-square bg-cover bg-center bg-no-repeat", className)}>
      <span className="sr-only">CSS-2024</span>
    </div>
  );
}
