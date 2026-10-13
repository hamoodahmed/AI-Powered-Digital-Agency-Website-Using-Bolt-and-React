interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  center = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-14 ${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}>
      <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-gray-400 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
