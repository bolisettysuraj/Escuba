"use client";
import ArticlePage from "@/components/ArticlePage";
import { getArticleBySlug } from "@/data/articles";

export default function Page() {
  const data = getArticleBySlug("ultimate-guide-scuba-diving-andaman")!;
  return <ArticlePage data={data} />;
}
