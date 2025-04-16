
import React, { useEffect, useRef } from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/common/SectionHeading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Scissors, LayoutGrid, Box, Palette, Wand2, Film, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  // Refs for scroll animations
  const refs = {
    videoEditing: useRef<HTMLDivElement>(null),
    motionGraphics: useRef<HTMLDivElement>(null),
    animation3D: useRef<HTMLDivElement>(null),
    additional: useRef<HTMLDivElement>(null),
    process: useRef<HTMLDivElement>(null)
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-black z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        
        {/* Animated dots grid */}
        <div className="absolute inset-0 z-0">
          <div className="grid-dots"></div>
        </div>
        
        <div className="container relative mx-auto px-4 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Our Services</h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive video editing and motion graphics solutions tailored to elevate your visual content
            </p>
          </motion.div>
        </div>
        
        {/* Bottom fade gradient */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
      </section>
      
      {/* Video Editing */}
      <section id="video-editing" ref={refs.videoEditing} className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
            >
              <div className="inline-block p-3 bg-motion-red/20 rounded-xl mb-6">
                <Scissors className="text-motion-red" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Video  <span className='text-motion-red'>Editing</span></h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Our professional video editing services transform raw footage into compelling, polished visual stories that captivate your audience. Whether you need a commercial, corporate video, social media content, or feature film, our editors craft a seamless narrative with perfect pacing and flow.
              </p>
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-4 mb-8"
              >
                {[
                  "Film and video post-production",
                  "Commercial and promotional video editing",
                  "Social media content optimization",
                  "Sound design and audio enhancement"
                ].map((item, index) => (
                  <motion.li key={index} variants={fadeInUp} className="flex items-start">
                    <CheckCircle2 className="text-motion-red mr-3 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <Button asChild className="bg-motion-red hover:bg-motion-red-light rounded-full px-8">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInRight}
              className="rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(155,135,245,0.2)]"
            >
              <img 
                src="/Video Editing.jpg"
                alt="Video Editing"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Motion Graphics */}
      <section id="motion-graphics" ref={refs.motionGraphics} className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
              className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(155,135,245,0.2)]"
            >
              <img 
                src="/Motion Graphics.jpg"
                alt="Motion Graphics"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInRight}
              className="order-1 lg:order-2"
            >
              <div className="inline-block p-3 bg-motion-red/20 rounded-xl mb-6">
                <LayoutGrid className="text-motion-red" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white"> <span className='text-motion-red'>Motion</span> Graphics</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Our motion graphics services bring static content to life with dynamic animations and visual effects. We create engaging, eye-catching graphics that enhance your messaging and help your brand stand out in a crowded digital landscape.
              </p>
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-4 mb-8"
              >
                {[
                  "Logo animations and brand intros",
                  "Animated infographics and data visualization",
                  "Kinetic typography and text animations",
                  "Lower thirds and broadcast graphics"
                ].map((item, index) => (
                  <motion.li key={index} variants={fadeInUp} className="flex items-start">
                    <CheckCircle2 className="text-motion-red mr-3 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <Button asChild className="bg-motion-red hover:bg-motion-red-light rounded-full px-8">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* 3D Animation */}
      <section id="3d-animation" ref={refs.animation3D} className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
            >
              <div className="inline-block p-3 bg-motion-yellow/20 rounded-xl mb-6">
                <Box className="text-motion-yellow" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Graphics  <span className='text-motion-red'>Desgin</span></h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
              Transform your brand with professional graphic design solutions. We craft compelling visual identities through logo design, branding packages, and marketing collateral. Our services include social media graphics, infographics, print materials, packaging design, and typography solutions. Utilizing Adobe Creative Suite and modern design trends, we create eye-catching visuals that resonate with your audience. From custom illustrations to digital assets, we ensure cross-platform consistency and brand alignment. Elevate your visual storytelling with UI/UX design, iconography, and motion graphics integration. Whether refreshing existing materials or building from scratch, our strategic designs boost engagement and brand recognition. Collaborate with us for innovative, results-driven creative solutions that drive business growth.
              </p>
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-4 mb-8"
              >
                {[
                  "Product visualizations and demonstrations",
                  "Architectural and environmental animations",
                  "Character animation and storytelling",
                  "Medical and scientific visualizations"
                ].map((item, index) => (
                  <motion.li key={index} variants={fadeInUp} className="flex items-start">
                    <CheckCircle2 className="text-motion-red mr-3 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <Button asChild className="bg-motion-red hover:bg-motion-red-light text-motion-white rounded-full px-8">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInRight}
              className="rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(155,135,245,0.2)]"
            >
              <img 
                src="/Graphic Design.jpg"
                alt="Graphic Design"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      
      {/* Process Section */}
      <section ref={refs.process} className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <SectionHeading 
              title={<span className="text-white">Our Process</span>} 
              subtitle="How we bring your vision to life in five simple steps"
              centered
              className="text-white [&>p]:text-gray-300"
            />
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4"
          >
            {[
              {
                step: 1,
                title: "Discovery & Planning",
                description: "We begin by understanding your goals, audience, and brand. Whether you have raw footage or a concept in mind, we collaborate with you to map out a clear editing strategy."
              },
              {
                step: 2,
                title: "Footage Review & Organization",
                description: "Next, we sort through your footage, selecting the strongest takes, syncing audio, and organizing everything to streamline the edit. This ensures we build your video on the best possible foundation."
              },
              {
                step: 3,
                title: "Editing & Storytelling",
                description: "Here’s where the magic happens. Our editors craft a compelling narrative using precise cuts, pacing, and transitions. We add music, sound design, motion graphics, and any visual effects needed to bring the story to life."
              },
              {
                step: 4,
                title: "Feedback & Revisions",
                description: "We present the first draft for your review and gather your feedback. You’ll have multiple rounds of revisions to ensure the final video aligns perfectly with your vision."
              },

              {
                step: 5,
                title: "Final Delivery",
                description: "Once approved, we export the final video in your desired formats—optimized for web, social, or broadcast. Your story is now ready to captivate your audience."
              }
            ].map((step, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp} 
                className="group relative overflow-hidden rounded-[16px] p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500"
              >

                 {/* Shiny Swipe Layer */}
                <div className="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:visible" />

                <div className="relative rounded-[15px] bg-gradient-to-br from-motion-black-light to-motion-black p-8 border border-motion-purple/10 shadow-lg flex flex-col h-full">
                  <div className="w-14 h-14 bg-motion-red rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl">
                  {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                
                  {/* Connector line */}
                  {index < 5 && (
                    <div className="hidden lg:block absolute top-1/2 left-[calc(100%-24px)] w-[calc(100%-50px)] h-0.5 bg-motion-purple/30 -z-10"></div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-black text-white text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Contact us today to discuss your needs and get a customized quote for your video project.
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-motion-red text-white text-lg rounded-full px-10 py-6"
            >
              <Link to="/contact" className="flex items-center">Contact Us Now <ArrowRight className="ml-2" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
