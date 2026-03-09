"use client";
import ArticlePage from "@/components/ArticlePage";
import { getArticleBySlug } from "@/data/articles";

export default function Page() {
  const data = getArticleBySlug("choose-first-padi-certification")!;
  return <ArticlePage data={data} />;
}
