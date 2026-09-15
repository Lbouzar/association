type ScrollIndicatorProps = {
  label?: string;
  dark?: boolean;
};

export default function ScrollIndicator({
  label = "scroll",
  dark = true,
}: ScrollIndicatorProps) {
  return (
    <div className="absolute bottom-10 left-6 flex items-center gap-3 sm:left-10">
      <span className={`h-10 w-px animate-pulse ${dark ? "bg-ivory/50" : "bg-foreground/40"}`} />
      <span
        className={`text-xs uppercase tracking-[0.3em] ${
          dark ? "text-ivory/60" : "text-foreground-muted"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

