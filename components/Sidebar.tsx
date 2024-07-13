import { tv } from "tailwind-variants"; // Assurez-vous du bon chemin
import { useActiveItem } from "@/lib/hooks/useActiveItem";
import { Item } from "@/lib/buildNavigationStructure";

type Props = {
  items: Item[];
};

export function Sidebar({ items }: Props) {
  const activeHeading = useActiveItem();
  console.log('Sidebar items:', items); // Log items data

  if (!items || items.length === 0) {
    return null; // Ne pas afficher la sidebar si les items sont vides
  }

  return (
    <aside
      className="sticky top-24 -mt-10 h-[calc(100vh-3.5rem)] py-12"
      aria-label="Sidebar"
    >
      <div className="space-y-2">
        <p className="font-medium">On This Page</p>
        <Navigation items={items} level={1} active={activeHeading} />
      </div>
    </aside>
  );
}

const navigation = tv({
  base: "m-0 list-none",
  variants: {
    level: {
      1: "pl-0",
      2: "pl-4",
      3: "pl-8",
      4: "pl-12",
      5: "pl-16",
      6: "pl-20",
    },
  },
  defaultVariants: {
    level: 1,
  },
});
const link = tv({
  base: "inline-block no-underline transition-colors duration-300 ease-in-out hover:text-foreground font-normal text-muted-foreground",
  variants: {
    active: {
      true: "font-medium text-foreground",
    },
  },
  defaultVariants: {
    active: false,
  },
});

type NavigationProps = {
  items: Item[];
  level: keyof typeof navigation.variants.level;
  active: string | null;
};

function Navigation({ items, level, active }: NavigationProps) {
  console.log('Navigation items:', items); // Log items for navigation
  return (
    <ul className={navigation({ level })}>
      {items.map((item) => (
        <li key={item.href} className="mt-0 pt-2">
          <a
            href={item.href}
            className={link({ active: item.href.split("#")[1] === active })}
          >
            {item.name}
            {item.items && (
              <Navigation
                items={item.items}
                level={nextLevel(level)}
                active={active}
              />
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}

function nextLevel(level: number) {
  const nextLevel = level + 1;
  assertsIsValidLevel(nextLevel);
  return nextLevel;
}

function assertsIsValidLevel(level: number | string | symbol): asserts level is number {
  if (typeof level !== 'number' || level < 1 || level > 6) {
    throw new Error("Invalid level");
  }
}
