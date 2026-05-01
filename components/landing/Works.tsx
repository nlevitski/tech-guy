import Image, { type StaticImageData } from "next/image";
import work1 from "@/public/images/work-1.webp";
import work2 from "@/public/images/work-2.webp";
import work3 from "@/public/images/work-3.webp";

const works: Array<{
  src: StaticImageData;
  title: string;
  description: string;
}> = [
  {
    src: work1,
    title: "Ремонт ноутбуков и ПК",
    description: "Диагностика и обслуживание партии ноутбуков разных моделей",
  },
  {
    src: work2,
    title: "Настройка ОС",
    description: "Установка и настройка Windows с переносом данных",
  },
  {
    src: work3,
    title: "Ремонт периферии",
    description: "Восстановление работоспособности геймпадов и другой техники",
  },
];

export default function Works() {
  return (
    <section id="works" className="bg-gradient-subtle py-20 lg:py-28">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Мои работы
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Несколько примеров из практики - от мелкого ремонта до крупных заказов
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map(({ src, title, description }) => (
            <figure
              key={title}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={src}
                  alt={title}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="p-5">
                <h3 className="font-semibold text-foreground">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
