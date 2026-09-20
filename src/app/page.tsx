"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  ChevronDown,
  Instagram,
  MapPin,
  Menu,
  Scissors,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    name: "Corte Masculino",
    price: "R$ 55",
    description: "Do clássico ao moderno, com acabamento preciso.",
    icon: Scissors,
  },
  {
    name: "Corte + Barba",
    price: "R$ 85",
    description: "O combo completo para renovar seu visual.",
    icon: Sparkles,
  },
  {
    name: "Barba Premium",
    price: "R$ 45",
    description: "Modelagem, toalha quente e acabamento impecável.",
    icon: Scissors,
  },
  {
    name: "Navalha & Acabamento",
    price: "R$ 35",
    description: "Precisão nos mínimos detalhes.",
    icon: Sparkles,
  },
];

const testimonials = [
  [
    "Lucas Almeida",
    "Ambiente impecável e o corte ficou exatamente como eu queria.",
  ],
  [
    "Rafael Martins",
    "A atenção aos detalhes faz toda diferença. Virou minha barbearia.",
  ],
  ["Bruno Costa", "Excelente atendimento e acabamento. Recomendo demais."],
];

const gallery = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=1200&q=85",
];

export default function Home() {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <main>
      <header className="nav">
        <button className="brand" onClick={() => go("inicio")}>
          AURUM <span>BARBER CLUB</span>
        </button>
        <nav className={open ? "nav-links open" : "nav-links"}>
          {["servicos", "sobre", "galeria", "contato"].map((item) => (
            <button key={item} onClick={() => go(item)}>
              {item === "servicos"
                ? "Serviços"
                : item[0].toUpperCase() + item.slice(1)}
            </button>
          ))}
          <button className="nav-cta" onClick={() => go("contato")}>
            Agendar horário <ArrowUpRight size={16} />
          </button>
        </nav>
        <button
          className="menu"
          aria-label="Abrir menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Seu estilo.
            <br />
            <em>Nossa precisão.</em>
          </motion.h1>
          <motion.p
            className="hero-copy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Cortes precisos, barba impecável e uma experiência feita para quem
            não abre mão de estilo.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button className="gold-btn" onClick={() => go("contato")}>
              Agendar horário <ArrowUpRight size={18} />
            </button>
            <button className="text-btn" onClick={() => go("servicos")}>
              Conhecer serviços <ChevronDown size={17} />
            </button>
          </motion.div>
        </div>
      </section>

      <section id="servicos" className="section services">
        <div className="section-head">
          <div>
            <p className="eyebrow">
              <span /> O QUE FAZEMOS
            </p>
            <h2>
              Serviços <em>essenciais.</em>
            </h2>
          </div>
          <p>
            Experiência, técnica e atenção aos detalhes em cada atendimento.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.article
                className="service-card"
                key={service.name}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="card-number">0{i + 1}</div>
                <Icon className="service-icon" size={30} strokeWidth={1.2} />
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <strong>{service.price}</strong>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section id="sobre" className="section about">
        <div className="about-image">
          <div className="image-label">AURUM / EST. 2018</div>
        </div>
        <div className="about-copy">
          <p className="eyebrow">
            <span /> A EXPERIÊNCIA AURUM
          </p>
          <h2>
            Mais que um corte.
            <br />
            <em>Uma experiência.</em>
          </h2>
          <p>
            Um espaço pensado para homens que valorizam estilo, precisão e um
            atendimento de verdade.
          </p>
          <p>
            Do primeiro contato ao acabamento final, cada detalhe é executado
            para que você saia daqui sentindo a diferença.
          </p>
          <div className="stats">
            <div>
              <strong>2.5k+</strong>
              <span>Clientes</span>
            </div>
            <div>
              <strong>8</strong>
              <span>Anos de experiência</span>
            </div>
            <div>
              <strong>5.0</strong>
              <span>Avaliação média</span>
            </div>
          </div>
        </div>
      </section>

      <section id="galeria" className="section gallery-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">
              <span /> NOSSO TRABALHO
            </p>
            <h2>
              Detalhes que <em>marcam.</em>
            </h2>
          </div>
        </div>
        <div className="gallery">
          {gallery.map((src, i) => (
            <div className={`gallery-item g${i + 1}`} key={src}>
              <img src={src} alt={`Trabalho Aurum ${i + 1}`} />
              <div className="gallery-overlay">AURUM / 0{i + 1}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="quote">
        <div className="quote-mark">“</div>
        <blockquote>
          Seu visual fala antes de você.
          <br />
          <em>Faça valer a primeira impressão.</em>
        </blockquote>
      </section>

      <section className="section testimonials">
        <div className="section-head">
          <div>
            <p className="eyebrow">
              <span /> QUEM JÁ PASSOU POR AQUI
            </p>
            <h2>
              Palavras de <em>quem conhece.</em>
            </h2>
          </div>
        </div>
        <div className="testimonial-grid">
          {testimonials.map(([name, text]) => (
            <article key={name} className="testimonial">
              <div className="stars">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star key={n} size={14} fill="currentColor" />
                ))}
              </div>
              <p>“{text}”</p>
              <strong>{name}</strong>
              <span>Cliente Aurum</span>
            </article>
          ))}
        </div>
      </section>

      <section id="contato" className="booking">
        <div className="booking-glow" />
        <div className="booking-content">
          <p className="eyebrow">
            <span /> SEU PRÓXIMO CORTE
          </p>
          <h2>
            Pronto para elevar
            <br />
            <em>seu estilo?</em>
          </h2>
          <p>Reserve seu horário e venha viver a experiência Aurum.</p>
          <button className="gold-btn">
            Agendar pelo WhatsApp <ArrowUpRight size={18} />
          </button>
          <div className="contact-details">
            <span>
              <MapPin size={16} /> Rua Exemplo, 250 · Fortaleza - CE
            </span>
            <span>
              <CalendarDays size={16} /> Seg–Sáb · 09h às 20h
            </span>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          AURUM <span>BARBER CLUB</span>
        </div>
        <p>Precisão. Estilo. Presença.</p>
        <a href="#" aria-label="Instagram">
          <Instagram size={19} />
        </a>
        <small>© 2026 Aurum Barber Club. Todos os direitos reservados.</small>
      </footer>
    </main>
  );
}
