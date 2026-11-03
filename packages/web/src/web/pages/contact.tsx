import { useEffect, useState } from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  LoaderCircle,
  CalendarDays,
  MessageSquare,
  Mail,
  MapPin,
} from "lucide-react";
import { useAppointmentRequest, useContactRequest } from "../queries/requests";
import { WhatsAppLink } from "../components/whatsapp-link";
import { company } from "../lib/company";

export default function Contact() {
  const params = new URLSearchParams(window.location.search);
  const [mode, setMode] = useState(params.get("mode") === "rdv" ? "rdv" : "contact");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const contact = useContactRequest();
  const appointment = useAppointmentRequest();
  const pending = contact.isPending || appointment.isPending;
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().slice(0, 10);
  useEffect(() => {
    document.title = "Contact & rendez-vous — VOLTIGEN ENERGY GROUPE";
    window.scrollTo(0, 0);
  }, []);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const data = new FormData(e.currentTarget);
    const common = {
      name: String(data.get("name")),
      email: String(data.get("email")),
      company: String(data.get("company")),
      subject: String(data.get("subject")),
      message: String(data.get("message")),
      consent: true as const,
      website: String(data.get("website")),
    };
    try {
      const result =
        mode === "rdv"
          ? await appointment.mutateAsync({
              ...common,
              requestedDate: String(data.get("date")),
              requestedTime: String(data.get("time")),
              timezone,
            })
          : await contact.mutateAsync(common);
      setSuccess(result.reference);
    } catch (err) {
      setError(
        err instanceof Error && err.message.includes("dix minutes")
          ? err.message
          : "La demande n’a pas pu être enregistrée. Vérifiez les informations et réessayez.",
      );
    }
  }
  return (
    <main className="container inner-page">
      <Link href="/" className="text-link muted">
        <ArrowLeft size={16} /> Retour à l’accueil
      </Link>
      <div className="contact-layout">
        <div className="contact-intro">
          <span className="eyebrow yellow">PARLONS ÉNERGIE</span>
          <h1>
            Votre projet.
            <br />
            <span className="yellow">
              Notre prochain
              <br />
              échange.
            </span>
          </h1>
          <p>
            Décrivez votre besoin et les contraintes de votre équipement. Vous pouvez aussi proposer
            une date pour un premier échange.
          </p>
          <div className="contact-info">
            <MessageSquare size={22} />
            <div>
              <h3>Nous contacter sur WhatsApp</h3>
              <p className="whatsapp-number">{company.whatsappDisplay}</p>
              <WhatsAppLink className="button contact-whatsapp" />
              <p>
                Ouvre une conversation sur WhatsApp. Aucun message n’est envoyé automatiquement.
              </p>
            </div>
          </div>
          <div className="contact-info">
            <Mail size={22} />
            <div>
              <h3>Nous contacter par e-mail</h3>
              <a href={`mailto:${company.email}`} className="text-link contact-email">
                {company.email}
              </a>
              <p>Ouvre votre application de messagerie pour nous écrire directement.</p>
            </div>
          </div>
          <div className="contact-info">
            <CalendarDays size={22} />
            <div>
              <h3>Un rendez-vous à confirmer</h3>
              <p>
                La date et l’heure sont des préférences. Votre demande ne constitue pas une
                réservation.
              </p>
            </div>
          </div>
          <div className="draft-notice">
            <div className="contact-info address-info">
              <MapPin size={22} />
              <div>
                <h3>Adresse</h3>
                <address className="company-address">{company.address}</address>
              </div>
            </div>
          </div>
          <div className="draft-notice">
            <span className="eyebrow">VERSION DE PRÉSENTATION</span>
            <p>
              Les demandes sont enregistrées dans la base du site. Aucune notification e-mail n’est
              configurée. Vous pouvez nous contacter directement par e-mail ou sur WhatsApp. Le
              traitement des formulaires et les autres coordonnées de l’entreprise restent à
              finaliser avant l’ouverture publique.
            </p>
          </div>
        </div>
        <div className="form-panel">
          {success ? (
            <div className="success-state" aria-live="polite">
              <CheckCircle2 size={42} />
              <h2>Demande enregistrée.</h2>
              <p>
                {mode === "rdv"
                  ? "Votre préférence de rendez-vous a été sauvegardée. Elle reste à confirmer par l’entreprise."
                  : "Votre message a été sauvegardé dans la base du site."}
              </p>
              <div className="reference">
                <span className="eyebrow">VOTRE RÉFÉRENCE</span>
                <code>{success}</code>
              </div>
              <p className="muted">Aucun e-mail n’a été envoyé.</p>
              <button className="button secondary" onClick={() => setSuccess("")}>
                Faire une autre demande
              </button>
            </div>
          ) : (
            <>
              <div className="form-tabs">
                <button
                  className={mode === "contact" ? "active" : ""}
                  onClick={() => {
                    setMode("contact");
                    setError("");
                  }}
                  disabled={pending}
                >
                  <MessageSquare size={16} /> Contact
                </button>
                <button
                  className={mode === "rdv" ? "active" : ""}
                  onClick={() => {
                    setMode("rdv");
                    setError("");
                  }}
                  disabled={pending}
                >
                  <CalendarDays size={16} /> Rendez-vous
                </button>
              </div>
              <h2>
                {mode === "rdv" ? "Proposons un premier échange." : "Présentez-nous votre besoin."}
              </h2>
              <form onSubmit={submit}>
                <div className="form-row">
                  <label>
                    Nom complet *
                    <input
                      name="name"
                      aria-label="Nom complet"
                      placeholder="Votre nom"
                      autoComplete="name"
                      required
                      minLength={2}
                      maxLength={120}
                    />
                  </label>
                  <label>
                    E-mail *
                    <input
                      name="email"
                      aria-label="E-mail"
                      placeholder="vous@entreprise.fr"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                    />
                  </label>
                </div>
                <label>
                  Entreprise
                  <input
                    name="company"
                    aria-label="Entreprise"
                    placeholder="Nom de votre entreprise (facultatif)"
                    autoComplete="organization"
                    maxLength={160}
                  />
                </label>
                <label>
                  Objet de votre demande *
                  <input
                    name="subject"
                    aria-label="Objet de votre demande"
                    defaultValue={params.get("subject") ?? ""}
                    placeholder="Votre besoin ou votre application"
                    required
                    minLength={2}
                    maxLength={160}
                  />
                </label>
                {mode === "rdv" && (
                  <>
                    <div className="form-row">
                      <label>
                        Date souhaitée *
                        <input
                          name="date"
                          aria-label="Date souhaitée"
                          type="date"
                          min={minDate}
                          required
                        />
                      </label>
                      <label>
                        Heure souhaitée *
                        <input name="time" aria-label="Heure souhaitée" type="time" required />
                      </label>
                    </div>
                    <p className="field-note">
                      Fuseau horaire : {timezone}. Date à partir de demain, sous réserve de
                      confirmation.
                    </p>
                  </>
                )}
                <label>
                  Votre message *
                  <textarea
                    name="message"
                    aria-label="Votre message"
                    placeholder="Équipement concerné, usage, contraintes, questions…"
                    required
                    minLength={10}
                    maxLength={5000}
                    rows={4}
                  />
                </label>
                <label className="honeypot" aria-hidden="true">
                  Site web
                  <input name="website" aria-label="Site web" tabIndex={-1} autoComplete="off" />
                </label>
                <label className="consent">
                  <input
                    name="consent"
                    aria-label="Consentement au traitement de la demande"
                    type="checkbox"
                    required
                  />
                  <span>
                    J’accepte que mes informations soient enregistrées pour le traitement de cette
                    demande.{" "}
                    <Link href="/confidentialite">
                      Consulter les informations de confidentialité.
                    </Link>
                  </span>
                </label>
                {error && (
                  <p role="alert" className="error-message">
                    {error}
                  </p>
                )}
                <button className="button submit-button" type="submit" disabled={pending}>
                  {pending ? (
                    <>
                      <LoaderCircle className="spinner" size={17} /> Enregistrement…
                    </>
                  ) : (
                    <>
                      Enregistrer ma demande <ArrowUpRight size={17} />
                    </>
                  )}
                </button>
                <p className="field-note">
                  * Champs obligatoires. Aucune confirmation automatique de rendez-vous.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
