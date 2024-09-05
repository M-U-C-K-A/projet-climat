// lib/toc.ts
export interface TableOfContentsItem {
  text: string;
  id: string;
  level: number;
}

export function generateTOC(content: string): TableOfContentsItem[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(content, "text/html");
  const headings = Array.from(doc.querySelectorAll("h2, h3, h4"));

  return headings.map(heading => ({
    text: heading.textContent || "",
    id: heading.id,
    level: parseInt(heading.tagName.charAt(1)), // Niveau de l'en-tête (h2 -> 2, h3 -> 3, etc.)
  }));
}
