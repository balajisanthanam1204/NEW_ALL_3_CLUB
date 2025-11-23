import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Award, Sparkles, FileText, Send, CheckCircle2, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  {
    icon: Award,
    title: 'Recognition Certificate',
    description: 'Receive an official certificate from ECEA, IETE-SF, and RACE clubs'
  },
  {
    icon: Sparkles,
    title: 'Featured Author',
    description: 'Get featured on our website and social media platforms'
  },
  {
    icon: FileText,
    title: 'Build Portfolio',
    description: 'Add published articles to your professional portfolio'
  }
];

const guidelines = [
  'Topics related to Electronics, Communication, Technology, AI, IoT, Robotics, or Innovation',
  'Original content only - no plagiarism',
  'Word count: 500-1500 words',
  'Include relevant images/diagrams (with proper credits)',
  'Clear structure with introduction, body, and conclusion',
  'Proofread for grammar and technical accuracy'
];

const sampleBlog = {
  title: 'Understanding 5G Technology: The Future of Connectivity',
  author: 'John Doe',
  date: '2025-10-15',
  category: 'Communication',
  image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=400&fit=crop',
  readTime: '7 min read',
  excerpt: 'Fifth-generation wireless technology is transforming how we connect, communicate, and interact with the digital world...',
  content: `Fifth-generation wireless (5G) technology represents a quantum leap in mobile connectivity, promising speeds up to 100 times faster than 4G networks. But 5G is more than just faster downloads—it's a foundational technology that will enable the next wave of innovation.

**Key Features of 5G:**

The three main pillars of 5G technology are enhanced mobile broadband (eMBB), ultra-reliable low-latency communications (URLLC), and massive machine-type communications (mMTC). These capabilities enable peak data rates of up to 20 Gbps, latency as low as 1 millisecond, and the ability to connect up to 1 million devices per square kilometer.

**Real-World Applications:**

In healthcare, 5G enables remote surgeries with haptic feedback, allowing surgeons to perform procedures from thousands of miles away. Smart cities leverage 5G for real-time traffic management, environmental monitoring, and public safety systems. The automotive industry is using 5G to develop vehicle-to-everything (V2X) communication for autonomous driving.

**Challenges and Future:**

Despite its promise, 5G deployment faces challenges including infrastructure costs, spectrum allocation, and energy consumption. However, ongoing research into 6G technology is already exploring terahertz frequencies and AI-integrated networks.

As ECE students and professionals, understanding 5G technology is crucial for staying relevant in our rapidly evolving field. The convergence of 5G with AI, IoT, and edge computing will create unprecedented opportunities for innovation.`
};

export default function BlogContribution() {
  const guidelinesRef = useRef(null);
  const sampleRef = useRef(null);
  const guidelinesInView = useInView(guidelinesRef, { once: true, margin: '-100px' });
  const sampleInView = useInView(sampleRef, { once: true, margin: '-100px' });

  return (
    <div className="relative min-h-screen">
        <Navigation onWatchReel={() => {}} />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Share Your Knowledge
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6 text-glow">
              Contribute to Our Blog
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have insights, tutorials, or innovative ideas in Electronics & Communication? 
              Share your knowledge with the community and get recognized for your expertise!
            </p>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-display font-bold text-center mb-12">
              What You'll Get
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, idx) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                  >
                    <Card className="glass-panel hover:neon-glow transition-all duration-300 text-center h-full">
                      <CardHeader>
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                          <IconComponent className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="text-xl font-display">{benefit.title}</CardTitle>
                        <CardDescription className="text-base">{benefit.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Submission Guidelines */}
          <motion.div
            ref={guidelinesRef}
            initial={{ opacity: 0 }}
            animate={guidelinesInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-20 max-w-4xl mx-auto"
          >
            <Card className="glass-panel">
              <CardHeader>
                <CardTitle className="text-3xl font-display text-center mb-2">
                  Submission Guidelines
                </CardTitle>
                <CardDescription className="text-center text-base">
                  Follow these guidelines to ensure your blog gets published
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {guidelines.map((guideline, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={guidelinesInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{guideline}</p>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Submission CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-20 max-w-4xl mx-auto"
          >
            <Card className="glass-panel border-primary/30">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <Send className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2">Ready to Share?</h3>
                    <p className="text-muted-foreground mb-6">
                      Send your draft to our team and we'll review it within 3-5 business days
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-lg">
                    <Mail className="w-6 h-6 text-primary" />
                    <a 
                      href="mailto:ecea@svce.ac.in" 
                      className="font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      ecea@svce.ac.in
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Subject: Blog Submission - [Your Topic] | Attach your article in .doc or .pdf format
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sample Blog */}
          <motion.div
            ref={sampleRef}
            initial={{ opacity: 0 }}
            animate={sampleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-display font-bold text-center mb-12">
              Sample Blog Post
            </h2>
            <Card className="glass-panel hover:neon-glow transition-all duration-300 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={sampleBlog.image}
                  alt={sampleBlog.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm">
                  {sampleBlog.category}
                </Badge>
              </div>
              <CardHeader>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(sampleBlog.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                  <span>{sampleBlog.readTime}</span>
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {sampleBlog.author}
                  </span>
                </div>
                <CardTitle className="text-3xl font-display mb-3">
                  {sampleBlog.title}
                </CardTitle>
                <CardDescription className="text-base italic">
                  {sampleBlog.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <div className="text-muted-foreground space-y-4 whitespace-pre-line">
                  {sampleBlog.content}
                </div>
                <div className="mt-8 pt-8 border-t border-border/50">
                  <p className="text-sm text-muted-foreground italic">
                    This is a sample blog post demonstrating the format and style we're looking for. 
                    Your article should be well-structured, informative, and engaging for our community.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-16"
          >
            <Button
              size="lg"
              onClick={() => window.location.href = 'mailto:ecea@svce.ac.in?subject=Blog Submission'}
              className="group"
            >
              <Mail className="w-5 h-5 mr-2" />
              Submit Your Blog
              <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </main>
            <Footer />
    </div>
  );
}