import { MonitorCog, Phone, Send } from "lucide-react";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30 py-10">
      <div className="container px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-hero text-primary-foreground">
              <MonitorCog className="h-4 w-4" aria-hidden="true" />
            </div>
            <span className="font-bold text-foreground">{site.name}</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span>УНП: {site.unp}</span>
            <a href={`tel:${site.phone}`} className="flex items-center gap-1.5 hover:text-primary">
              <Phone className="h-4 w-4" aria-hidden="true" /> {site.phoneLabel}
            </a>
            <a
              href={site.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-primary"
            >
              <Send className="h-4 w-4" aria-hidden="true" /> {site.telegramLabel}
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-muted-foreground">
          © 2026 {site.name}. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
