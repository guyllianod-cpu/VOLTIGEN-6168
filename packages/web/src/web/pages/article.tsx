import { useEffect } from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { articles } from "../lib/content";
export default function Article() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);
  useEffect(() => {
    document.title = article
      ? `${article.title} — VOLTIGEN ENERGY GROUPE`
      : "Article introuvable — VOLTIGEN ENERGY GROUPE";
    window.scrollTo(0, 0);
  }, [article]);
  if (!article)
    return (
      <main className="container inner-page">
        <h1>Article introuvable.</h1>
        <Link href="/">Retour à l’accueil</Link>
      </main>
    );
  return (
    <main className="container inner-page article-page">
      <Link href="/#articles" className="text-link muted">
        <ArrowLeft size={16} /> Tous les articles
      </Link>
      <div className="article-heading">
        <span className="eyebrow yellow">
          {article.category} / {article.time} DE LECTURE
        </span>
        <h1>{article.title}</h1>
        <p>{article.excerpt}</p>
      </div>
      <div className="article-body">
        {article.applicationContent && (
          <div className="application-article-copy">
            {article.applicationContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ul className="application-article-list">
              {article.applicationContent.domains.map((domain) => (
                <li key={domain.label}>
                  <strong>{domain.label} :</strong> {domain.text}
                </li>
              ))}
            </ul>
            <p>{article.applicationContent.conclusion}</p>
          </div>
        )}
        {article.sections.map((s) => (
          <section key={s.title}>
            <h2>{s.title}</h2>
            <p>{s.text}</p>
          </section>
        ))}
        {article.source && (
          <div className="draft-notice">
            <p>
              Article pédagogique de présentation à valider avant publication. Il ne décrit pas une
              gamme VOLTIGEN ENERGY GROUPE et ne remplace pas un avis technique adapté à votre
              installation.
            </p>
            <a href={article.source} target="_blank" rel="noreferrer" className="text-link">
              Source : {article.sourceLabel} <ArrowUpRight size={16} />
            </a>
          </div>
        )}
        <Link href="/contact" className="button">
          Parlons de votre projet <ArrowUpRight size={16} />
        </Link>
      </div>
    </main>
  );
}
