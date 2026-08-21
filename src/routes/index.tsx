import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Reveal, useScrollProgress } from "@/components/Reveal";
import heroPortrait from "@/assets/hero.jpg";
import aboutPortrait from "@/assets/about.jpg";
import workEvent from "@/assets/work-event.jpg";
import workPodcast from "@/assets/work-podcast.jpg";
import workBroadcast from "@/assets/work-broadcast.jpg";
import workCorporate from "@/assets/work-corporate.jpg";
import workSocial from "@/assets/work-social.jpg";
import workSports from "@/assets/work-sports.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Emerson Farias | Filmmaker e Estrategista de Conteúdo" },
      {
        name: "description",
        content:
          "Filmmaker, diretor de transmissões ao vivo e estrategista de conteúdo. Mais de 300 eventos para grandes players, influenciadores e marcas no Brasil e nos EUA.",
      },
      { property: "og:title", content: "Emerson Farias | Filmmaker e Estrategista de Conteúdo" },
      {
        property: "og:description",
        content:
          "Mais de 300 eventos, transmissões ao vivo e conteúdo de alta performance para grandes players e infoprodutores.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Trabalhos", href: "#trabalhos" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contato", href: "#contato" },
];

const stats = [
  { value: "300+", label: "Eventos realizados" },
  { value: "2 anos", label: "Ao lado de Pablo Marçal" },
  { value: "EUA", label: "Produções internacionais" },
  { value: "2026", label: "Copa do Mundo / Rede Ronaldo" },
];

const services = [
  {
    title: "Transmissões ao vivo",
    desc: "Direção e operação de transmissões de eventos, lançamentos e imersões, com padrão broadcast e zero margem para erro.",
  },
  {
    title: "Filmmaker",
    desc: "Captação e direção cinematográfica de eventos, shows, feiras e produções corporativas no Brasil e nos Estados Unidos.",
  },
  {
    title: "Stories maker",
    desc: "Cobertura em tempo real com narrativa: bastidores, cortes e entregas prontas para publicar ainda durante o evento.",
  },
  {
    title: "Social media",
    desc: "Gestão de conteúdo e presença digital com foco em posicionamento, consistência e autoridade de marca pessoal.",
  },
  {
    title: "Estratégia para infoprodutores",
    desc: "Planejamento de conteúdo conectado à jornada de venda: aquecimento, lançamento e sustentação de audiência.",
  },
  {
    title: "Vlog, Reels, Shorts e TikTok",
    desc: "Estratégia e direção de conteúdo vertical e vlogs para YouTube, com estrutura de retenção e crescimento.",
  },
];

const works = [
  { img: workEvent, title: "Eventos de grande porte", tag: "Kiwify · Imersões · Shows" },
  { img: workBroadcast, title: "Transmissões ao vivo", tag: "Broadcast · Multicâmera" },
  { img: workSports, title: "Copa do Mundo 2026", tag: "Rede Ronaldo" },
  { img: workPodcast, title: "Podcasts", tag: "Red Cast · Estúdio" },
  { img: workCorporate, title: "Eventos corporativos", tag: "Feiras · Convenções" },
  { img: workSocial, title: "Conteúdo e bastidores", tag: "Stories · Reels · Shorts" },
];

const clients = [
  "Pablo Marçal",
  "Cela",
  "Coringa",
  "Pyong Lee",
  "Thallyson",
  "Aricia",
  "Marcos Paulo",
  "Sergião Foguetes",
  "Red Cast",
  "Rede Ronaldo",
  "Kiwify",
  "Leilão do Neymar",
];

const marquee = [
  "Filmmaker",
  "Live Broadcast",
  "Stories Maker",
  "Social Media",
  "Content Strategy",
  "Reels & Shorts",
];

function Index() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-[image:var(--gradient-silver)]"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-border bg-background/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-6">
          <a
            href="#top"
            className="min-w-0 truncate font-display text-base tracking-[0.18em] uppercase sm:text-lg"
          >
            Emerson <span className="text-silver-gradient">Farias</span>
          </a>
          <div className="flex shrink-0 items-center gap-6">
            <nav className="hidden gap-7 lg:flex">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="link-underline text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href="#contato"
              className="btn-silver hidden rounded-full px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] sm:inline-block"
            >
              Falar comigo
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 md:pt-44 md:pb-24">
          <div className="pointer-events-none absolute -top-40 right-0 h-[30rem] w-[30rem] rounded-full bg-silver/10 blur-[150px] md:h-[38rem] md:w-[38rem]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(var(--silver)_1px,transparent_1px),linear-gradient(90deg,var(--silver)_1px,transparent_1px)] [background-size:64px_64px]" />

          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
            <div>
              <Reveal delay={60}>
                <p className="eyebrow">Filmmaker · Live · Estratégia</p>
              </Reveal>
              <Reveal variant="blur" delay={140}>
                <h1 className="mt-5 text-4xl leading-[1.05] font-bold sm:text-5xl md:text-7xl">
                  Emerson
                  <br />
                  <span className="text-silver-gradient">Rodrigues Farias</span>
                </h1>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Mais de 300 eventos entregues em dois anos ao lado de Pablo Marçal e de grandes
                  players do mercado. Transmissões ao vivo, direção de imagem e estratégia de
                  conteúdo para quem não pode errar no palco nem na tela.
                </p>
              </Reveal>
              <Reveal delay={340}>
                <div className="mt-9 flex flex-wrap gap-3 sm:gap-4">
                  <a
                    href="#contato"
                    className="btn-silver rounded-full px-7 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] sm:px-8"
                  >
                    Solicitar orçamento
                  </a>
                  <a
                    href="#trabalhos"
                    className="btn-outline-silver rounded-full px-7 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] sm:px-8"
                  >
                    Ver trabalhos
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal variant="scale" delay={200} className="relative">
              <div className="float-slow relative">
                <div
                  className="absolute -inset-3 rounded-3xl border border-silver/20"
                  aria-hidden="true"
                />
                <img
                  src={heroPortrait}
                  alt="Emerson Rodrigues Farias, filmmaker, com câmera de cinema"
                  width={1024}
                  height={1280}
                  className="relative w-full rounded-2xl object-cover grayscale transition-all duration-700 hover:grayscale-0"
                />
              </div>
            </Reveal>
          </div>

          <div className="relative mx-auto mt-16 max-w-6xl px-5 sm:px-6 md:mt-20">
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
              {stats.map((s, i) => (
                <Reveal
                  key={s.label}
                  delay={i * 90}
                  className="bg-background px-5 py-7 transition-colors duration-500 hover:bg-surface sm:px-6 sm:py-8"
                >
                  <dt className="font-display text-2xl text-silver-gradient sm:text-3xl">
                    {s.value}
                  </dt>
                  <dd className="mt-2 text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground sm:text-xs">
                    {s.label}
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </section>

        {/* SPECIALTIES / PILLARS (STATIC) */}
        <div className="border-y border-border bg-surface/40 py-5">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-5 sm:gap-x-10 sm:px-6">
            {marquee.map((m, i) => (
              <div key={m} className="flex items-center gap-6 sm:gap-10">
                <span className="font-display text-xs uppercase tracking-[0.26em] text-muted-foreground transition-colors duration-300 hover:text-foreground sm:text-sm">
                  {m}
                </span>
                {i < marquee.length - 1 && (
                  <span className="hidden h-1 w-1 rounded-full bg-silver/50 sm:inline-block" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* SOBRE */}
        <section id="sobre" className="py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 md:grid-cols-2 md:gap-16">
            <Reveal variant="left" className="relative order-2 md:order-1">
              <img
                src={aboutPortrait}
                alt="Retrato de Emerson Rodrigues Farias em estúdio"
                width={1008}
                height={1200}
                loading="lazy"
                className="w-full rounded-2xl object-cover grayscale transition-all duration-700 hover:grayscale-0"
              />
              <div
                className="absolute -bottom-4 -right-4 hidden h-40 w-40 rounded-br-2xl border-b border-r border-silver/40 sm:block"
                aria-hidden="true"
              />
            </Reveal>
            <div className="order-1 md:order-2">
              <Reveal>
                <p className="eyebrow">Sobre</p>
                <h2 className="mt-5 text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
                  Bastidores de alto nível, entregues com precisão.
                </h2>
                <div className="rule-silver mt-7" />
              </Reveal>
              <div className="mt-7 space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                {[
                  "Trabalhei dois anos com Pablo Marçal em transmissões de eventos ao vivo, como stories maker, filmmaker e social media. Foram mais de 300 eventos nesse período — volume que abriu portas para atuar com outros grandes players e influenciadores do mercado.",
                  "Desde então, assinei produções em eventos como Kiwify, o leilão do Neymar, podcasts, transmissões ao vivo, eventos corporativos, feiras, shows e festas. Estive na Copa do Mundo de 2026 através da Rede Ronaldo e já realizei diversos trabalhos nos Estados Unidos.",
                  "Além da câmera, atuo como estrategista de infoprodutores e social media, dirigindo conteúdo de vlog para YouTube, Reels, Shorts e TikTok com foco em resultado.",
                ].map((p, i) => (
                  <Reveal key={i} delay={i * 120}>
                    <p>{p}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="border-t border-border bg-surface/30 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <Reveal>
              <p className="eyebrow">Serviços</p>
              <h2 className="mt-5 max-w-2xl text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
                O que eu entrego
              </h2>
              <div className="rule-silver mt-7" />
            </Reveal>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <Reveal
                  key={s.title}
                  as="article"
                  variant="up"
                  delay={(i % 3) * 110}
                  className="glass-card group rounded-2xl p-7 sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm text-silver-gradient">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold sm:text-xl">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* TRABALHOS */}
        <section id="trabalhos" className="border-t border-border py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <Reveal>
              <p className="eyebrow">Portfólio</p>
              <h2 className="mt-5 max-w-2xl text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
                Trabalhos selecionados
              </h2>
              <div className="rule-silver mt-7" />
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {works.map((w, i) => (
                <Reveal
                  key={w.title}
                  as="figure"
                  variant="scale"
                  delay={(i % 3) * 110}
                  className="group relative overflow-hidden rounded-2xl border border-border"
                >
                  <img
                    src={w.img}
                    alt={w.title}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="h-60 w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 sm:h-64"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-background via-background/85 to-transparent p-6 transition-transform duration-500 group-hover:translate-y-0">
                    <p className="text-[0.62rem] uppercase tracking-[0.22em] text-silver">{w.tag}</p>
                    <h3 className="mt-2 text-base font-bold sm:text-lg">{w.title}</h3>
                  </figcaption>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="mt-8 text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                Imagens ilustrativas — acervo oficial em atualização.
              </p>
            </Reveal>
          </div>
        </section>

        {/* CLIENTES */}
        <section id="clientes" className="border-t border-border bg-surface/30 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <Reveal>
              <p className="eyebrow">Clientes e parcerias</p>
              <h2 className="mt-5 max-w-2xl text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
                Nomes que já estiveram na minha lente
              </h2>
              <div className="rule-silver mt-7" />
            </Reveal>
            <ul className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-3 lg:grid-cols-4">
              {clients.map((c, i) => (
                <Reveal
                  key={c}
                  as="li"
                  delay={(i % 4) * 80}
                  className="bg-background px-4 py-7 text-center font-display text-base tracking-wide text-muted-foreground transition-all duration-500 hover:bg-surface-2 hover:text-foreground sm:px-6 sm:py-8 sm:text-lg"
                >
                  {c}
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* CONTATO */}
        <section
          id="contato"
          className="relative overflow-hidden border-t border-border py-24 md:py-32"
        >
          <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-silver/10 blur-[150px] md:h-[32rem] md:w-[32rem]" />
          <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-6">
            <Reveal>
              <p className="eyebrow">Contato</p>
              <h2 className="mt-5 text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
                Vamos construir a próxima{" "}
                <span className="text-silver-gradient">grande entrega</span>.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Disponível para eventos, transmissões ao vivo, produções internacionais e
                consultoria de conteúdo. Envie os detalhes do seu projeto e retorno com uma
                proposta.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
                <a
                  href="https://wa.me/5500000000000"
                  className="btn-silver rounded-full px-8 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em]"
                >
                  WhatsApp
                </a>
                <a
                  href="mailto:contato@emersonfarias.com"
                  className="btn-outline-silver rounded-full px-8 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em]"
                >
                  E-mail
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-center text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground sm:px-6 md:flex-row md:text-left">
          <span>Emerson Rodrigues Farias</span>
          <span>Filmmaker · Live · Estratégia de conteúdo</span>
        </div>
      </footer>
    </div>
  );
}
