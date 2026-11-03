import { BatteryCharging, Globe2, Leaf, Zap } from "lucide-react";

const groupStructure = [
  ["VOLTIGEN BATTERIES", "batteries automobiles et industrielles"],
  ["VOLTIGEN ENERGY STORAGE", "stockage d’énergie"],
  ["VOLTIGEN POWER SYSTEMS", "solutions électriques"],
  ["VOLTIGEN R&D", "recherche et développement"],
  ["VOLTIGEN ENGINEERING", "ingénierie et conception"],
];

export function WelcomeOverview() {
  return (
    <section
      id="accueil"
      className="welcome-section section container"
      aria-labelledby="welcome-title"
    >
      <div className="welcome-heading">
        <span className="eyebrow">ACCUEIL / PRÉSENTATION</span>
        <h2 id="welcome-title">
          <Zap aria-hidden="true" size={27} /> VOLTIGEN ENERGY GROUPE
        </h2>
        <p className="welcome-sector">
          <strong>Secteur :</strong> Batteries • Énergie • Ingénierie • Innovation
        </p>
      </div>

      <div className="welcome-positioning">
        <h3>Positionnement :</h3>
        <p>
          VOLTIGEN ENERGY GROUPE est un groupe spécialisé dans le développement de solutions
          énergétiques et de technologies de stockage de nouvelle génération. Son activité s’appuie
          sur la recherche, l’ingénierie et l’utilisation de matériaux avancés, notamment l’oxyde de
          graphène, dans la conception de technologies de batteries.
        </p>
      </div>

      <div className="welcome-panels">
        <div className="welcome-panel welcome-structure">
          <div className="welcome-panel-heading">
            <BatteryCharging aria-hidden="true" size={24} />
            <h3>Structure du groupe</h3>
          </div>
          <p className="eyebrow">VOLTIGEN ENERGY GROUPE</p>
          <ul>
            {groupStructure.map(([name, description]) => (
              <li key={name}>
                <strong>{name}</strong> — {description}
              </li>
            ))}
          </ul>
        </div>
        <div className="welcome-panel welcome-technology">
          <div className="welcome-panel-heading">
            <Leaf aria-hidden="true" size={24} />
            <h3>Technologie</h3>
          </div>
          <p className="welcome-material">Matériau clé : l’oxyde de graphène</p>
          <p>
            L’intégration de matériaux avancés comme l’oxyde de graphène constitue un axe de
            recherche et de développement de VOLTIGEN, avec pour objectif de concevoir des solutions
            de batteries adaptées aux besoins de la mobilité, de l’industrie et du stockage
            énergétique.
          </p>
        </div>
      </div>

      <div className="welcome-signature">
        <div className="welcome-panel-heading">
          <Globe2 aria-hidden="true" size={24} />
          <h3>Signature de marque</h3>
        </div>
        <div className="welcome-signature-pair">
          <p>
            <strong>VOLTIGEN ENERGY GROUPE</strong>
            <span>Powering the Energy of Tomorrow</span>
          </p>
          <div>
            <span className="eyebrow">Ou en français :</span>
            <p>
              <strong>VOLTIGEN ENERGY GROUPE</strong>
              <span>L’énergie de demain, aujourd’hui.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
