"use client";
import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import VideoShowcase from "@/components/VideoShowcase";
import About from "@/components/About";
import Experiences from "@/components/Experiences";
import ParallaxDivider from "@/components/ParallaxDivider";
import Courses from "@/components/Courses";
import DiveSites from "@/components/DiveSites";
import Gallery from "@/components/Gallery";
import ReelsCarousel from "@/components/ReelsCarousel";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Preloader />
      <main>
        <Hero />
        <VideoShowcase />
        <About />
        <Experiences />
        <ParallaxDivider />
        <Courses />
        <DiveSites />
        <Gallery />
        <ReelsCarousel />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}
