import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  bg?: string;
  children: ReactNode;
};

export default function Section({
  id,
  bg = "bg-white",
  children,
}: SectionProps) {
  return (
    <section id={id} className={`${bg} py-[var(--section)]`}>
      <div className="max-w-[var(--container)] mx-auto px-6">
        {children}
      </div>
    </section>
  );
}
