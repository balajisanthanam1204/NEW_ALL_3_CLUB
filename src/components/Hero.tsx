import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Carousel3D from './Carousel3D';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(270,91%,65%,0.15)_0%,transparent_70%)]" />

      <div className="container mx-auto px-8 relative z-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto ">
          {/* Left side - 3D Carousel with Silhouettes */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative ">
              {/* People silhouettes watching the screen */}
              {/* <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full flex justify-center gap-8 z-10">
                <div className="w-16 h-24 bg-gradient-to-t from-foreground/40 to-transparent rounded-t-full" />
                <div className="w-16 h-28 bg-gradient-to-t from-foreground/30 to-transparent rounded-t-full" />
                <div className="w-16 h-24 bg-gradient-to-t from-foreground/40 to-transparent rounded-t-full" />
              </div> */}
              
              <Carousel3D />
              
              <div className="mt-6 text-center ">
                <p className="text-sm text-muted-foreground ">
                  ECEA,IETE-SF and RACE are student-led communities exploring design, innovation, emerging technology.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Main content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8 order-1 lg:order-2"
          >
          <br></br>
            <div className="space-y-4">
              <h2 className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
                Explore ECEA,IETE-SF and RACE - where ideas take shape.
              </h2>
              <h1 className="text-5xl lg:text-6xl xl:text-6xl font-display font-bold leading-[1.1] text-glow">
              We create immersive experiences that empower students to innovate.

              </h1>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
              Join us in pushing the boundaries of technology, design, and innovation. 
              Together, we engineer the future of electronics.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/Events">
                <Button
                  variant="glass"
                  size="lg"
                  className="px-8 py-6 text-base font-medium rounded-full group"
                >
                  <span>Explore our Events</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/team">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-base font-medium rounded-full border-primary/30 hover:bg-primary/10"
                >
                  Meet the team
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
