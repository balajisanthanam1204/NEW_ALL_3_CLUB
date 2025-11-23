// components/VideoModal.tsx (or wherever you named this file)

import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Clock } from 'lucide-react'; // Added Calendar, MapPin, Clock icons
import { useEffect } from 'react';
import { Button } from '@/components/ui/button'; // Assuming you use shadcn/ui Button

// --- Data Structure for the Event ---
// This interface defines what event data the modal expects.
interface EventData {
  title: string;
  posterUrl: string; // Image for the poster/background
  date: string;
  time: string;
  location: string;
  description: string;
  registerLink: string; // Link for the "Register Now" button
  readMoreLink: string; // Link for the "Read More" button
}

// --- Props for the Modal component ---
interface VideoModalProps { // Renamed for clarity, but still matches the original file name
  isOpen: boolean;
  onClose: () => void;
  event: EventData; // Now expects event data
}

export default function VideoModal({ isOpen, onClose, event }: VideoModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Framer Motion variants for the content
  const contentVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-xl glass-panel rounded-2xl overflow-hidden shadow-2xl shadow-primary/30" // Max-w-xl for a slightly smaller popup
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 glass-panel rounded-full flex items-center justify-center hover:neon-glow transition-all text-foreground/80"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Event Poster Section (Top) */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={event.posterUrl}
                alt={`${event.title} Poster`}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Neon Overlay effect for image - helps text stand out */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              {/* Title Overlay */}
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute bottom-4 left-4 right-4 text-3xl font-display font-bold text-white text-glow leading-tight"
              >
                {event.title}
              </motion.h1>
            </div>

            {/* Event Details and Buttons (Bottom) */}
            <div className="p-6 md:p-8 flex flex-col">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              >
                {/* Metadata */}
                <div className="space-y-2 mb-6">
                  <motion.div variants={contentVariants} className="flex items-center gap-3 text-base text-foreground/80">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{event.date}</span>
                  </motion.div>
                  <motion.div variants={contentVariants} className="flex items-center gap-3 text-base text-foreground/80">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{event.time}</span>
                  </motion.div>
                  <motion.div variants={contentVariants} className="flex items-center gap-3 text-base text-foreground/80">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{event.location}</span>
                  </motion.div>
                </div>
                
                <motion.p variants={contentVariants} className="text-base text-muted-foreground mb-8 line-clamp-3">
                  {event.description}
                </motion.p>
              </motion.div>

              {/* Call to Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, staggerChildren: 0.1 }}
                className="flex flex-col sm:flex-row gap-4 mt-auto" // mt-auto pushes buttons to bottom
              >
                <Button 
                  variants={contentVariants} // Apply stagger to buttons too
                  size="lg" 
                  className="w-full sm:flex-1 neon-button transition-all duration-300"
                  onClick={() => window.open(event.registerLink, '_blank')}
                >
                  Register Now
                </Button>
                <Button 
                  variants={contentVariants} // Apply stagger to buttons too
                  size="lg" 
                  variant="outline"
                  className="w-full sm:flex-1 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  onClick={() => window.open(event.readMoreLink, '_blank')}
                >
                  Read More
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}