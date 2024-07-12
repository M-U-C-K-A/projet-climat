interface ArticleLinks {
  doc: string;
  api: string;
}

interface Article {
  title: string;
  description: string;
  body: string;
  links: ArticleLinks;
}

interface Articles {
  [key: string]: {
    [key: string]: Article;
  };
}

export const articles: Articles = {
  en: {
      "new-football-player": {
        title: "New Football Player",
        description: "Introducing the new football player.",
        body: `
          ## New Football Player
  
          Welcome to the team! This player has an impressive record and we're excited to see them on the field.
        `,
        links: {
          doc: "https://example.com/en/new-football-player-doc",
          api: "https://example.com/en/new-football-player-api",
        },
      },
    },
    fr: {
      "nouveau-joueur-de-foot": {
        title: "Nouveau Joueur de Foot",
        description: "Présentation du nouveau joueur de foot.",
        body: `
          ## Nouveau Joueur de Foot
  
          Bienvenue dans l'équipe ! Ce joueur a un parcours impressionnant et nous sommes impatients de le voir sur le terrain.
        `,
        links: {
          doc: "https://example.com/fr/nouveau-joueur-de-foot-doc",
          api: "https://example.com/fr/nouveau-joueur-de-foot-api",
        },
      },
    },
    es: {
      "nuevo-jugador-de-futbol": {
        title: "Nuevo Jugador de Fútbol",
        description: "Presentación del nuevo jugador de fútbol.",
        body: `
          ## Nuevo Jugador de Fútbol
  
          ¡Bienvenido al equipo! Este jugador tiene un historial impresionante y estamos emocionados de verlo en el campo.
        `,
        links: {
          doc: "https://example.com/es/nuevo-jugador-de-futbol-doc",
          api: "https://example.com/es/nuevo-jugador-de-futbol-api",
        },
      },
    },
  };
  