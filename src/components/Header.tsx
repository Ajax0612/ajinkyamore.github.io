import { useEffect, useState } from "react";

const sections = ["home","about","skills","qualification","projects","contact"];

export default function Header() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(id);
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 bg-white border-b z-50">
      <div className="max-w-[var(--container)] mx-auto px-6 py-4 flex justify-between">
        <h1 className="font-bold">AJINKYA MORE</h1>
        <nav className="flex gap-6 text-sm">
          {sections.map(s => (
            <a
              key={s}
              href={`#${s}`}
              className={active === s ? "text-indigo-600 font-semibold" : ""}
            >
              {s.charAt(0).toUpperCase()+s.slice(1)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
