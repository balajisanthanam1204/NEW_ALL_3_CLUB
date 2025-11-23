import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trophy, Users, Award, Zap, Calendar, UserCheck } from 'lucide-react';

// --- Achievement Data ---
const allAchievements = [
 {
    id: 1,
    title: 'RACE Mentorship Program – Phase 1 (2024–25)',
    description: 'Foundational electronics and IoT mentorship program. Phase 1 trained 36 students through 16 sessions covering basic electronics, Arduino and ESP32 programming, IoT fundamentals, instrumentation, and Wokwi simulation. 35 students earned certification.',
    icon: Zap,
    category: 'Mentorship',
    date: '2024-08-31',
    type: 'Club',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop&q=80',
    variant: 'gold', 
  },
  {
    id: 2,
    title: 'RACE Mentorship Program – Phase 2 (2024–25)',
    description: 'Advanced AI and ML focused technical mentorship. Phase 2 trained 44 students across 12 sessions on Python for AI, NLP, CNNs, computer vision, object detection, RPA, and ML pipelines. 36 students earned certification.',
    icon: Award,
    category: 'Mentorship',
    date: '2025-02-05',
    type: 'Club',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&q=80',
    variant: 'gold',
  },
  {
    id: 3,
    title: 'Participation – 67th Annual IETE Convention (AIC 2024), Bhopal',
    description: 'Two SVCE teams were shortlisted to present Smart Gyrogloves for Parkinson\'s Patients and an Automatic Irrigation Bot under the theme "Emerging Technologies & AI." Their work showcased innovation, societal impact, and strong project execution.',
    icon: Trophy,
    category: 'Competition',
    date: '2024-09-14',
    type: 'Club',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&q=80',
    variant: 'silver',
  },
  {
    id: 4,
    title: 'Outstanding ISF Award 2024–2025',
    description: 'SVCE\'s IETE-Students\' Forum was recognised for its continued excellence in technical initiatives and student involvement. Dr. T. J. Jeyaprabha received the Best ISF Coordinator Award for her leadership and contributions across lectures, workshops, FDPs, and mentorship.',
    icon: Award,
    category: 'Recognition',
    date: '2025-09-19',
    type: 'Club',
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&h=400&fit=crop&q=80',
    variant: 'gold',
  },
];

// --- Custom Tailwind Badge Styling (Assumes you have a 'primary' color defined) ---
const getBadgeClass = (variant) => {
  switch (variant) {
    case 'gold':
      return 'bg-amber-400 text-amber-900 hover:bg-amber-500 shadow-lg shadow-amber-500/50';
    case 'silver':
      return 'bg-slate-300 text-slate-800 hover:bg-slate-400 shadow-lg shadow-slate-400/50';
    case 'community':
      return 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-600/50';
    case 'member':
      return 'bg-green-500 text-white hover:bg-green-600 shadow-lg shadow-green-500/50';
    default:
      return 'bg-primary/90 backdrop-blur-sm';
  }
};

// --- Framer Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

// --- Achievements Component ---
export default function Achievements() {
  const [activeFilter, setActiveFilter] = useState('All'); // 'All', 'Club', 'Member'

  const filteredAchievements = allAchievements.filter(achievement => 
    activeFilter === 'All' || achievement.type === activeFilter
  );
  
  const filterButtons = [
    { label: 'All Achievements', value: 'All' },
    { label: 'Club Milestones', value: 'Club' },
    { label: 'Member Spotlights', value: 'Member' },
  ];

  return (
    <div className="relative min-h-screen">
      <Navigation onWatchReel={() => {}} />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-8">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4">
              Our Legacy
            </h2>
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6 text-glow">
              Club Achievements ✨
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Celebrating the dedication, innovation, and success of our talented community.
            </p>
          </motion.div>

          {/* Filter/Tab Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="flex justify-center gap-4 mb-12 max-w-3xl mx-auto flex-wrap"
          >
            {filterButtons.map((button) => (
              <Button
                key={button.value}
                variant={activeFilter === button.value ? 'default' : 'outline'}
                className={activeFilter === button.value ? 'neon-button' : 'hover:bg-primary/10 transition-colors'}
                onClick={() => setActiveFilter(button.value)}
              >
                {button.label}
              </Button>
            ))}
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            // Key change forces re-animation when filter changes
            key={activeFilter} 
          >
            {filteredAchievements.length > 0 ? (
              filteredAchievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                const badgeClass = getBadgeClass(achievement.variant);

                return (
                  <motion.div
                    key={achievement.id}
                    variants={itemVariants}
                    custom={index} // Use index for stagger delay
                  >
                    <Card className="glass-panel hover:neon-glow transition-all duration-500 group overflow-hidden h-full flex flex-col">
                      
                      {/* Image at the top of the card */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={achievement.image}
                          alt={achievement.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                        />
                        {/* Achievement Type Badge */}
                        <Badge className={`absolute top-4 right-4 text-xs uppercase ${achievement.type === 'Club' ? 'bg-primary/90' : 'bg-green-600/90'} backdrop-blur-sm`}>
                          {achievement.type}
                        </Badge>
                      </div>

                      <CardHeader className="p-6 pb-2 flex-grow">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                           {/* Icon */}
                          <div className={`p-1 rounded-full ${achievement.variant === 'gold' ? 'bg-amber-400/20 text-amber-400' : 'bg-primary/20 text-primary'}`}>
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(achievement.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </span>
                        </div>
                        
                        <CardTitle className="text-xl font-display group-hover:text-primary transition-colors">
                          {achievement.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {achievement.description}
                        </p>
                      </CardHeader>

                      <CardContent className="p-6 pt-0">
                         {/* Category Badge at the bottom */}
                         <Badge className={`text-xs uppercase tracking-wider mt-4 ${badgeClass}`}>
                            Category: {achievement.category}
                          </Badge>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })
            ) : (
                <div className="md:col-span-3 text-center p-12 text-muted-foreground">
                    <Trophy className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <p className="text-lg">No {activeFilter} achievements found yet. Check back soon!</p>
                </div>
            )}
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}