import Image from "next/image";
import { Award, Users, Wrench } from "lucide-react";
import masterPortrait from "@/public/images/master-portrait.jpg";

const stats = [
  { icon: Wrench, value: "10+", label: "лет опыта" },
  { icon: Users, value: "1000+", label: "клиентов" },
  { icon: Award, value: "100%", label: "гарантия" },
];

export default function About() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="container px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-hero opacity-20 blur-2xl" />
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-glow">
              <Image
                src={masterPortrait}
                alt="Михаил - мастер по ремонту компьютеров"
                sizes="(min-width: 1024px) 448px, 100vw"
                className="aspect-[3/4] h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-card px-5 py-2 shadow-soft">
              <span className="h-2 w-2 animate-pulse rounded-full bg-success" />
              <span className="text-sm font-medium text-foreground">На связи</span>
            </div>
          </div>
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              Обо мне
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Михаил - ваш частный компьютерный мастер
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Занимаюсь ремонтом и настройкой компьютеров и ноутбуков более 10 лет. Решаю задачи
              любой сложности - от чистки и переустановки Windows до восстановления данных и
              сложного аппаратного ремонта.
            </p>
            <p className="mt-4 text-muted-foreground">
              Работаю честно: сначала диагностика и согласование цены, потом - работа. На все услуги
              выдаю чек и предоставляю гарантию.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="rounded-2xl border border-border bg-card p-4 text-center shadow-card">
                  <Icon className="mx-auto mb-2 h-5 w-5 text-primary" aria-hidden="true" />
                  <div className="text-2xl font-bold text-foreground">{value}</div>
                  <div className="text-xs text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
