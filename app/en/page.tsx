import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CCHUB | Customer Control Hub",
  description:
    "CCHUB is a customer control hub for managing clients, tasks, documents, passwords, digital assets and internal knowledge in one organized workspace.",
  alternates: {
    canonical: "/en",
    languages: {
      he: "/",
      en: "/en",
    },
  },
  openGraph: {
    title: "CCHUB | Customer Control Hub",
    description:
      "Manage clients, tasks, documents, passwords, digital assets and knowledge in one organized workspace.",
    url: "https://www.mycchub.app/en",
    siteName: "CCHUB",
    locale: "en_US",
    type: "website",
  },
};

const features = [
  {
    title: "Client Management",
    icon: "👥",
    text: "Keep every client organized with tasks, documents, passwords, assets and notes connected to one clear client file.",
  },
  {
    title: "Tasks & Follow-up",
    icon: "✅",
    text: "Manage daily work by client and digital asset, with statuses, due dates, time tracking and cost awareness.",
  },
  {
    title: "Documents & Passwords",
    icon: "🔒",
    text: "Stop searching through chats and folders. Keep documents, access details and sensitive information where they belong.",
  },
  {
    title: "Digital Assets",
    icon: "🧊",
    text: "Manage websites, domains, platforms, accounts and systems connected to each client.",
  },
  {
    title: "Knowledge Base",
    icon: "📘",
    text: "Save decisions, notes, procedures and important client knowledge so it does not disappear in conversations.",
  },
  {
    title: "Excel & Automations",
    icon: "🔗",
    text: "Import from Excel, export data in supported plans and connect workflows using Make or Zapier.",
  },
];

const plans = [
  {
    name: "Solo Basic",
    price: "$49",
    clients: "Up to 50 clients",
    text: "For a solo business that wants to start working in a more organized way.",
  },
  {
    name: "Solo Pro",
    price: "$149",
    clients: "Up to 500 clients",
    text: "For businesses that need digital assets, leads, contacts, export and automations.",
  },
  {
    name: "Business",
    price: "$299",
    clients: "Up to 5,000 clients",
    text: "For teams that need advanced permissions, users, integrations and broader control.",
  },
];

export default function EnglishPage() {
  return (
    <main dir="ltr" className="min-h-screen bg-[#F6FAFF] text-[#071B4D]">
      <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/95 backdrop-blur">
        <div className="cchub-container cchub-header flex items-center justify-between">
          <a href="/en" className="cchub-brand" aria-label="CCHUB English homepage">
            <span className="cchub-logo-frame">
              <img src="/cchub-logo.png" alt="CCHUB - Customer Control Hub" className="cchub-logo" />
            </span>
            <span className="cchub-brand-text">CCHUB</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            <a className="cchub-nav-link active" href="/en">English</a>
            <a className="cchub-nav-link" href="/features">Features</a>
            <a className="cchub-nav-link" href="/pricing">Pricing</a>
            <a className="cchub-nav-link" href="/faq">FAQ</a>
            <a className="cchub-nav-link" href="/">עברית</a>
          </nav>

          <div className="flex items-center gap-3">
            <a className="cchub-button-primary" href="/pricing">Start 7-day free trial</a>
            <a className="cchub-button-secondary hidden sm:inline-flex" href="/login">Login</a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-blue-100">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#F7FBFF_0%,#EEF6FF_100%)]" />

        <div className="cchub-container relative grid items-center gap-10 py-16 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <span className="cchub-trial-badge-strong">Customer Control Hub</span>
            <h1 className="cchub-title-xl mt-5">
              Manage clients, tasks, documents, passwords and knowledge in one place
            </h1>
            <p className="cchub-text mt-5">
              CCHUB helps service businesses organize client work after the sale:
              tasks, documents, passwords, digital assets, notes, time, costs and
              internal knowledge — all connected to the right client.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a className="cchub-button-primary" href="/pricing">
                Start 7-day free trial
              </a>
              <a className="cchub-button-secondary" href="/">
                Go to Hebrew site
              </a>
            </div>
          </div>

          <div className="cchub-card p-6">
            <div className="rounded-[26px] bg-[#061A44] p-5 text-white">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <div className="font-en text-sm text-blue-100">CCHUB Overview</div>
                  <div className="mt-1 text-2xl font-black">Client workspace</div>
                </div>
                <div className="rounded-full bg-white/10 px-4 py-2 text-sm font-black">
                  Live demo
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {["Clients", "Tasks", "Documents", "Passwords", "Assets", "Knowledge"].map((item) => (
                  <div key={item} className="rounded-2xl bg-white/10 p-4">
                    <div className="text-sm text-blue-100">{item}</div>
                    <div className="mt-2 h-3 rounded-full bg-white/30" />
                    <div className="mt-2 h-3 w-2/3 rounded-full bg-white/20" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cchub-container cchub-section">
        <div className="text-center">
          <p className="text-sm font-black text-blue-600">Core features</p>
          <h2 className="cchub-title-lg mt-2">Built around the way client work actually happens</h2>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="cchub-mini-card flex min-h-[230px] flex-col items-center p-6 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black">{feature.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="cchub-container cchub-section">
          <div className="text-center">
            <p className="text-sm font-black text-blue-600">Pricing</p>
            <h2 className="cchub-title-lg mt-2">Start small and grow when needed</h2>
            <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-600">
              All plans include a 7-day free trial. Choose the plan based on the
              number of clients, the level of control and the features your business needs.
            </p>
          </div>

          <div className="mt-9 grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <article key={plan.name} className="price-card text-center">
                <div className="price-label">7-day free trial</div>
                <h3 className="font-en mt-6 text-3xl font-black">{plan.name}</h3>
                <div className="font-en mt-4 text-5xl font-black">{plan.price}</div>
                <div className="mt-2 text-sm font-black text-slate-500">per month</div>
                <div className="mt-5 rounded-2xl bg-blue-50 p-4 font-black text-blue-700">
                  {plan.clients}
                </div>
                <p className="mt-5 leading-7 text-slate-600">{plan.text}</p>
                <div className="price-actions">
                  <a className="cchub-button-primary justify-center" href="/pricing">
                    View pricing
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cchub-container cchub-section-tight">
        <div className="rounded-[30px] bg-[#061A44] px-8 py-9 text-center text-white shadow-2xl">
          <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-black text-blue-100">
            7-day free trial
          </span>
          <h2 className="mt-4 text-3xl font-black">
            Stop searching. Start managing.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            Bring clients, tasks, documents, passwords, digital assets and knowledge
            into one organized workspace.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a className="cchub-button-primary" href="/pricing">Start free trial</a>
            <a className="cchub-button-dark" href="/">עברית</a>
          </div>
        </div>
      </section>

      <footer className="cchub-footer">
        <div className="cchub-container flex flex-col items-center justify-between gap-4 text-sm text-blue-100 md:flex-row">
          <div className="font-en font-bold">© 2026 CCHUB</div>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
            <a href="/pricing">Pricing</a>
            <a href="/faq">FAQ</a>
            <a href="/">עברית</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
