import { motion } from 'framer-motion';
import { Users, Clock, Target, Award } from 'lucide-react';

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    bio: "With over 15 years in luxury timepieces, Sarah leads our vision for exceptional craftsmanship.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1887"
  },
  {
    name: "Michael Chen",
    role: "Head of Design",
    bio: "Award-winning designer bringing innovation to every timepiece.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1887"
  },
  {
    name: "David Rodriguez",
    role: "Master Watchmaker",
    bio: "Certified master watchmaker with expertise in complex movements.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1887"
  }
];

const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description: "MORCO AURA was established with a vision for innovative timepieces."
  },
  {
    year: "2021",
    title: "First Collection Launch",
    description: "The Celestial Series debuted to critical acclaim."
  },
  {
    year: "2022",
    title: "International Expansion",
    description: "Opened boutiques in major cities worldwide."
  },
  {
    year: "2023",
    title: "Innovation Award",
    description: "Received the Horology Innovation Award for our Nova movement."
  }
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-primary text-white pt-24">
      {/* Mission Statement */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold mb-6 gradient-text">Our Mission</h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              At MORCO AURA, we blend traditional craftsmanship with cutting-edge innovation
              to create timepieces that transcend generations. Our commitment to excellence
              drives us to push the boundaries of horological artistry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-primary-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 bg-[#1a1f36] rounded-lg border border-border"
            >
              <Users className="w-8 h-8 text-accent-green mb-4" />
              <h3 className="text-xl font-bold mb-2">Craftsmanship</h3>
              <p className="text-text-secondary">Meticulous attention to detail in every piece</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-[#1a1f36] rounded-lg border border-border"
            >
              <Clock className="w-8 h-8 text-accent-green mb-4" />
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-text-secondary">Pushing boundaries in watchmaking</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 bg-[#1a1f36] rounded-lg border border-border"
            >
              <Target className="w-8 h-8 text-accent-green mb-4" />
              <h3 className="text-xl font-bold mb-2">Precision</h3>
              <p className="text-text-secondary">Uncompromising accuracy in every movement</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 bg-[#1a1f36] rounded-lg border border-border"
            >
              <Award className="w-8 h-8 text-accent-green mb-4" />
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-text-secondary">Setting new standards in luxury timepieces</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16 gradient-text"
          >
            Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1a1f36] rounded-lg overflow-hidden border border-border"
              >
                <div className="aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-accent-green mb-3">{member.role}</p>
                  <p className="text-text-secondary">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-primary-dark">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16 gradient-text"
          >
            Our Journey
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-8 mb-12 last:mb-0"
              >
                <div className="flex-shrink-0 w-24 pt-1">
                  <span className="text-2xl font-bold text-accent-green">{milestone.year}</span>
                </div>
                <div className="flex-1 pb-8 border-l border-border pl-8 relative">
                  <div className="absolute left-0 top-2 w-3 h-3 bg-accent-green rounded-full transform -translate-x-1.5"></div>
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-text-secondary">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;