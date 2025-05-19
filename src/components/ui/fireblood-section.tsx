import { motion } from 'framer-motion';
import { Microscope, RotateCcw, Award, Dumbbell, XCircle, Sparkles } from 'lucide-react';
import { SparklesCore } from './sparkles';

const features = [
  {
    icon: <Microscope className="w-8 h-8 text-accent-green" />,
    title: "SCIENCE",
    subtitle: "DRIVEN"
  },
  {
    icon: <RotateCcw className="w-8 h-8 text-accent-green" />,
    title: "CONTINUAL",
    subtitle: "IMPROVEMENT"
  },
  {
    icon: <Award className="w-8 h-8 text-accent-green" />,
    title: "WARRIOR",
    subtitle: "CERTIFIED"
  },
  {
    icon: <Dumbbell className="w-8 h-8 text-accent-green" />,
    title: "PEAK-MALE",
    subtitle: "PERFORMANCE"
  },
  {
    icon: <XCircle className="w-8 h-8 text-accent-green" />,
    title: "TASTES TERRIBLE!",
    subtitle: ""
  }
];

const benefits = [
  "POWERFUL MULTIVITAMINS",
  "BIOAVAILABLE MULTIMINERALS", 
  "BALANCED AMINO ACID BLEND",
  "HIGH DOSE ANTIOXIDANTS",
  "B VITAMIN COMPLEX",
  "SCIENCE FUELLED",
  "OPTIMALLY DOSED FORMULA"
];

export function FirebloodSection() {
  return (
    <section className="min-h-screen bg-[#0a0a0a] relative overflow-hidden py-20">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:44px_44px]" />
      
      <div className="absolute inset-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={40}
          className="w-full h-full"
          particleColor="#22C55E"
          speed={0.5}
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-green/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono tracking-wider font-bold mb-6"
              style={{ 
                fontFamily: "'Press Start 2P', monospace",
                textShadow: '0 0 20px rgba(34, 197, 94, 0.5)'
              }}
            >
              ALL-YOU-NEED
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent">
                NUTRITION
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8 font-mono space-y-4"
            >
              <p className="text-accent-green">
                FIREBLOOD REPLACES <span className="text-white">MULTIPLE</span> SUPPLEMENTS BY
              </p>
              <p className="text-white">
                COVERING NUTRITIONAL GAPS WITH A
              </p>
              <p className="text-accent-green">
                COMPREHENSIVE BLEND OF NUTRIENTS. <span className="text-white">JUST ONE</span>
              </p>
              <p className="text-white">
                SCOOP EACH DAY HELPS MEET YOUR FOUNDATIONAL
              </p>
              <p className="text-accent-green">
                HEALTH NEEDS.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-300 mb-12 font-mono tracking-wide"
            >
              SIMPLY PUT, IT'S A WAY TO <span className="text-accent-green">INVEST IN YOUR HEALTH</span>
              <br />NOW AND IN THE LONG RUN.
            </motion.p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-accent-green/10 rounded-lg transform -skew-x-6 group-hover:skew-x-0 transition-transform duration-300" />
                  <div className="relative p-4 text-center">
                    <div className="mb-2 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                    <div className="font-mono text-white text-sm tracking-wider">
                      <div className="font-bold" style={{ textDecoration: feature.title === "TASTES TERRIBLE!" ? "line-through" : "none" }}>
                        {feature.title}
                      </div>
                      <div className="text-accent-green">{feature.subtitle}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="relative flex items-center justify-center perspective">
                <motion.div
                  initial={{ rotateY: -15 }}
                  animate={{ rotateY: 15 }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "rotateX(10deg)",
                  }}
                  className="relative w-[200px]"
                >
                  {/* Corner Marks */}
                  <div className="absolute top-0 left-0 w-6 h-6">
                    <div className="absolute top-0 left-0 w-px h-3 bg-white/50"></div>
                    <div className="absolute top-0 left-0 w-3 h-px bg-white/50"></div>
                  </div>
                  <div className="absolute top-0 right-0 w-6 h-6">
                    <div className="absolute top-0 right-0 w-px h-3 bg-white/50"></div>
                    <div className="absolute top-0 right-0 w-3 h-px bg-white/50"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-6 h-6">
                    <div className="absolute bottom-0 left-0 w-px h-3 bg-white/50"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-px bg-white/50"></div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-6 h-6">
                    <div className="absolute bottom-0 right-0 w-px h-3 bg-white/50"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-px bg-white/50"></div>
                  </div>

                  <img 
                    src="https://i.imgur.com/6USjKfR.png" 
                    alt="Fireblood Supplement"
                    className="w-[200px] relative z-10"
                    style={{
                      filter: "drop-shadow(0 25px 25px rgba(34, 197, 94, 0.15))"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-accent-green/20 via-transparent to-accent-green/20 blur-xl" />
                </motion.div>
              </div>

              <div className="mt-12 bg-[rgba(10,10,10,0.95)] p-6 backdrop-blur-sm border border-accent-green/20 rounded-lg">
                <h3 className="text-xl font-mono font-bold text-accent-green mb-4 tracking-wider flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  YOUR LOOK INSIDE FIREBLOOD:
                </h3>
                <ul className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 text-gray-300 font-mono tracking-wider group"
                    >
                      <span className="text-accent-green group-hover:scale-125 transition-transform duration-300">—</span>
                      {benefit}
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 text-sm font-mono text-accent-green hover:text-white transition-colors tracking-wider relative overflow-hidden group"
                >
                  <span className="relative z-10">SEE FIREBLOOD INGREDIENTS</span>
                  <div className="absolute inset-0 bg-accent-green/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated Border Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-green to-transparent animate-pulse" />
    </section>
  );
}