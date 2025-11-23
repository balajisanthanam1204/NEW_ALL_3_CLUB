import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    title: 'The Future of Immersive Web Experiences',
    excerpt: 'Exploring how WebGL and Three.js are revolutionizing the way we interact with websites...',
    author: 'Sarah Chen',
    date: '2024-03-15',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
    readTime: '5 min read'
  },
  {
    title: 'Building AI-Powered Chatbots with Python',
    excerpt: 'A comprehensive guide to creating intelligent conversational agents using modern NLP...',
    author: 'Marcus Williams',
    date: '2024-03-10',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    readTime: '8 min read'
  },
  {
    title: 'UI/UX Trends to Watch in 2024',
    excerpt: 'From neumorphism to glassmorphism, discover the design trends shaping digital products...',
    author: 'Emily Rodriguez',
    date: '2024-03-05',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop',
    readTime: '6 min read'
  },
  {
    title: 'Getting Started with IoT Development',
    excerpt: 'Learn how to build your first IoT project using Arduino and sensors...',
    author: 'David Kim',
    date: '2024-02-28',
    category: 'Hardware',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&h=400&fit=crop',
    readTime: '10 min read'
  },
  {
    title: 'Blockchain Beyond Cryptocurrency',
    excerpt: 'Exploring practical applications of blockchain technology in various industries...',
    author: 'Alex Johnson',
    date: '2024-02-20',
    category: 'Research',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
    readTime: '7 min read'
  },
  {
    title: 'Creating Accessible Web Applications',
    excerpt: 'Best practices for building inclusive digital experiences for all users...',
    author: 'Priya Sharma',
    date: '2024-02-15',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&h=400&fit=crop',
    readTime: '6 min read'
  }
];

export default function Blog() {
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
              Our Blog
            </h2>
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6 text-glow">
              Insights & Stories
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tech insights, tutorials, and stories from our community of innovators
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-panel hover:neon-glow transition-all duration-300 group overflow-hidden h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm">
                      {post.category}
                    </Badge>
                  </div>
                  <CardHeader className="flex-grow">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl font-display group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="group/btn">
                        Read more
                        <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
