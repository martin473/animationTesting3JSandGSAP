import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getPost } from "@/lib/sawyer/load-posts";
import { MarkdownBody } from "../../markdown-body";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post" };
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [{ url: post.heroImage }],
    },
  };
}

export default async function SawyerBlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const canonicalOriginal = `https://www.sawyersweet.net/blog/${post.slug}`;

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-14 sm:px-10">
      <Link
        href="/about"
        className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
      >
        ← About
      </Link>

      <article className="mt-8">
        <div className="relative mb-8 aspect-[1200/630] w-full overflow-hidden rounded-2xl border bg-muted">
          <Image
            src={post.heroImage}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 48rem"
          />
        </div>

        <header className="space-y-3">
          <p className="text-sm text-muted-foreground">{post.date}</p>
          <h1 className="text-4xl font-semibold tracking-tight">{post.title}</h1>
          <p className="text-lg text-muted-foreground">{post.description}</p>
        </header>

        <div className="mt-12">
          <MarkdownBody>{post.body}</MarkdownBody>
        </div>

        <footer className="mt-16 border-t pt-8 text-sm text-muted-foreground">
          <p>
            Originally published at{" "}
            <a
              href={canonicalOriginal}
              className="font-medium text-foreground underline underline-offset-4 hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              {canonicalOriginal}
            </a>
            . Body text was exported from the live site to preserve wording;
            headings and links follow common Markdown conventions.
          </p>
        </footer>
      </article>
    </main>
  );
}
