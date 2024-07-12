"use client"
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRightIcon, ExternalLinkIcon } from "@radix-ui/react-icons";

import { getTableOfContents } from "@/lib/toc";
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

async function getDocFromParams({ params }: DocPageProps) {
  const { lang, slug } = params;
  const slugPath = slug.join("-");

  const langArticles = articles[lang as keyof typeof articles];
  const doc = langArticles?.[slugPath as keyof typeof langArticles] || null;

  if (!doc) {
    return null;
  }

  return doc;
}

export async function generateStaticParams(): Promise<DocPageProps["params"][]> {
  const allDocs = Object.keys(articles).flatMap((lang) => {
    return Object.keys(articles[lang]).map((slug) => ({
      lang,
      slug: slug.split("-"),
    }));
  });

  return allDocs;
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams({ params });

  if (!doc) {
    return {
      notFound: true,
    };
  }

  const toc = await getTableOfContents(doc.body);

  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
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
            <p className="text-base text-muted-foreground">
              {doc.description}
            </p>
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
    </main>
  );
}
