interface Props {
  index: string;
  label: string;
  title: string;
  children?: React.ReactNode;
}

export function SectionHeader({ index, label, title, children }: Props) {
  return (
    <div className="mb-12">
      <p className="font-mono text-xs text-white/60 lowercase tracking-[0.3em]">
        {`// ${index} · ${label}`}
      </p>
      <h2 className="lowercase text-3xl sm:text-5xl font-light mt-2">{title}</h2>
      {children}
    </div>
  );
}
