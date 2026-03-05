"use client";
import ExperiencePage from "@/components/ExperiencePage";
import { getExperienceBySlug } from "@/data/experiences";

export default function SnorkelingPage() {
  const data = getExperienceBySlug("skin-diver-snorkeling-havelock")!;
  return <ExperiencePage data={data} />;
}
