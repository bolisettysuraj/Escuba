"use client";
import ExperiencePage from "@/components/ExperiencePage";
import { getExperienceBySlug } from "@/data/experiences";

export default function BoatDivingPage() {
  const data = getExperienceBySlug("boat-scuba-diving-havelock")!;
  return <ExperiencePage data={data} />;
}
