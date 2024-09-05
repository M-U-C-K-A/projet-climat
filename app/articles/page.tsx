"use client";

import { useState } from 'react';
import { articles } from '@/lib/articles';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Header } from '@/components/Header';
import { Link } from 'lucide-react';
import NextLink from 'next/link';

interface Article {
  title: string;
  path: string;
  description: string;
  image: string;
  date_created: string;
  views: number;
  author: {
    name: string;
    email: string;
  };
  tags: string[];
  BodyComponent: React.FC;
  links: {
    doc: string;
    api: string;
  };
}

const formatDate = (timestamp: string): string => {
  const date = new Date(parseInt(timestamp) * 1000);
  return format(date, 'dd MMMM yyyy');
};

const ArticlesPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Combine articles from all languages when "all" is selected
  const allArticles: Article[] = selectedLanguage === 'all'
    ? Object.values(articles).flatMap(langArticles => Object.values(langArticles))
    : Object.values(articles[selectedLanguage] || {});

  const tags = Array.from(new Set(allArticles.flatMap(article => article.tags)));

  const handleTagClick = (tag: string) => {
    setSelectedTags(prevTags =>
      prevTags.includes(tag)
        ? prevTags.filter(t => t !== tag)
        : [...prevTags, tag]
    );
  };

  const handleReset = () => {
    setSelectedLanguage('all');
    setSelectedTags([]);
    setSearchTerm('');
  };

  const filteredArticles = allArticles.filter(article => {
    const matchesTags = selectedTags.length === 0 || selectedTags.every(tag => article.tags.includes(tag));
    const matchesSearchTerm = article.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTags && matchesSearchTerm;
  });

  const filteredArticlesCount = filteredArticles.length;

  return (
    <>
      <Header />
      <ResizablePanelGroup direction="horizontal" className="min-h-screen gap-4">
        <ResizablePanel defaultSize={22}>
          <div className="flex flex-col gap-4 m-5 mt-24 sticky max-w-sm mx-auto">
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Select value={selectedLanguage} onValueChange={(value) => setSelectedLanguage(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a language" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Language</SelectLabel>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="fr">Français</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                  <SelectItem value="ru">россия</SelectItem>
                  <SelectItem value="ch">中国人</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button
              onClick={handleReset}
            >
              Reset Settings
            </Button>
            <div className="flex gap-2 flex-wrap">
              {tags.map((tag, index) => (
                <Badge
                  className='cursor-pointer'
                  key={index}
                  onClick={() => handleTagClick(tag)}
                  variant={selectedTags.includes(tag) ? 'secondary' : 'default'}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle aria-label='resize this window' />
        <ResizablePanel defaultSize={78} minSize={65}>
          <div className="container mx-auto">
            <div className="flex gap-2 flex-col mt-20">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                Our articles!
              </h2>
              <div className='flex justify-between'>
                <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                  List of our articles about biodiversity and sociological research in the United States
                </p>
                <p>
                  {filteredArticlesCount} {filteredArticlesCount === 1 ? 'article found' : 'articles found'}
                </p>
              </div>
            </div>
            {filteredArticlesCount === 0 ? (
              <p className="text-center text-lg mt-4">No articles found.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article, index) => (
                  <NextLink
                    href={`/articles/${article.path}`}
                    key={index}
                    passHref
                    className="flex flex-col gap-2 border border-card-background rounded-md p-4">
                    <div className="bg-muted rounded-md aspect-video mb-2">
                      <img src={article.image} alt="" loading='lazy' className='aspect-video object-cover' />
                    </div>
                    <div className='w-full flex justify-between'>
                      <h3 className="text-xl tracking-tight">{article.title}</h3>
                      <Badge>{formatDate(article.date_created)}</Badge>
                    </div>
                    <p className="text-muted-foreground text-base">
                      {article.description}
                    </p>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{article.author.name}</span>
                      <span>{article.views} views</span>
                    </div>
                  </NextLink>
                ))}
              </div>
            )}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
};

export default ArticlesPage;
