interface Props {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
}

export const FilterTabs = ({ categories, active, onChange }: Props) => (
  <div className="flex gap-3 justify-center flex-wrap mb-12">
    {categories.map((tab) => (
      <button
        key={tab}
        onClick={() => onChange(tab)}
        className={`px-6 py-2 rounded-full border text-sm transition-all duration-200 ${
          active === tab
            ? "bg-gold border-gold text-primary-foreground font-semibold"
            : "border-border text-muted-foreground hover:border-gold"
        }`}
      >
        {tab}
      </button>
    ))}
  </div>
);
