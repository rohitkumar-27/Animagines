import React, { useEffect, useRef } from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import SectionHeading from "@/components/common/SectionHeading";
import ServiceCard from "@/components/common/ServiceCard";
import ProjectCard from "@/components/common/ProjectCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Film,
  Scissors,
  Palette,
  Box,
  LayoutGrid,
  Wand2,
  Play,
} from "lucide-react";

const Index = () => {
  const servicesRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const whyUsRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-scale-in");
        }
      });
    }, observerOptions);

    [
      servicesRef,
      projectsRef,
      whyUsRef,
      testimonialsRef,
      ctaRef,
      aboutRef,
    ].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      [
        servicesRef,
        projectsRef,
        whyUsRef,
        testimonialsRef,
        ctaRef,
        aboutRef,
      ].forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <Layout>
      <Hero />

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-black text-white opacity-0">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="animate-in-left">
              <SectionHeading
                title={
                  <span>
                    About <span className="text-motion-red">Animagines</span>
                  </span>
                }
                subtitle="Crafting visual excellence through innovation"
                className="text-left mb-8"
              />
              <p className="text-gray-400 mb-6 text-justify">
                At AnImagines, we bring your imagination to life. We’re a
                full-service video editing agency dedicated to helping brands,
                creators, and businesses bring their vision to life through
                powerful visual storytelling. From dynamic social content to
                polished corporate videos, we combine creativity, technical
                expertise, and strategic thinking to deliver high-quality edits
                that make an impact. With a team of skilled editors, motion
                designers, and graphic designers we bring your imagination to
                life.
              </p>
              <p className="text-gray-400 mb-8 text-justify">
                Whether you're looking to boost engagement, showcase a product,
                or tell your brand’s story, we’re here to make sure your message
                is clear, compelling, and professionally delivered. At our core,
                we believe great editing is more than just cutting clips—it’s
                about crafting emotion, guiding attention, and building
                connection. That’s what we do best. Let’s create something that
                moves people because Everything Starts With An Imagination.
              </p>
            </div>

            <div className="relative animate-in-right w-9/12 flex justify-center md:justify-end">
              <div className="aspect-[9/16] max-h-[550px] bg-black/50 rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  preload="auto"
                  width={1080}
                  height={1920}
                >
                  <source
                    src="/VideoEditing Software.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className="absolute inset-0 flex items-center justify-center"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={whyUsRef} className="py-20 bg-black text-white opacity-0">
        <div className="container mx-auto px-4">
          <SectionHeading
            title={
              <span>
                Why Choose <span className="text-motion-red">Animagines</span>
              </span>
            }
            subtitle="We deliver high-quality video content that engages your audience and elevates your brand"
            centered
            className="text-white [&>p]:text-gray-300"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 transform transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-motion-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-motion-red"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
              <p className="text-gray-400">
                Skilled professionals with years of industry experience.
              </p>
            </div>

            <div className="text-center p-6 transform transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-motion-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-motion-red"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Turnaround</h3>
              <p className="text-gray-400">
                Quick delivery without compromising on quality.
              </p>
            </div>

            <div className="text-center p-6 transform transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-motion-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-motion-red"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Customization</h3>
              <p className="text-gray-400">
                Tailored solutions that match your requirements.
              </p>
            </div>

            <div className="text-center p-6 transform transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-motion-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-motion-red"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Support</h3>
              <p className="text-gray-400">
                Dedicated customer service throughout your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="py-20 bg-black text-white text-center opacity-0"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Bring Your Vision to Life?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project and discover our services.
          </p>
          <Button
            asChild
            className="bg-motion-red text-white text-lg px-8 py-6 animate-pulse-light"
          >
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
