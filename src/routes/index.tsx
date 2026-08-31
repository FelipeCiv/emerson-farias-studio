import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, Instagram, Camera, Images, Globe, Sparkles, Layout, Monitor, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal, useScrollProgress } from "@/components/Reveal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import heroPortrait from "@/assets/hero.jpg";
import aboutPortrait from "@/assets/about.jpg";
import workEvent from "@/assets/work-event.jpg";
import workPodcast from "@/assets/work-podcast.jpg";
import workBroadcast from "@/assets/work-broadcast.jpg";
import workCorporate from "@/assets/work-corporate.jpg";
import workSocial from "@/assets/work-social.jpg";
import workSports from "@/assets/work-sports.jpg";
import logoAnul from "@/parcerias/LOGO ANUL.PNG";
import logoVisual from "@/parcerias/LOGO VISUAL FILMS.png";
import logoLuaLev from "@/parcerias/logo_lualeve-1.png";

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
  { label: "Sites", href: "#sites" },
  { label: "Trabalhos", href: "#trabalhos" },
  { label: "Clientes", href: "#clientes" },
  { label: "Parcerias", href: "#parcerias" },
  { label: "Contato", href: "#contato" },
];

const partnerships = [
  {
    name: "Anul Films",
    role: "Sócio & Produtora Parceira",
    tagline: "Produção Audiovisual Cinematográfica",
    desc: "Produtora especializada em filmes comerciais, narrativas cinematográficas de alto impacto e coberturas audiovisuais de grande porte.",
    logo: logoAnul,
    logoClassName: "object-cover",
    instagramUrl:
      "https://www.instagram.com/anulfilms?igsh=ZzRqMnF0Z3Bod2Rl&igsi=ZzRqMnF0Z3Bod2Rl",
    handle: "@anulfilms",
  },
  {
    name: "Visual Film",
    role: "Sócio & Produtora Parceira",
    tagline: "Direção & Estrutura de Imagem",
    desc: "Estrutura completa e equipamentos de alta performance para captações dinâmicas, transmissões e produções visuais de alta definição.",
    logo: logoVisual,
    logoClassName: "object-cover",
    instagramUrl:
      "https://www.instagram.com/visualfilm3?igsh=dmlvZ2l1aTk5Z3do&igsi=dmlvZ2l1aTk5Z3do",
    handle: "@visualfilm3",
  },
  {
    name: "Lua & Lev",
    role: "Sócio & Marca Parceira",
    tagline: "Identidade, Conceito & Estilo",
    desc: "Marca com estética apurada, conceito autêntico e identidade visual refinada para posicionamento e produtos exclusivos.",
    logo: logoLuaLev,
    logoClassName: "object-contain p-1",
    instagramUrl:
      "https://www.instagram.com/luaelev?igsh=MW9iaWtmbDIwZnJ4Zw==&igsi=MW9iaWtmbDIwZnJ4Zw==",
    handle: "@luaelev",
  },
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
    title: "Criação de Sites & Landing Pages",
    desc: "Desenvolvimento de páginas profissionais, ultra rápidas e com design refinado para eventos, lançamentos e marcas pessoais.",
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
];

const works = [
  { img: workEvent, title: "Eventos de grande porte", tag: "Kiwify · Imersões · Shows" },
  { img: workBroadcast, title: "Transmissões ao vivo", tag: "Broadcast · Multicâmera" },
  { img: workSports, title: "Copa do Mundo 2026", tag: "Rede Ronaldo" },
  { img: workPodcast, title: "Podcasts", tag: "Red Cast · Estúdio" },
  { img: workCorporate, title: "Eventos corporativos", tag: "Feiras · Convenções" },
  { img: workSocial, title: "Conteúdo e bastidores", tag: "Stories · Reels · Shorts" },
];

export interface ClientEvent {
  name: string;
  category: string;
  highlight: string;
  description: string;
  photos: string[];
}

const clientsData: ClientEvent[] = [
  {
    name: "Pablo Marçal",
    category: "Transmissões ao Vivo & Stories Maker",
    highlight: "2 anos · 300+ Eventos",
    description:
      "Dois anos de atuação contínua na direção de transmissões ao vivo de altíssimo alcance, cobertura em tempo real nos bastidores como stories maker e criação de narrativas estratégicas para grandes eventos presenciais e lançamentos.",
    photos: [],
  },
  {
    name: "Cela",
    category: "Stories Maker & Lifestyle",
    highlight: "Cobertura em Tempo Real",
    description:
      "Captação ágil de bastidores com narrativa de stories focada em retenção imediata, conexão com o público e engajamento durante eventos.",
    photos: [],
  },
  {
    name: "Coringa",
    category: "Conteúdo Vertical & Eventos",
    highlight: "Reels, Shorts & Vlog",
    description:
      "Produção de conteúdo dinâmico em eventos de entretenimento, unindo linguagem de vlog no YouTube a formatos verticais de alta conversão.",
    photos: [],
  },
  {
    name: "Pyong Lee",
    category: "Produção Audiovisual & Eventos",
    highlight: "Palestras & Bastidores",
    description:
      "Captação cinematográfica e cobertura de presença em palestras, convenções e eventos corporativos, com foco em dinamismo, autoridade e retenção.",
    photos: [],
  },
  {
    name: "Thallyson",
    category: "Filmmaker & Imersões",
    highlight: "Eventos Presenciais",
    description:
      "Captação de momentos de impacto, palestras e bastidores, criando materiais de posicionamento de alto valor para redes e lançamentos.",
    photos: [],
  },
  {
    name: "Aricia",
    category: "Social Media & Stories Maker",
    highlight: "Eventos & Presença VIP",
    description:
      "Cobertura completa com entrega rápida de vídeos e fotos durante o evento, garantindo publicação em tempo real com qualidade refinada.",
    photos: [],
  },
  {
    name: "Marcos Paulo",
    category: "Estratégia & Infoprodutos",
    highlight: "Lançamentos & Imersões",
    description:
      "Captação estratégica para infoprodutores, documentando imersões presenciais e gerando insumos visuais para funis de alta performance.",
    photos: [],
  },
  {
    name: "Sergião Foguetes",
    category: "Podcasts & Cobertura",
    highlight: "Gravações & Ciência",
    description:
      "Captação em estúdio, registros de palestras e produção de conteúdo dinâmico nos bastidores de gravações e eventos especiais.",
    photos: [],
  },
  {
    name: "Red Cast",
    category: "Podcast & Multicâmera",
    highlight: "Estúdio & Broadcast",
    description:
      "Direção técnica de transmissão e gravação multicâmera para podcasts em estúdio, com iluminação profissional e cortes rápidos para YouTube e redes sociais.",
    photos: [],
  },
  {
    name: "Rede Ronaldo",
    category: "Produção Internacional",
    highlight: "Copa do Mundo 2026",
    description:
      "Cobertura audiovisual internacional para a Rede Ronaldo nos Estados Unidos, acompanhando grandes momentos esportivos e gerando conteúdo dinâmico.",
    photos: [],
  },
  {
    name: "Kiwify",
    category: "Megaeventos & Infoprodutos",
    highlight: "Kiwify Festival · Imersões",
    description:
      "Produção audiovisual e transmissões para um dos maiores ecossistemas de infoprodutos do país, com captação de palcos principais, imersões e aftermovies.",
    photos: [],
  },
  {
    name: "Neymar",
    category: "Gala & Eventos Beneficentes",
    highlight: "Cobertura VIP Exclusiva",
    description:
      "Direção de imagem e captação de bastidores em evento de gala beneficente, documentando personalidades, leilões ao vivo e momentos exclusivos com padrão de cinema.",
    photos: [
      "/clientes/Neymar/@lunavmaker3735.jpg",
      "/clientes/Neymar/@lunavmaker3736.jpg",
      "/clientes/Neymar/@lunavmaker4789.jpg",
      "/clientes/Neymar/@lunavmaker4790.jpg",
    ],
  },
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
  const [selectedClient, setSelectedClient] = useState<ClientEvent | null>(null);
  const [selectedPartner, setSelectedPartner] = useState<(typeof partnerships)[0] | null>(null);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const progress = useScrollProgress();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (activeLightboxIndex === null || !selectedClient) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveLightboxIndex(null);
      } else if (e.key === "ArrowRight") {
        setActiveLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % selectedClient.photos.length : 0
        );
      } else if (e.key === "ArrowLeft") {
        setActiveLightboxIndex((prev) =>
          prev !== null
            ? (prev - 1 + selectedClient.photos.length) % selectedClient.photos.length
            : 0
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, selectedClient]);

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

          {/* PARCERIAS & SOCIEDADES (TOPO) */}
          <div id="parcerias" className="relative mx-auto mt-8 max-w-6xl scroll-mt-28 px-5 sm:px-6">
            <Reveal delay={100}>
              <div className="relative rounded-2xl border border-border/80 bg-surface/35 p-5 backdrop-blur-sm sm:p-7 shadow-sm">
                {/* Header da seção */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-silver animate-pulse" />
                    <div>
                      <span className="eyebrow text-[0.62rem] block">Sociedades & Marcas</span>
                      <h3 className="font-display text-base font-bold tracking-tight text-foreground sm:text-lg">
                        Empresas e produtoras parceiras
                      </h3>
                    </div>
                  </div>
                  <span className="text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                    Coproduções & Estrutura Audiovisual
                  </span>
                </div>

                {/* Cards de parceiros */}
                <div className="mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
                  {partnerships.map((p) => (
                    <div
                      key={p.name}
                      onClick={() => setSelectedPartner(p)}
                      className="group relative flex flex-col justify-between rounded-xl border border-border/70 bg-background/90 p-4.5 transition-all duration-300 ease-out hover:border-silver/60 hover:bg-surface-2/90 hover:-translate-y-1 hover:shadow-lg cursor-pointer transform-gpu"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border/80 bg-black shadow-sm transition-transform duration-300 group-hover:scale-105 pointer-events-none">
                              <img
                                src={p.logo}
                                alt={`Logo ${p.name}`}
                                width={40}
                                height={40}
                                loading="lazy"
                                decoding="async"
                                className={`h-full w-full rounded-lg select-none ${p.logoClassName || "object-cover"}`}
                              />
                            </div>
                            <div className="min-w-0">
                              <h4 className="font-display text-sm font-bold text-foreground transition-colors group-hover:text-foreground">
                                {p.name}
                              </h4>
                              <span className="mt-0.5 inline-block rounded border border-silver/25 bg-silver/10 px-1.5 py-0.5 text-[0.56rem] font-semibold uppercase tracking-wider text-silver whitespace-nowrap">
                                {p.role}
                              </span>
                            </div>
                          </div>

                          <a
                            href={p.instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-border/70 bg-surface/60 text-muted-foreground transition-all duration-200 hover:border-silver/60 hover:bg-silver/15 hover:text-foreground hover:scale-105 active:scale-95"
                            title={`Instagram ${p.handle}`}
                          >
                            <Instagram className="h-4 w-4" />
                          </a>
                        </div>

                        <p className="mt-3 min-h-[2.5rem] text-xs leading-relaxed text-muted-foreground line-clamp-2">
                          {p.desc}
                        </p>
                      </div>

                      <div className="mt-3.5 flex items-center justify-between border-t border-border/40 pt-2.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-silver-soft group-hover:text-silver transition-colors duration-200">
                        <span>Ver detalhes</span>
                        <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
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

        {/* SITES & ESTRUTURA DIGITAL */}
        <section id="sites" className="relative overflow-hidden border-t border-border bg-background py-20 md:py-28">
          <div className="pointer-events-none absolute -top-24 right-10 h-[22rem] w-[22rem] rounded-full bg-silver/10 blur-[140px]" />
          
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br from-surface/80 via-surface/40 to-background/90 p-7 sm:p-10 md:p-14 shadow-2xl">
              <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(var(--silver)_1px,transparent_1px),linear-gradient(90deg,var(--silver)_1px,transparent_1px)] [background-size:32px_32px]" />

              <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
                <div>
                  <Reveal>
                    <div className="inline-flex items-center gap-2 rounded-full border border-silver/30 bg-silver/10 px-3.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-silver">
                      <Globe className="h-3.5 w-3.5 text-silver" />
                      <span>Presença Web & Conversão</span>
                    </div>
                    <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                      Criação de sites{" "}
                      <span className="text-silver-gradient">profissionais & estilosos</span>.
                    </h2>
                  </Reveal>

                  <Reveal delay={120}>
                    <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      A entrega do seu projeto não para no vídeo: disponibilizamos também o desenvolvimento de sites e landing pages completas dentro do pacote de serviços. Páginas modernas, ultra rápidas e com identidade visual alinhada à autoridade da sua marca.
                    </p>
                  </Reveal>

                  <Reveal delay={200}>
                    <div className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                      <div className="rounded-xl border border-border/70 bg-background/70 p-4 transition-colors hover:border-silver/40">
                        <div className="flex items-center gap-2.5 text-foreground">
                          <Layout className="h-4 w-4 text-silver" />
                          <h4 className="font-display text-xs font-bold uppercase tracking-wider">
                            Design Exclusivo & Estiloso
                          </h4>
                        </div>
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                          Estética premium dark mode, tipografia refinada e layout sob medida para causar impacto imediato.
                        </p>
                      </div>

                      <div className="rounded-xl border border-border/70 bg-background/70 p-4 transition-colors hover:border-silver/40">
                        <div className="flex items-center gap-2.5 text-foreground">
                          <Sparkles className="h-4 w-4 text-silver" />
                          <h4 className="font-display text-xs font-bold uppercase tracking-wider">
                            Foco em Conversão
                          </h4>
                        </div>
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                          Páginas otimizadas para carregamento instantâneo no celular, captura de leads e vendas de eventos.
                        </p>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={280}>
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <a
                        href="#contato"
                        className="btn-silver rounded-full px-7 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em]"
                      >
                        Incluir site no projeto
                      </a>
                      <span className="text-[0.65rem] uppercase tracking-[0.14em] text-silver-soft">
                        Disponível em pacote integrado ou projeto avulso
                      </span>
                    </div>
                  </Reveal>
                </div>

                {/* Mockup Interativo Visual */}
                <Reveal variant="scale" delay={180}>
                  <div className="relative rounded-2xl border border-silver/30 bg-background/95 p-5 shadow-2xl sm:p-6">
                    <div className="flex items-center justify-between border-b border-border/60 pb-3.5">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                      </div>
                      <div className="flex items-center gap-1.5 rounded-full border border-border/60 bg-surface/60 px-3 py-0.5 font-mono text-[0.58rem] text-muted-foreground">
                        <Monitor className="h-3 w-3 text-silver" />
                        <span>emersonfarias.com/site</span>
                      </div>
                    </div>

                    <div className="mt-4 space-y-3">
                      <div className="rounded-xl border border-silver/20 bg-surface/50 p-4">
                        <div className="flex items-center justify-between">
                          <span className="eyebrow text-[0.58rem]">Landing Page</span>
                          <span className="rounded-full border border-silver/30 bg-silver/10 px-2 py-0.5 text-[0.55rem] font-semibold uppercase tracking-wider text-silver">
                            Alta Conversão
                          </span>
                        </div>
                        <div className="mt-3 space-y-2">
                          <div className="h-3 w-3/4 rounded bg-silver/30" />
                          <div className="h-2 w-1/2 rounded bg-silver/15" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5">
                        <div className="rounded-xl border border-border/60 bg-surface/30 p-3">
                          <span className="font-display text-[0.62rem] font-bold uppercase tracking-wider text-foreground">
                            Institucional
                          </span>
                          <p className="mt-1 text-[0.6rem] leading-relaxed text-muted-foreground">
                            Posicionamento e autoridade de marca.
                          </p>
                        </div>
                        <div className="rounded-xl border border-border/60 bg-surface/30 p-3">
                          <span className="font-display text-[0.62rem] font-bold uppercase tracking-wider text-foreground">
                            Eventos & Imersões
                          </span>
                          <p className="mt-1 text-[0.6rem] leading-relaxed text-muted-foreground">
                            Venda de ingressos e inscrições.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
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
              <p className="eyebrow">Clientes</p>
              <h2 className="mt-5 max-w-2xl text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
                Nomes que já estiveram na minha lente
              </h2>
              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-silver-soft">
                Clique em qualquer nome para ver detalhes e fotos dos eventos
              </p>
              <div className="rule-silver mt-6" />
            </Reveal>
            <ul className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-3 lg:grid-cols-4">
              {clientsData.map((c, i) => (
                <Reveal
                  key={c.name}
                  as="li"
                  delay={(i % 4) * 80}
                  className="bg-background transition-all duration-500 hover:bg-surface-2"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedClient(c)}
                    className="group flex h-full w-full flex-col items-center justify-center p-6 text-center cursor-pointer focus:outline-none focus:ring-1 focus:ring-silver/40"
                  >
                    <span className="font-display text-base tracking-wide text-muted-foreground transition-all duration-300 group-hover:text-foreground group-hover:scale-105 sm:text-lg">
                      {c.name}
                    </span>
                    <span className="mt-2 flex items-center gap-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-silver-soft opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <Camera className="h-3 w-3 text-silver" />
                      <span>Ver evento</span>
                    </span>
                  </button>
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

      {/* DIALOG DETALHES DO CLIENTE */}
      <Dialog
        open={Boolean(selectedClient)}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            setSelectedClient(null);
            setActiveLightboxIndex(null);
          }
        }}
      >
        <DialogContent className="max-w-2xl max-h-[88vh] overflow-y-auto border border-border bg-background/95 p-6 backdrop-blur-2xl sm:rounded-2xl sm:p-8">
          {selectedClient && (
            <div>
              <DialogHeader className="text-left">
                <div className="flex flex-wrap items-center justify-between gap-2 pr-6">
                  <span className="eyebrow">{selectedClient.category}</span>
                  <span className="rounded-full border border-silver/30 bg-silver/10 px-3 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-silver">
                    {selectedClient.highlight}
                  </span>
                </div>
                <DialogTitle className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
                  {selectedClient.name}
                </DialogTitle>
                <DialogDescription className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {selectedClient.description}
                </DialogDescription>
              </DialogHeader>

              {/* GALERIA DE FOTOS */}
              <div className="mt-6 border-t border-border pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                    <Images className="h-4 w-4 text-silver" />
                    <span>Galeria do Evento</span>
                  </h4>
                  <span className="text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                    {selectedClient.photos.length > 0
                      ? `${selectedClient.photos.length} fotos`
                      : "Acervo em atualização"}
                  </span>
                </div>

                {selectedClient.photos.length > 0 ? (
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {selectedClient.photos.map((photo, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveLightboxIndex(idx)}
                        className="group/photo relative aspect-square overflow-hidden rounded-xl border border-border bg-surface text-left transition-colors duration-200 hover:border-silver/60 focus:outline-none focus:ring-1 focus:ring-silver/40 cursor-pointer"
                      >
                        <img
                          src={photo}
                          alt={`${selectedClient.name} - Foto ${idx + 1}`}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 transition-opacity duration-200 group-hover/photo:opacity-100 backdrop-blur-[2px]">
                          <div className="grid h-9 w-9 place-items-center rounded-full bg-silver/90 text-background shadow-lg transition-transform duration-200 group-hover/photo:scale-110">
                            <ZoomIn className="h-4 w-4" />
                          </div>
                          <span className="mt-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white">
                            Expandir
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-silver/25 bg-surface/40 p-8 text-center sm:p-10">
                    <div className="grid h-12 w-12 place-items-center rounded-full border border-silver/30 bg-silver/10 text-silver">
                      <Camera className="h-6 w-6" />
                    </div>
                    <p className="mt-4 font-display text-sm font-semibold tracking-wide text-foreground sm:text-base">
                      Fotos em separação no acervo
                    </p>
                    <p className="mt-2 max-w-sm text-xs leading-relaxed text-muted-foreground">
                      As fotos em alta resolução deste evento estão sendo organizadas e serão adicionadas em breve.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* DIALOG DETALHES DO PARCEIRO */}
      <Dialog
        open={Boolean(selectedPartner)}
        onOpenChange={(isOpen) => !isOpen && setSelectedPartner(null)}
      >
        <DialogContent className="max-w-lg border border-border bg-background/95 p-6 backdrop-blur-2xl sm:rounded-2xl sm:p-8">
          {selectedPartner && (
            <div>
              <DialogHeader className="text-left">
                <div className="flex items-center gap-3.5">
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border/80 bg-black p-1 shadow-sm">
                    <img
                      src={selectedPartner.logo}
                      alt={`Logo ${selectedPartner.name}`}
                      width={56}
                      height={56}
                      className={`h-full w-full rounded-lg ${selectedPartner.logoClassName || "object-cover"}`}
                    />
                  </div>
                  <div>
                    <span className="inline-block rounded border border-silver/30 bg-silver/10 px-2.5 py-0.5 text-[0.62rem] font-semibold uppercase tracking-wider text-silver">
                      {selectedPartner.role}
                    </span>
                    <DialogTitle className="mt-1 font-display text-2xl font-bold tracking-tight text-foreground">
                      {selectedPartner.name}
                    </DialogTitle>
                  </div>
                </div>
                <p className="mt-4 font-display text-sm font-semibold text-silver-soft">
                  {selectedPartner.tagline}
                </p>
                <DialogDescription className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {selectedPartner.desc}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href={selectedPartner.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-silver inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-wider"
                >
                  <Instagram className="h-4 w-4" />
                  <span>Seguir {selectedPartner.handle}</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedPartner(null)}
                  className="btn-outline-silver rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground"
                >
                  Fechar
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-center text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground sm:px-6 md:flex-row md:text-left">
          <span>Emerson Rodrigues Farias</span>
          <span>Filmmaker · Live · Estratégia de conteúdo</span>
        </div>
      </footer>
      {/* LIGHTBOX DE FOTOS EXPANDIDAS */}
      {selectedClient && activeLightboxIndex !== null && selectedClient.photos[activeLightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-between bg-black/95 p-4 sm:p-6 backdrop-blur-2xl animate-in fade-in duration-200"
          onClick={() => setActiveLightboxIndex(null)}
        >
          {/* Barra superior */}
          <div
            className="flex w-full max-w-6xl items-center justify-between z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <p className="font-display text-sm font-semibold tracking-wide text-foreground sm:text-base">
                {selectedClient.name}
              </p>
              <p className="text-[0.68rem] uppercase tracking-wider text-muted-foreground">
                Foto {activeLightboxIndex + 1} de {selectedClient.photos.length}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setActiveLightboxIndex(null)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-surface/80 text-foreground transition-colors hover:bg-surface hover:text-white"
              aria-label="Fechar visualização"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Imagem Central */}
          <div
            className="relative flex flex-1 w-full items-center justify-center py-2 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedClient.photos.length > 1 && (
              <button
                type="button"
                onClick={() =>
                  setActiveLightboxIndex((prev) =>
                    prev !== null
                      ? (prev - 1 + selectedClient.photos.length) % selectedClient.photos.length
                      : 0
                  )
                }
                className="absolute left-2 sm:left-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-background/80 text-foreground backdrop-blur-md transition-all hover:bg-surface hover:scale-105 active:scale-95"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            <img
              src={selectedClient.photos[activeLightboxIndex]}
              alt={`${selectedClient.name} - Foto ${activeLightboxIndex + 1}`}
              className="max-h-[78vh] max-w-[92vw] rounded-xl object-contain shadow-2xl transition-transform duration-200"
            />

            {selectedClient.photos.length > 1 && (
              <button
                type="button"
                onClick={() =>
                  setActiveLightboxIndex((prev) =>
                    prev !== null ? (prev + 1) % selectedClient.photos.length : 0
                  )
                }
                className="absolute right-2 sm:right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-background/80 text-foreground backdrop-blur-md transition-all hover:bg-surface hover:scale-105 active:scale-95"
                aria-label="Próxima foto"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}
          </div>

          {/* Miniaturas inferiores */}
          {selectedClient.photos.length > 1 && (
            <div
              className="flex max-w-full items-center gap-2 overflow-x-auto py-2 z-10 px-2"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedClient.photos.map((photo, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveLightboxIndex(idx)}
                  className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                    idx === activeLightboxIndex
                      ? "border-silver ring-2 ring-silver/30 scale-105"
                      : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                >
                  <img
                    src={photo}
                    alt={`Miniatura ${idx + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
