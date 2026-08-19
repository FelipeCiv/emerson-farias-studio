import { createFileRoute } from "@tanstack/react-router";
import heroPortrait from "@/assets/hero-portrait.jpg";
import aboutPortrait from "@/assets/about-portrait.jpg";
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

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-lg tracking-[0.2em] uppercase">
            Emerson <span className="text-gold-gradient">Farias</span>
          </a>
          <nav className="hidden gap-8 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contato"
            className="btn-gold rounded-sm px-5 py-2.5 text-xs font-medium uppercase tracking-[0.16em]"
          >
            Falar comigo
          </a>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
          <div className="pointer-events-none absolute -top-40 right-0 h-[36rem] w-[36rem] rounded-full bg-gold/10 blur-[140px]" />
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="eyebrow">Filmmaker · Live · Estratégia</p>
              <h1 className="mt-6 text-5xl leading-[1.05] font-semibold md:text-7xl">
                Emerson
                <br />
                <span className="text-gold-gradient">Rodrigues Farias</span>
              </h1>
              <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground">
                Mais de 300 eventos entregues em dois anos ao lado de Pablo Marçal e de grandes
                players do mercado. Transmissões ao vivo, direção de imagem e estratégia de conteúdo
                para quem não pode errar no palco nem na tela.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contato"
                  className="btn-gold rounded-sm px-8 py-3.5 text-xs font-medium uppercase tracking-[0.18em]"
                >
                  Solicitar orçamento
                </a>
                <a
                  href="#trabalhos"
                  className="btn-ghost-gold rounded-sm px-8 py-3.5 text-xs font-medium uppercase tracking-[0.18em]"
                >
                  Ver trabalhos
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 border border-gold/25" aria-hidden="true" />
              <img
                src={heroPortrait}
                alt="Emerson Rodrigues Farias, filmmaker, com câmera de cinema"
                width={1024}
                height={1280}
                className="relative w-full object-cover grayscale-[15%]"
              />
            </div>
          </div>

          <div className="mx-auto mt-20 max-w-6xl px-6">
            <dl className="grid grid-cols-2 gap-px overflow-hidden border border-border bg-border md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-background px-6 py-8">
                  <dt className="font-display text-3xl text-gold-gradient">{s.value}</dt>
                  <dd className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="border-t border-border bg-surface/40 py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
            <div className="relative order-2 md:order-1">
              <img
                src={aboutPortrait}
                alt="Retrato de Emerson Rodrigues Farias em estúdio"
                width={1008}
                height={1200}
                loading="lazy"
                className="w-full object-cover"
              />
              <div
                className="absolute -bottom-4 -right-4 h-40 w-40 border-b border-r border-gold/40"
                aria-hidden="true"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="eyebrow">Sobre</p>
              <h2 className="mt-5 text-4xl leading-tight font-semibold md:text-5xl">
                Bastidores de alto nível, entregues com precisão.
              </h2>
              <div className="rule-gold mt-7" />
              <div className="mt-7 space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                <p>
                  Trabalhei dois anos com Pablo Marçal em transmissões de eventos ao vivo, como
                  stories maker, filmmaker e social media. Foram mais de 300 eventos nesse período —
                  volume que abriu portas para atuar com outros grandes players e influenciadores do
                  mercado.
                </p>
                <p>
                  Desde então, assinei produções em eventos como Kiwify, o leilão do Neymar,
                  podcasts, transmissões ao vivo, eventos corporativos, feiras, shows e festas.
                  Estive na Copa do Mundo de 2026 através da Rede Ronaldo e já realizei diversos
                  trabalhos nos Estados Unidos.
                </p>
                <p>
                  Além da câmera, atuo como estrategista de infoprodutores e social media, dirigindo
                  conteúdo de vlog para YouTube, Reels, Shorts e TikTok com foco em resultado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="border-t border-border py-24">
          <div className="mx-auto max-w-6xl px-6">
            <p className="eyebrow">Serviços</p>
            <h2 className="mt-5 max-w-2xl text-4xl leading-tight font-semibold md:text-5xl">
              O que eu entrego
            </h2>
            <div className="rule-gold mt-7" />
            <div className="mt-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <article key={s.title} className="lux-card p-8">
                  <span className="font-display text-sm text-gold/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TRABALHOS */}
        <section id="trabalhos" className="border-t border-border bg-surface/40 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <p className="eyebrow">Portfólio</p>
            <h2 className="mt-5 max-w-2xl text-4xl leading-tight font-semibold md:text-5xl">
              Trabalhos selecionados
            </h2>
            <div className="rule-gold mt-7" />
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {works.map((w) => (
                <figure
                  key={w.title}
                  className="group relative overflow-hidden border border-border"
                >
                  <img
                    src={w.img}
                    alt={w.title}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/85 to-transparent p-6">
                    <p className="text-[0.65rem] uppercase tracking-[0.22em] text-gold">{w.tag}</p>
                    <h3 className="mt-2 text-lg font-semibold">{w.title}</h3>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-8 text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Imagens ilustrativas — acervo oficial em atualização.
            </p>
          </div>
        </section>

        {/* CLIENTES */}
        <section id="clientes" className="border-t border-border py-24">
          <div className="mx-auto max-w-6xl px-6">
            <p className="eyebrow">Clientes e parcerias</p>
            <h2 className="mt-5 max-w-2xl text-4xl leading-tight font-semibold md:text-5xl">
              Nomes que já estiveram na minha lente
            </h2>
            <div className="rule-gold mt-7" />
            <ul className="mt-14 grid grid-cols-2 gap-px bg-border sm:grid-cols-3 lg:grid-cols-4">
              {clients.map((c) => (
                <li
                  key={c}
                  className="bg-background px-6 py-8 text-center font-display text-lg tracking-wide text-muted-foreground transition-colors hover:text-gold"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="relative overflow-hidden border-t border-border py-28">
          <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]" />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <p className="eyebrow">Contato</p>
            <h2 className="mt-5 text-4xl leading-tight font-semibold md:text-5xl">
              Vamos construir a próxima <span className="text-gold-gradient">grande entrega</span>.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Disponível para eventos, transmissões ao vivo, produções internacionais e consultoria
              de conteúdo. Envie os detalhes do seu projeto e retorno com uma proposta.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/5500000000000"
                className="btn-gold rounded-sm px-8 py-3.5 text-xs font-medium uppercase tracking-[0.18em]"
              >
                WhatsApp
              </a>
              <a
                href="mailto:contato@emersonfarias.com"
                className="btn-ghost-gold rounded-sm px-8 py-3.5 text-xs font-medium uppercase tracking-[0.18em]"
              >
                E-mail
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs uppercase tracking-[0.16em] text-muted-foreground md:flex-row">
          <span>Emerson Rodrigues Farias</span>
          <span>Filmmaker · Live · Estratégia de conteúdo</span>
        </div>
      </footer>
    </div>
  );
}
