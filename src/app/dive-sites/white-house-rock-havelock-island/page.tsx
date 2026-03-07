"use client";
import DiveSitePage from "@/components/DiveSitePage";
import { getDiveSiteBySlug } from "@/data/diveSites";

export default function Page() {
  const data = getDiveSiteBySlug("white-house-rock-havelock-island")!;
  return <DiveSitePage data={data} />;
}
