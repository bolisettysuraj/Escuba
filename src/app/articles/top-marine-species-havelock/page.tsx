"use client";
import ArticlePage from "@/components/ArticlePage";
import { getArticleBySlug } from "@/data/articles";

export default function Page() {
  const data = getArticleBySlug("top-marine-species-havelock")!;
  return <ArticlePage data={data} />;
}
