import Image from "next/image";
import { Clock, Receipt, ShieldCheck } from "lucide-react";
import heroImage from "@/public/images/hero-repair.webp";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle">
      <div className="container grid gap-12 px-4 py-20 lg:grid-cols-2 lg:gap-8 lg:py-28">
        <div className="flex flex-col justify-center animate-fade-up">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-success" />
            Принимаем заявки сейчас
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Починим старое,{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">настроим новое</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Профессиональный ремонт и настройка компьютеров и ноутбуков. Работаем с гарантией и
            чеком - быстро, честно, надёжно.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contacts"
              className="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-soft transition-all hover:shadow-glow"
            >
              Оставить заявку
            </a>
            <a
              href="#services"
              className="rounded-lg border border-border bg-card px-6 py-3 font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Наши услуги
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <ShieldCheck className="h-5 w-5 text-success" aria-hidden="true" />
              Гарантия
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Receipt className="h-5 w-5 text-success" aria-hidden="true" />
              Чек
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-5 w-5 text-success" aria-hidden="true" />
              Быстрая диагностика
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-hero opacity-20 blur-2xl" />
          <Image
            src={heroImage}
            alt="Рабочее место мастера по ремонту компьютеров"
            priority
            fetchPriority="high"
            loading="eager"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-auto w-full rounded-3xl shadow-glow animate-float"
          />
        </div>
      </div>
    </section>
  );
}
