import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  markClassName?: string;
}

/**
 * Recreated ByteOps mark from byte.png — modernized:
 * cloud outline + speed bars + pixel square, same concept, cleaner geometry.
 * Uses currentColor for strokes so it adapts to light/dark via text color.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="ByteOps mark"
      className={cn("h-9 w-9 shrink-0", className)}
    >
      <path
        d="M14 44 C10 38 12 30 19 26 C22 24 25 24 27 24 C29 15 38 9 48 12 C53 14 56 17 57.5 21"
        fill="none"
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 44 C14 52 21 57 31 56.5 C38 56 43 53 44.5 48.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="34" y="24" width="18" height="5" rx="2.5" fill="currentColor" />
      <rect x="29" y="33" width="23" height="5" rx="2.5" fill="currentColor" />
      <rect x="29" y="42" width="5" height="5" rx="1.2" fill="var(--byteops-accent)" />
      <rect x="38" y="42" width="9" height="9" rx="1.6" fill="var(--byteops-primary)" />
    </svg>
  );
}

export function Logo({ className, showWordmark = true, markClassName }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-byteops-base-dark text-white dark:bg-white dark:text-byteops-base-dark shadow-sm">
        <LogoMark className={cn("h-7 w-7", markClassName)} />
      </span>
      {showWordmark && (
        <span className="flex flex-col leading-none text-left">
          <span className="text-xl font-extrabold tracking-tight text-byteops-text-dark dark:text-white">
            Byte<span className="text-byteops-primary">Ops</span>
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-byteops-text-dark/60 dark:text-white/60">
            Digital Systems
          </span>
        </span>
      )}
    </span>
  );
}
