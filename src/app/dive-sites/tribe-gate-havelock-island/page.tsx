"use client";
import DiveSitePage from "@/components/DiveSitePage";
import { getDiveSiteBySlug } from "@/data/diveSites";

export default function Page() {
  const data = getDiveSiteBySlug("tribe-gate-havelock-island")!;
  return <DiveSitePage data={data} />;
}
