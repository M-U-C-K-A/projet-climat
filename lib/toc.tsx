// lib/toc.ts
export interface TableOfContents {
  items: Item[];
}

export interface Item {
  href: string;
  name: string;
  level: number;
  items?: Item[];
}

export async function getTableOfContents(body: string): Promise<TableOfContents> {
  const parser = new DOMParser();
  const doc = parser.parseFromString(body, 'text/html');
  const headers = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
  const items: Item[] = [];

  headers.forEach(header => {
    const level = parseInt(header.tagName[1]); // Get the level from tag name (e.g., 'h2' -> 2)
    const id = header.id;
    const name = header.textContent || '';

    if (id) {
      items.push({
        href: `#${id}`,
        name,
        level,
      });
    }
  });

  return { items: nestItems(items) };
}

function nestItems(items: Item[]): Item[] {
  const nestedItems: Item[] = [];
  const stack: { item: Item; children: Item[] }[] = [];

  items.forEach(item => {
    const level = item.level;

    while (stack.length && stack[stack.length - 1].item.level >= level) {
      const { item: parentItem, children } = stack.pop()!;
      parentItem.items = children;
      if (stack.length) {
        stack[stack.length - 1].children.push(parentItem);
      } else {
        nestedItems.push(parentItem);
      }
    }

    stack.push({ item, children: [] });
  });

  while (stack.length) {
    const { item, children } = stack.pop()!;
    item.items = children;
    if (stack.length) {
      stack[stack.length - 1].children.push(item);
    } else {
      nestedItems.push(item);
    }
  }

  return nestedItems;
}
