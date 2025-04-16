
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/common/SectionHeading';
import FAQItem from '@/components/common/FAQItem';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = [
    {
      question: "Why to choose us?",
      answer: "We deliver high-quality, customized video editing services with a focus on storytelling, brand alignment, and fast turnaround.helping businesses, brands, and creators produce content that captivates, engages, and drives impact across platforms."
    },
    {
      question: "What kind of videos do you edit?",
      answer: "We edit a wide range of content including Long form video, Short form videos, Youtube Videos, Youtube Shorts, Instagram Reels, Explainer Videos, Business Videos, Corporate Videos, Commercial ads, motion graphics and more."
    },
    {
      question: "What do I need to provide to get started?",
      answer: "We typically need your raw footage, a brief (or idea of what you're aiming for), branding assets (like logos, colors, fonts), and any references or examples you like. Don’t worry—we’ll guide you through everything!"
    },
    {
      question: "How long does the editing process take?",
      answer: "Turnaround time depends on the scope of the project, but most videos are completed within 5–10 business days. Tight deadline? Let us know and we’ll see what’s possible!"
    },
    {
      question: "Do you offer revisions?",
      answer: "Yes! We include multiple rounds of revisions in all our packages to ensure you're 100% happy with the final result."
    },
    {
      question: "How do we get started with a project?",
      answer: "Getting started is easy! Simply contact us through our website, email, or phone. We'll schedule an initial consultation to discuss your project, understand your requirements, and provide a tailored proposal and quote."
    },
    {
      question: "Can you add music, text, or animations to my video?",
      answer: "Absolutely. We can add royalty-free music, custom titles, subtitles, motion graphics, transitions, and more to elevate your video."
    },
    {
      question: "What formats will I receive my final video in?",
      answer: "We deliver videos in your preferred format—usually MP4 for online use—but we can provide other formats if needed (e.g., for broadcast or specific platforms)."
    },
    {
      question: "Do you offer ongoing editing support or retainers?",
      answer: "Yes, we work with many clients on a recurring basis. If you need consistent video content, we can set up a custom retainer plan that fits your schedule and budget."
    },
    {
      question: "How do I get a quote?",
      answer: "Simply reach out via our contact form or email us with details about your project. We'll get back to you quickly with a tailored quote."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl opacity-80">
              Find answers to common questions about our services and process
            </p>
          </div>
        </div>
      </section>
      
      {/* FAQ Items */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              {faqItems.map((item, index) => (
                <FAQItem 
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={index === openIndex}
                  onClick={() => setOpenIndex(index)}
                />
              ))}
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
              <p className="text-gray-700 mb-6">
                If you couldn't find the answer to your question, please feel free to contact us directly. Our team is always ready to help.
              </p>
              <Button 
                asChild 
                className="bg-motion-red hover:bg-motion-red-light text-white"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Links */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Quick Links" 
            subtitle="Explore more about our services and work"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Our Services</h3>
              <p className="text-gray-700 mb-6">
                Explore our full range of video editing and motion graphics services.
              </p>
              <Button 
                asChild 
                className="bg-motion-red hover:bg-motion-red-light text-white w-full"
              >
                <Link to="/services">View Services</Link>
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Project Portfolio</h3>
              <p className="text-gray-700 mb-6">
                Browse our portfolio of successful client projects.
              </p>
              <Button 
                asChild 
                className="bg-motion-red hover:bg-motion-red-light text-white w-full"
              >
                <Link to="/projects">View Projects</Link>
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-700 mb-6">
                Ready to start your project? Get in touch with our team today.
              </p>
              <Button 
                asChild 
                className="bg-motion-red hover:bg-motion-red-light text-white w-full"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
