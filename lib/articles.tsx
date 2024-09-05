interface Article {
  title: string;
  path : string;
  description: string;
  image: string;
  date_created: string;
  views: number;
  author: {
    name: string;
    email: string;
  };
  tags: string[];
  BodyComponent: React.FC;
  links: {
    doc: string;
    api: string;
  };
}

interface Articles {
  [key: string]: {
    [key: string]: Article;
  };
}

import MeltingOfIceCapsBody from '@/components/articles/MeltingOfIceCapsBody';
import LossOfBiodiversityBody from '@/components/articles/LossOfBiodiversityBody';

export const articles: Articles = {
  en: {
    "melting-of-ice-caps": {
      title: "Melting of Ice Caps",
      path: "/en/melting-of-ice-caps",
      description: "The effects and consequences of ice cap melting.",
      image: "https://images.unsplash.com/photo-1720719625643-999bfcc8228f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date_created: "1710384000", // Timestamp for July 13, 2024
      views: 10234,
      author: {
        name: "Alice Johnson",
        email: "alice.johnson@example.com"
      },
      tags: ["Climat", "Environnement", "Glaces", "Changements Climatiques"],
      BodyComponent: MeltingOfIceCapsBody,
      links: {
        doc: "https://example.com/en/melting-of-ice-caps-doc",
        api: "https://example.com/en/melting-of-ice-caps-api",
      },
    },
    "loss-of-biodiversity": {
      title: "Loss of Biodiversity",
      path: "/en/loss-of-biodiversity",
      description: "The global impact of biodiversity loss.",
      image: "https://images.unsplash.com/photo-1720440906281-b4367a242a86?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date_created: "1710384000", // Timestamp for July 13, 2024
      views: 10234,
      author: {
        name: "Alice Johnson",
        email: "alice.johnson@example.com"
      },
      tags: ["Climat", "Environnement", "Glaces","trigonometry", "Changements Climatiques"],
      BodyComponent: LossOfBiodiversityBody,
      links: {
        doc: "https://example.com/en/loss-of-biodiversity-doc",
        api: "https://example.com/en/loss-of-biodiversity-api",
      },
    },
    "world-hunger": {
      title: "World Hunger",
      path: "/en/world-hunger",
      description: "Global food security and climate change.",
      image: "https://images.unsplash.com/photo-1719742882445-8a22be4a2653?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date_created: "1710384000", // Timestamp for July 13, 2024
      views: 10234,
      author: {
        name: "Alice Johnson",
        email: "alice.johnson@example.com"
      },
      tags: ["Climat", "Environnement", "Glaces", "Changements Climatiques"],
      body: `
        <h1>World Hunger</h1>
        <h2>Global Food Security and Climate Change</h2>
        <p>Climate change exacerbates global hunger by impacting crop yields and food distribution networks.</p>
        <h2>Statistics on Global Hunger</h2>
        <p>Over 800 million people suffer from hunger worldwide, with climate change expected to increase this number.</p>
        <h2>Effects of Climate Change on Food Security</h2>
        <p>Extreme weather events and changing climate patterns disrupt agriculture, leading to food shortages and price increases.</p>
        <h2>Structural Causes of Global Food Insecurity</h2>
        <p>Poverty, conflict, and economic instability are key structural causes.</p>
        <h2>Initiatives to Enhance Food Security</h2>
        <p>Initiatives include sustainable agriculture practices, improving food distribution systems, and international cooperation.</p>
      `,
      links: {
        doc: "https://example.com/en/world-hunger-doc",
        api: "https://example.com/en/world-hunger-api",
      },
    },
    "climate-types": {
      title: "Climate Types",
      description: "Classification and adaptation to climate change.",
      image: "https://images.unsplash.com/photo-1720719625643-999bfcc8228f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date_created: "1710384000", // Timestamp for July 13, 2024
      views: 10234,
      author: {
        name: "Alice Johnson",
        email: "alice.johnson@example.com"
      },
      tags: ["Climat", "Environnement", "Glaces", "Changements Climatiques"],
      body: `
        <h1>Climate Types</h1>
        <h2>Characteristics of Different Climate Types</h2>
        <p>Climate types range from tropical to polar, each with distinct weather patterns and ecological characteristics.</p>
        <h2>Impact of Climate Change on Climate Types</h2>
        <p>Climate change is shifting climate zones, leading to altered weather patterns and ecosystem dynamics.</p>
        <h2>Adaptations Required for New Climate Conditions</h2>
        <p>Adaptation strategies include developing resilient infrastructure, sustainable water management, and conservation efforts.</p>
      `,
      links: {
        doc: "https://example.com/en/climate-types-doc",
        api: "https://example.com/en/climate-types-api",
      },
    },
    "co2-emissions": {
      title: "CO₂ Emissions",
      description: "Emergence of new actors in CO₂ emissions.",
      image: "https://images.unsplash.com/photo-1720719625643-999bfcc8228f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date_created: "1710384000", // Timestamp for July 13, 2024
      views: 10234,
      author: {
        name: "Alice Johnson",
        email: "alice.johnson@example.com"
      },
      tags: ["Climat", "Environnement", "Glaces", "Changements Climatiques"],
      body: `
        <h1>CO₂ Emissions</h1>
        <h2>Global Trends in CO₂ Emissions</h2>
        <p>CO₂ emissions have increased significantly, driven by industrialization and fossil fuel use.</p>
        <h2>Impact of Emerging Economies</h2>
        <p>Emerging economies contribute to rising emissions as they develop industrial and energy sectors.</p>
        <h2>Key Sectors and Emerging Trends</h2>
        <p>Transport, energy, and agriculture are major emission sources. Trends include shifts towards renewable energy and electric vehicles.</p>
        <h2>Strategies to Reduce Emissions</h2>
        <p>Strategies include carbon pricing, energy efficiency improvements, and transitioning to renewable energy sources.</p>
      `,
      links: {
        doc: "https://example.com/en/co2-emissions-doc",
        api: "https://example.com/en/co2-emissions-api",
      },
    },
    "drought-in-africa": {
      title: "Drought in Africa",
      description: "Droughts and climate resilience in Africa.",
      image: "https://images.unsplash.com/photo-1720719625643-999bfcc8228f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date_created: "1710384000", // Timestamp for July 13, 2024
      views: 10234,
      author: {
        name: "Alice Johnson",
        email: "alice.johnson@example.com"
      },
      tags: ["Climat", "Environnement", "Glaces", "Changements Climatiques"],
      body: `
        <h1>Drought in Africa</h1>
        <h2>Prevalence of Droughts</h2>
        <p>Africa experiences frequent and severe droughts, impacting agriculture and water supply.</p>
        <h2>Social, Economic, and Environmental Consequences</h2>
        <p>Droughts lead to food shortages, economic losses, and displacement. Environmental impacts include soil degradation and loss of biodiversity.</p>
        <h2>Climate Factors Contributing to Droughts</h2>
        <p>Climate change, deforestation, and unsustainable land use practices exacerbate drought conditions.</p>
        <h2>Measures to Enhance Resilience</h2>
        <p>Resilience measures include drought-resistant crops, efficient water management, and community-based adaptation strategies.</p>
      `,
      links: {
        doc: "https://example.com/en/drought-in-africa-doc",
        api: "https://example.com/en/drought-in-africa-api",
      },
    },
  },
  fr: {
    "fonte-des-glaces": {
      title: "Fonte des Glaces",
      description: "Les effets et conséquences de la fonte des glaces.",
      image: "https://images.unsplash.com/photo-1720719625643-999bfcc8228f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date_created: "1710384000", // Timestamp for July 13, 2024
      views: 10234,
      author: {
        name: "Alice Johnson",
        email: "alice.johnson@example.com"
      },
      tags: ["Climat", "Environnement", "Glaces", "Changements Climatiques"],
      body: `
        <h1>Fonte des Glaces</h1>
        <h2>Données sur la Fonte des Glaces</h2>
        <p>La fonte des glaces s'est accélérée au cours des dernières décennies. Les statistiques actuelles montrent une réduction significative du volume de glace, contribuant à l'élévation du niveau de la mer et perturbant les écosystèmes marins.</p>
        <h2>Conséquences de la Fonte des Glaces</h2>
        <p>Les impacts environnementaux incluent la perte d'habitat pour les espèces polaires et l'érosion côtière accrue. Les populations vivant dans les zones basses sont exposées à des risques accrus d'inondations et de déplacements.</p>
        <h2>Facteurs Contribuant à la Fonte des Glaces</h2>
        <p>Le changement climatique, dû à l'augmentation des émissions de gaz à effet de serre, est le principal facteur. Les activités humaines telles que la déforestation et la pollution jouent également un rôle.</p>
        <h2>Stratégies pour Atténuer la Fonte des Glaces</h2>
        <p>Les stratégies d'atténuation incluent la réduction des émissions de carbone, l'adoption accrue des énergies renouvelables et la protection des puits de carbone naturels comme les forêts.</p>
      `,
      links: {
        doc: "https://example.com/fr/fonte-des-glaces-doc",
        api: "https://example.com/fr/fonte-des-glaces-api",
      },
    },
    "perte-de-biodiversite": {
      title: "Perte de Biodiversité",
      description: "L'impact mondial de la perte de biodiversité.",
      image: "https://images.unsplash.com/photo-1720719625643-999bfcc8228f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date_created: "1710384000", // Timestamp for July 13, 2024
      views: 10234,
      author: {
        name: "Alice Johnson",
        email: "alice.johnson@example.com"
      },
      tags: ["Climat", "Environnement", "Glaces", "Changements Climatiques"],
      body: `
        <h1>Perte de Biodiversité</h1>
        <h2>Impact Mondial de la Perte de Biodiversité</h2>
        <p>La perte de biodiversité affecte les écosystèmes et le bien-être humain. Les taux d'extinction des espèces sont désormais des centaines de fois supérieurs aux taux naturels.</p>
        <h2>Données sur la Perte de Biodiversité</h2>
        <p>Les données montrent des déclins drastiques des populations de la faune, avec des impacts significatifs sur les services écosystémiques tels que la pollinisation et la purification de l'eau.</p>
        <h2>Conséquences Écologiques et Économiques</h2>
        <p>Les impacts écologiques incluent le déséquilibre des écosystèmes et la perte d'espèces. Économiquement, la perte de biodiversité affecte l'agriculture, la pêche et le tourisme.</p>
        <h2>Facteurs Contribuant à la Perte de Biodiversité</h2>
        <p>La destruction des habitats, le changement climatique, la pollution et la surexploitation sont des contributeurs majeurs.</p>
        <h2>Solutions pour la Conservation de la Biodiversité</h2>
        <p>Les stratégies de conservation incluent les aires protégées, la gestion durable des ressources et les projets de restauration.</p>
      `,
      links: {
        doc: "https://example.com/fr/perte-de-biodiversite-doc",
        api: "https://example.com/fr/perte-de-biodiversite-api",
      },
    },
    "faim-dans-le-monde": {
      title: "Faim dans le Monde",
      description: "Sécurité alimentaire mondiale et changement climatique.",
      image: "https://images.unsplash.com/photo-1720719625643-999bfcc8228f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date_created: "1710384000", // Timestamp for July 13, 2024
      views: 10234,
      author: {
        name: "Alice Johnson",
        email: "alice.johnson@example.com"
      },
      tags: ["Climat", "Environnement", "Glaces", "Changements Climatiques"],
      body: `
        <h1>Faim dans le Monde</h1>
        <h2>Sécurité Alimentaire Mondiale et Changement Climatique</h2>
        <p>Le changement climatique exacerbe la faim mondiale en impactant les rendements agricoles et les réseaux de distribution alimentaire.</p>
        <h2>Statistiques sur la Faim Mondiale</h2>
        <p>Plus de 800 millions de personnes souffrent de la faim dans le monde, et le changement climatique devrait augmenter ce nombre.</p>
        <h2>Effets du Changement Climatique sur la Sécurité Alimentaire</h2>
        <p>Les événements météorologiques extrêmes et les changements des patterns climatiques perturbent l'agriculture, conduisant à des pénuries alimentaires et à des augmentations de prix.</p>
        <h2>Causes Structurelles de l'Insécurité Alimentaire Mondiale</h2>
        <p>La pauvreté, les conflits et l'instabilité économique sont des causes structurelles clés.</p>
        <h2>Initiatives pour Améliorer la Sécurité Alimentaire</h2>
        <p>Les initiatives incluent des pratiques agricoles durables, l'amélioration des systèmes de distribution alimentaire et la coopération internationale.</p>
      `,
      links: {
        doc: "https://example.com/fr/faim-dans-le-monde-doc",
        api: "https://example.com/fr/faim-dans-le-monde-api",
      },
    },
    "types-de-climat": {
      title: "Types de Climat",
      description: "Classification et adaptation au changement climatique.",
      image: "https://images.unsplash.com/photo-1720719625643-999bfcc8228f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date_created: "1710384000", // Timestamp for July 13, 2024
      views: 10234,
      author: {
        name: "Alice Johnson",
        email: "alice.johnson@example.com"
      },
      tags: ["Climat", "Environnement", "Glaces", "Changements Climatiques"],
      body: `
        <h1>Types de Climat</h1>
        <h2>Caractéristiques des Différents Types de Climat</h2>
        <p>Les types de climat vont du tropical au polaire, chacun ayant des patterns météorologiques et des caractéristiques écologiques distincts.</p>
        <h2>Impact du Changement Climatique sur les Types de Climat</h2>
        <p>Le changement climatique déplace les zones climatiques, entraînant des modifications des patterns météorologiques et de la dynamique des écosystèmes.</p>
        <h2>Adaptations Nécessaires aux Nouvelles Conditions Climatiques</h2>
        <p>Les stratégies d'adaptation incluent le développement d'infrastructures résilientes, la gestion durable de l'eau et les efforts de conservation.</p>
      `,
      links: {
        doc: "https://example.com/fr/types-de-climat-doc",
        api: "https://example.com/fr/types-de-climat-api",
      },
    },
    "emissions-de-co2": {
      title: "Émissions de CO₂",
      description: "Émergence de nouveaux acteurs dans les émissions de CO₂.",
      image: "https://images.unsplash.com/photo-1720719625643-999bfcc8228f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date_created: "1710384000", // Timestamp for July 13, 2024
      views: 10234,
      author: {
        name: "Alice Johnson",
        email: "alice.johnson@example.com"
      },
      tags: ["Climat", "Environnement", "Glaces", "Changements Climatiques"],
      body: `
        <h1>Émissions de CO₂</h1>
        <h2>Tendances Globales des Émissions de CO₂</h2>
        <p>Les émissions de CO₂ ont considérablement augmenté, en raison de l'industrialisation et de l'utilisation des combustibles fossiles.</p>
        <h2>Impact des Économies Émergentes</h2>
        <p>Les économies émergentes contribuent à l'augmentation des émissions à mesure qu'elles développent leurs secteurs industriel et énergétique.</p>
        <h2>Secteurs Clés et Tendances Émergentes</h2>
        <p>Le transport, l'énergie et l'agriculture sont les principales sources d'émissions. Les tendances incluent des transitions vers les énergies renouvelables et les véhicules électriques.</p>
        <h2>Stratégies pour Réduire les Émissions</h2>
        <p>Les stratégies incluent la tarification du carbone, l'amélioration de l'efficacité énergétique et la transition vers les sources d'énergie renouvelables.</p>
      `,
      links: {
        doc: "https://example.com/fr/emissions-de-co2-doc",
        api: "https://example.com/fr/emissions-de-co2-api",
      },
    },
    "secheresse-en-afrique": {
      title: "Sécheresse en Afrique",
      description: "Sécheresses et résilience climatique en Afrique.",
      image: "https://images.unsplash.com/photo-1720719625643-999bfcc8228f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date_created: "1710384000", // Timestamp for July 13, 2024
      views: 10234,
      author: {
        name: "Alice Johnson",
        email: "alice.johnson@example.com"
      },
      tags: ["Climat", "Environnement", "Glaces", "Changements Climatiques"],
      body: `
        <h1>Sécheresse en Afrique</h1>
        <h2>Prévalence des Sécheresses</h2>
        <p>L'Afrique connaît des sécheresses fréquentes et sévères, impactant l'agriculture et l'approvisionnement en eau.</p>
        <h2>Conséquences Sociales, Économiques et Environnementales</h2>
        <p>Les sécheresses entraînent des pénuries alimentaires, des pertes économiques et des déplacements. Les impacts environnementaux incluent la dégradation des sols et la perte de biodiversité.</p>
        <h2>Facteurs Climatiques Contribuant aux Sécheresses</h2>
        <p>Le changement climatique, la déforestation et les pratiques d'utilisation des terres non durables exacerbent les conditions de sécheresse.</p>
        <h2>Mesures pour Améliorer la Résilience</h2>
        <p>Les mesures de résilience incluent les cultures résistantes à la sécheresse, la gestion efficace de l'eau et les stratégies d'adaptation communautaires.</p>
      `,
      links: {
        doc: "https://example.com/fr/secheresse-en-afrique-doc",
        api: "https://example.com/fr/secheresse-en-afrique-api",
      },
    },
  },
  es: {
    "derretimiento-de-caps-de-hielo": {
      title: "Derretimiento de Capas de Hielo",
      description: "Los efectos y consecuencias del derretimiento de las capas de hielo.",
      image: "https://images.unsplash.com/photo-1720719625643-999bfcc8228f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date_created: "1710384000", // Timestamp for July 13, 2024
      views: 10234,
      author: {
        name: "Alice Johnson",
        email: "alice.johnson@example.com"
      },
      tags: ["Climat", "Environnement", "Glaces", "Changements Climatiques"],
      body: `
        <h1>Derretimiento de Capas de Hielo</h1>
        <h2>Datos sobre el Derretimiento de Hielo</h2>
        <p>El derretimiento de las capas de hielo se ha acelerado en las últimas décadas. Las estadísticas actuales muestran una reducción significativa en el volumen de hielo, contribuyendo al aumento del nivel del mar y alterando los ecosistemas marinos.</p>
        <h2>Consecuencias del Derretimiento de Hielo</h2>
        <p>Los impactos ambientales incluyen la pérdida de hábitat para las especies polares y una mayor erosión costera. Las poblaciones que viven en áreas bajas enfrentan mayores riesgos de inundaciones y desplazamientos.</p>
        <h2>Factores que Contribuyen al Derretimiento de Hielo</h2>
        <p>El cambio climático, impulsado por el aumento de las emisiones de gases de efecto invernadero, es el principal factor. Las actividades humanas como la deforestación y la contaminación también juegan un papel importante.</p>
        <h2>Estrategias para Mitigar el Derretimiento de Hielo</h2>
        <p>Las estrategias de mitigación incluyen la reducción de las emisiones de carbono, el aumento de la adopción de energías renovables y la protección de los sumideros de carbono naturales como los bosques.</p>
      `,
      links: {
        doc: "https://example.com/es/derretimiento-de-caps-de-hielo-doc",
        api: "https://example.com/es/derretimiento-de-caps-de-hielo-api",
      },
    },
    "perdida-de-biodiversidad": {
      title: "Pérdida de Biodiversidad",
      description: "El impacto global de la pérdida de biodiversidad.",
      image: "https://images.unsplash.com/photo-1720719625643-999bfcc8228f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date_created: "1710384000", // Timestamp for July 13, 2024
      views: 10234,
      author: {
        name: "Alice Johnson",
        email: "alice.johnson@example.com"
      },
      tags: ["Climat", "Environnement", "Glaces", "Changements Climatiques"],
      body: `
        <h1>Pérdida de Biodiversidad</h1>
        <h2>Impacto Global de la Pérdida de Biodiversidad</h2>
        <p>La pérdida de biodiversidad afecta a los ecosistemas y al bienestar humano. Las tasas de extinción de especies son ahora cientos de veces más altas que las tasas naturales.</p>
        <h2>Datos sobre la Pérdida de Biodiversidad</h2>
        <p>Los datos muestran declives drásticos en las poblaciones de vida silvestre, con impactos significativos en los servicios ecosistémicos como la polinización y la purificación del agua.</p>
        <h2>Consecuencias Ecológicas y Económicas</h2>
        <p>Los impactos ecológicos incluyen el desequilibrio de los ecosistemas y la pérdida de especies. Económicamente, la pérdida de biodiversidad afecta la agricultura, la pesca y el turismo.</p>
        <h2>Factores que Contribuyen a la Pérdida de Biodiversidad</h2>
        <p>La destrucción del hábitat, el cambio climático, la contaminación y la sobreexplotación son factores importantes.</p>
        <h2>Soluciones para la Conservación de la Biodiversidad</h2>
        <p>Las estrategias de conservación incluyen áreas protegidas, gestión sostenible de recursos y proyectos de restauración.</p>
      `,
      links: {
        doc: "https://example.com/es/perdida-de-biodiversidad-doc",
        api: "https://example.com/es/perdida-de-biodiversidad-api",
      },
    },
    "hambre-en-el-mundo": {
      title: "Hambre en el Mundo",
      description: "Seguridad alimentaria global y cambio climático.",
      image: "https://images.unsplash.com/photo-1720719625643-999bfcc8228f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date_created: "1710384000", // Timestamp for July 13, 2024
      views: 10234,
      author: {
        name: "Alice Johnson",
        email: "alice.johnson@example.com"
      },
      tags: ["Climat", "Environnement", "Glaces", "Changements Climatiques"],
      body: `
        <h1>Hambre en el Mundo</h1>
        <h2>Seguridad Alimentaria Global y Cambio Climático</h2>
        <p>El cambio climático exacerba el hambre mundial al impactar los rendimientos de los cultivos y las redes de distribución de alimentos.</p>
        <h2>Estadísticas sobre el Hambre Mundial</h2>
        <p>Más de 800 millones de personas sufren de hambre en todo el mundo, y se espera que el cambio climático aumente este número.</p>
        <h2>Efectos del Cambio Climático en la Seguridad Alimentaria</h2>
        <p>Los eventos climáticos extremos y los patrones climáticos cambiantes interrumpen la agricultura, lo que lleva a la escasez de alimentos y al aumento de los precios.</p>
        <h2>Causas Estructurales de la Inseguridad Alimentaria Global</h2>
        <p>La pobreza, el conflicto y la inestabilidad económica son causas estructurales clave.</p>
        <h2>Iniciativas para Mejorar la Seguridad Alimentaria</h2>
        <p>Las iniciativas incluyen prácticas agrícolas sostenibles, la mejora de los sistemas de distribución de alimentos y la cooperación internacional.</p>
      `,
      links: {
        doc: "https://example.com/es/hambre-en-el-mundo-doc",
        api: "https://example.com/es/hambre-en-el-mundo-api",
      },
    },
    "tipos-de-clima": {
      title: "Tipos de Clima",
      description: "Clasificación y adaptación al cambio climático.",
      image: "https://images.unsplash.com/photo-1720719625643-999bfcc8228f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date_created: "1710384000", // Timestamp for July 13, 2024
      views: 10234,
      author: {
        name: "Alice Johnson",
        email: "alice.johnson@example.com"
      },
      tags: ["Climat", "Environnement", "Glaces", "Changements Climatiques"],
      body: `
        <h1>Tipos de Clima</h1>
        <h2>Características de los Diferentes Tipos de Clima</h2>
        <p>Los tipos de clima van desde tropicales a polares, cada uno con patrones climáticos y características ecológicas distintas.</p>
        <h2>Impacto del Cambio Climático en los Tipos de Clima</h2>
        <p>El cambio climático está desplazando las zonas climáticas, lo que lleva a cambios en los patrones climáticos y la dinámica de los ecosistemas.</p>
        <h2>Adaptaciones Necesarias para las Nuevas Condiciones Climáticas</h2>
        <p>Las estrategias de adaptación incluyen el desarrollo de infraestructura resiliente, la gestión sostenible del agua y los esfuerzos de conservación.</p>
      `,
      links: {
        doc: "https://example.com/es/tipos-de-clima-doc",
        api: "https://example.com/es/tipos-de-clima-api",
      },
    },
    "emisiones-de-co2": {
      title: "Emisiones de CO₂",
      description: "Emergencia de nuevos actores en las emisiones de CO₂.",
      image: "https://images.unsplash.com/photo-1720719625643-999bfcc8228f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date_created: "1710384000", // Timestamp for July 13, 2024
      views: 10234,
      author: {
        name: "Alice Johnson",
        email: "alice.johnson@example.com"
      },
      tags: ["Climat", "Environnement", "Glaces", "Changements Climatiques"],
      body: `
        <h1>Emisiones de CO₂</h1>
        <h2>Tendencias Globales en las Emisiones de CO₂</h2>
        <p>Las emisiones de CO₂ han aumentado significativamente, impulsadas por la industrialización y el uso de combustibles fósiles.</p>
        <h2>Impacto de las Economías Emergentes</h2>
        <p>Las economías emergentes contribuyen al aumento de las emisiones a medida que desarrollan sus sectores industrial y energético.</p>
        <h2>Sectores Clave y Tendencias Emergentes</h2>
        <p>El transporte, la energía y la agricultura son las principales fuentes de emisiones. Las tendencias incluyen transiciones hacia la energía renovable y los vehículos eléctricos.</p>
        <h2>Estrategias para Reducir las Emisiones</h2>
        <p>Las estrategias incluyen la fijación de precios del carbono, mejoras en la eficiencia energética y la transición hacia fuentes de energía renovables.</p>
      `,
      links: {
        doc: "https://example.com/es/emisiones-de-co2-doc",
        api: "https://example.com/es/emisiones-de-co2-api",
      },
    },
    "sequía-en-africa": {
      title: "Sequía en África",
      description: "Sequías y resiliencia climática en África.",
      image: "https://images.unsplash.com/photo-1720719625643-999bfcc8228f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date_created: "1710384000", // Timestamp for July 13, 2024
      views: 10234,
      author: {
        name: "Alice Johnson",
        email: "alice.johnson@example.com"
      },
      tags: ["Climat", "Environnement", "Glaces", "Changements Climatiques"],
      body: `
        <h1>Sequía en África</h1>
        <h2>Prevalencia de Sequías</h2>
        <p>África experimenta sequías frecuentes y severas, lo que impacta la agricultura y el suministro de agua.</p>
        <h2>Consecuencias Sociales, Económicas y Ambientales</h2>
        <p>Las sequías conducen a la escasez de alimentos, pérdidas económicas y desplazamientos. Los impactos ambientales incluyen la degradación del suelo y la pérdida de biodiversidad.</p>
        <h2>Factores Climáticos que Contribuyen a las Sequías</h2>
        <p>El cambio climático, la deforestación y las prácticas insostenibles de uso del suelo exacerban las condiciones de sequía.</p>
        <h2>Medidas para Mejorar la Resiliencia</h2>
        <p>Las medidas de resiliencia incluyen cultivos resistentes a la sequía, gestión eficiente del agua y estrategias de adaptación comunitarias.</p>
      `,
      links: {
        doc: "https://example.com/es/sequía-en-africa-doc",
        api: "https://example.com/es/sequía-en-africa-api",
      },
    },
  },
};
