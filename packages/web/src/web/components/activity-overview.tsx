import { BatteryCharging, Globe2, Zap } from "lucide-react";

const activityAreas = [
  {
    name: "VOLTIGEN BATTERIES",
    description: "Solutions de batteries pour applications automobiles et industrielles.",
  },
  {
    name: "VOLTIGEN ENERGY STORAGE",
    description: "Solutions de stockage destinées à accompagner les besoins énergétiques modernes.",
  },
  {
    name: "VOLTIGEN POWER SYSTEMS",
    description:
      "Technologies et systèmes liés à la gestion et à l’utilisation de l’énergie électrique.",
  },
  {
    name: "VOLTIGEN ENGINEERING",
    description: "Conception, développement et ingénierie de solutions énergétiques.",
  },
  {
    name: "VOLTIGEN R&D",
    description:
      "Recherche et développement autour des matériaux et technologies de batteries de nouvelle génération.",
  },
];

export function ActivityOverview() {
  return (
    <div className="activity-overview">
      <div className="activity-overview-intro">
        <div>
          <span className="eyebrow">VOLTIGEN ENERGY GROUPE</span>
          <h3>Powering the Energy of Tomorrow</h3>
        </div>
        <div className="activity-overview-prose">
          <p>
            VOLTIGEN ENERGY GROUPE est un groupe dédié au développement de solutions innovantes dans
            les domaines des batteries, du stockage d’énergie, de l’ingénierie électrique et des
            technologies énergétiques.
          </p>
          <p>
            Notre approche repose sur la recherche et l’intégration de matériaux avancés, notamment
            l’oxyde de graphène, dans le développement de nouvelles générations de technologies de
            batteries.
          </p>
        </div>
      </div>

      <div className="activity-overview-topic">
        <div className="activity-overview-label">
          <BatteryCharging aria-hidden="true" size={24} />
          <h3>Notre technologie</h3>
        </div>
        <div className="activity-overview-prose">
          <p>
            L’oxyde de graphène constitue l’un des axes technologiques étudiés par VOLTIGEN ENERGY
            GROUPE. Ses propriétés particulières en font un matériau d’intérêt pour la recherche sur
            les électrodes, les interfaces et les architectures de batteries.
          </p>
          <p>
            Notre objectif est de transformer ces avancées scientifiques en solutions énergétiques
            concrètes, adaptées aux besoins de l’automobile, de l’industrie, du stockage
            stationnaire et des énergies renouvelables.
          </p>
        </div>
      </div>

      <div className="activity-overview-areas">
        <div className="activity-overview-label">
          <Zap aria-hidden="true" size={24} />
          <h3>Nos domaines d’activité</h3>
        </div>
        <div className="activity-areas-grid">
          {activityAreas.map((area, index) => (
            <div className="activity-area" key={area.name}>
              <span className="mono">0{index + 1}</span>
              <h4>{area.name}</h4>
              <p>{area.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="activity-overview-topic activity-overview-vision">
        <div className="activity-overview-label">
          <Globe2 aria-hidden="true" size={24} />
          <h3>Notre vision</h3>
        </div>
        <div className="activity-overview-prose">
          <p>
            Nous voulons contribuer à construire un avenir énergétique plus innovant, efficace et
            durable, en rapprochant la recherche sur les matériaux avancés des applications
            industrielles réelles.
          </p>
          <p className="activity-overview-signature">
            <strong>VOLTIGEN ENERGY GROUPE</strong>
            <br />
            L’énergie de demain, aujourd’hui.
          </p>
        </div>
      </div>
    </div>
  );
}
