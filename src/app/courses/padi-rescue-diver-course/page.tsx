"use client";
import CoursePage from "@/components/CoursePage";
import { getCourseBySlug } from "@/data/courses";

export default function Page() {
  const data = getCourseBySlug("padi-rescue-diver-course")!;
  return <CoursePage data={data} />;
}
