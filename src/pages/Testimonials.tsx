import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "James Wilson",
    role: "Watch Collector",
    company: "Timepiece Enthusiast",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=2940",
    rating: 5,
    text: "The attention to detail in MORCO AURA watches is exceptional. Each piece tells a story of craftsmanship and innovation."
  },
  {
    id: 2,
    name: "Emily Chen",
    role: "Fashion Editor",
    company: "Style Magazine",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=2940",
    rating: 5,
    text: "MORCO AURA has redefined luxury watchmaking. Their designs are both timeless and contemporary."
  },
  {
    id: 3,
    name: "Robert Martinez",
    role: "CEO",
    company: "Luxury Retail Group",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=2940",
    rating: 5,
    text: "As someone who appreciates fine timepieces, I'm impressed by the quality and innovation MORCO AURA brings to the industry."
  },
  {
    id: 4,
    name: "Sarah Thompson",
    role: "Professional Athlete",
    company: "Olympic Medalist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=2940",
    rating: 5,
    text: "The durability and precision of my MORCO AURA watch is unmatched. It's the perfect companion for my active lifestyle."
  }
];

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-primary text-white pt-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 gradient-text">Client Testimonials</h1>
          <p className="text-text-secondary">
            Hear what our valued clients have to say about their MORCO AURA experience.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1a1f36] rounded-lg p-8 border border-border relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-accent-green opacity-20" />
              
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-text-secondary">{testimonial.role}</p>
                  <p className="text-sm text-accent-green">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-accent-yellow fill-current"
                  />
                ))}
              </div>

              <p className="text-text-secondary leading-relaxed">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-4">Share Your Experience</h2>
          <p className="text-text-secondary mb-8">
            We value your feedback. Share your MORCO AURA story and help others discover the perfect timepiece.
          </p>
          <button className="px-8 py-3 bg-accent-green hover:bg-accent-green/90 text-white rounded-lg transition-colors">
            Write a Review
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;