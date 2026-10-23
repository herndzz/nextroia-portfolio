import {
  Cable,
  Code2,
  Container,
  Cpu,
  Database,
  GitBranch,
  HardDrive,
  Instagram,
  Mail,
  Network,
  PlayCircle,
  Server,
  TerminalSquare,
  Workflow,
  Wrench,
} from "lucide-react";

const stackItems = [
  { name: "Node.js", icon: Server },
  { name: "Python", icon: Code2 },
  { name: "React.js", icon: Cpu },
  { name: "PostgreSQL", icon: Database },
  { name: "Docker", icon: Container },
  { name: "n8n/Automação", icon: Workflow },
  { name: "Git", icon: GitBranch },
  { name: "Bash/CLI", icon: TerminalSquare },
];

const serviceGroups = [
  {
    title: "Infraestrutura e Redes",
    icon: Network,
    description:
      "Configuração de roteadores, cabeamento estruturado, organização de racks e aplicação de protocolos de rede.",
    points: ["Roteadores e links", "Estrutura física", "Padronização técnica"],
  },
  {
    title: "Montagem e Manutenção",
    icon: Wrench,
    description:
      "Limpeza preventiva, upgrades, troca de peças e montagem completa de setups básicos a computadores gamers.",
    points: ["Manutenção preventiva", "Upgrade inteligente", "Montagem personalizada"],
  },
  {
    title: "Sistemas e Formatação",
    icon: HardDrive,
    description:
      "Instalação de sistemas operacionais, backup seguro de dados e configuração de pacotes de softwares essenciais.",
    points: ["SO otimizado", "Backup seguro", "Pacotes essenciais"],
  },
  {
    title: "Automação e Desenvolvimento",
    icon: Cable,
    description:
      "Criação de APIs, fluxos no n8n e otimização de processos operacionais para elevar produtividade e escala.",
    points: ["APIs sob medida", "Fluxos n8n", "Processos eficientes"],
  },
];

const badges = [
  "Troubleshooting Avançado",
  "Lógica de Programação",
  "Infraestrutura de Redes",
];

const certifications = ["CCNA - Introduction to Networks (Cisco)", "Relational Database (FreeCodeCamp)", "Engenharia de Dados (Data Science Academy) ", "Téc. Informática (Centro Educacional de Manhuaçu)"];

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://nextroia.com/#organization",
        name: "NEXTROIA",
        url: "https://nextroia.com",
        email: "nextroia@outlook.com",
        sameAs: ["https://instagram.com/nextroia", "https://www.youtube.com/@herndz_exe/videos"],
        logo: "https://nextroia.com/icon.svg",
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://nextroia.com/#service",
        name: "NEXTROIA Infraestrutura e Automacao",
        description:
          "Servicos de infraestrutura de redes, manutencao de computadores, formatacao de sistemas, desenvolvimento e automacao de processos.",
        areaServed: "Brasil",
        provider: {
          "@id": "https://nextroia.com/#organization",
        },
        serviceType: [
          "Infraestrutura e Redes",
          "Montagem e Manutencao",
          "Sistemas e Formatacao",
          "Automacao e Desenvolvimento",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: "nextroia@outlook.com",
            availableLanguage: ["Portuguese"],
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-blue-500/40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/50 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="group inline-flex items-center gap-2">
            <Network className="h-5 w-5 text-blue-400 transition-transform duration-300 group-hover:scale-110" />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-lg font-semibold tracking-wider text-transparent">
              NEXTROIA
            </span>
          </a>

          <ul className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <li>
              <a href="#sobre" className="transition-all duration-300 hover:text-blue-400">
                Sobre
              </a>
            </li>
            <li>
              <a href="#servicos" className="transition-all duration-300 hover:text-blue-400">
                Serviços
              </a>
            </li>
            <li>
              <a href="#stack" className="transition-all duration-300 hover:text-blue-400">
                Stack
              </a>
            </li>
            <li>
              <a href="#contato" className="transition-all duration-300 hover:text-blue-400">
                Contato
              </a>
            </li>
          </ul>

          <a
            href="mailto:nextroia@outlook.com"
            className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-300 transition-all duration-300 hover:scale-105 hover:border-blue-300 hover:bg-blue-500/20 sm:text-sm"
          >
            <Mail className="h-4 w-4" />
            Contato
          </a>
        </nav>
      </header>

      <section id="top" className="relative mx-auto flex w-full max-w-7xl flex-col px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-36">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Sistemas online e monitorados
          </div>

          <h1 className="text-balance text-3xl font-bold leading-tight text-slate-100 sm:text-4xl lg:text-5xl">
            Soluções Avançadas em Tecnologia e Infraestrutura
          </h1>

          <p className="mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-slate-300 sm:text-base">
            Do suporte técnico especializado à automação de processos. Conectando e otimizando o seu negócio.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="mailto:nextroia@outlook.com"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-blue-400/40"
            >
              Solicitar Orçamento
            </a>
            <a
              href="https://www.youtube.com/@herndz_exe/videos"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-5 py-3 text-sm font-medium text-slate-200 transition-all duration-300 hover:scale-105 hover:border-blue-400/60 hover:text-blue-300"
            >
              <PlayCircle className="h-4 w-4" />
              Assista no YouTube
            </a>
          </div>
        </div>
      </section>

      <section id="sobre" className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-100">Sobre Mim - Hernandes Vinícius</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
            Estudante de Sistemas de Informação na UEMG e técnico com mentalidade de "cabeça de dono". Uno a
            experiência crítica em troubleshooting de provedor de internet com o desenvolvimento de software. Meu
            foco é entregar estabilidade, segurança e eficiência, seja formatando o seu computador ou automatizando os
            processos da sua empresa.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-medium text-blue-300 transition-all duration-300 hover:scale-105 hover:border-blue-300/60"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-100">Stack e Certificações</h2>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {stackItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.name}
                    className="group rounded-xl border border-slate-700/80 bg-slate-900/60 p-4 transition-all duration-300 hover:scale-105 hover:border-blue-400/60"
                  >
                    <Icon className="h-5 w-5 text-blue-400 transition-transform duration-300 group-hover:rotate-3" />
                    <p className="mt-3 text-sm text-slate-200">{item.name}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <aside className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-6 backdrop-blur-md sm:p-8">
            <h3 className="text-lg font-semibold text-emerald-200">Certificados</h3>
            <div className="mt-5 space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="rounded-xl border border-emerald-300/30 bg-slate-950/40 px-4 py-3 text-sm font-medium text-emerald-100 transition-all duration-300 hover:scale-[1.02]"
                >
                  {cert}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="servicos" className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-slate-100">Nossos Serviços</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {serviceGroups.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:scale-[1.01] hover:border-blue-400/40"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-slate-100">{service.title}</h3>
                  <Icon className="h-5 w-5 text-blue-400 transition-transform duration-300 group-hover:-translate-y-0.5" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{service.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.points.map((point) => (
                    <span
                      key={point}
                      className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs text-slate-300"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <footer id="contato" className="mx-auto w-full max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-500/10 via-slate-900 to-cyan-500/10 p-6 backdrop-blur-md sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-100">Pronto para otimizar sua tecnologia? Fale conosco.</h2>
          <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-200">
            <a
              href="mailto:nextroia@outlook.com"
              className="rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 transition-all duration-300 hover:scale-105 hover:border-blue-400/60 hover:text-blue-300"
            >
              E-mail: nextroia@outlook.com
            </a>
            <a
              href="https://instagram.com/nextroia"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 transition-all duration-300 hover:scale-105 hover:border-blue-400/60 hover:text-blue-300"
            >
              Instagram: @nextroia
            </a>
            <a
              href="https://www.youtube.com/@herndz_exe/videos"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 transition-all duration-300 hover:scale-105 hover:border-blue-400/60 hover:text-blue-300"
            >
              Canal do YouTube
            </a>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        <a
          href="mailto:nextroia@outlook.com"
          aria-label="Enviar e-mail para NEXTROIA"
          className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-blue-300/40 bg-blue-500/80 text-slate-950 shadow-lg shadow-blue-500/40 transition-all duration-300 hover:scale-110"
        >
          <Mail className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" />
        </a>
        <a
          href="https://instagram.com/nextroia"
          target="_blank"
          rel="noreferrer"
          aria-label="Abrir Instagram da NEXTROIA"
          className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-emerald-300/40 bg-emerald-500/80 text-slate-950 shadow-lg shadow-emerald-500/40 transition-all duration-300 hover:scale-110"
        >
          <Instagram className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" />
        </a>
      </div>
    </main>
  );
}
