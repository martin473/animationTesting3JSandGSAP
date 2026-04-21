import type { Metadata } from "next";
import Link from "next/link";
import ScreenshotCarousel from "../screenshot-carousel";

export const metadata: Metadata = {
  title: "Streamer — MVP Case Study",
  description:
    "A one-week Android and cloud-server MVP built with a Cursor AI agent—streaming media from anywhere with playlist, shuffle, upload, and background playback.",
};

/** Swap in your public repo or store links when ready. */
const STREAMER_LINKS = {
  github: "",
  live: "",
};

const highlights = [
  "Shipped a market-ready Android MVP in one week using a Cursor AI agent loop: tight feedback cycles on UX, architecture, and edge cases instead of weeks of boilerplate.",
  "End-to-end personal media streaming from anywhere: uploads, playlists, shuffle, and playback that keeps running in the background without dropping sessions.",
  "Industry-shaped stack for real-time and scale: WebSockets, cloud-backed services, and OAuth so the product is credible on day one—not a throwaway prototype.",
];

const velocityPillars = [
  {
    title: "Rapid debugging under real usage",
    body: "Built an app I use every day. That forced fast root-cause fixes, clearer error handling, and playback paths that survive lock screens, task switching, and flaky networks.",
  },
  {
    title: "UX as a first-class constraint",
    body: "Playlist building, queueing, shuffle, and library browsing designed for one-handed use.",
  },
  {
    title: "Production architecture",
    body: "Built for the real world: realtime control, cloud coordination for sessions and media, auth that separates identity and current sessions from library data.",
  },
];

const strategyCalls = [
  {
    headline: "Compress time-to-learning",
    detail:
      "A week of focused building put a working product in front of real people. Features were road tested in hours or even seconds. All in the same time it would take a full team to build a single feature.",
  },
  {
    headline: "Real domain expertise",
    detail:
      "Infrastructure choices from human experience and product vision (database choices, cloud architecture choices, proper division of responsibilities between client and server) overcome the shortcomings of AI that keep non-technical vibe coders spinning in circles.",
  },
];

/** Product captures in public/case-study/ (1080×2400). */
const W = 1080;
const H = 2400;

const sawyerCursorCards: { bold: string; rest: string }[] = [
  { bold: "Deliverable product", rest: " on day 1." },
  { bold: "Expert knowledge", rest: " combined with AI-paced development." },
  { bold: "Better understanding", rest: " of project infrastructure at scale." },
  { bold: "Rapid testing", rest: "." },
  { bold: "Rapid product", rest: " iteration." },
  { bold: "A fully built MVP", rest: " you use daily." },
];

const screenshots = [
  {
    title: "Streamer — now playing",
    src: "/case-study/streamer-hero.png",
    alt: "Streamer playback / now playing",
    width: W,
    height: H,
  },
  {
    title: "Streamer — library search",
    src: "/case-study/streamer-search.png",
    alt: "Streamer library with search",
    width: W,
    height: H,
  },
  {
    title: "Streamer — playlists",
    src: "/case-study/streamer-playlist.png",
    alt: "Streamer playlists",
    width: W,
    height: H,
  },
  {
    title: "Streamer — deleted tracks",
    src: "/case-study/streamer-deleted.png",
    alt: "Streamer deleted tracks view",
    width: W,
    height: H,
  },
];

export default function StreamerPortfolioPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-10 px-6 py-14 sm:px-10">
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <p className="font-medium uppercase tracking-wider text-muted-foreground">
            Portfolio Case Study
          </p>
          <span className="hidden sm:inline" aria-hidden>
            ·
          </span>
          <Link
            href="/portfolio"
            className="font-medium text-foreground underline underline-offset-4 hover:opacity-80"
          >
            Lawbee case study
          </Link>
        </div>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Streamer</h1>
        <p className="max-w-3xl text-lg text-muted-foreground">
          A fully functional Android and Cloud Server MVP built in a week with a Cursor AI agent.
          It already replaced Spotify in my own listening because it streams media from anywhere,
          with the kind of playlist, shuffle, upload, and background behavior users expect from
          industry apps.
        </p>
        {(STREAMER_LINKS.live || STREAMER_LINKS.github) ? (
          <div className="flex flex-wrap items-center gap-3 pt-2 text-sm">
            {STREAMER_LINKS.live ? (
              <a
                className="rounded-full bg-primary px-4 py-2 text-primary-foreground transition-opacity hover:opacity-90"
                href={STREAMER_LINKS.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live / demo
              </a>
            ) : null}
            {STREAMER_LINKS.github ? (
              <a
                className="rounded-full border px-4 py-2 transition-colors hover:bg-accent"
                href={STREAMER_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            ) : null}
          </div>
        ) : null}
        <div className="pt-2">
          <ScreenshotCarousel screenshots={screenshots} />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">A week with Sawyer and Cursor</h2>
          <ul className="list-none space-y-3">
            {sawyerCursorCards.map((card) => (
              <li key={card.bold} className="rounded-xl border p-4">
                <span className="font-medium">{card.bold}</span>
                {card.rest}
              </li>
            ))}
          </ul>
        </div>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Project snapshot</h2>
        <div className="grid gap-3 rounded-xl border p-5">
          <p>
            <span className="font-medium">Role:</span> Product-minded builder (UX, system design,
            implementation)
          </p>
          <p>
            <span className="font-medium">Build mode:</span> One-week MVP with Cursor AI agent
          </p>
          <p>
            <span className="font-medium">Primary goal:</span> Ship something real enough to test
            demand and daily habit—not a mock
          </p>
          <p>
            <span className="font-medium">Focus areas:</span> Rapid debugging, streaming UX,
            WebSockets + cloud architecture, OAuth
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">What shipped</h2>
        <ul className="space-y-3">
          {highlights.map((item) => (
            <li key={item} className="rounded-xl border p-4">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Velocity, UX, and systems</h2>
        <div className="space-y-3">
          {velocityPillars.map((item) => (
            <article key={item.title} className="rounded-xl border p-5">
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Why this kind of MVP matters</h2>
        <div className="space-y-3">
          {strategyCalls.map((item) => (
            <article key={item.headline} className="rounded-xl border p-5">
              <h3 className="text-lg font-medium">{item.headline}</h3>
              <p className="mt-2 text-muted-foreground">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
}
