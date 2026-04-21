import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const mdLink =
  "font-medium text-foreground underline underline-offset-4 hover:opacity-80 break-words";

export function MarkdownBody({ children }: { children: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h2: ({ children: c }) => (
          <h2 className="mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
            {c}
          </h2>
        ),
        h3: ({ children: c }) => (
          <h3 className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
            {c}
          </h3>
        ),
        p: ({ children: c }) => (
          <p className="mt-5 leading-7 text-muted-foreground first:mt-0">{c}</p>
        ),
        a: ({ href, children: c }) => {
          const external = href?.startsWith("http");
          if (external && href) {
            return (
              <a
                href={href}
                className={mdLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {c}
              </a>
            );
          }
          if (href?.startsWith("/")) {
            return (
              <Link href={href} className={mdLink}>
                {c}
              </Link>
            );
          }
          return (
            <a href={href} className={mdLink}>
              {c}
            </a>
          );
        },
        ul: ({ children: c }) => (
          <ul className="my-5 list-disc space-y-2 pl-6 text-muted-foreground">
            {c}
          </ul>
        ),
        ol: ({ children: c }) => (
          <ol className="my-5 list-decimal space-y-2 pl-6 text-muted-foreground">
            {c}
          </ol>
        ),
        li: ({ children: c }) => <li className="leading-7">{c}</li>,
        strong: ({ children: c }) => (
          <strong className="font-semibold text-foreground">{c}</strong>
        ),
        em: ({ children: c }) => <em className="italic">{c}</em>,
        blockquote: ({ children: c }) => (
          <blockquote className="mt-5 border-l-2 pl-4 text-muted-foreground italic">
            {c}
          </blockquote>
        ),
        code: ({ className, children: c }) => {
          const inline = !className;
          if (inline) {
            return (
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
                {c}
              </code>
            );
          }
          return (
            <code className={className}>{c}</code>
          );
        },
        pre: ({ children: c }) => (
          <pre className="my-5 overflow-x-auto rounded-xl border bg-muted/50 p-4 text-sm">
            {c}
          </pre>
        ),
        hr: () => <hr className="my-10 border-border" />,
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
