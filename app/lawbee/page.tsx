import type { Metadata } from "next";
import { SectionNav } from "../components/section-nav";
import ScreenshotCarousel from "../components/screenshot-carousel";

export const metadata: Metadata = {
  title: "Lawbee Portfolio Case Study",
  description:
    "A portfolio-ready case study for Lawbee, covering goals, process, technical decisions, and outcomes.",
};

const highlights = [
  "Built a legislation tracking product aimed at issue-focused NGOs to monitor bills tied to fundraising and advocacy priorities.",
  "Implemented a responsive UI with reusable sections and consistent styling for fast iteration and maintainability.",
  "Structured content and UX flows to support discoverability, clarity, and quick scanning of legislative information.",
];

const industryPractices = [
  {
    title: "Consistent, scalable UI system",
    body: "Built with Tailwind CSS and a component kit approach (shadcn/ui-style primitives) to keep spacing/typography/interaction patterns consistent across the product.",
  },
  {
    title: "Secure authentication and per-user data access",
    body: "Integrated Supabase authentication (OAuth + email/password) and enforced per-user access at the database layer using Supabase’s security model (RLS/policies) rather than trusting the client.",
  },
  {
    title: "Server-side middleware for protected routes",
    body: "Used middleware/route protection patterns to keep authenticated pages private and ensure sensitive user/session data is never exposed unintentionally.",
  },
  {
    title: "Trusted legislative data source",
    body: "Integrated the LegiScan API to ingest standardized legislative data used by NGOs across the U.S., with frequent refresh cadence (e.g. hourly updates) to keep bill status current.",
  },
];

const technicalDecisions = [
  {
    decision: "Lean visual system with reusable sections",
    why: "Keeps the experience consistent across pages while making future edits quicker.",
    tradeoff:
      "Reduced one-off styling freedom in exchange for stronger maintainability.",
  },
  {
    decision: "Conversion-first page hierarchy",
    why: "Guides users from trust signals to service details and finally to contact actions.",
    tradeoff:
      "Reduced space for secondary details in exchange for faster scanning and clearer next steps.",
  },
  {
    decision: "SEO-aware content structure",
    why: "Supports organic discovery by aligning headings, copy, and page intent.",
    tradeoff:
      "Content structure needed stricter consistency, which required extra editorial discipline.",
  },
];

const nextSteps = [
  "Add analytics-backed conversion funnel tracking for inquiry and consultation events.",
  "Introduce a lightweight CMS workflow for faster non-technical content edits.",
  "Run targeted accessibility audits and improve contrast, focus states, and form affordances.",
];

const desktopScreenshots = [
  {
    title: "www.lawbee.org - home (desktop)",
    src: "/case-study/lawbee-home-desktop-auth.png",
    alt: "Lawbee homepage on desktop",
    width: 1440,
    height: 900,
  },
  {
    title: "www.lawbee.org/login (desktop)",
    src: "/case-study/lawbee-login-desktop.png",
    alt: "Lawbee login page on desktop",
    width: 1440,
    height: 900,
  },
  {
    title: "Homepage search (industry) (desktop)",
    src: "/case-study/lawbee-search-industry-desktop-auth.png",
    alt: "Lawbee homepage with industry in the search field on desktop",
    width: 1440,
    height: 900,
  },
  {
    title: "www.lawbee.org/mybills (desktop)",
    src: "/case-study/lawbee-mybills-desktop-auth.png",
    alt: "Lawbee my bills page on desktop",
    width: 1440,
    height: 900,
  },
];

const mobileScreenshots = [
  {
    title: "www.lawbee.org - home (mobile)",
    src: "/case-study/lawbee-home-mobile-auth.png",
    alt: "Lawbee homepage on mobile",
    width: 390,
    height: 844,
  },
  {
    title: "www.lawbee.org/login (mobile)",
    src: "/case-study/lawbee-login-mobile.png",
    alt: "Lawbee login page on mobile",
    width: 390,
    height: 844,
  },
  {
    title: "Homepage search (industry) (mobile)",
    src: "/case-study/lawbee-search-industry-mobile-auth.png",
    alt: "Lawbee homepage with industry in the search field on mobile",
    width: 390,
    height: 844,
  },
  {
    title: "www.lawbee.org/mybills (mobile)",
    src: "/case-study/lawbee-mybills-mobile-auth.png",
    alt: "Lawbee my bills page on mobile",
    width: 390,
    height: 844,
  },
];

const screenshots = [...desktopScreenshots, ...mobileScreenshots];

export default function PortfolioPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col px-6 pt-6 pb-14 sm:px-10">
      <div className="flex flex-col gap-5">
        <SectionNav current="lawbee" />
        <header className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Portfolio case study
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Lawbee</h1>
        <p className="text-sm text-muted-foreground">
          Developed with zero AI assistance
        </p>
        <p className="max-w-3xl text-lg text-muted-foreground">
          Built Lawbee to allow issues focused NGOs regularly track legislation
          around core fundraising issues in minutes.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-2 text-sm">
          <a
            className="rounded-full bg-primary px-4 py-2 text-primary-foreground transition-opacity hover:opacity-90"
            href="https://www.lawbee.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Site
          </a>
          <a
            className="rounded-full border px-4 py-2 transition-colors hover:bg-accent"
            href="https://github.com/martin473/lawbee"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </div>
        <div className="space-y-3 pt-2">
          <p className="text-muted-foreground">
            Captures from the live product at{" "}
            <a
              href="https://www.lawbee.org"
              className="font-medium text-foreground underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.lawbee.org
            </a>
            : marketing home, login, on-page search with the term &quot;industry&quot;, and the{" "}
            <a
              href="https://www.lawbee.org/mybills"
              className="font-medium text-foreground underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              /mybills
            </a>{" "}
            view in desktop and mobile widths (anonymous session—shows sign-in if not logged in).
          </p>
          <ScreenshotCarousel screenshots={screenshots} />
        </div>
      </header>
      </div>

      <div className="mt-10 flex flex-col gap-10">
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Project Snapshot</h2>
        <div className="grid grid-cols-1 gap-3 rounded-xl border p-5">
          <p>
            <span className="font-medium">Role:</span> Product Designer &
            Developer
          </p>
          <p>
            <span className="font-medium">Project Type:</span> Client-facing web
            platform
          </p>
          <p>
            <span className="font-medium">Primary Goal:</span> Build trust and
            generate qualified inquiries
          </p>
          <p>
            <span className="font-medium">Focus Areas:</span> UX, content
            architecture, performance, SEO
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">What I Built</h2>
        <ul className="space-y-3">
          {highlights.map((item) => (
            <li key={item} className="rounded-xl border p-4">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Industry-Standard Practices</h2>
        <div className="space-y-3">
          {industryPractices.map((item) => (
            <article key={item.title} className="rounded-xl border p-5">
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Technical Decisions</h2>
        <div className="space-y-3">
          {technicalDecisions.map((item) => (
            <article key={item.decision} className="rounded-xl border p-5">
              <h3 className="text-lg font-medium">{item.decision}</h3>
              <p className="mt-2 text-muted-foreground">
                <span className="font-medium text-foreground">Why:</span>{" "}
                {item.why}
              </p>
              <p className="mt-1 text-muted-foreground">
                <span className="font-medium text-foreground">Tradeoff:</span>{" "}
                {item.tradeoff}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Results & Next Iteration</h2>
        <p className="text-muted-foreground">
          Current results are strongest in qualitative feedback and clearer user
          flow. Next, I would layer in direct measurement to quantify conversion
          and retention impact.
        </p>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          {nextSteps.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      </div>

    </main>
  );
}
