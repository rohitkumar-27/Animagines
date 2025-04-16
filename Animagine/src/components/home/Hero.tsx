

import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import * as THREE from 'three';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null); // for video volume
  

  useEffect(() => {
    // Set initial volume and handle autoplay
    const video = videoRef.current;
    if (video) {
      video.volume = 0.5; // Set volume to 50%
      video.muted = true; // Required for autoplay to work in most browsers

      // Attempt autoplay with muted audio
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented, show some UI element to prompt user
        });
      }
    }

    // Enable sound on user interaction
    const enableSound = () => {
      if (video && video.muted) {
        video.muted = false;
      }
    };

    window.addEventListener('click', enableSound);
    return () => window.removeEventListener('click', enableSound);
  }, []);


  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Three.js Background - Lower z-index */}
      <div ref={containerRef} className="absolute inset-0 z-0" 
           style={{ pointerEvents: 'none' }}></div>

      <div className="absolute inset-0 bg-black/60 z-10"></div>

      <div className="container mx-auto px-4 relative z-20 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Creating <span className="text-motion-red">Visual Stories</span> That <span className="text-accent">Captivate</span>
            </h1>
            <p className="text-lg md:text-xl opacity-85 mb-8 max-w-xl">
              Professional video editing and motion graphics services to transform your ideas into stunning visual content.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild 
                className="bg-motion-red hover:bg-motion-red text-white rounded-lg px-8 py-6 text-lg "
              >
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="border-white text-white rounded-lg px-8 py-6 text-lg bg-motion-red hover:bg-motion-red"
              >
                <Link to="/projects">
                  <PlayCircle className="mr-2" size={18} />
                  View Work
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Video Box */}
          <div className="relative z-20">
            <div className="aspect-video bg-black/50 rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                preload="auto"
              >
                <source src="/AnImagine Ad.mp4" 
                        type="video/mp4" />
              </video>
              
              

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-primary/30 rounded-lg -z-10 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-primary/30 rounded-lg -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Hero;