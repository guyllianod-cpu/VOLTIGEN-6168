import { MessageCircle, ArrowUpRight } from "lucide-react";
import { company } from "../lib/company";

export function WhatsAppLink({
  className = "text-link",
  label = "Échanger sur WhatsApp",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={company.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={`${label} — ${company.whatsappDisplay} (nouvel onglet)`}
    >
      <MessageCircle size={18} aria-hidden="true" />
      <span>{label}</span>
      <ArrowUpRight size={15} aria-hidden="true" />
    </a>
  );
}

export function WhatsAppFloating() {
  return <WhatsAppLink className="whatsapp-floating" label="WhatsApp" />;
}
