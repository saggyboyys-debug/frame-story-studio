interface Props {
  preHeading?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionTitle = ({ preHeading, title, subtitle, className = "" }: Props) => (
  <div className={`text-center mb-16 ${className}`}>
    {preHeading && (
      <span className="text-gold text-[13px] uppercase tracking-[0.25em] font-semibold font-inter">
        {preHeading}
      </span>
    )}
    <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 tracking-[-0.02em]">
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
        {subtitle}
      </p>
    )}
  </div>
);
