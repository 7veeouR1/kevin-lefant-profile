import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  Layers,
  MapPin,
  Radio,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";

const profile = {
  name: "Kevin Lefant",
  title: "Opérations · Partenaires · Systèmes",
  baseline:
    "J’aide les organisations à structurer, coordonner et piloter des projets terrain impliquant équipes, partenaires, prestataires et livrables opérationnels.",
  location: "Aix-les-Bains · Paris · Remote",
  email: "contact@kevinlefant.com",
  phone: "+33 7 63 50 48 22",
};

const expertises = [
  {
    title: "Opérations événementielles",
    icon: Workflow,
    text: "Coordination logistique, planning, montage, flux, prestataires et équipes terrain.",
  },
  {
    title: "Partenaires & activations",
    icon: Users,
    text: "Suivi de marques, sponsors, exposants, visibilité terrain et engagements contractuels.",
  },
  {
    title: "Outils & systèmes",
    icon: Layers,
    text: "Création de dashboards, webapps métier et systèmes de suivi pour fluidifier l’exécution.",
  },
];

const experiences = [
  {
    title: "Live Entertainment Supervisor",
    company: "Paris 2024 — Palais de Tokyo",
    date: "2024",
    text: "Supervision d’opérations live dans un environnement international à forte pression : artistes, timing, hôtes, parties prenantes et séquences événementielles.",
  },
  {
    title: "Projet technologie & coordination événementielle",
    company: "Auvergne-Rhône-Alpes Entreprises",
    date: "2023",
    text: "Structuration opérationnelle et numérique d’un événement de 1 000 participants : flux d’inscription, masterclasses, réunions B2B et outils d’orientation.",
  },
  {
    title: "Venue Finder / Event Consultant",
    company: "HelmsBriscoe",
    date: "2024",
    text: "Recherche de lieux pour séminaires, événements corporate et réunions d’affaires selon budget, capacité, localisation et faisabilité opérationnelle.",
  },
  {
    title: "Coordinateur opérations freelance",
    company: "France / Europe",
    date: "2023 — Présent",
    text: "Soutien aux organisateurs, marques et agences : planification, coordination terrain, fournisseurs, matériel, visibilité de marque et exécution jour J.",
  },
];

const method = [
  ["Structurer", "Transformer les idées en plan d’action lisible."],
  ["Coordonner", "Faire circuler l’information entre les bons acteurs."],
  ["Exécuter", "Assurer que le terrain suit le plan prévu."],
  ["Améliorer", "Créer les outils qui réduisent les frictions."],
];

export default function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="min-h-screen bg-[#050506] text-white">
      <Navbar />

      <section id="accueil" className="relative min-h-screen overflow-hidden">
  <div className="absolute inset-0">
    <img
      src="/hero-kevin.jpg"
      alt="Kevin Lefant au travail"
      className="h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-black/35" />
    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
  </div>

  <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-5 pt-24">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-3xl"
    >

      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/75 backdrop-blur">
        <MapPin size={16} />
        {profile.location}
      </div>

      <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
        {profile.name}
      </h1>

      <p className="mt-5 text-2xl text-white/85 md:text-4xl">
        {profile.title}
      </p>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">
        {profile.baseline}
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-white/80"
        >
          Me contacter <ArrowRight size={18} />
        </a>

        <a
          href="/CV_kevin_lefant.pdf"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-medium text-white/85 backdrop-blur transition hover:bg-white/10"
        >
          Télécharger le CV
        </a>
      </div>
    </motion.div>
  </div>
    </section>

      <section id="expertises" className="mx-auto max-w-6xl px-5 py-20">
        <SectionTitle
          eyebrow="Expertises"
          title="Coordonner le terrain, les partenaires et les systèmes."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {expertises.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-7 text-white/60">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="experiences" className="mx-auto max-w-6xl px-5 py-20">
        <SectionTitle
          eyebrow="Expériences"
          title="Des environnements terrain exigeants."
        />

        <div className="mt-10 space-y-5">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:flex md:items-start md:justify-between md:gap-10"
            >
              <div className="max-w-3xl">
                <p className="text-sm text-white/40">{exp.company}</p>
                <h3 className="mt-2 text-2xl font-semibold">{exp.title}</h3>
                <p className="mt-4 leading-7 text-white/60">{exp.text}</p>
              </div>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/60 md:mt-0">
                <CalendarDays size={15} />
                {exp.date}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="methode" className="mx-auto max-w-6xl px-5 py-20">
        <SectionTitle
          eyebrow="Méthode"
          title="Une logique simple : rendre l’exécution plus claire."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {method.map(([title, text], index) => (
            <div
              key={title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="mb-5 text-sm text-white/30">
                0{index + 1}
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-4 leading-7 text-white/60">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="systemes" className="mx-auto max-w-6xl px-5 py-20">
        <SectionTitle
          eyebrow="Systèmes développés"
          title="Des outils conçus à partir des problèmes du terrain."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
            <a
              href="https://www.quidamos.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white transition hover:scale-105"
            >
              <img
                src="/logo-quidam.png"
                alt="Quidam OS"
                className="h-7 w-7 object-contain"
              />
            </a>

            <h3 className="text-3xl font-semibold">Quidam OS</h3>
            <p className="mt-4 leading-7 text-white/60">
              Studio de création de webapps métier pour indépendants, PME,
              événements et projets opérationnels. Objectif : transformer les
              process flous en outils simples, rapides et utilisables.
            </p>

            <div className="mt-8 grid gap-3">
              {[
                "Dashboards opérationnels",
                "Suivi terrain",
                "Reporting client",
                "Automatisations",
                "Interfaces métier sur mesure",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/70">
                  <CheckCircle2 size={18} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-orange-400/20 bg-orange-400/[0.06] p-7">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-300/20 px-4 py-2 text-sm text-orange-100/80">
                <Radio size={15} />
                Focus terrain
              </div>

              <a
                href="https://vizi-board.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/85 backdrop-blur transition hover:bg-white/10"
              >
                Découvrir ViziBoard
                <ExternalLink size={16} />
              </a>
            </div>

            <h3 className="text-3xl font-semibold">ViziBoard</h3>
            <p className="mt-4 leading-7 text-white/65">
              Plateforme de pilotage des activations terrain : missions,
              inventaire de marque, affectation des équipes, preuves photo,
              validation des installations et reporting final.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                "Gestion des missions",
                "Inventaire par marque",
                "Upload photo terrain",
                "Validation des installations",
                "Vue admin / terrain",
                "Reporting client",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4 text-white/75"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-black/30 p-5">
              <p className="mt-3 leading-7 text-white/70">
                Capacité à comprendre les contraintes opérationnelles, à les
                transformer en système de suivi et à créer des outils réellement
                utiles pour les équipes terrain et les partenaires.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
        <div className="rounded-[2rem] border border-white/10 bg-white text-black p-8 md:p-12">
          <p className="text-sm uppercase tracking-[0.25em] text-black/40">
            Contact
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            Besoin de structurer, coordonner ou piloter un projet terrain ?
          </h2>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 font-medium text-white"
            >
              {profile.email} <ExternalLink size={17} />
            </a>

            <a
              href={`tel:${profile.phone.replaceAll(" ", "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 px-6 py-3 font-medium"
            >
              {profile.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#050506]/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-24 max-w-6xl items-center justify-between px-5">
        <a href="#accueil" className="flex items-center">
          <img
            src="/logo-kevin.svg"
            alt="Kevin Lefant"
            className="h-6 w-auto object-contain"
          />
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-white/60 md:flex">
          <a href="#expertises" className="transition hover:text-white">
            Expertises
          </a>
          <a href="#experiences" className="transition hover:text-white">
            Expériences
          </a>
          <a href="#methode" className="transition hover:text-white">
            Méthode
          </a>
          <a href="#systemes" className="transition hover:text-white">
            Systèmes
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

function SectionTitle({ eyebrow, title }) {
  return (
    <div>
      <p className="text-sm uppercase tracking-[0.25em] text-white/35">
        {eyebrow}
      </p>
      <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
        {title}
      </h2>
    </div>
  );
}