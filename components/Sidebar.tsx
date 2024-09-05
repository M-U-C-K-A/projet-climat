// components/Sidebar.tsx
import Link from "next/link";

interface SidebarProps {
  items: {
    text: string;
    id: string;
    level: number;
  }[];
}

export const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-lg">Table of Contents</h3>
      <ul className="list-none pl-0">
        {items.map(item => (
          <li key={item.id} className={`pl-${item.level * 2}`}>
            <Link href={`#${item.id}`} className="hover:underline">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
