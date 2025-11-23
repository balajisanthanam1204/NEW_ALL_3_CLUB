import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Mail } from 'lucide-react';

const clubs = {
  ECEA: {
    name: 'ECEA',
    fullName: 'Electronics and Communication Engineers Association',
    logo: '/ecea.png',
    members: [
      {
        name: 'M Raeef',
        role: 'President',
        year: 'IV Year ECE B',
        image: '/ECEA-MEMBERS/MOHAMMED RAEEF ECE.jpeg',
        social: { github: '#', linkedin: '#', email: 'raeef@ecea.com' }
      },
      {
        name: 'Harinee V T',
        role: 'Vice-President',
        year: 'IV Year ECE A',
        image: '/ECEA-MEMBERS/HARINEE V T ECE.jpg',
        social: { github: '#', linkedin: '#', email: 'harinee@ecea.com' }
      },
      {
        name: 'Balaji S',
        role: 'Secretary',
        year: 'III Year ECE A',
        image: '/ECEA-MEMBERS/BALAJI S ECE.jpg',
        social: { github: '#', linkedin: 'https://www.linkedin.com/in/balaji-santhanam008/', email: 'balaji@ecea.com' }
      },
      {
        name: 'Surya K',
        role: 'Treasurer',
        year: 'III Year ECE C',
        image: '/ECEA-MEMBERS/SURYA K ECE.jpg',
        social: { github: '#', linkedin: '#', email: 'surya@ecea.com' }
      },
      {
        name: 'Anushri V',
        role: 'Executive Member',
        year: 'III Year ECE A',
        image: '/ECEA-MEMBERS/ANUSHRI V ECE.jpg',
        social: { github: '#', linkedin: '#', email: 'anushri@ecea.com' }
      },
      {
        name: 'Preethika R',
        role: 'Executive Member',
        year: 'III Year ECE B',
        image: '/ECEA-MEMBERS/PREETHIKA R ECE.jpg',
        social: { github: '#', linkedin: '#', email: 'preethika@ecea.com' }
      },
      {
        name: 'Sudesh Pillai',
        role: 'Executive Member',
        year: 'III Year ECE C',
        image: '/ECEA-MEMBERS/SUDESH SHRIKANT PILLAI ECE.jpg',
        social: { github: '#', linkedin: '#', email: 'sudesh@ecea.com' }
      },
      {
        name: 'Lavanya P',
        role: 'Executive Member',
        year: 'III Year ECE B',
        image: '/ECEA-MEMBERS/LAVANYA P ECE.jpg',
        social: { github: '#', linkedin: '#', email: 'lavanya@ecea.com' }
      },
      {
        name: 'N.Yaazhinii',
        role: 'Joint Secretary',
        year: 'II Year ECE B',
        image: '/ECEA-MEMBERS/N YAAZHINII ECE.jpg',
        social: { github: '#', linkedin: '#', email: 'yaazhinii@ecea.com' }
      },
      {
        name: 'Abhimanyu Singh Bhati',
        role: 'Joint Secretary',
        year: 'II Year ECE A',
        image: '/ECEA-MEMBERS/ABHIMANYU SINGH BHATI ECE.jpg',
        social: { github: '#', linkedin: '#', email: 'abhimanyu@ecea.com' }
      },
      {
        name: 'Prathiba MSK',
        role: 'Joint Secretary',
        year: 'II Year ECE B',
        image: '/ECEA-MEMBERS/PRATHIBA S.png',
        social: { github: '#', linkedin: '#', email: 'prathiba@ecea.com' }
      }
    ]
  },
  IETE: {
    name: 'IETE-SF',
    fullName: 'IETE – SVCE Students Forum',
    logo: '/iete.png',
    members: [
      {
        name: 'Yaaminy S K',
        role: 'Chairwoman',
        year: 'IV Year ECE C',
        image: '/IETE-MEMBERS/YAAMINY S K ECE.JPG',
        social: { github: '#', linkedin: '#', email: 'yaaminy@iete.com' }
      },
      {
        name: 'Roobuck Ganeshwara Rao C',
        role: 'Vice-Chairman',
        year: 'IV Year ECE C',
        image: '/IETE-MEMBERS/Roobuck ganeshwara rao C.jpg',
        social: { github: '#', linkedin: '#', email: 'roobuck@iete.com' }
      },
      {
        name: 'Harini Chinnasamy',
        role: 'Honorary Secretary',
        year: 'III Year ECE A',
        image: '/IETE-MEMBERS/HARINI C ECE.jpeg',
        social: { github: '#', linkedin: '#', email: 'harini@iete.com' }
      },
      {
        name: 'Bawadharani Sree R',
        role: 'Honorary Treasurer',
        year: 'III Year ECE A',
        image: '/IETE-MEMBERS/BAWADHARANI.jpg',
        social: { github: '#', linkedin: '#', email: 'bawadharani@iete.com' }
      },
      {
        name: 'Tejaswi S',
        role: 'Executive Member',
        year: 'III Year ECE C',
        image: '/IETE-MEMBERS/TEJASWI S ECE.jpeg',
        social: { github: '#', linkedin: '#', email: 'tejaswi@iete.com' }
      },
      {
        name: 'Rohith Kanna S',
        role: 'Executive Member',
        year: 'III Year ECE C',
        image: '/IETE-MEMBERS/ROHITH KANNA S ECE.JPG',
        social: { github: '#', linkedin: '#', email: 'rohith@iete.com' }
      },
      {
        name: 'Karunya D',
        role: 'Executive Member',
        year: 'III Year ECE B',
        image: '/IETE-MEMBERS/KARUNYA D ECE.jpg',
        social: { github: '#', linkedin: '#', email: 'karunya@iete.com' }
      },
      {
        name: 'Sanjana Praveen',
        role: 'Executive Member',
        year: 'III Year ECE C',
        image: '/IETE-MEMBERS/SANJANA PRAVEEN KUMAR ECE.jpg',
        social: { github: '#', linkedin: '#', email: 'sanjana@iete.com' }
      },
      {
        name: 'A Aadhithya Narayanan',
        role: 'Joint Secretary',
        year: 'II Year ECE A',
        image: '/IETE-MEMBERS/A AADHITHYA NARAYANAN ECE.jpg',
        social: { github: '#', linkedin: '#', email: 'aadhithya@iete.com' }
      },
      {
        name: 'Mahalakshmi L',
        role: 'Joint Secretary',
        year: 'II Year ECE B',
        image: '/IETE-MEMBERS/MAHALAKSHMI L ECE.jpg',
        social: { github: '#', linkedin: '#', email: 'mahalakshmi@iete.com' }
      },
      {
        name: 'Viswanathan L',
        role: 'Joint Secretary',
        year: 'II Year ECE C',
        image: '/IETE-MEMBERS/VISWANATHAN L ECE.jpg',
        social: { github: '#', linkedin: '#', email: 'viswanathan@iete.com' }
      }
    ]
  },
  RACE: {
    name: 'RACE',
    fullName: 'Research Association for Innovative Design in Communication and Electronics',
    logo: '/race.png',
    members: [
      {
        name: 'Roshan M',
        role: 'President',
        year: 'IV Year ECE C',
        image: '/RACE-MEMBERS/ROSHAN.JPG',
        social: { github: '#', linkedin: '#', email: 'roshan@race.com' }
      },
      {
        name: 'Adarsh S',
        role: 'Vice-President',
        year: 'IV Year ECE A',
        image: '/RACE-MEMBERS/ADARSH S.jpg',
        social: { github: '#', linkedin: '#', email: 'adarsh@race.com' }
      },
      {
        name: 'Lakshanaa A M',
        role: 'Secretary',
        year: 'III Year ECE B',
        image: '/RACE-MEMBERS/B S AARTI ECE.jpg',
        social: { github: '#', linkedin: '#', email: 'lakshanaa@race.com' }
      },
      {
        name: 'B.S.Aarti',
        role: 'Joint Secretary',
        year: 'II Year ECE A',
        image: '/RACE-MEMBERS/B S AARTI ECE.jpg',
        social: { github: '#', linkedin: '#', email: 'aarti@race.com' }
      },
      {
        name: 'Preethika R',
        role: 'Joint Secretary',
        year: 'II Year ECE B',
        image: '/RACE-MEMBERS/PREETHIKA R ECE.jpg',
        social: { github: '#', linkedin: '#', email: 'preethika@race.com' }
      },
      {
        name: 'Sanjai P',
        role: 'Joint Secretary',
        year: 'II Year ECE C',
        image: '/RACE-MEMBERS/SANJAI P ECE.jpg',
        social: { github: '#', linkedin: '#', email: 'sanjai@race.com' }
      },
      {
        name: 'Balasaraswathy B',
        role: 'Lead Mentor',
        year: 'IV Year ECE A',
        image: '/RACE-MEMBERS/BALASARASWATHY B ECE.jpg',
        social: { github: '#', linkedin: '#', email: 'balasaraswathy@race.com' }
      },
      {
        name: 'Aswin Kumar K',
        role: 'Lead Mentor',
        year: 'IV Year ECE A',
        image: '/RACE-MEMBERS/ASWIN KUMAR K.jpg',
        social: { github: '#', linkedin: '#', email: 'aswin@race.com' }
      },
      {
        name: 'Vikash S K',
        role: 'Lead Mentor',
        year: 'IV Year ECE C',
        image: '/RACE-MEMBERS/vikash Krishnakumar.jpg',
        social: { github: '#', linkedin: '#', email: 'vikash@race.com' }
      },
      {
        name: 'Lohith Ashwa S',
        role: 'Mentor',
        year: 'III Year ECE B',
        image: '/RACE-MEMBERS/LOHITH ASHWA S ECE.png',
        social: { github: '#', linkedin: '#', email: 'lohith@race.com' }
      },
      {
        name: 'Muhilan S',
        role: 'Mentor',
        year: 'III Year ECE B',
        image: '/RACE-MEMBERS/MUHILAN S ECE.jpg',
        social: { github: '#', linkedin: '#', email: 'muhilan@race.com' }
      },
      {
        name: 'Srivatsan S P',
        role: 'Mentor',
        year: 'III Year ECE C',
        image: '/RACE-MEMBERS/SRIVATSAN S P ECE.jpg',
        social: { github: '#', linkedin: '#', email: 'srivatsan@race.com' }
      },
      {
        name: 'Shriram Kumar V',
        role: 'Mentor',
        year: 'III Year ECE C',
        image: '/RACE-MEMBERS/SHRIRAM KUMAR V ECE.jpg',
        social: { github: '#', linkedin: '#', email: 'shriram@race.com' }
      },
      {
        name: 'Vinayagamurthi E',
        role: 'Mentor',
        year: 'III Year ECE C',
        image: '/RACE-MEMBERS/VINAYAGAMURTHI E ECE.jpg',
        social: { github: '#', linkedin: '#', email: 'vinayagamurthi@race.com' }
      },
      {
        name: 'Sudhan S',
        role: 'Mentor',
        year: 'III Year ECE C',
        image: '/RACE-MEMBERS/SUDHAN S ECE.png',
        social: { github: '#', linkedin: '#', email: 'sudhan@race.com' }
      },
      {
        name: 'Rithvik R',
        role: 'Mentor',
        year: 'III Year ECE C',
        image: '/RACE-MEMBERS/RITHVIK R ECE.jpg',
        social: { github: '#', linkedin: '#', email: 'rithvik@race.com' }
      }
    ]
  }
};

export default function Team() {
  const [selectedClub, setSelectedClub] = useState('ECEA');
  const currentClub = clubs[selectedClub];

  return (
    <div className="relative min-h-screen">
       <Navigation onWatchReel={() => {}} />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4">
              Our Team
            </h2>
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6 text-glow">
              Meet the Innovators
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate group of students dedicated to exploring and building the future of technology
            </p>
          </motion.div>

          {/* Club Selection Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-4 mb-6 flex-wrap items-center"
          >
            {Object.keys(clubs).map((clubKey) => (
              <button
                key={clubKey}
                onClick={() => setSelectedClub(clubKey)}
                className={`px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all duration-300 ${
                  selectedClub === clubKey
                    ? 'bg-primary text-primary-foreground neon-glow'
                    : 'glass-panel hover:neon-glow'
                }`}
              >
                {clubs[clubKey].name}
              </button>
            ))}
          </motion.div>

          {/* Selected Club Logo */}
          <motion.div
            key={`${selectedClub}-logo`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <img
              src={currentClub.logo}
              alt={`${currentClub.name} Logo`}
              className="w-32 h-32 object-contain"
            />
          </motion.div>

          {/* Club Full Name */}
          <motion.div
            key={selectedClub}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              {currentClub.fullName}
            </p>
          </motion.div>

          {/* Team Members Grid */}
          <motion.div
            key={`${selectedClub}-grid`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {currentClub.members.map((member, index) => (
              <motion.div
                key={`${member.name}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-panel hover:neon-glow transition-all duration-300 group">
                  <CardHeader className="text-center">
                    <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/30 group-hover:border-primary transition-colors">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-all duration-500"
                      />
                    </div>
                    <CardTitle className="text-2xl font-display">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                    <p className="text-xs text-muted-foreground mt-1">{member.year}</p>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div className="flex justify-center gap-4 pt-2">
                      <a href={member.social.github} className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={member.social.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href={`mailto:${member.social.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
            <Footer />
    </div>
  );
}
