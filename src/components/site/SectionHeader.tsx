import { type ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  italic,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  subtitle?: ReactNode;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`${alignCls} max-w-3xl`}>
      <span className="inline-block rounded-full bg-primary-light px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
        {title}{" "}
        {italic && (
          <span className="font-display font-normal italic text-primary">
            {italic}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
