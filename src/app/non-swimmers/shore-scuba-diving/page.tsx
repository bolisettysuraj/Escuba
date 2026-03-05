"use client";
import ExperiencePage from "@/components/ExperiencePage";
import { getExperienceBySlug } from "@/data/experiences";

export default function ShoreDivingPage() {
  const data = getExperienceBySlug("shore-scuba-diving")!;
  return <ExperiencePage data={data} />;
}
