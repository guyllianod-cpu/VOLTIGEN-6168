import { useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowDown,
  ArrowUpRight,
  BatteryCharging,
  Car,
  Factory,
  Leaf,
  Zap,
  Layers,
  Sun,
  ShieldCheck,
  MoveRight,
} from "lucide-react";
import { SectionTitle } from "../components/layout";
import { articles } from "../lib/content";
import { Testimonials } from "../components/testimonials";
import { ActivityOverview } from "../components/activity-overview";
import { WelcomeOverview } from "../components/welcome-overview";

const domains = [
  {
    name: "Automobile",
    icon: Car,
    text: "L’énergie au service de la mobilité. Un domaine présenté dans notre univers de marque.",
  },
  {
    name: "Industrie",
    icon: Factory,
    text: "L’alimentation des équipements et les besoins énergétiques des environnements professionnels.",
  },
  {
    name: "Énergies renouvelables",
    icon: Sun,
    text: "Le lien entre production d’électricité et besoins de stockage, au cœur des projets énergétiques.",
  },
  {
    name: "Stockage d’énergie",
    icon: BatteryCharging,
    text: "Stocker l’énergie pour la rendre disponible lorsque les équipements en ont besoin.",
  },
];
export default function Home() {
  useEffect(() => {
    document.title = "VOLTIGEN ENERGY GROUPE — Batteries, énergie & innovation";
  }, []);
  return (
    <main>
      <section className="hero container">
        <div className="hero-copy">
          <div className="eyebrow hero-label">
            <span className="status-dot" /> BATTERIES · ÉNERGIE · INNOVATION
          </div>
          <h1>
            L’énergie de
            <br />
            demain.
            <br />
            <span className="yellow">
              Fabriquée
              <br />
              aujourd’hui.
            </span>
          </h1>
          <p>
            VOLTIGEN ENERGY GROUPE, spécialisée dans la fabrication de batteries électriques et
            d’accumulateurs.
            <br />
            <span>Votre projet commence avec la bonne énergie.</span>
          </p>
          <div className="hero-actions">
            <Link href="/contact?mode=rdv" className="button">
              Parlons de votre projet <ArrowUpRight size={17} />
            </Link>
            <a href="#activite" className="button secondary">
              Notre activité <ArrowDown size={15} />
            </a>
          </div>
          <div className="hero-footnote">
            <span className="line" /> POUR UN AVENIR DURABLE
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-top">
            <span className="status-dot" />
            <span>VOLTIGEN / ENERGY SYSTEMS</span>
            <span className="visual-code">01</span>
          </div>
          <img
            src="/images/voltigen-energy.jpg"
            alt="Illustration de stockage d’énergie et de batteries sans marque"
          />
          <div className="visual-overlay">
            <span className="eyebrow yellow">L’ÉNERGIE, EN MOUVEMENT.</span>
            <div className="visual-rule" />
            <div className="visual-bottom">
              <span>
                BATTERIES &<br />
                ACCUMULATEURS
              </span>
              <Zap size={24} />
            </div>
          </div>
          <div className="visual-caption">
            <span>VISUEL DE MARQUE</span>
            <span>
              ÉNERGIE / INNOVATION <ArrowUpRight size={12} />
            </span>
          </div>
        </div>
      </section>
      <div className="domain-strip container">
        {domains.map((d) => (
          <a key={d.name} href="#applications">
            <d.icon size={20} />
            <span>{d.name}</span>
            <ArrowUpRight size={14} />
          </a>
        ))}
      </div>
      <WelcomeOverview />
      <section id="activite" className="section container">
        <SectionTitle
          number="01"
          title="Notre activité"
          description="La fabrication au cœur de notre identité."
        />
        <div className="activity-grid">
          <div className="activity-statement">
            <span className="eyebrow">NOTRE MÉTIER</span>
            <h3>
              Donner forme
              <br />à <span className="yellow">l’énergie.</span>
            </h3>
            <p>
              Nous sommes spécialisés dans la fabrication de batteries électriques d’accumulateurs.
              Une activité au croisement de l’énergie, de l’industrie et de l’innovation.
            </p>
            <a href="/contact" className="text-link">
              Échangeons sur votre besoin <ArrowUpRight size={17} />
            </a>
            <Link href="/a-propos" className="text-link about-home-link">
              Découvrir notre approche <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="principles">
            <div>
              <BatteryCharging />
              <span className="mono">01</span>
              <h3>Batteries & accumulateurs</h3>
              <p>
                Des dispositifs électrochimiques pour stocker et restituer l’énergie électrique.
              </p>
            </div>
            <div>
              <Layers />
              <span className="mono">02</span>
              <h3>Une approche par l’usage</h3>
              <p>
                Partir de vos équipements et de leurs contraintes pour préparer un échange technique
                utile.
              </p>
            </div>
            <div>
              <ShieldCheck />
              <span className="mono">03</span>
              <h3>Un projet bien défini</h3>
              <p>
                Usage, environnement, installation : chaque besoin mérite un cahier des charges
                clair.
              </p>
            </div>
            <div>
              <Leaf />
              <span className="mono">04</span>
              <h3>Une vision durable</h3>
              <p>
                Penser l’énergie dans son ensemble, de son utilisation jusqu’à la fin de vie des
                batteries.
              </p>
            </div>
          </div>
        </div>
        <ActivityOverview />
      </section>
      <section id="applications" className="section alt-section">
        <div className="container">
          <SectionTitle
            number="02"
            title="Domaines d’application"
            description="Quatre univers énergétiques pour ouvrir la discussion."
          />
          <div className="applications-grid">
            {domains.map((d, i) => (
              <div className="application" key={d.name}>
                <div className="application-top">
                  <d.icon size={28} />
                  <span className="mono muted">0{i + 1}</span>
                </div>
                <h3>{d.name}</h3>
                <p>{d.text}</p>
                <Link href={`/contact?subject=${encodeURIComponent(d.name)}`} className="text-link">
                  Discuter d’un besoin <ArrowUpRight size={16} />
                </Link>
              </div>
            ))}
          </div>
          <p className="editorial-note">
            Domaines évoqués dans notre visuel de marque. Les gammes et leurs caractéristiques
            seront précisées après validation.
          </p>
        </div>
      </section>
      <section id="realisations" className="section container">
        <SectionTitle
          number="03"
          title="Nos réalisations"
          description="Des projets à découvrir, des échanges à construire."
        />
        <div className="portfolio">
          <div className="portfolio-mark">
            <Factory size={38} />
            <span className="eyebrow">PROJETS / À VENIR</span>
          </div>
          <div>
            <h3>Notre portfolio se prépare.</h3>
            <p>
              Nos réalisations seront présentées prochainement.
              <br />
              En attendant, parlons de votre projet et de ses besoins énergétiques.
            </p>
          </div>
          <Link href="/contact" className="circle-link" aria-label="Nous contacter pour un projet">
            <ArrowUpRight />
          </Link>
        </div>
        <div className="brand-panorama">
          <img
            src="/images/voltigen-banner.jpeg"
            alt="Bannière VOLTIGEN ENERGY GROUPE fournie pour le site : batteries et énergies renouvelables"
            loading="lazy"
          />
          <span>VISUEL DE MARQUE FOURNI — CARACTÉRISTIQUES À CONFIRMER</span>
        </div>
      </section>
      <section id="articles" className="section alt-section">
        <div className="container">
          <SectionTitle
            number="04"
            title="Regards sur l’énergie"
            description="Comprendre les fondamentaux. Préparer les bonnes questions."
          />
          <div className="articles-grid">
            {articles.map((a, i) => (
              <Link href={`/articles/${a.slug}`} className="article-card" key={a.slug}>
                <div className={`article-art art-${i}`} aria-hidden="true">
                  {a.icon === "factory" ? (
                    <Factory size={94} strokeWidth={1} />
                  ) : a.icon === "battery" ? (
                    <BatteryCharging size={94} strokeWidth={1} />
                  ) : (
                    <Sun size={100} strokeWidth={1} />
                  )}
                  <span>ÉNERGIE / {a.category}</span>
                </div>
                <div className="article-content">
                  <div className="eyebrow yellow">
                    {a.category}
                    <span className="muted">{a.time} de lecture</span>
                  </div>
                  <h3>{a.title}</h3>
                  <p>{a.excerpt}</p>
                  <span className="text-link">
                    Lire l’article <ArrowUpRight size={17} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <p className="editorial-note">
            Contenus pédagogiques de présentation, à valider avant publication.
          </p>
        </div>
      </section>
      <Testimonials />
      <section className="cta container">
        <span className="eyebrow yellow">UNE IDÉE. UN BESOIN. UN PROJET.</span>
        <h2>
          La suite commence
          <br />
          avec <span className="yellow">votre énergie.</span>
        </h2>
        <p>
          Présentez-nous votre besoin.
          <br />
          Construisons le point de départ de votre projet.
        </p>
        <Link href="/contact?mode=rdv" className="button">
          Demander un rendez-vous <MoveRight size={18} />
        </Link>
        <span className="cta-note">UNE DEMANDE D’ÉCHANGE, SANS RÉSERVATION AUTOMATIQUE.</span>
      </section>
    </main>
  );
}
