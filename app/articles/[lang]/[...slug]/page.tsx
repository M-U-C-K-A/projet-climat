"use client";
import { useEffect, useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRightIcon, ExternalLinkIcon } from "@radix-ui/react-icons";

import { getTableOfContents, TableOfContents } from "@/lib/toc";
import { cn } from "@/lib/utils";
import { DashboardTableOfContents } from "@/components/toc";
import { badgeVariants } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { articles } from "@/lib/articles"; // Import des articles

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
  const [toc, setToc] = useState<TableOfContents | null>(null);

  useEffect(() => {
    const fetchDoc = async () => {
      const fetchedDoc = getDocFromParams(params);
      if (fetchedDoc) {
        setDoc(fetchedDoc);
        const toc = await getTableOfContents(fetchedDoc.body);
        setToc(toc);
      }
    };
    fetchDoc();
  }, [params]);

  if (!doc) {
    return <div className="flex items-center justify-center gap-4 m-auto w-full">
      <div className="mt-20">
        <h1 className="text-balance max-w-md text-6xl">Sorry! This article isn't available</h1>
        <p>The page you were looking for couldn't be found</p>
        <p className="text-muted-foreground mt-10">Go back to the <a href="/" className="text-destructive">home page</a> or vis our <a href="/" className="text-destructive">Help Center</a>.</p>
      </div>
      <div className="max-w-xl">
    <img src="/not-found.gif" alt="" />
      </div>
      </div>;
  }

  return (
    <div className="relative prose w-full min-w-full py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm leading-none text-muted-foreground">
          <div className="truncate">Docs</div>
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
                Docs
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
                API Reference
                <ExternalLinkIcon className="h-3 w-3" />
              </Link>
            )}
          </div>
        ) : null}
        <div className="pb-12 pt-8">
          <div dangerouslySetInnerHTML={{ __html: doc.body }} />
        </div>
      </div>
      {toc && (
        <div className="hidden text-sm xl:block">
          <div className="sticky top-16 -mt-10 pt-4">
            <ScrollArea className="pb-10">
              <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] py-12">
                <DashboardTableOfContents toc={toc} />
              </div>
            </ScrollArea>
          </div>
        </div>
      )}
    </div>
  );
}
