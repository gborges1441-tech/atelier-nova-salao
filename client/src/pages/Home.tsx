/* Atelier Nova · Página de luxo editorial noturno: ritual, precisão, assimetria controlada e próxima ação clara. */
import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  Gem,
  Instagram,
  Menu,
  MapPin,
  Scissors,
  Send,
  Sparkles,
  X,
} from "lucide-react";

const isGithubPages = import.meta.env.BASE_URL.includes("atelier-nova-salao");
const pageAsset = (name: string, fallback: string) => isGithubPages ? `${import.meta.env.BASE_URL}site-assets/${name}` : fallback;
const heroImage = pageAsset("atelier-nova-hero.jpg", "/manus-storage/atelier-nova-hero_07dc0185.jpg");
const hairImage = pageAsset("atelier-nova-hair-v2.jpg", "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85");
const nailsImage = pageAsset("atelier-nova-nails-v2.jpg", "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=85");
const studioImage = pageAsset("atelier-nova-studio-v2.jpg", "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85");
const detailImage = pageAsset("atelier-nova-detail-v2.jpg", "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1400&q=85");
// Slot opcional: substitua por uma URL/asset do seu próprio MP4 quando o vídeo do Flow estiver pronto.
const ownerVideo = "";
const heroScenes = [
  { src: heroImage, label: "A matéria" },
  { src: hairImage, label: "O gesto" },
  { src: nailsImage, label: "O acabamento" },
  { src: detailImage, label: "A assinatura" },
];
const markImage = pageAsset("atelier-nova-mark.png", "/manus-storage/atelier-nova-mark_78ffdf5a.png");

type ServiceTab = "Cabelo" | "Unhas" | "Ritual Nova";

const serviceContent: Record<
  ServiceTab,
  { eyebrow: string; title: string; description: string; items: string[]; image: string }
> = {
  Cabelo: {
    eyebrow: "01 / cabelo",
    title: "Corte, cor e textura com intenção.",
    description:
      "A gente começa na conversa: rotina, textura, desejo. Depois, desenha um resultado que continua bonito quando você sai do estúdio — e quando o dia muda.",
    items: ["Corte assinatura", "Coloração sob medida", "Brushing & finalização", "Tratamento de brilho"],
    image: hairImage,
  },
  Unhas: {
    eyebrow: "02 / unhas",
    title: "Pequena superfície. Grande presença.",
    description:
      "Manicure precisa é sobre acabamento, não pressa. Curadoria de formato, cor e cuidado para que suas mãos tenham a mesma presença que o resto do visual.",
    items: ["Manicure Nova", "Gel de longa duração", "Nail art essencial", "Ritual de hidratação"],
    image: nailsImage,
  },
  "Ritual Nova": {
    eyebrow: "03 / ritual nova",
    title: "Seu tempo, editado para você.",
    description:
      "Uma sessão combinada para quem prefere resolver tudo em um só lugar: cabelo, mãos e um intervalo real para desacelerar.",
    items: ["Cabelo + manicure", "Diagnóstico de imagem", "Preparação para evento", "Retoque express"],
    image: detailImage,
  },
};

const faqs = [
  ["Preciso saber exatamente o que quero?", "Não. O diagnóstico existe para transformar referência, rotina e desejo em um caminho claro."],
  ["Vocês atendem primeira visita?", "Sim. A Nova Start é uma conversa de 15 minutos para escolher o melhor serviço antes de reservar o horário."],
  ["Posso agendar cabelo e unhas juntos?", "Sim. A equipe organiza o ritual combinado de acordo com o tempo e o acabamento que você deseja."],
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState<ServiceTab>("Cabelo");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [activeScene, setActiveScene] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 640px)").matches;
    if (ownerVideo || isMobile || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActiveScene(0);
      return;
    }
    const sceneTimer = window.setInterval(() => setActiveScene((scene) => (scene + 1) % heroScenes.length), 5200);
    return () => window.clearInterval(sceneTimer);
  }, []);

  const active = serviceContent[activeService];

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  function closeMobileAndScroll(id: string) {
    setMenuOpen(false);
    window.setTimeout(() => scrollToId(id), 50);
  }

  return (
    <main className="site-shell">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand-lockup" href="#top" aria-label="Atelier Nova, início">
          <img className="brand-mark" src={markImage} alt="" />
          <span>
            <strong>ATELIER</strong>
            <em>NOVA</em>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#experiencia">A experiência</a>
          <a href="#servicos">Serviços</a>
          <a href="#estudio">O estúdio</a>
        </nav>
        <div className="header-actions">
          <span className="availability"><i /> agenda aberta</span>
          <a className="header-cta" href="#agendamento">Agendar <ArrowUpRight size={14} /></a>
          <button className="menu-toggle" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen((value) => !value)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu" aria-label="Menu mobile">
          <div className="mobile-menu-top"><span>ATELIER NOVA</span><span>00 / 03</span></div>
          <nav>
            <button onClick={() => closeMobileAndScroll("experiencia")}>A experiência <ArrowUpRight size={18} /></button>
            <button onClick={() => closeMobileAndScroll("servicos")}>Serviços <ArrowUpRight size={18} /></button>
            <button onClick={() => closeMobileAndScroll("estudio")}>O estúdio <ArrowUpRight size={18} /></button>
            <button onClick={() => closeMobileAndScroll("agendamento")} className="mobile-menu-cta">Agendar meu diagnóstico <ArrowUpRight size={18} /></button>
          </nav>
          <div className="mobile-menu-foot"><span>São Paulo · Brasil</span><span>Ter — Sáb</span></div>
        </div>
      )}

      <section className="hero" id="top">
        <div className="hero-image-wrap">
          {ownerVideo ? <video className="hero-video" autoPlay muted loop playsInline poster={heroImage}><source src={ownerVideo} type="video/mp4" /></video> : <div className="scene-stack" aria-label="Sequência visual Atelier Nova">{heroScenes.map((scene, index) => <img key={scene.src} src={scene.src} alt={scene.label} className={`hero-image scene-image ${activeScene === index ? "is-active" : ""}`} />)}</div>}
          <div className="hero-image-overlay" />
          <div className="scene-controls" aria-label="Controles da sequência visual">{heroScenes.map((scene, index) => <button key={scene.label} className={activeScene === index ? "is-active" : ""} onClick={() => setActiveScene(index)} aria-label={`Mostrar cena ${scene.label}`}><span>{String(index + 1).padStart(2, "0")}</span><i /></button>)}</div>
        </div>
        <div className="hero-content">
          <div className="eyebrow reveal"><span className="eyebrow-number">01</span> Hair · Nails · Ritual</div>
          <h1 className="hero-title reveal delay-1">Seu próximo<br /><i>visual</i> começa<br />antes do espelho.</h1>
          <p className="hero-copy reveal delay-2">Um estúdio para quem quer sair do automático. Cabelo e unhas tratados como assinatura pessoal — com técnica silenciosa e tempo bem gasto.</p>
          <div className="hero-actions reveal delay-3">
            <a className="button button-primary" href="#agendamento">Agendar meu diagnóstico <ArrowUpRight size={17} /></a>
            <a className="text-link" href="#servicos">Explorar serviços <ArrowDownRight size={16} /></a>
          </div>
        </div>
        <div className="hero-footnote"><span>Scroll to explore</span><span className="hero-line" /><span>{ownerVideo ? "film / 01" : `scene / ${String(activeScene + 1).padStart(2, "0")}`}</span></div>
        <div className="hero-motion-note"><span className="motion-dot" /> Motion story · 00:20</div>
        <div className="hero-side-label">ATELIER NOVA · 2026</div>
      </section>

      <div className="benefit-ticker" aria-label="Benefícios do Atelier Nova">
        <div className="ticker-track">
          <span>DIAGNÓSTICO ANTES DO SERVIÇO</span><b>✦</b><span>ACABAMENTO QUE CONTINUA</span><b>✦</b><span>ATENDIMENTO COM HORA MARCADA</span><b>✦</b><span>DIAGNÓSTICO ANTES DO SERVIÇO</span><b>✦</b><span>ACABAMENTO QUE CONTINUA</span><b>✦</b><span>ATENDIMENTO COM HORA MARCADA</span><b>✦</b>
        </div>
      </div>

      <section className="film-strip" aria-label="Filme Atelier Nova">
        <div className="film-intro"><span className="section-index">01 <span>/ motion study</span></span><h2>O detalhe<br /><i>se move.</i></h2><p>Uma sequência curta sobre o que acontece entre a intenção e o espelho.</p></div>
        <article className="film-panel film-panel-hair"><img src={hairImage} alt="Cabelo sendo finalizado em um gesto preciso" /><div className="film-panel-overlay" /><div className="film-panel-copy"><span>01 / gesto</span><h3>Começa<br /><i>na mão.</i></h3><p>Precisão é uma forma de cuidado.</p></div></article>
        <article className="film-panel film-panel-nails"><img src={nailsImage} alt="Manicure ameixa em acabamento editorial" /><div className="film-panel-overlay" /><div className="film-panel-copy"><span>02 / matéria</span><h3>O brilho<br /><i>fica.</i></h3><p>Acabamento que continua depois da porta.</p></div></article>
        <article className="film-panel film-panel-detail"><img src={detailImage} alt="Textura abstrata de beleza em luz âmbar" /><div className="film-panel-overlay" /><div className="film-panel-copy"><span>03 / assinatura</span><h3>Seu gesto,<br /><i>mais nítido.</i></h3><p>O visual certo não pede explicação.</p></div></article>
      </section>

      <section className="manifesto section-pad" id="experiencia">
        <div className="section-index">02 <span>/ experiência</span></div>
        <div className="manifesto-copy">
          <p className="kicker">Beleza, sem ruído.</p>
          <h2>O luxo está no<br /><i>tempo</i> que você<br />sente.</h2>
          <p className="body-copy">No Nova, a experiência começa muito antes da tesoura ou do esmalte. A gente observa, pergunta, traduz. Porque o resultado mais bonito é aquele que parece inevitável — como se sempre tivesse sido seu.</p>
          <a className="arrow-link" href="#processo">Conhecer nosso jeito <ArrowUpRight size={17} /></a>
        </div>
        <div className="manifesto-visual">
          <div className="image-frame image-frame-tall"><img src={studioImage} alt="Interior escuro e sofisticado do estúdio Atelier Nova" /></div>
          <div className="floating-caption"><span>nº 001</span><p>Onde o gesto<br />vira assinatura.</p></div>
          <div className="vertical-caption">A CALMA TAMBÉM É UMA TÉCNICA</div>
        </div>
      </section>

      <section className="service-section section-pad" id="servicos">
        <div className="section-heading-row">
          <div><div className="section-index">03 <span>/ o menu nova</span></div><h2>Escolha o que<br /><i>fala</i> com você.</h2></div>
          <p className="section-intro">Cada serviço nasce de uma leitura. Não existe menu pronto para todo mundo — existe o acabamento que faz sentido para a sua rotina.</p>
        </div>
        <div className="service-tabs" role="tablist" aria-label="Categorias de serviços">
          {(Object.keys(serviceContent) as ServiceTab[]).map((tab, index) => (
            <button key={tab} className={activeService === tab ? "active" : ""} role="tab" aria-selected={activeService === tab} onClick={() => setActiveService(tab)}>
              <span>0{index + 1}</span>{tab}<ArrowUpRight size={15} />
            </button>
          ))}
        </div>
        <div className="service-feature">
          <div className="service-feature-image"><img key={active.image} src={active.image} alt={active.title} /></div>
          <div className="service-feature-copy">
            <p className="kicker">{active.eyebrow}</p>
            <h3>{active.title}</h3>
            <p className="body-copy">{active.description}</p>
            <ul>{active.items.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul>
            <button className="arrow-link arrow-button" onClick={() => scrollToId("agendamento")}>Encontrar meu serviço <ArrowUpRight size={17} /></button>
          </div>
        </div>
      </section>

      <section className="quote-band">
        <div className="quote-glyph">“</div>
        <p>Não é sobre mudar quem você é.<br /><i>É sobre deixar isso mais nítido.</i></p>
        <span>Atelier Nova · hair & nail studio</span>
      </section>

      <section className="process-section section-pad" id="processo">
        <div className="process-intro"><div className="section-index">04 <span>/ o processo</span></div><h2>Três gestos.<br /><i>Um resultado</i><br />que permanece.</h2><p className="body-copy">O método Nova transforma uma visita ao salão em uma decisão bem tomada — e em um ritual que dá vontade de repetir.</p></div>
        <div className="process-list">
          <article><span>01</span><div><Scissors size={21} /><h3>Conversar</h3><p>A gente começa por você: hábitos, referências, o que não quer perder.</p></div><ArrowUpRight className="process-arrow" size={19} /></article>
          <article><span>02</span><div><Sparkles size={21} /><h3>Curar</h3><p>Traduzimos sua intenção em forma, cor, textura e um plano possível.</p></div><ArrowUpRight className="process-arrow" size={19} /></article>
          <article><span>03</span><div><Gem size={21} /><h3>Finalizar</h3><p>O detalhe entra por último. E é ele que faz tudo parecer seu.</p></div><ArrowUpRight className="process-arrow" size={19} /></article>
        </div>
      </section>

      <section className="editorial-split" id="estudio">
        <div className="editorial-image"><img src={detailImage} alt="Detalhe abstrato de textura de cabelo e esmalte ameixa" /></div>
        <div className="editorial-copy"><div className="section-index">05 <span>/ a matéria</span></div><h2>Brilho não é<br /><i>excesso</i>.<br />É cuidado.</h2><p className="body-copy">A textura da pedra. O som da escova. A cor escolhida sem pressa. O Nova foi desenhado para que cada detalhe conte — e para que você perceba isso no corpo.</p><div className="editorial-meta"><span><Clock3 size={16} /> 15 min de diagnóstico</span><span><MapPin size={16} /> Atendimento com hora marcada</span></div></div>
      </section>

      <section className="booking-section section-pad" id="agendamento">
        <div className="booking-intro"><div className="section-index">06 <span>/ nova start</span></div><h2>Comece pela<br /><i>conversa</i>.</h2><p className="body-copy">Conte um pouco sobre o que você procura. Em até um próximo passo, a equipe encontra o melhor ponto de partida para você.</p><div className="booking-note"><span>Sem compromisso.</span><span>15 minutos.</span><span>100% seu.</span></div></div>
        <div className="booking-card">
          {submitted ? (
            <div className="booking-success"><div className="success-icon"><Check size={22} /></div><p className="kicker">Recebemos seu pedido</p><h3>Seu próximo passo<br /><i>já começou.</i></h3><p>Agora é só aguardar o nosso contato para encontrar o melhor horário e cuidar dos detalhes.</p><button className="arrow-link arrow-button" onClick={() => setSubmitted(false)}>Enviar outro pedido <ArrowUpRight size={17} /></button></div>
          ) : (
            <form onSubmit={submitForm}>
              <div className="form-topline"><span>Nova Start · 15 min</span><span>01 — 03</span></div>
              <label>Como podemos te chamar?<input name="name" placeholder="Seu nome" required /></label>
              <label>Qual ritual te interessa?<select name="service" defaultValue=""><option value="" disabled>Escolha uma opção</option><option>Cabelo</option><option>Unhas</option><option>Ritual Nova</option><option>Ainda não sei</option></select><ChevronDown size={16} /></label>
              <label>Onde podemos responder?<input type="email" name="email" placeholder="seu@email.com" required /></label>
              <button className="button button-primary form-submit" type="submit">Quero meu diagnóstico <Send size={16} /></button>
              <small>Ao enviar, você recebe uma resposta da equipe com os próximos horários disponíveis.</small>
            </form>
          )}
        </div>
      </section>

      <section className="faq-section section-pad" id="duvidas">
        <div><div className="section-index">07 <span>/ antes de vir</span></div><h2>Sem mistério.<br /><i>Só cuidado.</i></h2></div>
        <div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? "open" : ""}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>0{index + 1}</span>{question}<ChevronDown size={17} /></button>{openFaq === index && <p>{answer}</p>}</div>)}</div>
      </section>

      <footer className="site-footer">
        <div className="footer-main"><div className="footer-brand"><img src={markImage} alt="" /><p>Uma pausa bem desenhada<br />para o seu próximo capítulo.</p></div><div className="footer-links"><div><span className="footer-label">Explore</span><a href="#experiencia">A experiência</a><a href="#servicos">Serviços</a><a href="#estudio">O estúdio</a></div><div><span className="footer-label">Fale com a gente</span><a href="#agendamento">Agendar diagnóstico</a><a href="#duvidas">Dúvidas frequentes</a><a href="#top">Voltar ao topo <ArrowUpRight size={13} /></a></div><div><span className="footer-label">Siga o gesto</span><a href="#top"><Instagram size={14} /> Instagram</a><span>São Paulo · Brasil</span><span>Ter — Sáb · 9h — 19h</span></div></div></div><div className="footer-bottom"><span>© 2026 Atelier Nova</span><span>Hair · Nails · Ritual</span><a href="#top">Voltar ao topo <ArrowUpRight size={13} /></a></div>
      </footer>
    </main>
  );
}
