export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readMinutes: number;
  image: string;
  imageAlt: string;
  keywords: string[];
  content: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "medicina-preventiva-e-longevidade",
    title: "Medicina preventiva e longevidade: por onde começar",
    excerpt:
      "Estratégias individualizadas para preservar saúde física, muscular, cardiovascular e cognitiva.",
    category: "Longevidade",
    date: "2026-11-20",
    readMinutes: 5,
    image: "/images/dra-fabia.jpg",
    imageAlt: "Dra. Fábia Mattos — Clínica Mattos Leite",
    keywords: ["longevidade Manaus", "medicina preventiva"],
    content: [
      "Envelhecer com mais saúde começa com prevenção e acompanhamento contínuo — sem promessas milagrosas.",
      "Na Clínica Mattos Leite, a medicina preventiva e de longevidade busca estratégias individualizadas para preservar saúde física, muscular, cardiovascular e cognitiva.",
      "O primeiro passo é uma avaliação clínica com histórico, hábitos e exames pertinentes. A conduta é sempre personalizada.",
      "Para agendar, use o formulário do site ou o WhatsApp oficial. Horário: seg–qui 8h–18h, sex 8h–12h.",
    ],
  },
  {
    slug: "saude-hormonal-sinais-de-atencao",
    title: "Saúde hormonal: quando vale investigar",
    excerpt:
      "Alterações hormonais podem afetar metabolismo, disposição e qualidade de vida — em homens e mulheres.",
    category: "Saúde Hormonal",
    date: "2026-11-10",
    readMinutes: 4,
    image: "/images/equipe-mattos-leite.jpg",
    imageAlt: "Equipe Clínica Mattos Leite",
    keywords: ["saúde hormonal Manaus"],
    content: [
      "Mudanças no corpo, energia e humor podem ter relação hormonal. A investigação clínica ajuda a entender o quadro com segurança.",
      "O foco é equilíbrio hormonal, metabolismo, disposição e qualidade de vida — com avaliação individualizada.",
      "Este conteúdo é informativo e não substitui consulta. Agende na Clínica Mattos Leite para avaliação presencial.",
    ],
  },
  {
    slug: "composicao-corporal-com-acompanhamento",
    title: "Emagrecimento e composição corporal com acompanhamento médico",
    excerpt:
      "Redução de gordura e preservação muscular com foco em saúde metabólica e resultados sustentáveis.",
    category: "Emagrecimento",
    date: "2026-10-28",
    readMinutes: 4,
    image: "/images/dra-fabia.jpg",
    imageAlt: "Acompanhamento clínico Mattos Leite",
    keywords: ["emagrecimento Manaus", "composição corporal"],
    content: [
      "Cuidar do peso vai além da balança: composição corporal e metabolismo importam.",
      "O acompanhamento médico pode orientar redução de gordura com preservação muscular, sempre sem garantia de resultado.",
      "Na Mattos Leite, a conduta é personalizada em consulta. Use o agendamento online ou WhatsApp.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getRecentPosts(limit = 3) {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, limit);
}
