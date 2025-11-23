import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const upcomingEvents = [
  {
    title: 'SYNAPSE \'25',
    date: '2025-09-25',
    time: 'Full Day Event',
    location: 'Classroom Block 5, SVCE',
    attendees: 50,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
    description: 'Aptitude & Circuit Challenge - Two-round technical contest for second-year ECE students',
    status: 'Registration Open'
  },
  {
    title: 'ENIGMA \'25',
    date: '2025-10-05',
    time: 'Full Day Event',
    location: 'Classroom Block 5, SVCE',
    attendees: 40,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop',
    description: 'Cryptography & Logical Reasoning Challenge featuring cipher-solving with Enigma simulator',
    status: 'Coming Soon'
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
    title: 'System Design with High-Speed Applications',
    date: '2025-08-13',
    attendees: 80,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
    highlights: 'Guest lecture by Mr. Balajee Seshadri from Infineon Technologies'
  },
  {
    title: 'MAKE-A-THON 6.0',
    date: '2025-04-29',
    attendees: 171,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop',
    highlights: '24-hour national hackathon with 40 shortlisted teams and industry judges'
  },
  {
    title: 'Machine Learning Project Pipeline',
    date: '2025-03-28',
    attendees: 65,
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
    highlights: 'Webinar by Mr. Jeeva Kumar A on end-to-end ML workflows'
  },
  {
    title: 'UPAGRAHA\'25',
    date: '2025-02-22',
    attendees: 250,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
    highlights: 'ECE Technical Symposium with 6 events including IoT, VLSI, and robotics'
  },
  {
    title: 'TRACKBOT\'25',
    date: '2025-02-15',
    attendees: 30,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
    highlights: 'Autonomous line-following robotics race for IETE Student\'s Day'
  },
  {
    title: 'ENIGMA\'24',
    date: '2024-11-09',
    attendees: 40,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop',
    highlights: 'Cryptography challenge with classical ciphers and Enigma-style decryption'
  },
  {
    title: 'From Code to Creation: Exploring Wokwi for IoT',
    date: '2024-11-05',
    attendees: 70,
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&h=400&fit=crop',
    highlights: 'Guest lecture by Dr. Swarna Sethu on IoT simulation and rapid prototyping'
  },
  {
    title: 'From Campus to Career',
    date: '2024-10-19',
    attendees: 90,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    highlights: 'Government job pathways guidance by Mr. S. Venkatraman, CPSE Management Trainee'
  },
  {
    title: 'RAIC Hands-On Sessions',
    date: '2024-09-26',
    attendees: 45,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop',
    highlights: 'Practical workshop on LED circuits, Arduino, and ESP32 microcontrollers'
  },
  {
    title: 'Ampere Quest\'24',
    date: '2024-09-18',
    attendees: 62,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
    highlights: 'Technical aptitude and circuit diagnostic challenge with 31 participating teams'
  }
];

export default function Events() {
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
              ECEA Events
            </h2>
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6 text-glow">
              Join Our Technical Community
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Competitions, workshops, symposiums, and hackathons to enhance your engineering skills
            </p>
          </motion.div>

          {/* Upcoming Events - Highlighted */}
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
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
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
                          {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
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
                      <Button className="w-full" size="lg">
                        Register Now
                      </Button>
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
                <EventCard key={event.title} event={event} index={index} />
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
                  <Card className="glass-panel hover:neon-glow transition-all duration-300 group overflow-hidden h-full">
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

      <Footer />
    </div>
  );
}

function EventCard({ event, index }: { event: any; index: number }) {
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
          <Button variant="outline" className="w-full mt-4">
            Get Notified
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}