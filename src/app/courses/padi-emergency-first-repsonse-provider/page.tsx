"use client";
import CoursePage from "@/components/CoursePage";
import { getCourseBySlug } from "@/data/courses";

export default function Page() {
  const data = getCourseBySlug("padi-emergency-first-repsonse-provider")!;
  return <CoursePage data={data} />;
}
