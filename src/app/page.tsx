"use client";
import Preloader from "@/components/Preloader";
import Bubbles from "@/components/Bubbles";
import ScrollReveal from "@/components/ScrollReveal";
import Header from "@/components/Header";
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
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <>
      <Preloader />
      <Bubbles />
      <ScrollReveal />
      <Header />
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
      <Footer />
      <FloatingButtons />
    </>
  );
}
