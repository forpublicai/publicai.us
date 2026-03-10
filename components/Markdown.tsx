import ReactMarkdown from "react-markdown";

export default function Markdown({ content }: { content: string }) {
  return (
    <ReactMarkdown
      className="prose prose-gray max-w-none prose-p:text-gray-700 prose-a:text-brand prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900"
      components={{
        a: ({ href, children }) => (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
