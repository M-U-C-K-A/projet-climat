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

import MeltingOfIceCaps from '@/components/articles/en/MeltingOfIceCaps';
import LossOfBiodiversity from '@/components/articles/en/LossOfBiodiversity';
import WorldHunger from '@/components/articles/en/WorldHunger';
import ClimateTypes from '@/components/articles/en/ClimateTypes';
import CO2Emissions from '@/components/articles/en/CO2Emmisions';
import DroughtInAfrica from '@/components/articles/en/DroughtInAfrica';

export const articles: Articles = {
  en: {
    "melting-of-ice-caps": {
      title: "Melting of Ice Caps",
      path: "/en/melting-of-ice-caps",
      description: "The effects and consequences of ice cap melting.",
      image: "articles/thumbnail/ice.jpg",
      date_created: "1710384000", // Timestamp for July 13, 2024
      views: 10234,
      author: {
        name: "Hugo Delacour",
        email: "Hugo.DELACOUR@proton.com"
      },
      tags: ["Climat", "Environnement", "Glaces", "Changements Climatiques"],
      BodyComponent: MeltingOfIceCaps,
      links: {
        doc: "https://example.com/en/melting-of-ice-caps-doc",
        api: "https://example.com/en/melting-of-ice-caps-api",
      },
    },
    "loss-of-biodiversity": {
      title: "Loss of Biodiversity",
      path: "/en/loss-of-biodiversity",
      description: "The global impact of biodiversity loss.",
      image: "articles/thumbnail/biodiversity.jpg",
      date_created: "1710384000", // Timestamp for July 13, 2024
      views: 10234,
      author: {
        name: "Alice Johnson",
        email: "alice.johnson@example.com"
      },
      tags: ["Climat", "Environnement", "Glaces","trigonometry", "Changements Climatiques"],
      BodyComponent: LossOfBiodiversity,
      links: {
        doc: "https://example.com/en/loss-of-biodiversity-doc",
        api: "https://example.com/en/loss-of-biodiversity-api",
      },
    },
    "world-hunger": {
      title: "World Hunger",
      path: "/en/world-hunger",
      description: "Global food security and climate change.",
      image: "articles/thumbnail/hunger.jpg",
      date_created: "1710384000", // Timestamp for July 13, 2024
      views: 10234,
      author: {
        name: "Alice Johnson",
        email: "alice.johnson@example.com"
      },
      tags: ["Climat", "Environnement", "Glaces", "Changements Climatiques"],
      BodyComponent: WorldHunger,
      links: {
        doc: "https://example.com/en/world-hunger-doc",
        api: "https://example.com/en/world-hunger-api",
      },
    },
    "climate-types": {
      title: "Climate Types",
      path: "/en/climate-types",
      description: "Classification and adaptation to climate change.",
      image: "articles/thumbnail/climat.jpg",
      date_created: "1710384000", // Timestamp for July 13, 2024
      views: 10234,
      author: {
        name: "Alice Johnson",
        email: "alice.johnson@example.com"
      },
      tags: ["Climat", "Environnement", "Glaces", "Changements Climatiques"],
      BodyComponent: ClimateTypes,
      links: {
        doc: "https://example.com/en/climate-types-doc",
        api: "https://example.com/en/climate-types-api",
      },
    },
    "co2-emissions": {
      title: "CO₂ Emissions",
      path: "/en/co2-emissions",
      description: "Emergence of new actors in CO₂ emissions.",
      image: "articles/thumbnail/co2.jpg",
      date_created: "1710384000", // Timestamp for July 13, 2024
      views: 10234,
      author: {
        name: "Alice Johnson",
        email: "alice.johnson@example.com"
      },
      tags: ["Climat", "Environnement", "Glaces", "Changements Climatiques"],
      BodyComponent: CO2Emissions,
      links: {
        doc: "https://example.com/en/co2-emissions-doc",
        api: "https://example.com/en/co2-emissions-api",
      },
    },
    "drought-in-africa": {
      title: "Drought in Africa",
      path: "/en/drought-in-africa",
      description: "Droughts and climate resilience in Africa.",
      image: "articles/thumbnail/drought.jpg",
      date_created: "1710384000", // Timestamp for July 13, 2024
      views: 10234,
      author: {
        name: "Alice Johnson",
        email: "alice.johnson@example.com"
      },
      tags: ["Climat", "Environnement", "Glaces", "Changements Climatiques"],
      BodyComponent: DroughtInAfrica,
      links: {
        doc: "https://example.com/en/drought-in-africa-doc",
        api: "https://example.com/en/drought-in-africa-api",
      },
    },
  },
  fr: {
    "fonte-des-glaces": {
      title: "Fonte des Glaces",
      path: "/en/drought-in-africa",
      description: "Les effets et conséquences de la fonte des glaces.",
      image: "articles/thumbnail/ice.jpg",
      date_created: "1710384000", // Timestamp for July 13, 2024
      views: 10234,
      author: {
        name: "Alice Johnson",
        email: "alice.johnson@example.com"
      },
      tags: ["Climat", "Environnement", "Glaces", "Changements Climatiques"],
      BodyComponent: DroughtInAfrica,
      links: {
        doc: "https://example.com/fr/fonte-des-glaces-doc",
        api: "https://example.com/fr/fonte-des-glaces-api",
      },
    },
  },
};
