import { Button } from './ui/button';
import { Play, Menu, X, Calendar, MapPin, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  onWatchReel: () => void;
}

// Sample upcoming events data - Replace with your actual events
const upcomingEvents = [
{
    id: 1,
    title: 'Enigma',
    poster: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop',
    description: 'Fusion of simple problem-solving and code-breaking challenges designed exclusively for 1st-year ECE students (2025–2029).',
    venue: 'IIIrd-floor,Block 5,SVCE.',
    date: '07th October 2025',
    time: '10:00 AM - 3:00 PM',
    registrationLink: 'https://forms.gle/8YT9gu9U2Kkwao4a8',
    detailsLink: '/pages/Events'
  },
  {
    id: 2,
    title: 'Guest Leacher',
    poster: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
    description: 'Comming soon',
    venue: 'Comming soon',
    date: '2025',
    time: 'Comming soon',
    registrationLink: '#',
    detailsLink: '/pages/Events'
  }
];

const logos = [
  {
    name: 'ECEA',
    url: '/ecea.png', // Replace with actual ECEA logo path
    alt: 'ECEA Logo'
  },
  {
    name: 'IETE-SF',
    url: '/iete.png', // Replace with actual IETE-SF logo path
    alt: 'IETE-SF Logo'
  },
  {
    name: 'RACE',
    url: '/race.png', // Replace with actual RACE logo path
    alt: 'RACE Logo'
  }
];

export default function Navigation({ onWatchReel }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showEventPopup, setShowEventPopup] = useState(false);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const handleEventClick = () => {
    setShowEventPopup(true);
    setCurrentEventIndex(0);
  };

  const nextEvent = () => {
    setCurrentEventIndex((prev) => (prev + 1) % upcomingEvents.length);
  };

  const prevEvent = () => {
    setCurrentEventIndex((prev) => (prev - 1 + upcomingEvents.length) % upcomingEvents.length);
  };

  const currentEvent = upcomingEvents[currentEventIndex];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-border/50">
        <div className="container mx-auto px-3 py-3">
          <div className="flex items-center justify-between">
<Link to="/" className="flex items-center gap-2 sm:gap-3 lg:gap-1 hover:opacity-80 transition-opacity px-4 py-2 rounded-lg bg-primary/5 hover:bg-primary/10 backdrop-blur-sm border border-border/20">
  {logos.map((logo, index) => (
    <div key={logo.name} className="flex items-center">
      <img
        src={logo.url}
        alt={logo.alt}
        className="h-11 sm:h-10 lg:h-12 w-auto object-contain brightness-100 hover:brightness-110 transition-all"
      />
      {/* Separator line between logos (hidden on mobile for first two) */}
      {index < logos.length - 1 && (
        <div className="hidden sm:block w-px h-8 lg:h-10 bg-border/50 mx-2 lg:mx-3" />
      )}
    </div>
  ))}
</Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-sm hover:text-primary transition-colors">Home</Link>
              <Link to="/team" className="text-sm hover:text-primary transition-colors">Team</Link>
              {/* <Link to="/projects" className="text-sm hover:text-primary transition-colors">Projects</Link> */}
              <Link to="/PreBlog" className="text-sm hover:text-primary transition-colors">Blog</Link>
              <Link to="/events" className="text-sm hover:text-primary transition-colors">Events</Link>
              <Link to="/achive" className="text-sm hover:text-primary transition-colors">Achivements</Link>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={handleEventClick}
                className="text-sm hover:text-primary transition-colors group"
              >
                <span>UPCOMING EVENTS</span>
                <span className="ml-2 flex items-center gap-1">
                  <Play className="w-3 h-3 group-hover:text-accent transition-colors" />
                  <span className="text-xs text-muted-foreground">CLICK</span>
                </span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-6 pt-6 border-t border-border/50 space-y-4">
              <Link 
                to="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm hover:text-primary transition-colors py-2"
              >
                Home
              </Link>
              <Link 
                to="/team" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm hover:text-primary transition-colors py-2"
              >
                Team
              </Link>
              {/* <Link 
                to="/projects" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm hover:text-primary transition-colors py-2"
              >
                Projects
              </Link> */}
              <Link 
                to="/PreBlog" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm hover:text-primary transition-colors py-2"
              >
                Blog
              </Link>
              <Link 
                to="/events" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm hover:text-primary transition-colors py-2"
              >
                Events
              </Link>
              <Link 
                to="/achive" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm hover:text-primary transition-colors py-2"
              >
                Achivements
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  handleEventClick();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full justify-center group"
              >
                <span>Upcoming Events</span>
                <Play className="w-3 h-3 ml-2 group-hover:text-accent transition-colors" />
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Event Popup Modal */}
      <AnimatePresence>
        {showEventPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowEventPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="glass-panel max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowEventPopup(false)}
                className="absolute top-4 right-4 p-2 rounded-full glass-panel hover:neon-glow transition-all z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Event Poster */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="relative rounded-xl overflow-hidden group"
                  >
                    <img
                      src={currentEvent.poster}
                      alt={currentEvent.title}
                      className="w-full h-full object-cover aspect-video md:aspect-square"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>

                  {/* Event Details */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="text-3xl font-display font-bold text-glow mb-2">
                        {currentEvent.title}
                      </h2>
                      <p className="text-muted-foreground">
                        {currentEvent.description}
                      </p>
                    </div>

                    {/* Event Info */}
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">{currentEvent.date}</p>
                          <p className="text-sm text-muted-foreground">{currentEvent.time}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">{currentEvent.venue}</p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3 pt-4">
                      <a
                        href={currentEvent.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:neon-glow transition-all font-medium"
                      >
                        Register Now
                        <ExternalLink className="w-4 h-4" />
                      </a>

                      <Link
                        to={currentEvent.detailsLink}
                        onClick={() => setShowEventPopup(false)}
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 glass-panel rounded-lg hover:neon-glow transition-all font-medium"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                </div>

                {/* Navigation for Multiple Events */}
                {upcomingEvents.length > 1 && (
                  <div className="flex items-center justify-between mt-8 pt-8 border-t border-border/50">
                    <button
                      onClick={prevEvent}
                      className="px-4 py-2 glass-panel rounded-lg hover:neon-glow transition-all"
                    >
                      Previous Event
                    </button>
                    
                    <div className="flex gap-2">
                      {upcomingEvents.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentEventIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentEventIndex
                              ? 'bg-primary w-8'
                              : 'bg-muted-foreground/30'
                          }`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={nextEvent}
                      className="px-4 py-2 glass-panel rounded-lg hover:neon-glow transition-all"
                    >
                      Next Event
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}