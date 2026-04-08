interface PageHeroProps {
  label: string;
  title: string;
  description: string;
  image: string;
}

export function PageHero({ label, title, description, image }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-nord-slate)] bg-[var(--color-nord-deep)] py-24">
      {/* Subtle background image at low opacity */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      />
      {/* Gradient to keep left side fully readable */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, #111520 25%, transparent 100%)",
        }}
      />

      {/* Content — same as original */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-nord-teal)]">
          {label}
        </p>
        <h1 className="mt-4 text-3xl uppercase sm:text-5xl md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg text-[var(--color-nord-mist)]">{description}</p>
      </div>
    </section>
  );
}
