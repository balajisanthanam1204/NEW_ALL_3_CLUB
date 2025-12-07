import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock, Users, X, ExternalLink, Trophy, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const upcomingEvents = [
  {
    title: 'Guest lecture',
    date: '2025',
    time: '2-3 hours',
    location: 'Coming soon',
    attendees: 50,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
    description: 'Coming soon',
    status: 'Registration yet to start'
  }
];

const futureEvents = [
  {
    title: 'TRACKBOT \'26',
    date: '2026-02-15',
    time: '10:00 AM - 4:00 PM',
    location: 'ECE Block',
    attendees: 35,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
    description: 'Autonomous robotics race competition in honour of IETE Student\'s Day',
    status: 'Save the Date'
  },
  {
    title: 'UPAGRAHA \'26',
    date: '2026-02-22',
    time: '9:00 AM - 6:00 PM',
    location: 'Various ECE Labs & CB5',
    attendees: 200,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
    description: 'Intercollegiate ECE Technical Symposium with 6 diverse technical events',
    status: 'Announced'
  },
  {
    title: 'MAKE-A-THON 7.0',
    date: '2026-04-25',
    time: '24-Hour Hackathon',
    location: 'Multi-Purpose Hall, SVCE',
    attendees: 150,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop',
    description: 'National-level 24-hour hackathon integrating hardware and software innovation',
    status: 'Announced'
  }
];

const pastEvents = [
  {
    title: 'SYNAPSE \'25',
    date: '2025-09-25',
    attendees: 50,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
    highlights: 'Aptitude & Circuit Challenge - Two-round technical contest for second-year ECE students',
    type: 'competition',
    winners: [
      { name: 'Team Alpha', members: ['John Doe', 'Jane Smith'], position: '1st Place', linkedin: 'https://linkedin.com/in/johndoe' },
      { name: 'Team Beta', members: ['Alex Johnson', 'Sarah Williams'], position: '2nd Place', linkedin: 'https://linkedin.com/in/alexjohnson' }
    ]
  },
  {
    title: 'ENIGMA \'25',
    date: '2025-10-05',
    attendees: 40,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop',
    highlights: 'Cryptography & Logical Reasoning Challenge featuring cipher-solving with Enigma simulator',
    type: 'competition',
    winners: [
      { name: 'CryptoMasters', members: ['Emily Chen', 'Michael Brown'], position: '1st Place', linkedin: 'https://linkedin.com/in/emilychen' },
      { name: 'CodeBreakers', members: ['David Lee', 'Rachel Green'], position: '2nd Place', linkedin: 'https://linkedin.com/in/davidlee' }
    ]
  },
  {
    title: 'System Design with High-Speed Applications',
    date: '2025-08-13',
    attendees: 80,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
    highlights: 'Guest lecture by Mr. Balajee Seshadri from Infineon Technologies',
    type: 'lecture',
    guest: {
      name: 'Mr. Balajee Seshadri',
      designation: 'Senior Engineer, Infineon Technologies',
      linkedin: 'https://linkedin.com/in/balajee-seshadri',
      bio: 'Expert in high-speed system design with 15+ years of experience in semiconductor industry'
    }
  },
  {
    title: 'MAKE-A-THON 6.0',
    date: '2025-04-29',
    attendees: 171,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop',
    highlights: '24-hour national hackathon with 40 shortlisted teams and industry judges',
    type: 'competition',
    winners: [
      { name: 'InnoVators', members: ['Priya Sharma', 'Rahul Verma', 'Amit Patel'], position: '1st Place', linkedin: 'https://linkedin.com/in/priyasharma' },
      { name: 'Tech Titans', members: ['Sneha Reddy', 'Karthik Kumar'], position: '2nd Place', linkedin: 'https://linkedin.com/in/snehareddy' },
      { name: 'Code Warriors', members: ['Vijay Singh', 'Anjali Gupta'], position: '3rd Place', linkedin: 'https://linkedin.com/in/vijaysingh' }
    ]
  },
  {
    title: 'Machine Learning Project Pipeline',
    date: '2025-03-28',
    attendees: 65,
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
    highlights: 'Webinar by Mr. Jeeva Kumar A on end-to-end ML workflows',
    type: 'lecture',
    guest: {
      name: 'Mr. Jeeva Kumar A',
      designation: 'ML Engineer, Tech Solutions Inc.',
      linkedin: 'https://linkedin.com/in/jeevakumar',
      bio: 'Specialized in building production-ready machine learning pipelines and MLOps'
    }
  },
  {
    title: 'UPAGRAHA\'25',
    date: '2025-02-22',
    attendees: 250,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
    highlights: 'ECE Technical Symposium with 6 events including IoT, VLSI, and robotics',
    type: 'competition',
    winners: [
      { name: 'Circuit Masters', members: ['Arjun Reddy', 'Meera Iyer'], position: '1st Place', linkedin: 'https://linkedin.com/in/arjunreddy' },
      { name: 'Tech Innovators', members: ['Kiran Kumar', 'Divya Nair'], position: '2nd Place', linkedin: 'https://linkedin.com/in/kirankumar' }
    ]
  },
  {
    title: 'TRACKBOT\'25',
    date: '2025-02-15',
    attendees: 30,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
    highlights: 'Autonomous line-following robotics race for IETE Student\'s Day',
    type: 'competition',
    winners: [
      { name: 'RoboRacers', members: ['Varun Mehta', 'Lakshmi Krishnan'], position: '1st Place', linkedin: 'https://linkedin.com/in/varunmehta' },
      { name: 'Speed Bots', members: ['Raj Kapoor', 'Ananya Singh'], position: '2nd Place', linkedin: 'https://linkedin.com/in/rajkapoor' }
    ]
  },
  {
    title: 'ENIGMA\'24',
    date: '2024-11-09',
    attendees: 40,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop',
    highlights: 'Cryptography challenge with classical ciphers and Enigma-style decryption',
    type: 'competition',
    winners: [
      { name: 'Cipher Squad', members: ['Rohan Das', 'Priya Menon'], position: '1st Place', linkedin: 'https://linkedin.com/in/rohadas' },
      { name: 'Code Crackers', members: ['Suresh Babu', 'Neha Pillai'], position: '2nd Place', linkedin: 'https://linkedin.com/in/sureshbabu' }
    ]
  },
  {
    title: 'From Code to Creation: Exploring Wokwi for IoT',
    date: '2024-11-05',
    attendees: 70,
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&h=400&fit=crop',
    highlights: 'Guest lecture by Dr. Swarna Sethu on IoT simulation and rapid prototyping',
    type: 'lecture',
    guest: {
      name: 'Dr. Swarna Sethu',
      designation: 'Associate Professor, IoT Department',
      linkedin: 'https://linkedin.com/in/swarnasethu',
      bio: 'Expert in IoT simulation platforms and embedded systems with focus on educational technology'
    }
  },
  {
    title: 'From Campus to Career',
    date: '2024-10-19',
    attendees: 90,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    highlights: 'Government job pathways guidance by Mr. S. Venkatraman, CPSE Management Trainee',
    type: 'lecture',
    guest: {
      name: 'Mr. S. Venkatraman',
      designation: 'Management Trainee, CPSE',
      linkedin: 'https://linkedin.com/in/svenkatraman',
      bio: 'Career guidance expert specializing in government sector opportunities and competitive exam preparation'
    }
  },
  {
    title: 'RAIC Hands-On Sessions',
    date: '2024-09-26',
    attendees: 45,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop',
    highlights: 'Practical workshop on LED circuits, Arduino, and ESP32 microcontrollers',
    type: 'workshop',
    details: 'Interactive workshop covering basic electronics, Arduino programming, and ESP32 applications'
  },
  {
    title: 'Ampere Quest\'24',
    date: '2024-09-18',
    attendees: 62,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
    highlights: 'Technical aptitude and circuit diagnostic challenge with 31 participating teams',
    type: 'competition',
    winners: [
      { name: 'Circuit Wizards', members: ['Aditya Sharma', 'Pooja Reddy'], position: '1st Place', linkedin: 'https://linkedin.com/in/adityasharma' },
      { name: 'Volt Masters', members: ['Vishal Kumar', 'Shreya Iyer'], position: '2nd Place', linkedin: 'https://linkedin.com/in/vishalkumar' }
    ]
  }
];

// Function to create calendar event
const addToCalendar = (event: any) => {
  const startDate = new Date(event.date);
  const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000); // Add 2 hours
  
  const formatDate = (date: Date) => {
    return date.toISOString().replace(/-|:|\.\d\d\d/g, '');
  };

  // Google Calendar URL
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${formatDate(startDate)}/${formatDate(endDate)}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;

  window.open(googleCalendarUrl, '_blank');
};

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="relative min-h-screen">
        <Navigation onWatchReel={() => {}} />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4">
              Club Events
            </h2>
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6 text-glow">
              Join Our Technical Community
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Competitions, workshops, symposiums, and hackathons to enhance your engineering skills
            </p>
          </motion.div>

          {/* Upcoming Events */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-3xl font-display font-bold mb-2 text-primary">Upcoming Events</h2>
              <p className="text-muted-foreground">Don't miss out on these amazing opportunities</p>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="glass-panel neon-glow h-full overflow-hidden">
                    <div className="relative h-56 overflow-hidden">
                      <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                      <Badge className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm animate-pulse">
                        {event.status}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl font-display">{event.title}</CardTitle>
                      <CardDescription>{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4 text-primary" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4 text-primary" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4 text-primary" />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users className="w-4 h-4 text-primary" />
                          {event.attendees} expected
                        </div>
                      </div>
                      <Button className="w-full" size="lg">Register Now</Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Future Events */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl font-display font-bold mb-2">Future Events</h2>
              <p className="text-muted-foreground">Mark your calendars for these upcoming events</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {futureEvents.map((event, index) => (
                <EventCard key={event.title} event={event} index={index} onAddToCalendar={addToCalendar} />
              ))}
            </div>
          </section>

          {/* Past Events */}
          <section>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl font-display font-bold mb-2">Past Events</h2>
              <p className="text-muted-foreground">Relive the highlights from our previous events</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card 
                    className="glass-panel hover:neon-glow transition-all duration-300 group overflow-hidden h-full cursor-pointer"
                    onClick={() => setSelectedEvent(event)}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-display">{event.title}</CardTitle>
                      <CardDescription>{event.highlights}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {event.attendees}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Event Details Popup */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="glass-panel max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 p-2 rounded-full glass-panel hover:neon-glow transition-all z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8">
                <div className="mb-6">
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    className="w-full h-64 object-cover rounded-xl mb-4"
                  />
                  <h2 className="text-3xl font-display font-bold text-glow mb-2">
                    {selectedEvent.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">{selectedEvent.highlights}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(selectedEvent.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {selectedEvent.attendees} attendees
                    </span>
                  </div>
                </div>

                {selectedEvent.type === 'competition' && selectedEvent.winners && (
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-4 flex items-center gap-2">
                      <Trophy className="w-6 h-6 text-primary" />
                      Winners
                    </h3>
                    <div className="space-y-4">
                      {selectedEvent.winners.map((winner, idx) => (
                        <Card key={idx} className="glass-panel">
                          <CardHeader>
                            <div className="flex items-center justify-between">
                              <div>
                                <CardTitle className="text-xl flex items-center gap-2">
                                  {idx === 0 && <Award className="w-5 h-5 text-yellow-500" />}
                                  {idx === 1 && <Award className="w-5 h-5 text-gray-400" />}
                                  {idx === 2 && <Award className="w-5 h-5 text-amber-700" />}
                                  {winner.name}
                                </CardTitle>
                                <CardDescription>{winner.position}</CardDescription>
                              </div>
                              <a
                                href={winner.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 glass-panel rounded-lg hover:neon-glow transition-all"
                              >
                                <ExternalLink className="w-5 h-5" />
                              </a>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">
                              Team Members: {winner.members.join(', ')}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {selectedEvent.type === 'lecture' && selectedEvent.guest && (
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-4">Guest Speaker</h3>
                    <Card className="glass-panel">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-2xl">{selectedEvent.guest.name}</CardTitle>
                            <CardDescription className="text-base">{selectedEvent.guest.designation}</CardDescription>
                          </div>
                          <a
                            href={selectedEvent.guest.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 glass-panel rounded-lg hover:neon-glow transition-all"
                          >
                            <ExternalLink className="w-6 h-6" />
                          </a>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{selectedEvent.guest.bio}</p>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
            <Footer />
    </div>
  );
}

function EventCard({ event, index, onAddToCalendar }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="glass-panel hover:neon-glow transition-all duration-300 group overflow-hidden h-full">
        <div className="relative h-48 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
          />
          <Badge className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm">
            {event.status}
          </Badge>
        </div>
        <CardHeader>
          <CardTitle className="text-xl font-display">{event.title}</CardTitle>
          <CardDescription>{event.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              {new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              {event.time}
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              {event.location}
            </div>
          </div>
          <Button 
            variant="outline" 
            className="w-full mt-4"
            onClick={() => onAddToCalendar(event)}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Add to Calendar
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}