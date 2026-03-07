"use client";
import CoursePage from "@/components/CoursePage";
import { getCourseBySlug } from "@/data/courses";

export default function Page() {
  const data = getCourseBySlug("padi-scuba-diver-course")!;
  return <CoursePage data={data} />;
}
