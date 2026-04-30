import { MonitorCog, Phone } from "lucide-react";
import { navItems, site } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2" aria-label="Компьютерщик, на главную">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-hero text-primary-foreground shadow-soft">
            <MonitorCog className="h-5 w-5" aria-hidden="true" />
          </div>
          <span className="text-xl font-bold text-foreground">{site.name}</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Основная навигация">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={`tel:${site.phone}`}
          className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:shadow-glow sm:flex"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Позвонить
        </a>
      </div>
    </header>
  );
}
