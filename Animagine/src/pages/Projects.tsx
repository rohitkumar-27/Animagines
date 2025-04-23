import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProjectCard from "@/components/common/ProjectCard";
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample project data
const projectsData = [
  {
    id: "commercial-animation",
    title: "Commercial Animation",
    category: "Motion Graphics",
    image:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800&h=500",
  },
  {
    id: "corporate-video",
    title: "Corporate Promotional Video",
    category: "Video Editing",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800&h=500",
  },
  {
    id: "3d-product",
    title: "3D Product Visualization",
    category: "3D Animation",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=500",
  },
  {
    id: "event-highlights",
    title: "Event Highlights Reel",
    category: "Video Editing",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800&h=500",
  },
  {
    id: "explainer-video",
    title: "Animated Explainer Video",
    category: "Motion Graphics",
    image:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800&h=500",
  },
  {
    id: "brand-animation",
    title: "Brand Logo Animation",
    category: "Motion Graphics",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800&h=500",
  },
];

const Projects = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl opacity-80 mb-8">
              Explore our portfolio of video editing and motion graphics work
            </p>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Featured Project"
            subtitle="A closer look at one of our recent successful collaborations"
            centered
          />

          {/* first project */}
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 lg:p-10 flex flex-col justify-between">
                <span className="text-motion-red text-sm font-medium tracking-wider uppercase">
                  Video Editing
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-4">
                  Project for African Bank Development Group
                </h3>
                <p className="text-white pt-5 mb-6 text-justify">
                  For this project, our team was tasked with creating a
                  compelling and visually engaging video for the African
                  Development Bank’s (AFDB) programme presentation. Leveraging
                  the power of motion graphics, we transformed key data and
                  messaging into a dynamic visual story that captures attention
                  and enhances comprehension. Using a clean, modern design, we
                  blended animated text, icons, and visual metaphors to
                  illustrate complex concepts in a clear and engaging way.
                  Strategic use of transitions, color schemes, and pacing
                  ensured the message remained impactful while maintaining
                  viewer interest throughout the video. From concept development
                  to final delivery, this video exemplifies our ability to
                  distill critical information into a visually cohesive
                  narrative—perfect for conferences, internal communications,
                  and digital distribution.
                </p>
              </div>

              <div className="relative z-20 flex items-stretch">
                <div className="h-full w-full bg-black/50 rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
                  <video
                    autoPlay
                    // muted
                    loop
                    playsInline
                    className="w-full h-full object-contain"
                    preload="auto"
                  >
                    <source src="AFDB Programme.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>



          {/* second project */}
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative z-20">
                <div className="h-full w-full bg-black/50 rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-contain"
                    preload="auto"
                  >
                    <source src="Coffee Animation.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>

              <div className="p-10 lg:p-10 flex flex-col justify-between">
                <span className="text-motion-red text-sm font-medium tracking-wider uppercase">
                  Motion Graphics
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-4">
                  Coffee Commerical Advertisement
                </h3>
                <p className="text-white pt-5  mb-6 text-justify">
                We created a clean and engaging animated commercial for a leading coffee brand's new product launch. The video featured smooth 3D product visualizations, modern motion graphics, and a clear, well-structured storyline. Our goal was to highlight the product’s key features and create a strong visual impact that connects with the audience. The animation used warm colors, stylish transitions, and subtle sound design to enhance the overall experience. This commercial was optimized for social media, web, and digital platforms, helping the brand effectively promote its product and attract customer attention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-motion-black text-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Project Process"
            subtitle="How we approach each project to deliver exceptional results"
            centered
            className="text-white [&>p]:text-gray-300"
          />

          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8 pb-12 border-l border-motion-red/30">
              <div className="absolute top-0 left-0 -translate-x-1/2 w-6 h-6 rounded-full bg-motion-red"></div>
              <h3 className="text-xl font-semibold mb-3">
                Initial Consultation
              </h3>
              <p className="text-gray-400">
                We begin by understanding your goals, target audience, message,
                and creative vision for the project.
              </p>
            </div>

            <div className="relative pl-8 pb-12 border-l border-motion-red/30">
              <div className="absolute top-0 left-0 -translate-x-1/2 w-6 h-6 rounded-full bg-motion-red"></div>
              <h3 className="text-xl font-semibold mb-3">
                Concept Development
              </h3>
              <p className="text-gray-400">
                Our creative team develops concepts and storyboards that align
                with your brand and objectives.
              </p>
            </div>

            <div className="relative pl-8 pb-12 border-l border-motion-red/30">
              <div className="absolute top-0 left-0 -translate-x-1/2 w-6 h-6 rounded-full bg-motion-red"></div>
              <h3 className="text-xl font-semibold mb-3">Production Phase</h3>
              <p className="text-gray-400">
                Based on approved concepts, our specialists begin creating
                animations, editing footage, and crafting visual effects.
              </p>
            </div>

            <div className="relative pl-8 pb-12 border-l border-motion-red/30">
              <div className="absolute top-0 left-0 -translate-x-1/2 w-6 h-6 rounded-full bg-motion-red"></div>
              <h3 className="text-xl font-semibold mb-3">Review & Feedback</h3>
              <p className="text-gray-400">
                We present drafts for your review and implement feedback to
                refine the project.
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute top-0 left-0 -translate-x-1/2 w-6 h-6 rounded-full bg-motion-red"></div>
              <h3 className="text-xl font-semibold mb-3">Final Delivery</h3>
              <p className="text-gray-400">
                After final approval, we deliver the completed project in all
                required formats and resolutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-motion-red text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our video editing and motion graphics expertise
            can help bring your vision to life.
          </p>
          <Button
            asChild
            className="bg-white text-motion-red hover:bg-gray-100 hover:text-motion-red-dark text-lg px-8 py-6"
          >
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
