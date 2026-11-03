import { useState } from "react";
import { Link } from "wouter";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { WhatsAppLink } from "./whatsapp-link";
import { company } from "../lib/company";

export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="VOLTIGEN ENERGY GROUPE — Accueil">
      <img src="/images/voltigen-logo-web.png" alt="VOLTIGEN ENERGY GROUPE" />
    </Link>
  );
}
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header-inner">
        <Brand />
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          className={open ? "navigation is-open" : "navigation"}
          aria-label="Navigation principale"
        >
          <Link
            href="/"
            onClick={() => {
              setOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Accueil
          </Link>
          <a href="/#activite" onClick={() => setOpen(false)}>
            Notre activité
          </a>
          <Link href="/a-propos" onClick={() => setOpen(false)}>
            À propos
          </Link>
          <a href="/#applications" onClick={() => setOpen(false)}>
            Applications
          </a>
          <a href="/#realisations" onClick={() => setOpen(false)}>
            Réalisations
          </a>
          <a href="/#articles" onClick={() => setOpen(false)}>
            Articles
          </a>
          <Link href="/contact" className="button small" onClick={() => setOpen(false)}>
            Parlons de votre projet <ArrowUpRight size={14} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div>
            <Brand />
            <p>
              Batteries · Énergie · Innovation
              <br />
              Pour un avenir durable.
            </p>
          </div>
          <div>
            <span className="eyebrow">Explorer</span>
            <a href="/#activite">Notre activité</a>
            <Link href="/a-propos">À propos</Link>
            <a href="/#applications">Domaines d’application</a>
            <a href="/#realisations">Réalisations</a>
            <a href="/#temoignages">Témoignages</a>
          </div>
          <div>
            <span className="eyebrow">Échanger</span>
            <Link href="/contact">Nous contacter</Link>
            <Link href="/contact?mode=rdv">Demander un rendez-vous</Link>
            <a href="/#articles">Nos articles</a>
            <WhatsAppLink
              className="footer-whatsapp"
              label={`WhatsApp : ${company.whatsappDisplay}`}
            />
            <address className="company-address footer-address">{company.address}</address>
          </div>
          <div className="footer-note">
            <span className="status-dot" /> L’énergie commence
            <br />
            par une conversation.
            <Link href="/contact" className="text-link">
              Démarrer un échange <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2016–{new Date().getFullYear()} VOLTIGEN ENERGY GROUPE</span>
          <div>
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/confidentialite">Confidentialité</Link>
          </div>
          <span className="mono">FABRICATION DE BATTERIES & ACCUMULATEURS</span>
        </div>
      </div>
    </footer>
  );
}
export function SectionTitle({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow yellow">{number} / VOLTIGEN ENERGY GROUPE</span>
        <h2>
          <span className="bracket">[</span> {title} <span className="bracket">]</span>
        </h2>
        <p>{description}</p>
      </div>
      <span className="section-index">{number} ———</span>
    </div>
  );
}
