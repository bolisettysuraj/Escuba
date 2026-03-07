"use client";
import CoursePage from "@/components/CoursePage";
import { getCourseBySlug } from "@/data/courses";

export default function Page() {
  const data = getCourseBySlug("padi-advanced-open-water-diving-course")!;
  return <CoursePage data={data} />;
}
