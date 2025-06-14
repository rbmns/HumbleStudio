
import React from "react";

export function renderContentWithBullets(content?: string) {
  if (!content) return null;
  // Split input string into non-empty trimmed lines
  const lines = content.split('\n').map(line => line.trim()).filter(line => line !== '');
  // Check if most lines look like bullets (start with "-", "*" or numbered "1.")
  const isBulletList =
    lines.length > 0 &&
    lines.filter(line => /^(-|\*|\d+\.)\s/.test(line)).length >= Math.max(1, Math.floor(lines.length * 0.7));
  if (isBulletList) {
    return (
      <ul className="list-disc ml-6 space-y-2">
        {lines.map((line, idx) => {
          // Remove bullet marker for clean list item
          const text = line.replace(/^(-|\*|\d+\.)\s/, '');
          return <li key={idx}>{text}</li>;
        })}
      </ul>
    );
  }
  // fallback to paragraph(s)
  return lines.map((line, idx) => (
    <p key={idx} className="mb-4">{line}</p>
  ));
}
