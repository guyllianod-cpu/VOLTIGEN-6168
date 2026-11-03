import { SectionTitle } from "./layout";

const testimonials = [
  {
    name: "Sophie",
    profile: "Profil entrepreneur / énergie durable",
    role: "Entrepreneure dans les énergies renouvelables",
    image: "/images/testimonial-sophie.jpeg",
    quote:
      "Le stockage de l’énergie sera indispensable pour accompagner le développement des énergies renouvelables. La vision de VOLTIGEN ENERGY GROUPE, basée sur l’innovation et la recherche de solutions plus durables, va clairement dans la bonne direction.",
  },
  {
    name: "David",
    profile: "Profil professionnel de l’automobile",
    role: "Professionnel du secteur automobile",
    image: "/images/testimonial-david.jpeg",
    quote:
      "Les besoins en batteries évoluent rapidement dans l’automobile. J’apprécie la volonté de VOLTIGEN ENERGY GROUPE de travailler sur des solutions plus performantes et adaptées aux nouvelles générations de véhicules. Une initiative à suivre de près.",
  },
  {
    name: "Marc",
    profile: "Profil ingénieur / expert technique",
    role: "Ingénieur en systèmes énergétiques",
    image: "/images/testimonial-marc.jpeg",
    quote:
      "L’approche de VOLTIGEN ENERGY GROUPE autour des nouveaux matériaux est particulièrement intéressante. L’intégration de l’oxyde de graphène dans les technologies de batteries ouvre des pistes intéressantes pour améliorer les performances et la durabilité des systèmes de stockage.",
  },
];

export function Testimonials() {
  return (
    <section id="temoignages" className="section container">
      <SectionTitle
        number="05"
        title="Témoignages"
        description="Trois regards sur l’énergie et l’innovation."
      />
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <figure className="testimonial-card" key={testimonial.name}>
            <span className="eyebrow testimonial-profile">{testimonial.profile}</span>
            <blockquote>« {testimonial.quote} »</blockquote>
            <figcaption>
              <img
                src={testimonial.image}
                alt={`Portrait de ${testimonial.name}`}
                loading="lazy"
                width={80}
                height={96}
              />
              <div>
                <strong>{testimonial.name}</strong>
                <p>{testimonial.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
