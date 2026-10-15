import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import {
  ArrowLeft,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Film,
  Sparkles,
  ExternalLink,
  Share2,
  Check,
  Video,
  Clapperboard,
  Flame,
  Layers,
  MessageCircle,
  RotateCcw,
} from "lucide-react";
import { Reveal, useScrollProgress } from "@/components/Reveal";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Vídeos & Filmmaker | Emerson Farias Studio" },
      {
        name: "description",
        content:
          "Assista aos vídeos, aftermovies e produções audiovisuais de Emerson Farias. Captação em alta definição, direção cinematográfica e energia para grandes eventos.",
      },
      { property: "og:title", content: "Vídeos & Filmmaker | Emerson Farias Studio" },
      {
        property: "og:description",
        content:
          "Veja na prática o estilo de vídeo, dinâmica de palco e cobertura cinematográfica para eventos e marcas.",
      },
      { property: "og:type", content: "video.other" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VideosPage,
});

interface VideoItem {
  id: string;
  src: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  instagramUrl: string;
  highlights: string[];
}

const videosData: VideoItem[] = [
  {
    id: "video-1",
    src: "/videos/video1.mp4",
    title: "Aftermovie & Energia de Palco",
    category: "Eventos & Shows",
    tagline: "Captação Dinâmica & Ritmo Acelerado",
    description:
      "Cortes sincronizados, transições com câmera em movimento e a vibração máxima do público e do palco traduzidas em formato vertical de alto impacto.",
    instagramUrl: "https://www.instagram.com/reel/DRVhIQgkSdj/",
    highlights: ["Câmera de Cinema", "Pacing Dinâmico", "Cores Vivas"],
  },
  {
    id: "video-2",
    src: "/videos/video2.mp4",
    title: "Filmmaker & Bastidores de Alto Nível",
    category: "Bastidores & VIP",
    tagline: "Olhar Exclusivo & Narrativa Visual",
    description:
      "Acompanhamento próximo das personalidades e palestrantes, captando momentos espontâneos e a atmosfera dos bastidores com estética refinada.",
    instagramUrl: "https://www.instagram.com/reel/DQ4ayzLDW2u/",
    highlights: ["Lentes Claras", "Captação Ágil", "Estética Dark & Silver"],
  },
  {
    id: "video-3",
    src: "/videos/video3.mp4",
    title: "Imersões & Experiência Presencial",
    category: "Imersões & Lançamentos",
    tagline: "Conexão Emocional & Autoridade",
    description:
      "Filmagens estratégicas que valorizam a grandiosidade da estrutura, a reação da plateia e a autoridade do anfitrião no palco.",
    instagramUrl: "https://www.instagram.com/reel/DP6bOEBDbw5/",
    highlights: ["Multicâmera", "Áudio Imersivo", "Storytelling"],
  },
  {
    id: "video-4",
    src: "/videos/video4.mp4",
    title: "Produção Cinemática & Lifestyle",
    category: "Comercial & Lifestyle",
    tagline: "Padrão Internacional de Imagem",
    description:
      "Composição visual apurada, direção de cena fluida e pós-produção calibrada para destacar o melhor de cada produto, evento ou marca pessoal.",
    instagramUrl: "https://www.instagram.com/reel/DVKLfW9iZ1m/",
    highlights: ["Color Grading Pro", "4K Ultra HD", "Cortes Verticais"],
  },
];

const categories = ["Todos", "Eventos & Shows", "Bastidores & VIP", "Imersões & Lançamentos", "Comercial & Lifestyle"];

// Player de Vídeo Customizado Cinemático
function CinematicVideoPlayer({ video }: { video: VideoItem }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progressPercent, setProgressPercent] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const [showControls, setShowControls] = useState(false);

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration;
    setProgressPercent((current / total) * 100);
    setCurrentTime(formatTime(current));
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(formatTime(videoRef.current.duration));
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * videoRef.current.duration;
  };

  return (
    <div
      className="relative aspect-[9/16] w-full max-w-[340px] sm:max-w-[380px] overflow-hidden rounded-2xl border border-silver/20 bg-black shadow-2xl group/player select-none cursor-pointer"
      onClick={togglePlay}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={video.src}
        playsInline
        loop
        muted={isMuted}
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="h-full w-full object-cover"
      />

      {/* Botão de Play Grande no Centro quando pausado */}
      {!isPlaying && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/35 backdrop-blur-[2px] transition-all duration-300">
          <div className="grid h-16 w-16 place-items-center rounded-full border border-silver/50 bg-silver/90 text-background shadow-2xl transition-transform duration-300 hover:scale-110">
            <Play className="h-7 w-7 fill-background ml-1" />
          </div>
          <span className="mt-3 rounded-full bg-background/80 px-3.5 py-1 font-display text-[0.68rem] font-bold uppercase tracking-wider text-silver backdrop-blur-md">
            Clique para Assistir
          </span>
        </div>
      )}

      {/* Tag de Áudio no Canto Superior */}
      <button
        type="button"
        onClick={toggleMute}
        title={isMuted ? "Ativar som" : "Desativar som"}
        className="absolute top-3 right-3 z-30 grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all hover:bg-black/90 hover:scale-110 active:scale-95 cursor-pointer"
      >
        {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4 text-silver" />}
      </button>

      {/* Barra de Controles Inferior */}
      <div
        className={`absolute inset-x-0 bottom-0 z-30 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-4 transition-opacity duration-300 ${
          showControls || !isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Barra de Progresso */}
        <div
          className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/20 cursor-pointer mb-3"
          onClick={handleSeek}
        >
          <div
            className="h-full bg-[image:var(--gradient-silver)] transition-all duration-100"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Controles */}
        <div className="flex items-center justify-between text-xs text-white">
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={togglePlay}
              className="grid h-7 w-7 place-items-center rounded-full hover:bg-white/20 transition-colors"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 fill-white ml-0.5" />}
            </button>
            <span className="font-mono text-[0.68rem] text-muted-foreground">
              {currentTime} / {duration}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={toggleMute}
              className="grid h-7 w-7 place-items-center rounded-full hover:bg-white/20 transition-colors"
              title={isMuted ? "Ativar som" : "Desativar som"}
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4 text-silver" />}
            </button>
            <button
              type="button"
              onClick={handleFullscreen}
              className="grid h-7 w-7 place-items-center rounded-full hover:bg-white/20 transition-colors"
              title="Tela cheia"
            >
              <Maximize className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function VideosPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const progress = useScrollProgress();

  const filteredVideos =
    selectedCategory === "Todos"
      ? videosData
      : videosData.filter((v) => v.category === selectedCategory);

  const handleCopyLink = (video: VideoItem) => {
    navigator.clipboard.writeText(video.instagramUrl);
    setCopiedId(video.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-silver selection:text-primary-foreground">
      {/* Barra de progresso de rolagem */}
      <div
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-[image:var(--gradient-silver)]"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      {/* HEADER / NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-xl transition-all duration-300">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/40 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-all duration-200 hover:border-silver/60 hover:bg-surface hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Voltar ao Início</span>
          </Link>

          <Link
            to="/"
            className="hidden font-display text-base tracking-[0.18em] uppercase sm:block"
          >
            Emerson <span className="text-silver-gradient">Farias</span>
          </Link>

          <a
            href="https://wa.me/5511983742911?text=Ol%C3%A1%20Emerson!%20Vi%20os%20seus%20v%C3%ADdeos%20no%20site%20e%20gostaria%20de%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-silver inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] sm:px-5 sm:py-2.5 sm:text-xs"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            <span>Solicitar Produção</span>
          </a>
        </div>
      </header>

      <main className="relative pt-28 pb-24 sm:pt-36 md:pt-40 md:pb-32">
        {/* Glow de fundo */}
        <div className="pointer-events-none absolute -top-20 right-1/4 h-[32rem] w-[32rem] rounded-full bg-silver/10 blur-[160px]" />
        <div className="pointer-events-none absolute top-1/2 left-10 h-[24rem] w-[24rem] rounded-full bg-silver/5 blur-[140px]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(var(--silver)_1px,transparent_1px),linear-gradient(90deg,var(--silver)_1px,transparent_1px)] [background-size:64px_64px]" />

        {/* HERO DA PÁGINA */}
        <div className="relative mx-auto max-w-6xl px-5 sm:px-6 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-silver/30 bg-silver/10 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-silver shadow-sm">
              <Clapperboard className="h-3.5 w-3.5 text-silver" />
              <span>Showcase Audiovisual & Filmmaker</span>
            </div>
          </Reveal>

          <Reveal variant="blur" delay={120}>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Vídeos em <span className="text-silver-gradient">Ação & Movimento</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Veja na prática o estilo de captação, o dinamismo e o padrão de cinema que
              levamos para eventos de grande porte, bastidores VIP e produções com grandes nomes do mercado.
            </p>
          </Reveal>

          {/* BADGES DE QUALIDADE */}
          <Reveal delay={280}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              {[
                { icon: Video, label: "Player 100% Puro & Sem Redirecionamento" },
                { icon: Flame, label: "Pacing Dinâmico para Reels & Shorts" },
                { icon: Sparkles, label: "Color Grading & Edição de Cinema" },
                { icon: Layers, label: "Cobertura de Palco & Bastidores" },
              ].map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2 rounded-full border border-border/80 bg-surface/50 px-3.5 py-1.5 text-xs text-muted-foreground transition-colors hover:border-silver/40 hover:text-foreground"
                  >
                    <Icon className="h-3.5 w-3.5 text-silver" />
                    <span>{badge.label}</span>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* FILTRO DE CATEGORIAS */}
          <Reveal delay={340}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2 border-y border-border/60 py-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? "btn-silver text-primary-foreground shadow-md"
                      : "border border-border/70 bg-surface/30 text-muted-foreground hover:border-silver/40 hover:text-foreground hover:bg-surface/70"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* GRID DE VÍDEOS */}
        <div className="relative mx-auto mt-12 max-w-6xl px-5 sm:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
            {filteredVideos.map((video, idx) => (
              <Reveal
                key={video.id}
                delay={idx * 140}
                variant="scale"
                className="group flex flex-col overflow-hidden rounded-3xl border border-border/80 bg-surface/35 backdrop-blur-xl shadow-xl transition-all duration-500 hover:border-silver/60 hover:shadow-2xl hover:shadow-silver/5"
              >
                {/* Header do Card */}
                <div className="flex items-center justify-between border-b border-border/60 p-5 sm:px-6">
                  <div className="flex items-center gap-2.5">
                    <div className="grid h-8 w-8 place-items-center rounded-lg border border-silver/30 bg-silver/10 text-silver">
                      <Film className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="inline-block text-[0.62rem] font-bold uppercase tracking-[0.2em] text-silver">
                        {video.category}
                      </span>
                      <h3 className="font-display text-base font-bold text-foreground">
                        {video.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleCopyLink(video)}
                      title="Copiar Link do Post"
                      className="grid h-8 w-8 place-items-center rounded-lg border border-border/70 bg-surface/60 text-muted-foreground transition-all duration-200 hover:border-silver/50 hover:bg-surface hover:text-foreground cursor-pointer"
                    >
                      {copiedId === video.id ? (
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                      ) : (
                        <Share2 className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* CONTAINER DO PLAYER DE VÍDEO PURO */}
                <div className="relative bg-black/40 p-4 sm:p-6 flex justify-center items-center">
                  <CinematicVideoPlayer video={video} />
                </div>

                {/* Detalhes Técnicos & Descrição */}
                <div className="flex flex-1 flex-col justify-between border-t border-border/60 p-5 sm:p-6">
                  <div>
                    <p className="font-display text-xs font-semibold uppercase tracking-wider text-silver-soft">
                      {video.tagline}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {video.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-border/40">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {video.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="rounded-md border border-border/60 bg-surface/50 px-2 py-0.5 text-[0.62rem] font-medium text-muted-foreground"
                          >
                            {h}
                          </span>
                        ))}
                      </div>

                      <a
                        href={video.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[0.68rem] font-bold uppercase tracking-wider text-muted-foreground hover:text-silver transition-colors"
                      >
                        <span>Post Original</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* CTA FINAL DE CONTRATAÇÃO */}
        <section className="relative mx-auto mt-20 max-w-4xl px-5 sm:px-6 md:mt-28">
          <div className="relative overflow-hidden rounded-3xl border border-silver/30 bg-gradient-to-br from-surface/90 via-surface/50 to-background/90 p-8 text-center sm:p-12 shadow-2xl">
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-silver/10 blur-3xl" />
            <div className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-silver/10 blur-3xl" />

            <Reveal>
              <span className="eyebrow">Próxima Produção</span>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                Quer levar essa mesma energia para o seu{" "}
                <span className="text-silver-gradient">evento ou marca</span>?
              </h2>
            </Reveal>

            <Reveal delay={140}>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Captação com equipamentos de cinema, equipe ágil e entrega pronta para redes sociais. Fale diretamente comigo pelo WhatsApp para reservar a data.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://wa.me/5511983742911?text=Ol%C3%A1%20Emerson!%20Gostei%20muito%20dos%20v%C3%ADdeos%20e%20gostaria%20de%20conversar%20sobre%20o%20meu%20evento."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-silver inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em]"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Chamar no WhatsApp</span>
                </a>
                <Link
                  to="/"
                  className="btn-outline-silver rounded-full px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em]"
                >
                  Ver Todos os Serviços
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-center text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground sm:px-6 md:flex-row md:text-left">
          <span>Emerson Rodrigues Farias</span>
          <span>Filmmaker · Live · Estratégia de conteúdo</span>
        </div>
      </footer>
    </div>
  );
}
