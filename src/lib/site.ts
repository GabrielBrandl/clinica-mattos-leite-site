export const site = {
  name: "Clínica Mattos Leite",
  shortName: "Mattos Leite",
  tagline: "Medicina, Saúde e Longevidade",
  description:
    "Clínica Mattos Leite em Manaus — Medicina, Saúde e Longevidade. Pediatria, nutrologia, saúde hormonal, medicina preventiva, emagrecimento e saúde intestinal no Ed. The Office, Adrianópolis.",
  keywords: [
    "Clínica Mattos Leite",
    "Dra. Fábia Mattos",
    "Dr. Felipe Leite",
    "medicina longevidade Manaus",
    "nutrologia Manaus",
    "pediatra Adrianópolis",
    "saúde hormonal Manaus",
    "emagrecimento Manaus",
  ],
  url: "https://clinica-mundi.vercel.app",
  legalName: "CLINICA MATTOS E LEITE LTDA",
  cnpj: "20.763.976/0001-23",
  foundedYear: 2014,
  email: "nutrobodyperformance@gmail.com",
  phoneDisplay: "(92) 9901-2210",
  phoneE164: "559299012210",
  whatsappMessage:
    "Olá! Gostaria de agendar uma consulta na Clínica Mattos Leite.",
  websiteRef: "http://www.nutrobp.com.br/",
  hours: [
    { day: "Segunda a quinta", time: "08:00 – 18:00" },
    { day: "Sexta", time: "08:00 – 12:00" },
    { day: "Sábados, domingos e feriados", time: "Fechado" },
  ],
  bookingRules: {
    monThu: { open: "08:00", close: "18:00" },
    friday: { open: "08:00", close: "12:00" },
    closedWeekendsAndHolidays: true,
  },
  address: {
    street: "Av. Mário Ypiranga, 315",
    complement: "Ed. The Office, Sala 311",
    neighborhood: "Adrianópolis",
    city: "Manaus",
    state: "AM",
    cep: "69057-000",
    full: "Av. Mário Ypiranga, 315 — Ed. The Office, Sala 311, Adrianópolis, Manaus - AM, CEP 69057-000",
    mapsQuery: "Av.+Mario+Ypiranga+315+The+Office+Sala+311+Manaus",
    mapsEmbed:
      "https://www.google.com/maps?q=Av.+M%C3%A1rio+Ypiranga+315+The+Office+Sala+311+Manaus&output=embed",
    lat: -3.1035,
    lng: -60.0145,
  },
  imageCredits:
    "Logotipo e identidade visual: Clínica Mattos Leite. Fotografias oficiais da equipe fornecidas pela clínica.",
  doctors: [
    {
      slug: "fabia-mattos",
      name: "Dra. Fábia de Barros Mattos",
      role: "Pediatra e Nutróloga",
      crm: "CRM 3468-AM · RQE 3383",
      summary:
        "Médica da Clínica Mattos Leite, com atuação em pediatria e nutrologia — cuidado clínico com foco em saúde e longevidade.",
      image: "/images/dra-fabia.jpg",
      imageAlt: "Dra. Fábia Mattos — Clínica Mattos Leite",
    },
    {
      slug: "felipe-leite",
      name: "Dr. Felipe Siqueira de Cerqueira Leite",
      role: "Médico · Sócio-administrador",
      crm: "",
      summary:
        "Integra a direção clínica da Mattos Leite, com atendimento voltado à medicina, saúde e longevidade.",
      image: "/images/equipe-mattos-leite.jpg",
      imageAlt: "Equipe Clínica Mattos Leite",
    },
  ],
  specialties: [
    {
      slug: "pediatria-e-nutrologia",
      title: "Pediatria e Nutrologia",
      catchphrase: "Cuidado desde a infância até a vida adulta",
      short: "Acompanhamento pediátrico e orientação nutricional médica.",
      description:
        "Avaliação clínica, acompanhamento do crescimento e desenvolvimento, e nutrologia para organização alimentar e metabolismo — com conduta individualizada.",
      image: "/images/dra-fabia.jpg",
      imageAlt: "Dra. Fábia Mattos em atendimento na Clínica Mattos Leite",
      services: [
        "Consulta pediátrica",
        "Acompanhamento nutricional médico",
        "Orientação metabólica",
        "Avaliação de hábitos e exames",
      ],
      forWhom:
        "Famílias e pacientes que buscam cuidado pediátrico e nutrológico em Manaus.",
    },
    {
      slug: "saude-hormonal",
      title: "Saúde Hormonal",
      catchphrase: "Sente que algo mudou no seu corpo?",
      short:
        "Investigação e tratamento de alterações hormonais em homens e mulheres.",
      description:
        "Investigação e tratamento de alterações hormonais em homens e mulheres, com foco em equilíbrio hormonal, metabolismo, disposição e qualidade de vida.",
      image: "/images/equipe-mattos-leite.jpg",
      imageAlt: "Equipe Clínica Mattos Leite",
      services: [
        "Avaliação hormonal",
        "Equilíbrio e metabolismo",
        "Disposição e qualidade de vida",
        "Acompanhamento contínuo",
      ],
      forWhom:
        "Homens e mulheres com sintomas ou suspeita de desequilíbrio hormonal.",
    },
    {
      slug: "medicina-preventiva-e-longevidade",
      title: "Medicina Preventiva e Longevidade",
      catchphrase: "Quer envelhecer com mais saúde?",
      short:
        "Estratégias individualizadas para preservar saúde física e cognitiva.",
      description:
        "Estratégias individualizadas para preservar a saúde física, muscular, cardiovascular e cognitiva, com foco em prevenção de doenças e longevidade saudável.",
      image: "/images/dra-fabia.jpg",
      imageAlt: "Dra. Fábia Mattos — Medicina, Saúde e Longevidade",
      services: [
        "Prevenção de doenças",
        "Saúde muscular e cardiovascular",
        "Saúde cognitiva",
        "Plano individualizado de longevidade",
      ],
      forWhom:
        "Quem deseja envelhecer com mais saúde, com acompanhamento médico responsável.",
    },
    {
      slug: "emagrecimento-e-composicao-corporal",
      title: "Emagrecimento e Composição Corporal",
      catchphrase: "Dificuldade para cuidar do peso?",
      short:
        "Avaliação e acompanhamento para redução de gordura e preservação muscular.",
      description:
        "Avaliação e acompanhamento médico para redução de gordura corporal, preservação da massa muscular e melhora da saúde metabólica, com foco em resultados sustentáveis. Sem garantia de resultado — conduta individualizada em consulta.",
      image: "/images/equipe-mattos-leite.jpg",
      imageAlt: "Acompanhamento clínico na Clínica Mattos Leite",
      services: [
        "Avaliação de composição corporal",
        "Redução de gordura com preservação muscular",
        "Saúde metabólica",
        "Acompanhamento sustentável",
      ],
      forWhom:
        "Pessoas que buscam emagrecimento e recomposição com suporte médico.",
    },
    {
      slug: "saude-intestinal-e-imunidade",
      title: "Saúde Intestinal e Imunidade",
      catchphrase: "O intestino tem incomodado?",
      short:
        "Investigação de alterações intestinais, microbiota e absorção.",
      description:
        "Investigação de alterações intestinais, desequilíbrios da microbiota e dificuldades de absorção de nutrientes, visando saúde digestiva e bem-estar.",
      image: "/images/dra-fabia.jpg",
      imageAlt: "Consulta clínica Clínica Mattos Leite",
      services: [
        "Avaliação digestiva",
        "Microbiota intestinal",
        "Absorção de nutrientes",
        "Bem-estar e imunidade",
      ],
      forWhom:
        "Pacientes com desconforto intestinal ou busca por equilíbrio digestivo.",
    },
  ],
  faq: [
    {
      q: "Qual o horário de funcionamento?",
      a: "Segunda a quinta, das 8h às 18h. Sexta, das 8h às 12h. Não funcionamos aos finais de semana nem em feriados.",
    },
    {
      q: "Onde fica a clínica?",
      a: "Av. Mário Ypiranga, 315 — Ed. The Office, Sala 311, Adrianópolis, Manaus/AM.",
    },
    {
      q: "Como agendar?",
      a: "Pelo formulário do site ou WhatsApp (92) 9901-2210. A confirmação depende da disponibilidade da agenda.",
    },
    {
      q: "Quais áreas são atendidas?",
      a: "Pediatria e nutrologia, saúde hormonal, medicina preventiva e longevidade, emagrecimento e composição corporal, saúde intestinal e imunidade.",
    },
    {
      q: "Há promessa de resultado em emagrecimento?",
      a: "Não. O acompanhamento é individualizado e responsável, sem garantia de resultado.",
    },
  ],
  prepTips: [
    "Chegue alguns minutos antes do horário",
    "Leve documentos e exames recentes",
    "Anote dúvidas para a consulta",
    "Evite enviar dados sensíveis de saúde por mensagem",
  ],
} as const;

export function whatsappUrl(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(message)}`;
}

export function getSpecialty(slug: string) {
  return site.specialties.find((item) => item.slug === slug);
}

/** Returns true if weekday is bookable (0=Sun..6=Sat). Holidays must be checked manually. */
export function isBookableWeekday(day: number) {
  return day >= 1 && day <= 5;
}
