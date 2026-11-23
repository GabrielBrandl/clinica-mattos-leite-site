export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Cardiologia" | "Pediatria" | "Saúde e prevenção";
  date: string;
  readMinutes: number;
  image: string;
  imageAlt: string;
  keywords: string[];
  content: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "sinais-para-procurar-cardiologista",
    title: "Quando procurar um cardiologista? Sinais que merecem atenção",
    excerpt:
      "Entenda situações comuns em que uma avaliação cardiológica pode ser importante — sem alarmismo e com orientação prática.",
    category: "Cardiologia",
    date: "2026-10-08",
    readMinutes: 5,
    image: "/images/blog-coracao.jpg",
    imageAlt: "Estetoscópio sobre superfície clara, representando cuidado cardiológico",
    keywords: ["cardiologista Manaus", "saúde do coração", "consulta cardiológica"],
    content: [
      "A saúde cardiovascular se beneficia de acompanhamento preventivo e de escuta atenta aos sinais do corpo. Este conteúdo é informativo e não substitui consulta médica.",
      "Em muitos casos, a primeira consulta cardiológica ajuda a organizar histórico familiar, hábitos, pressão arterial e exames já realizados. O objetivo é clareza — não promessas de resultado.",
      "Situações em que vale conversar com um cardiologista incluem: pressão elevada recorrente, falta de ar desproporcional ao esforço, dor torácica, palpitações frequentes, histórico familiar relevante ou orientação antes de iniciar atividade física intensa.",
      "Se houver dor intensa, desmaio, falta de ar súbita ou mal-estar grave, procure atendimento de urgência. Para acompanhamento eletivo em Manaus, a Clínica Mundi oferece consultas presenciais de Cardiologia no Cond. Mundi.",
      "Leve à consulta documentos, lista de medicamentos e exames anteriores. Anotar dúvidas ajuda a aproveitar melhor o tempo com a médica.",
    ],
  },
  {
    slug: "puericultura-o-que-esperar-na-consulta",
    title: "Puericultura: o que esperar na consulta de rotina do seu filho",
    excerpt:
      "A consulta de acompanhamento acompanha crescimento, desenvolvimento e dúvidas do dia a dia da família — com acolhimento e orientação clara.",
    category: "Pediatria",
    date: "2026-09-22",
    readMinutes: 6,
    image: "/images/blog-puericultura.jpg",
    imageAlt: "Bebê em momento calmo, simbolizando acompanhamento pediátrico",
    keywords: ["puericultura Manaus", "pediatra Manaus", "consulta de rotina infantil"],
    content: [
      "A puericultura é o acompanhamento periódico da criança saudável. Mais do que “medir e pesar”, é um espaço para tirar dúvidas sobre alimentação, sono, desenvolvimento e prevenção.",
      "Nas consultas de rotina, a pediatra avalia marcos do desenvolvimento, orienta sobre introdução alimentar quando apropriado e discute cuidados alinhados à idade da criança.",
      "Famílias costumam perguntar sobre febre, vacinas, alimentação, choro, rotina escolar e comportamentos. Não há pergunta pequena quando o tema é o bem-estar do filho.",
      "Na Clínica Mundi, o atendimento pediátrico busca ser humano e compreensível — sem linguagem alarmista e sem garantias milagrosas. Cada criança tem seu ritmo; o acompanhamento ajuda a observar esse percurso com segurança.",
      "Para a consulta, leve a caderneta de saúde, exames recentes e anote dúvidas. Se a criança estiver doente no dia, avise no agendamento para orientar o melhor encaminhamento.",
    ],
  },
  {
    slug: "prevencao-habitos-que-ajudam-no-dia-a-dia",
    title: "Prevenção no dia a dia: hábitos simples que apoiam a saúde",
    excerpt:
      "Pequenas escolhas de rotina — sono, movimento, alimentação e acompanhamento — fazem diferença ao longo do tempo.",
    category: "Saúde e prevenção",
    date: "2026-08-15",
    readMinutes: 4,
    image: "/images/blog-prevencao.jpg",
    imageAlt: "Ambiente de cuidado e prevenção em saúde com luz suave",
    keywords: ["prevenção em saúde", "hábitos saudáveis", "promoção da saúde Manaus"],
    content: [
      "Prevenir não é perseguir perfeição. É construir hábitos sustentáveis e manter diálogo com profissionais de confiança quando necessário.",
      "Sono regular, movimentação compatível com sua condição, alimentação variada e redução do tabagismo são bases amplamente reconhecidas. O ideal é personalizar orientações em consulta.",
      "Check-ups e consultas de acompanhamento permitem ajustar rotina com base em idade, histórico e objetivos. Em Cardiologia e Pediatria, prevenção e escuta caminham juntas.",
      "Evite automedicação e informações de redes sociais sem critério. Em caso de dúvida clínica, o caminho seguro é a avaliação profissional presencial.",
      "Se quiser organizar um acompanhamento na Clínica Mundi, utilize a página de agendamento ou o WhatsApp. Estamos no Aleixo, Cond. Mundi.",
    ],
  },
  {
    slug: "saude-do-adolescente-acompanhamento-respeitoso",
    title: "Saúde do adolescente: acompanhamento respeitoso e contínuo",
    excerpt:
      "A adolescência pede escuta, privacidade adequada e orientação clara — para o jovem e para a família.",
    category: "Pediatria",
    date: "2026-07-03",
    readMinutes: 5,
    image: "/images/blog-adolescente.jpg",
    imageAlt: "Jovem em ambiente calmo, representando cuidado na adolescência",
    keywords: [
      "saúde do adolescente Manaus",
      "pediatra adolescente",
      "consulta adolescente",
    ],
    content: [
      "Na adolescência, o corpo e a rotina mudam rápido. O acompanhamento pediátrico pode apoiar sono, alimentação, atividade física, saúde mental e dúvidas típicas dessa fase.",
      "Um bom atendimento respeita a autonomia crescente do adolescente, com comunicação clara para a família e espaço seguro para perguntas.",
      "Temas frequentes incluem crescimento, desempenho escolar, uso de telas, alimentação e prevenção. Cada caso é individual; não há fórmula única.",
      "Na Clínica Mundi, a Pediatria inclui atenção à saúde do adolescente com linguagem acessível e sem promessas irreais. O foco é orientação responsável.",
      "Para marcar uma consulta, use o formulário de agendamento do site. Informe a idade do paciente e a preferência de horário para facilitarmos o retorno.",
    ],
  },
  {
    slug: "medicina-de-longevidade-o-que-significa",
    title: "Medicina de Longevidade: o que isso significa na prática",
    excerpt:
      "Mais do que um rótulo, é um olhar preventivo e contínuo — alinhado à comunicação oficial da Dra. Patrícia Sicchar.",
    category: "Saúde e prevenção",
    date: "2026-11-01",
    readMinutes: 5,
    image: "/images/galeria-01.jpg",
    imageAlt: "Material educativo da Clínica Mundi sobre prevenção",
    keywords: [
      "medicina de longevidade Manaus",
      "Dra. Patrícia Sicchar",
      "prevenção Clínica Mundi",
    ],
    content: [
      "No Instagram da Clínica Mundi, a Dra. Patrícia Sicchar apresenta a Medicina de Longevidade como parte do cuidado contínuo — prevenção, hábitos e acompanhamento responsável.",
      "Na prática, isso envolve conversar sobre pressão, colesterol, movimento, sono, alimentação e histórico familiar, sempre com avaliação individualizada.",
      "Não se trata de prometer juventude eterna ou resultados milagrosos. Trata-se de organizar o cuidado ao longo do tempo, com clareza e realismo.",
      "Campanhas educativas da clínica — como prevenção cardiovascular e combate ao AVC — reforçam o papel da informação de qualidade no cuidado diário.",
      "Se deseja uma avaliação, utilize o agendamento do site ou o WhatsApp oficial (92) 98852-6735. A confirmação depende da agenda da equipe.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getRecentPosts(limit = 3) {
  return [...posts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit);
}
