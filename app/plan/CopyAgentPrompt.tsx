"use client";

import { useState } from "react";

export default function CopyAgentPrompt({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="mt-3 space-y-2">
      <details className="border border-[var(--pai-gray-400)] bg-white">
        <summary className="cursor-pointer px-3 py-2 pai-body">
          Agent prompt (expand)
        </summary>
        <pre className="overflow-x-auto whitespace-pre-wrap border-t border-[var(--pai-gray-400)] p-3 pai-body text-[13px] leading-snug">
          {text}
        </pre>
      </details>
      <button
        type="button"
        onClick={copy}
        className="pai-body border border-[var(--pai-gray-400)] px-3 py-2 hover:border-brand"
      >
        {copied ? "Copied" : "Copy for your agent"}
      </button>
    </div>
  );
}
