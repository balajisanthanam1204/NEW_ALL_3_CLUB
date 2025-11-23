import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Rocket, Users } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Innovation',
    description: 'Pushing boundaries with cutting-edge technology and creative solutions.',
  },
  {
    icon: Rocket,
    title: 'Exploration',
    description: 'Diving deep into emerging technologies and immersive experiences.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building a collaborative space for students passionate about tech.',
  },
];

const logoPartners = [
  { src: '/svce.png', name: 'Partner 4' },
  { src: '/ecea.png', name: 'Partner 1' },
  { src: '/iete.png', name: 'Partner 2' },
  { src: '/race.png', name: 'Partner 3' },


];

export default function About() {
  const ref = useRef(null);
  const logoRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const logoInView = useInView(logoRef, { once: true, margin: '-150px' });

  return (
    <section ref={ref} className="py-32 px-8 relative">
      <div className="container mx-auto">


        <motion.div
          ref={logoRef}
          initial={{ opacity: 0 }}
          animate={logoInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-glow flex justify-center mb-12">
            About Us
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Desktop View */}
            <div className="hidden md:block">
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={logoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex justify-center mb-16"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full max-w-3xl flex justify-center">
                  <img 
                    src={logoPartners[0].src} 
                    alt={logoPartners[0].name}
                    className="w-66 h-21 object-contain"
                  />
                </div>
              </motion.div>

              <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
                {logoPartners.slice(1, ).map((partner, idx) => (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={logoInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 + idx * 0.15 }}
                    className="flex justify-center"
                  >
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full flex justify-center">
                      <img 
                        src={partner.src} 
                        alt={partner.name}
                        className="w-28 h-28 object-contain"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden grid grid-cols-1 gap-6 max-w-sm mx-auto">
              {logoPartners.map((partner, idx) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={logoInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + idx * 0.15 }}
                  className="flex justify-center"
                >
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full flex justify-center">
                    <img 
                      src={partner.src} 
                      alt={partner.name}
                      className="w-32 h-32 object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

                <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-6 mb-20"
        >

          <p className="text-lg text-foreground/80 leading-relaxed">
As part of the Department of Electronics and Communication Engineering at SVCE, the Electronics and Communication Engineers Association (ECEA), the Institution of Electronics and Telecommunication Engineers – Student's Forum (IETE-SF), and the Research Association for Innovative Design in Communication and Electronics (RACE) drive student-led innovation, learning, and collaboration under the guidance of Head of Department Dr. N. Kumaratharan and coordinators Dr. T. J. Jeyaprabha, Mr. L. K. Balaji Vignesh, and Mrs. S. Mary Cynthia.
<br></br>
Each club has its focus while collectively fostering technical excellence and skill development. ECEA nurtures professional growth and skill-building, IETE-SF connects students to a national engineering network and research opportunities, RACE emphasizes hands-on learning in robotics, AI, etc, through mentorship and projects. Through flagship initiatives like Make-a-thon, Enigma, Synapse, Upagraha, and TrackBot, along with workshops, guest lectures, and mentorship programs, the clubs foster problem-solving, innovation, teamwork, and career readiness in students in a rapidly evolving technological landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, idx) => {
            const FeatureIcon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                className="glass-panel p-8 rounded-2xl hover:neon-glow transition-all duration-300 group"
              >
                <FeatureIcon className="w-12 h-12 mb-4 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-display font-semibold mb-3">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}