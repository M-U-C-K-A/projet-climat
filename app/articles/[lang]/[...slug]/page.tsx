"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRightIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { TableOfContentsItem, generateTOC } from "@/lib/toc";
import { cn } from "@/lib/utils";
import { badgeVariants } from "@/components/ui/badge";
import { articles } from "@/lib/articles"; // Import des articles
import { Sidebar } from "@/components/Sidebar";
import { Link2 } from "lucide-react";

interface DocPageProps {
  params: {
    lang: string;
    slug: string[];
  };
}

const getDocFromParams = ({ lang, slug }: DocPageProps["params"]) => {
  const slugPath = slug.join("-");
  const langArticles = articles[lang as keyof typeof articles];
  return langArticles?.[slugPath as keyof typeof langArticles] || null;
};

export default function DocPage({ params }: DocPageProps) {
  const [doc, setDoc] = useState<any>(null);
  const [toc, setToc] = useState<TableOfContentsItem[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoc = async () => {
      const fetchedDoc = getDocFromParams(params);
      if (fetchedDoc) {
        setDoc(fetchedDoc);

        // On génère le TOC à partir du contenu du BodyComponent
        const bodyContent = fetchedDoc.BodyComponent?.toString() || "";
        const tocItems = generateTOC(bodyContent);
        setToc(tocItems);
      }
      setLoading(false); // Stop loading after fetching
    };

    fetchDoc();
  }, [params]);

  if (loading) {
    return <div className="text-center">Loading...</div>; // État de chargement
  }

  if (!doc) {
    return (
      <div className="flex items-center justify-center gap-4 m-auto w-full">
        <div className="mt-20">
          <h1 className="text-balance max-w-md text-6xl">Sorry! This article isn't available</h1>
          <p>The page you were looking for couldn't be found</p>
          <p className="text-muted-foreground mt-10">
            Go back to the <a href="/" className="text-destructive">home page</a> or visit our 
            <a href="/" className="text-destructive"> Help Center</a>.
          </p>
        </div>
        <div className="max-w-xl">
          <img src="/not-found.gif" alt="" />
        </div>
      </div>
    );
  }

  const BodyComponent = doc.BodyComponent;

  return (
    <div className="relative prose dark:prose-invert w-full min-w-full py-6 lg:gap-10 lg:py-8 flex">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm leading-none text-muted-foreground">
          <div className="truncate"><Link href="/articles">Articles</Link></div>
          <ChevronRightIcon className="h-3.5 w-3.5" />
          <div className="text-foreground">{doc.title}</div>
        </div>
        <div className="space-y-2">
          <h1 className={cn("scroll-m-20 text-3xl font-bold tracking-tight")}>
            {doc.title}
          </h1>
          {doc.description && (
            <p className="text-base text-muted-foreground">{doc.description}</p>
          )}
        </div>
        {doc.links ? (
          <div className="flex items-center space-x-2 pt-4">
            {doc.links?.doc && (
              <Link
                href={doc.links.doc}
                target="_blank"
                rel="noreferrer"
                className={cn(badgeVariants({ variant: "secondary" }), "gap-1")}
              >
                Source
                <ExternalLinkIcon className="h-3 w-3" />
              </Link>
            )}
            {doc.links?.api && (
              <Link
                href={doc.links.api}
                target="_blank"
                rel="noreferrer"
                className={cn(badgeVariants({ variant: "secondary" }), "gap-1")}
              >
                Authors
                <Link2 className="h-3 w-3" />
              </Link>
            )}
          </div>
        ) : null}
        <div className="pb-12 pt-8">
          {BodyComponent ? <BodyComponent /> : <p>No content available</p>}
        </div>
      </div>
      {toc && toc.length > 0 ? (
        <div className="hidden text-sm xl:block">
          <div className="sticky top-16 -mt-10 pt-4">
              <Sidebar items={toc} />
          </div>
        </div>
      ) : (
        <div className="hidden text-sm xl:block">No Table of Contents available</div> 
      )}
    </div>
  );
}
