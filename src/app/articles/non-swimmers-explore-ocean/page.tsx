"use client";
import ArticlePage from "@/components/ArticlePage";
import { getArticleBySlug } from "@/data/articles";

export default function Page() {
  const data = getArticleBySlug("non-swimmers-explore-ocean")!;
  return <ArticlePage data={data} />;
}
