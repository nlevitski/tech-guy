"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import { Award, BookOpen, ChevronDown, ChevronUp, Users, Wrench } from "lucide-react";
import masterPortrait from "@/public/images/master-portrait.webp";

const stats = [
  { icon: Wrench, value: "10+", label: "лет опыта" },
  { icon: Users, value: "1000+", label: "клиентов" },
  { icon: Award, value: "100%", label: "гарантия" },
];

function TechTerm({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <code
      className={`box-decoration-clone rounded-md border border-primary/15 bg-primary/10 px-1.5 py-0.5 font-mono text-[0.9em] font-semibold text-primary ${className}`}
    >
      {children}
    </code>
  );
}

function KeyboardKey({ children }: { children: ReactNode }) {
  return (
    <kbd className="rounded-md border border-border bg-background px-1.5 py-0.5 font-mono text-[0.85em] font-semibold text-foreground shadow-card">
      {children}
    </kbd>
  );
}

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

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

        <div className="mx-auto mt-20 max-w-4xl">
          <div className="rounded-3xl border border-border bg-card/50 p-6 shadow-soft backdrop-blur-sm md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-2 text-primary">
                <BookOpen className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-foreground md:text-2xl">
                Компьютерные будни: заметки мастера
              </h3>
            </div>

            <div
              className={`relative space-y-4 text-sm leading-relaxed text-muted-foreground transition-all duration-300 md:text-base ${
                !isExpanded ? "max-h-[320px] overflow-hidden" : ""
              }`}
            >
              <p>
                Если после тяжёлого рабочего дня ты хочешь приходить домой, садиться за свой любимый
                компьютер и наслаждаться отдыхом, <span className="font-semibold text-primary">компьютерщик.бел</span>{" "}
                поможет тебе. Очень часто из-за жизненных приоритетов на поддержание компьютера в
                нормальном рабочем состоянии просто не хватает времени и средств. Приходится махнуть рукой
                со словами: «Ну что, пока же всё ещё работает». И ты говоришь себе: «Ну и ладно, что
                вентилятор сильно гудит, он же пока ещё работает и мне не мешает, я же в наушниках играю».
                Шутки шутками, но <span className="font-semibold text-primary">компьютерщик.бел</span> поможет
                тебе сэкономить в будущем на валерьянке.
              </p>

              <p>
                Если кнопки на клавиатуре ноутбука залипают или происходит самопроизвольное нажатие, очень
                часто это случается из-за попадания влаги. В такой ситуации помочь обычно можно только
                заменой клавиатуры. Но волноваться не стоит:{" "}
                <span className="font-semibold text-primary">компьютерщик.бел</span> поможет с заменой в
                кратчайшие сроки. А ещё в современных ноутбуках батарея часто несъёмная. Хорошо, если она
                просто исчерпала свой ресурс, тогда можно работать от зарядного устройства. Но бывает, что
                батарея вздувается внутри корпуса ноутбука, и это может привести к более серьёзным
                поломкам. В таком случае рекомендую выключить ноутбук или планшет, отключить зарядное
                устройство и позвонить в <span className="font-semibold text-primary">компьютерщик.бел</span>.
              </p>

              <div className={!isExpanded ? "hidden" : "space-y-4"}>
                <p>
                  Медленно грузится компьютер и издаёт подозрительные звуки?{" "}
                  <span className="font-semibold text-primary">компьютерщик.бел</span> — это решение. Если,
                  приходя домой, ты включаешь его и ждёшь, ждёшь, ещё ждёшь, пока он загрузится, а на
                  рабочем столе видишь сообщения об отсутствующих библиотеках или{" "}
                  <TechTerm>DLL-файлах</TechTerm>, то о каком наслаждении и отдыхе за любимой{" "}
                  <TechTerm>Counter-Strike (CS2)</TechTerm> или <TechTerm>Dota</TechTerm> может идти речь?
                  Это уже не отдых. Конечно, существуют мнения, что человек счастлив во время преодоления
                  трудностей. Но зачем рисковать? Преодолеть эти трудности поможет{" "}
                  <span className="font-semibold text-primary">компьютерщик.бел</span>.
                </p>
                <p>
                  Даже если случай совсем тяжёлый и при загрузке ОС появляется сообщение об ошибке{" "}
                  <TechTerm>BOOTMGR is missing</TechTerm> (отсутствует загрузчик),{" "}
                  <TechTerm>Boot Configuration Data missing or corrupted</TechTerm> (повреждены данные
                  загрузки), <TechTerm>Operating System Missing</TechTerm> (система не обнаружена),{" "}
                  <TechTerm>Invalid Boot Disk</TechTerm> (неверный загрузочный диск) или{" "}
                  <TechTerm>Inaccessible Boot Device</TechTerm> (недоступен загрузочный диск), на всё это
                  есть решение:{" "}
                  <span className="font-semibold text-primary">компьютерщик.бел</span>. Это бесплатная
                  консультация и оперативный выезд специалиста на дом. Также часто <TechTerm>Windows</TechTerm>{" "}
                  не загружается сама: появляется сообщение <TechTerm>Press F1 to continue</TechTerm>, и для
                  продолжения загрузки необходимо нажать <KeyboardKey>F1</KeyboardKey>, при этом настройки
                  даты и времени не сохраняются. И в этой проблеме есть решение —{" "}
                  <span className="font-semibold text-primary">компьютерщик.бел</span> поможет решить вопрос
                  раз и навсегда.
                </p>
                <p>
                  После загрузки рабочего стола в <TechTerm>Windows</TechTerm> могут возникать разные ошибки,
                  связанные с системным сбоем, конфликтами ПО, проблемами с оборудованием или обновлениями.
                  Может быть чёрный экран вместо рабочего стола или синий экран смерти. Ошибка может
                  появляться после входа в учётную запись или сразу после загрузки системы. Причины бывают
                  разные, но{" "}
                  <span className="font-semibold text-primary">компьютерщик.бел</span> поможет и в этом. Если
                  проблема в некорректной работе драйвера видеокарты, повреждении файла{" "}
                  <TechTerm>explorer.exe</TechTerm>,
                  конфликте программ, агрессивном поведении антивирусной системы или неправильных
                  настройках отображения, всё это можно решить, позвонив в{" "}
                  <span className="font-semibold text-primary">компьютерщик.бел</span>.
                </p>
                <p>
                  Бывает и циклический перезапуск рабочего стола (<TechTerm>explorer.exe</TechTerm>). Процесс{" "}
                  <TechTerm>explorer.exe</TechTerm>,
                  отвечающий за отображение рабочего стола и панели задач, постоянно перезапускается. Это
                  может быть вызвано конфликтами файлов при загрузке, повреждением системных файлов или
                  ошибками в сторонних службах. Бывает так, что рабочий стол загружается как всегда, но на
                  нём отсутствуют ярлыки, панель задач или кнопка «Пуск». Причинами могут быть сбой
                  системы, вирусное поражение, некорректная работа чистильщиков реестра или повреждение
                  параметров в реестре, например в ветке{" "}
                  <TechTerm className="break-all whitespace-normal">
                    HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon
                  </TechTerm>. И тут{" "}
                  <span className="font-semibold text-primary">компьютерщик.бел</span> точно поможет
                  преодолеть эту трудность.
                </p>
                <p>
                  Зависание рабочего стола после загрузки — это классика. Система зависает через несколько
                  секунд после появления рабочего стола, при этом курсор может двигаться, но взаимодействие
                  с элементами интерфейса невозможно. Это бывает связано с конфликтами программ, проблемами
                  с оперативной памятью и некорректными обновлениями <TechTerm>Windows</TechTerm>.
                  Опять-таки, с этим смело обращайся в{" "}
                  <span className="font-semibold text-primary">компьютерщик.бел</span>. Ошибки при запуске
                  системных служб или приложений в автозагрузке тоже могут вызывать сбои рабочего стола.
                  Программы, которые автоматически запускаются при загрузке системы, могут конфликтовать
                  друг с другом или с системными компонентами. Повреждённые системные файлы после неудачного
                  обновления <TechTerm>Windows</TechTerm>, действий вредоносного ПО или ошибок при работе с
                  реестром могут привести к нестабильной работе системы и проблемам с отображением рабочего
                  стола. <span className="font-semibold text-primary">Компьютерщик.бел</span> точно поможет в
                  этом разобраться.
                </p>
                <p>
                  А бывает, что компьютер сам выключается и потом некоторое время не включается. Это очень
                  похоже на перегрев. За годы работы теплопроводная паста теряет свои свойства, и
                  охлаждение работает уже не должным образом. В этой ситуации{" "}
                  <span className="font-semibold text-primary">компьютерщик.бел</span> — быстрое решение:
                  произведём замену термопасты и чистку от пыли прямо на месте. Это 20 минут работы. Успех
                  гарантирован. Такие же ситуации бывают и у игровых приставок Sony PlayStation. Излишний
                  шум, выключение — там используются те же принципы воздушного охлаждения, как и в обычных
                  стационарных компьютерах. Пока нагрузки нет, приставка работает. Но стоит запустить игру,
                  как появляется шум, гул, и приставка выключается. Это срабатывает защита от перегрева.
                  Чтобы чип видеокарты или процессор не перегрелись, при достижении максимально возможной
                  температуры приставка, компьютер или ноутбук выключаются.
                </p>
                <p>
                  Если у тебя проблемы с профилем пользователя, повреждение профиля может вызвать сбои при
                  загрузке рабочего стола. В таких случаях создание нового профиля иногда помогает решить
                  проблему, но это тоже временное решение —{" "}
                  <span className="font-semibold text-primary">компьютерщик.бел</span> решит вопрос. Бывает,
                  что конфликты обновления <TechTerm>Windows</TechTerm>, неудачная установка обновлений или
                  несовместимость новых компонентов с существующими файлами системы, драйверами или
                  настройками приводят к ошибкам загрузки рабочего стола. Возможны и неисправности
                  оборудования: проблема с видеокартой, например неисправный или устаревший драйвер,
                  оперативной памятью, блоком питания или подключением монитора. Обращайтесь в{" "}
                  <span className="font-semibold text-primary">компьютерщик.бел</span> — диагностика
                  бесплатна. Вы платите только за результат. Если результата нет, платить не надо.
                </p>
                <p>
                  Все эти проблемы могут вызывать сбой при отображении рабочего стола. Например, звук
                  появляется только после того, как ты вынимаешь кабель <TechTerm>HDMI</TechTerm>, а потом
                  снова вставляешь его в разъём, и только тогда звук транслируется через телевизор. Такая
                  ситуация часто наблюдается в <TechTerm>mini PC Dell</TechTerm>. Бывает, вместо логотипа
                  Dell видны цифры. В этом режиме работы материнской платы стабильная работа звука через{" "}
                  <TechTerm>HDMI</TechTerm> недостижима. И даже тут{" "}
                  <span className="font-semibold text-primary">компьютерщик.бел</span> сможет вам помочь.
                </p>
                <p>
                  Бывает, что при переустановке <TechTerm>Windows</TechTerm> пропали все диски с фотографиями
                  и файлами. <span className="font-semibold text-primary">Компьютерщик.бел</span> поможет
                  восстановить информацию: семейные фото, фото детей и другие важные файлы. Если вы
                  случайно удалили что-то, не расстраивайтесь. Нервные клетки, говорят, не восстанавливаются,
                  а вот ваши фото восстанавливаются. Позвоните в{" "}
                  <span className="font-semibold text-primary">компьютерщик.бел</span>, и вы получите
                  бесплатную консультацию по этой проблеме. Вы позвоните и своими словами объясните
                  ситуацию. Бывают ошибки, связанные с настройками быстрого запуска или гибернации. В
                  некоторых случаях активация этих режимов может приводить к проблемам с загрузкой рабочего
                  стола.
                </p>
                <p>
                  Кроме того, <span className="font-semibold text-primary">компьютерщик.бел</span> поможет
                  починить принтер Epson с системой непрерывной подачи чернил. Он рассчитан на большое
                  количество печати без вмешательств, но очень часто из строя выходят ролики подачи бумаги.
                  Бумага не захватывается принтером или захватывается не одним листом, а сразу несколькими.
                  Это всё поправимо. Позвоните по телефонам, указанным на сайте, и расскажите, что с ним
                  происходит. Кроме струйных цветных принтеров, многие люди пользуются чёрно-белыми
                  лазерными принтерами. Если бумага заедает или при печати лист выходит с пропусками или
                  другими дефектами, смело обращайтесь в{" "}
                  <span className="font-semibold text-primary">компьютерщик.бел</span>. Произведём чистку и
                  заправку картриджей, а при необходимости заменим вал первичного заряда, фотобарабан или
                  чистящий нож. Вы можете отправить фото дефектно напечатанного листа в{" "}
                  <TechTerm>Telegram</TechTerm> — <TechTerm>@compbel</TechTerm>, и нам сразу станет понятно,
                  что с вашим принтером.
                </p>
                <p>
                  Если ваш телевизор Samsung, LG, Toshiba, Hyundai, Philips, Blaupunkt, Haier, Витязь или
                  Horizont потух и не включается либо включается и сразу гаснет, это может быть проблема с
                  подсветкой или блоком питания. По статистике выход из строя подсветки более вероятен. У
                  старых моделей, где используются электролитические конденсаторы, часто выходит из строя
                  блок питания: тогда монитор или телевизор включается и сразу гаснет. Поэтому однозначно
                  определить, что именно вышло из строя, без вскрытия невозможно. Но{" "}
                  <span className="font-semibold text-primary">компьютерщик.бел</span> произведёт бесплатную
                  диагностику и даст вам точный ответ.
                </p>
              </div>

              {!isExpanded && (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card to-transparent" />
              )}
            </div>

            <div className="mt-6 flex justify-center border-t border-border pt-6">
              <button
                type="button"
                onClick={() => setIsExpanded((current) => !current)}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                {isExpanded ? (
                  <>
                    Свернуть статью <ChevronUp className="h-4 w-4" aria-hidden="true" />
                  </>
                ) : (
                  <>
                    Читать далее <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
