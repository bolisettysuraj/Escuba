"use client";
import DiveSitePage from "@/components/DiveSitePage";
import { getDiveSiteBySlug } from "@/data/diveSites";

export default function Page() {
  const data = getDiveSiteBySlug("dixsons-pinnacle-havelock-island")!;
  return <DiveSitePage data={data} />;
}
