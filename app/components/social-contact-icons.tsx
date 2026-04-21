import Image from "next/image";

/**
 * GitHub: verbatim `GitHub_Invertocat_White.svg` from GitHub’s brand pack
 * (https://github.com/logos → “Download the logo files”). Permitted for
 * social buttons linking to GitHub.
 *
 * LinkedIn: `InBug-Black.png` from LinkedIn’s official `in-logo.zip`
 * (https://brand.linkedin.com/downloads). LinkedIn does not ship an “in”
 * bug SVG in that bundle; PNG is the official vector raster asset we can embed.
 */

export function GitHubInvertocatWhite({ className }: { className?: string }) {
  return (
    <img
      src="/brand/github-invertocat-white.svg"
      alt=""
      aria-hidden
      className={className}
      width={98}
      height={96}
      decoding="async"
    />
  );
}

/** Official black Invertocat (light UI); pair with `dark:invert` on dark backgrounds. */
export function GitHubInvertocatBlack({ className }: { className?: string }) {
  return (
    <img
      src="/brand/github-invertocat-black.svg"
      alt=""
      aria-hidden
      className={className}
      width={98}
      height={96}
      decoding="async"
    />
  );
}

export function LinkedInInBugBlack({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/linkedin-inbug-black.png"
      alt=""
      width={840}
      height={779}
      className={
        className ?? "size-4.5 object-contain object-center"
      }
      aria-hidden
    />
  );
}

/** Generic envelope (email has no single “official company” mark). */
export function MailGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M2.25 6.75c0-.414.336-.75.75-.75h18c.414 0 .75.336.75.75v10.5a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V6.75z" />
      <path d="M2.25 6.75 12 13.5l9.75-6.75" />
    </svg>
  );
}
