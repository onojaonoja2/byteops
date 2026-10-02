import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
  id?: string;
}

export function SectionHeading({ eyebrow, title, description, align = "center", className, id }: Props) {
  return (
    <div className={cn(align === "center" ? "mx-auto text-center" : "text-left", "max-w-3xl", className)}>
      {eyebrow && (
        <p className="mb-3 inline-flex items-center rounded-full border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-byteops-primary">
          {eyebrow}
        </p>
      )}
      <h2 id={id} className="font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>}
    </div>
  );
}
