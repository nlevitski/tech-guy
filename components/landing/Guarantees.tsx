import { BadgeCheck, Clock, Receipt, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Гарантия на работы",
    description: "Предоставляем гарантию на все выполненные работы и установленные комплектующие.",
  },
  {
    icon: Receipt,
    title: "Чек и документы",
    description: "Каждый заказ оформляется с чеком - официально и прозрачно.",
  },
  {
    icon: BadgeCheck,
    title: "Честные цены",
    description: "Никаких скрытых платежей. Стоимость согласовываем до начала работ.",
  },
  {
    icon: Clock,
    title: "Соблюдение сроков",
    description: "Чётко соблюдаем оговорённые сроки выполнения ремонта.",
  },
];

export default function Guarantees() {
  return (
    <section id="guarantees" className="bg-gradient-subtle py-20 lg:py-28">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Почему мне доверяют
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">Работаю прозрачно и отвечаю за результат</p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-card transition-shadow hover:shadow-soft"
            >
              <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-success/10 text-success">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
