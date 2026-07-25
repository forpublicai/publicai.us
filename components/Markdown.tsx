import ReactMarkdown from "react-markdown";

export default function Markdown({ content }: { content: string }) {
  return (
    <ReactMarkdown
      className="pai-prose"
      components={{
        a: ({ href, children }) => {
          const isExternal =
            href?.startsWith("http") || href?.startsWith("mailto:");
          return (
            <a
              href={href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
            >
              {children}
            </a>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
