import { cn } from "@/lib/utils";

export function ScreenshotFrame({
  children,
  className,
  label,
}: {
  children: React.ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-card shadow-[0_20px_60px_-30px_rgba(16,22,19,0.35)]",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border bg-muted px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        {label ? (
          <span className="ml-2 truncate text-xs font-medium text-muted-foreground">
            {label}
          </span>
        ) : null}
      </div>
      <div className="bg-card">{children}</div>
    </div>
  );
}

export function PhoneFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[300px] overflow-hidden rounded-[2rem] border-8 border-[var(--brand-charcoal)] bg-card shadow-[0_25px_60px_-25px_rgba(16,22,19,0.45)]",
        className,
      )}
    >
      <div className="flex items-center justify-center border-b border-border bg-card py-2">
        <span className="h-1.5 w-16 rounded-full bg-muted" />
      </div>
      <div>{children}</div>
    </div>
  );
}
