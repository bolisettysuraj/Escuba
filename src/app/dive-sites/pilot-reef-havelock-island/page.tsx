"use client";
import DiveSitePage from "@/components/DiveSitePage";
import { getDiveSiteBySlug } from "@/data/diveSites";

export default function Page() {
  const data = getDiveSiteBySlug("pilot-reef-havelock-island")!;
  return <DiveSitePage data={data} />;
}
