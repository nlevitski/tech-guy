import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-subtle px-4">
      <div className="max-w-md text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">404</p>
        <h1 className="mt-3 text-3xl font-bold text-foreground">Страница не найдена</h1>
        <p className="mt-4 text-muted-foreground">
          Такой страницы нет. Вернитесь на главную, чтобы посмотреть услуги и контакты мастера.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground shadow-soft transition-all hover:shadow-glow"
        >
          На главную
        </Link>
      </div>
    </main>
  );
}
