import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

const projects = {
  uiux: [
    {
      title: 'Immersive Portfolio',
      description: 'A 3D interactive portfolio showcasing design work with WebGL',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      tags: ['UI/UX', '3D Design', 'WebGL'],
      link: '#'
    },
    {
      title: 'Mobile Banking App',
      description: 'Modern and secure banking interface with seamless UX',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
      tags: ['Mobile', 'Fintech', 'UI Design'],
      link: '#'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Data visualization dashboard with real-time insights',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['Dashboard', 'Data Viz', 'UX'],
      link: '#'
    }
  ],
  development: [
    {
      title: 'AI Chatbot Platform',
      description: 'Conversational AI with natural language processing',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop',
      tags: ['AI', 'Python', 'NLP'],
      link: '#'
    },
    {
      title: 'Event Management System',
      description: 'Full-stack platform for managing college events',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      title: 'IoT Smart Campus',
      description: 'Connected devices for automated campus management',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&h=400&fit=crop',
      tags: ['IoT', 'Arduino', 'Sensors'],
      link: '#'
    }
  ],
  research: [
    {
      title: 'Machine Learning Research',
      description: 'Exploring deep learning for image recognition',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop',
      tags: ['ML', 'Research', 'Python'],
      link: '#'
    },
    {
      title: 'Blockchain Security',
      description: 'Research on decentralized security protocols',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
      tags: ['Blockchain', 'Security', 'Research'],
      link: '#'
    },
    {
      title: 'VR Education Tools',
      description: 'Virtual reality applications for enhanced learning',
      image: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=600&h=400&fit=crop',
      tags: ['VR', 'Education', 'Unity'],
      link: '#'
    }
  ]
};

export default function ProjectsDetail() {
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
              Our Work
            </h2>
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6 text-glow">
              Projects Portfolio
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our innovative projects across UI/UX design, development, and research
            </p>
          </motion.div>

          {/* UI/UX Projects */}
          <section className="mb-20">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-display font-bold mb-8 flex items-center gap-3"
            >
              <span className="text-primary">UI/UX</span> Design
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.uiux.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </section>

          {/* Development Projects */}
          <section className="mb-20">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-display font-bold mb-8 flex items-center gap-3"
            >
              <span className="text-accent">Development</span> Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.development.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </section>

          {/* Research Projects */}
          <section>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-display font-bold mb-8 flex items-center gap-3"
            >
              <span className="text-primary">Research</span> Initiatives
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.research.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
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
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
        </div>
        <CardHeader>
          <CardTitle className="text-xl font-display flex items-center justify-between">
            {project.title}
            <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
