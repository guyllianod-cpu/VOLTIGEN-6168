import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { about } from "../lib/company";
import { WhatsAppLink } from "../components/whatsapp-link";

export default function About() {
  useEffect(() => {
    document.title = "À propos — VOLTIGEN ENERGY GROUPE";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="container inner-page about-page">
      <Link href="/" className="text-link muted">
        <ArrowLeft size={16} /> Retour à l’accueil
      </Link>
      <header className="about-heading">
        <span className="eyebrow yellow">À PROPOS / VOLTIGEN ENERGY GROUPE</span>
        <h1>{about.title}</h1>
      </header>
      <div className="about-layout">
        <figure className="about-material">
          <img
            src="/images/graphene-oxide.png"
            alt="Poudre noire présentée comme de l’oxyde de graphène"
            width={762}
            height={1024}
          />
          <figcaption>
            <span className="eyebrow yellow">LES MATÉRIAUX AU CŒUR DE L’INNOVATION</span>Oxyde de
            graphène — visuel fourni par VOLTIGEN ENERGY GROUPE
          </figcaption>
        </figure>
        <div className="about-copy">
          <span className="eyebrow yellow">NOTRE APPROCHE</span>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="about-actions">
            <WhatsAppLink className="button" />
            <Link href="/contact" className="button secondary">
              Présenter mon projet <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
