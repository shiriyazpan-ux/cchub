import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CCHUB | Customer Control Hub",
  description:
    "CCHUB organizes clients, tasks, digital assets and business information, with documents, knowledge, automations, credentials and permissions available by plan.",
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
      "Manage clients, tasks, digital assets and business information, with clearly defined features for each plan.",
    url: "https://cchub-dusky.vercel.app/en",
    siteName: "CCHUB",
    locale: "en_US",
    type: "website",
  },
};

const features = [
  {
    title: "Client Management",
    icon: "👥",
    availability: "Solo Pro and above",
    text: "Keep every client organized with the tools included in the selected plan, all connected to one clear client file.",
  },
  {
    title: "Tasks & Follow-up",
    icon: "✅",
    availability: "Solo Pro and above",
    text: "Manage daily work by client and digital asset, with statuses, due dates, time tracking and cost awareness.",
  },
  {
    title: "Documents, Knowledge & Credentials",
    icon: "🔒",
    availability: "Premium / Enterprise",
    text: "Keep documents and knowledge in Premium, and encrypted access credentials with advanced permissions in Enterprise.",
  },
  {
    title: "Digital Assets",
    icon: "🧊",
    availability: "Solo Pro and above",
    text: "Manage websites, domains, platforms, accounts and systems connected to each client.",
  },
  {
    title: "Knowledge Base",
    icon: "📘",
    availability: "Premium and above",
    text: "Save decisions, notes, procedures and important client knowledge so it does not disappear in conversations.",
  },
  {
    title: "Excel & Automations",
    icon: "🔗",
    availability: "Varies by plan",
    text: "Import from Excel, export data in supported plans and connect workflows using Make or Zapier.",
  },
];

const plans = [
  {
    name: "Solo Pro",
    price: "₪99",
    clients: "Up to 200 clients",
    text: "For a solo business that wants to start working in a more organized way.",
  },
  {
    name: "Premium",
    price: "₪199",
    clients: "Up to 1,000 clients",
    text: "For businesses that need leads, documents, knowledge, export, reports and automations.",
  },
  {
    name: "Enterprise",
    price: "₪399",
    clients: "Up to 5,000 clients",
    text: "For teams that need encrypted credentials, users and advanced permissions.",
  },
];

export default function EnglishPage() {
  return (
    <main dir="ltr" className="min-h-screen bg-[#F6FAFF] text-[#071B4D]">

      <section className="relative overflow-hidden border-b border-blue-100">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#F7FBFF_0%,#EEF6FF_100%)]" />

        <div className="cchub-container relative grid items-center gap-10 py-16 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <span className="cchub-trial-badge-strong">Customer Control Hub</span>
            <h1 className="cchub-title-xl mt-5">
              Manage client work and business information in one organized place
            </h1>
            <p className="cchub-text mt-5">
              CCHUB helps service businesses organize clients, tasks, digital assets,
              notes, time and costs. Documents, knowledge, automations, encrypted
              credentials and advanced permissions are available according to plan.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a className="cchub-button-primary" href="/pricing">
                Start 14-day free trial
              </a>
              <Link className="cchub-button-secondary" href="/">
                Go to Hebrew site
              </Link>
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
                  Interface preview
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
              <span className="mt-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700">
                {feature.availability}
              </span>
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
              All plans include a 14-day free trial. Choose the plan based on the
              number of clients, the level of control and the features your business needs.
              A valid payment method is required; the trial total is ₪0 and the selected
              subscription renews automatically unless canceled before the trial ends.
            </p>
          </div>

          <div className="mt-9 grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <article key={plan.name} className="price-card text-center">
                <div className="price-label">14-day free trial</div>
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
            14-day free trial
          </span>
          <h2 className="mt-4 text-3xl font-black">
            Stop searching. Start managing.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            Bring clients, tasks, digital assets and business information into one
            workspace, with additional capabilities according to plan.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a className="cchub-button-primary" href="/pricing">Start free trial</a>
            <Link className="cchub-button-dark" href="/">עברית</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
