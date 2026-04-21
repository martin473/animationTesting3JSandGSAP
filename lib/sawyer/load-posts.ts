import fs from "node:fs";
import path from "node:path";

const POSTS_DIR = path.join(process.cwd(), "content/sawyer/posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  heroImage: string;
};

export type Post = PostMeta & { body: string };

function parseFrontmatter(raw: string): { meta: Record<string, string>; body: string } {
  if (!raw.startsWith("---\n")) {
    throw new Error("Expected YAML frontmatter");
  }
  const end = raw.indexOf("\n---\n", 4);
  if (end === -1) {
    throw new Error("Unclosed frontmatter");
  }
  const fm = raw.slice(4, end);
  const body = raw.slice(end + 5);
  const meta: Record<string, string> = {};
  for (const line of fm.split("\n")) {
    const m = line.match(/^([\w]+):\s*(.*)$/);
    if (!m) continue;
    let val = m[2].trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    meta[m[1]] = val;
  }
  return { meta, body: body.trim() };
}

function parsePostFile(filePath: string): Post {
  const raw = fs.readFileSync(filePath, "utf8");
  const { meta, body } = parseFrontmatter(raw);
  return {
    slug: meta.slug,
    title: meta.title,
    date: meta.date,
    description: meta.description,
    heroImage: meta.heroImage,
    body,
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllPostMeta(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => parsePostFile(path.join(POSTS_DIR, f)))
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}

export function getPost(slug: string): Post | null {
  const file = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  return parsePostFile(file);
}
