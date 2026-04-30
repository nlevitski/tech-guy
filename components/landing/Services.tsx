import { HardDriveDownload, Laptop, Printer, Settings2, ShieldAlert, Wrench } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Ремонт компьютеров",
    description:
      "Диагностика и устранение аппаратных и программных неисправностей стационарных ПК любой сложности.",
  },
  {
    icon: Laptop,
    title: "Ремонт ноутбуков",
    description:
      "Чистка от пыли, замена клавиатур, экранов, аккумуляторов и других компонентов ноутбуков.",
  },
  {
    icon: ShieldAlert,
    title: "Удаление вирусов",
    description:
      "Полная очистка системы от вредоносного ПО, установка защиты и рекомендации по безопасности.",
  },
  {
    icon: HardDriveDownload,
    title: "Восстановление информации",
    description:
      "Извлечение потерянных и повреждённых данных с жёстких дисков, SSD и флэш-носителей.",
  },
  {
    icon: Settings2,
    title: "Настройка ОС и программ",
    description:
      "Установка и настройка Windows, драйверов, офисных программ и необходимого ПО под ваши задачи.",
  },
  {
    icon: Printer,
    title: "Заправка картриджей",
    description: "Быстрая и качественная заправка картриджей для лазерных и струйных принтеров.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-background py-20 lg:py-28">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Услуги
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Полный спектр услуг для вашей техники - от диагностики до сложного ремонта
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-hero text-primary-foreground shadow-soft transition-transform group-hover:scale-110">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
