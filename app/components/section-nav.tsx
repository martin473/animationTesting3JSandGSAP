import Link from "next/link";
import {
  GitHubInvertocatBlack,
  LinkedInInBugBlack,
  MailGlyph,
} from "./social-contact-icons";

export type SectionNavKey =
  | "creativecoding"
  | "lawbee"
  | "streamer"
  | "about";

const SECTIONS: { id: SectionNavKey; href: string; label: string }[] = [
  { id: "creativecoding", href: "/creativecoding", label: "Creative coding" },
  { id: "lawbee", href: "/lawbee", label: "Lawbee" },
  { id: "streamer", href: "/streamer", label: "Streamer" },
  { id: "about", href: "/about", label: "Sawyer" },
];

const CONTACT_LINKS = [
  {
    href: "https://github.com/martin473",
    label: "GitHub",
    render: () => (
      <GitHubInvertocatBlack className="h-[1em] w-auto dark:invert" />
    ),
  },
  {
    href: "https://www.linkedin.com/in/sawyersweet/",
    label: "LinkedIn",
    render: () => (
      <LinkedInInBugBlack className="size-[1em] object-contain object-center dark:invert" />
    ),
  },
  {
    href: "mailto:sawyervsweet@gmail.com",
    label: "Email",
    render: () => (
      <MailGlyph className="size-[1em] stroke-[1.35] text-current" />
    ),
  },
] as const;

export function SectionNav({ current }: { current: SectionNavKey }) {
  return (
    <nav
      aria-label="Main sections"
      className="border-b border-border pb-4"
    >
      <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
        {SECTIONS.map((item) => (
          <li key={item.id}>
            {item.id === current ? (
              <span
                className="font-semibold text-foreground"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
        <li
          className="mx-0.5 hidden h-[1em] w-px shrink-0 self-center bg-border sm:block"
          aria-hidden
        />
        {CONTACT_LINKS.map(({ href, label, render }) => (
          <li key={href} className="shrink-0">
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={
                href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              aria-label={label}
              className="group inline-flex items-center justify-center text-muted-foreground transition-colors hover:text-foreground [&_img]:opacity-65 [&_img]:transition-opacity group-hover:[&_img]:opacity-100"
            >
              {render()}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
