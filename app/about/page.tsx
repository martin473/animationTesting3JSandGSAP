import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  GitHubInvertocatWhite,
  LinkedInInBugBlack,
  MailGlyph,
} from "../components/social-contact-icons";
import { SectionNav } from "../components/section-nav";
import { getAllPostMeta } from "@/lib/sawyer/load-posts";

export const metadata: Metadata = {
  title: "Sawyer Sweet",
  description:
    "Software engineer, writing, and contact—content mirrored from sawyersweet.net with Pittsburgh as the current base.",
};

const AVATAR = "/sawyer/avatar.jpg";

const skills = [
  "NextJS/Typescript/Tailwind",
  "Javascript/HTML/CSS",
  "SQL",
  "Python",
  "AWS",
  "Digital Ocean",
  "Vercel",
  "Github",
  "Git",
  "Docker",
  "Linux",
  "Pandas",
  "ML/AI/NLP",
  "Agile",
  "Scrum",
];

export default function SawyerPage() {
  const posts = getAllPostMeta();

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col px-6 pt-6 pb-14 sm:px-10">
      <div className="flex flex-col gap-5">
        <SectionNav current="about" />
        <header className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          About
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Sawyer Sweet
        </h1>
        <p className="text-lg text-muted-foreground">
          Software engineer ·{" "}
          <span className="text-foreground">Pittsburgh, PA</span>
        </p>
      </header>
      </div>

      <div className="mt-12 flex flex-col gap-12">
      <section className="grid gap-10 sm:grid-cols-[minmax(0,220px)_1fr] sm:items-start">
        <div className="mx-auto flex w-full max-w-[220px] flex-col gap-6 sm:mx-0">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl border bg-muted shadow-sm">
            <Image
              src={AVATAR}
              alt="Sawyer Sweet headshot"
              fill
              className="object-cover"
              sizes="220px"
              priority
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <div className="flex flex-wrap gap-2.5">
              <a
                className="inline-flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm transition-[opacity,transform] hover:opacity-90 active:scale-[0.98]"
                href="https://github.com/martin473"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GitHubInvertocatWhite className="h-4.5 w-auto" />
              </a>
              <a
                className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-background text-foreground shadow-sm transition-colors hover:bg-accent"
                href="https://www.linkedin.com/in/sawyersweet/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInInBugBlack />
              </a>
              <a
                className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-background text-foreground shadow-sm transition-colors hover:bg-accent"
                href="mailto:sawyervsweet@gmail.com"
                aria-label="Email"
              >
                <MailGlyph className="size-[1.2rem]" />
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-4 text-muted-foreground">
          <p className="leading-7">
            Sawyer is a Pittsburgh, PA based Software Engineer and Entrepreneur
            with experience leading technical teams. Their passion is in Audio,
            Creative Code, and Human Computer Interaction. They&apos;re comfortable working within
            multiple tech stacks and design paradigms, focusing on product
            usability, algorithmic performance, and design workflow.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Writing</h2>
          <p className="ps-1.5 text-sm text-muted-foreground">
            Written with zero AI assistance
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/about/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[1200/630] w-full bg-muted">
                <Image
                  src={post.heroImage}
                  alt=""
                  fill
                  className="object-cover transition-transform group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {post.date}
                </p>
                <h3 className="text-lg font-semibold leading-snug group-hover:underline group-hover:underline-offset-4">
                  {post.title}
                </h3>
                <p className="line-clamp-3 text-sm text-muted-foreground">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      </div>
    </main>
  );
}
