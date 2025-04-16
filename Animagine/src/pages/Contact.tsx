import React from "react";
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/common/ContactForm";
import SectionHeading from "@/components/common/SectionHeading";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl opacity-80 mb-8">
              Get in touch with our team to discuss your project
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                title="Get In Touch"
                subtitle="Let’s connect — we’re just a message away! Share your vision,  and we’ll get back to you as soon as possible."
              />
              {/* <ContactForm /> */}
            </div>

            <div className="bg-gray-800 p-8 rounded-lg self-start">
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-motion-red/10 rounded-lg flex items-center justify-center mr-4 text-motion-red flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <a
                      href="mailto:hello@animagine.in"
                      className="text-motion-red hover:text-motion-red-dark transition-colors"
                    >
                      hello@animagine.in
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/people/AnImagines/61575502823901/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-motion-red/10 rounded-full flex items-center justify-center text-motion-red hover:bg-motion-red hover:text-white transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326V22.67c0 .733.593 1.326 1.325 1.326H12.82v-9.842H9.692v-3.842h3.127V7.691c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.098 2.794.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.842h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.405 0 22.675 0z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.instagram.com/_animagine/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-motion-red/10 rounded-full flex items-center justify-center text-motion-red hover:bg-motion-red hover:text-white transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2c2.716 0 3.056.012 4.122.06 1.065.048 1.79.218 2.428.465.66.256 1.216.598 1.772 1.153.509.5.902 1.103 1.153 1.772.247.637.417 1.363.465 2.428.048 1.066.06 1.405.06 4.122 0 2.716-.012 3.056-.06 4.122-.048 1.065-.218 1.79-.465 2.428a4.884 4.884 0 01-1.153 1.772c-.5.509-1.103.902-1.772 1.153-.637.247-1.363.417-2.428.465-1.066.048-1.405.06-4.122.06-2.716 0-3.056-.012-4.122-.06-1.065-.048-1.79-.218-2.428-.465a4.884 4.884 0 01-1.772-1.153 4.884 4.884 0 01-1.153-1.772c-.247-.637-.417-1.363-.465-2.428-.048-1.066-.06-1.405-.06-4.122 0-2.716.012-3.056.06-4.122.048-1.065.218-1.79.465-2.428.256-.66.598-1.216 1.153-1.772.5-.509 1.103-.902 1.772-1.153.637-.247 1.363-.417 2.428-.465C8.944 2.012 9.284 2 12 2zm0 1.8c-2.67 0-2.986.01-4.04.058-.976.045-1.505.207-1.858.345-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.138.353-.3.882-.344 1.857-.049 1.055-.059 1.37-.059 4.04 0 2.672.01 2.988.059 4.042.044.976.206 1.505.344 1.857.182.466.398.8.748 1.15.35.35.684.566 1.15.748.353.138.882.3 1.857.344 1.054.048 1.37.058 4.041.058 2.67 0 2.986-.01 4.04-.058.976-.045 1.505-.206 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.138-.352.3-.882.344-1.857.048-1.054.058-1.37.058-4.041 0-2.67-.01-2.986-.058-4.04-.044-.976-.206-1.505-.344-1.858-.182-.466-.398-.8-.748-1.15-.35-.35-.684-.566-1.15-.748-.353-.138-.882-.3-1.857-.344-1.055-.048-1.37-.058-4.041-.058zm0 3.06a5.14 5.14 0 110 10.28 5.14 5.14 0 010-10.28zm0 8.475a3.334 3.334 0 110-6.67 3.334 3.334 0 010 6.67zm6.538-8.684a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/106804000/admin/dashboard/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-motion-red/10 rounded-full flex items-center justify-center text-motion-red hover:bg-motion-red hover:text-white transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1zM8.44 17.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5v-7c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v7zm-1.5-8.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm11 8.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5v-3.36c0-1.31-.42-1.64-1.25-1.64-1.08 0-1.25.8-1.25 1.64v3.36c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5v-7c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v.68c.55-.61 1.3-1.18 2.75-1.18 2.42 0 3.25 1.19 3.25 3.5v4z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-700 mb-8">
              Have questions about our services? Check out our FAQ section for
              quick answers.
            </p>
            <Link
              to="/faq"
              className="inline-flex items-center text-motion-red hover:text-motion-red-dark font-medium transition-colors"
            >
              View All FAQs <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
