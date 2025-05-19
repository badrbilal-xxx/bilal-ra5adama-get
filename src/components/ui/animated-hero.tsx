import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "./sparkles";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["innovative", "powerful", "intelligent", "advanced", "seamless"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary via-primary/95 to-primary">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full">
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
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-primary/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex gap-12 items-center justify-center flex-col max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button variant="secondary" size="sm" className="gap-2 bg-accent-green/10 text-accent-green border border-accent-green/20 hover:bg-accent-green/20">
              <Sparkles className="w-4 h-4" />
              <span>Revolutionizing Supplements</span>
              <MoveRight className="w-4 h-4" />
            </Button>
          </motion.div>

          {/* Main Title */}
          <div className="flex gap-6 flex-col text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                The Future of
              </span>
              <div className="relative h-[80px] md:h-[120px] overflow-hidden mt-2">
                <div className="absolute w-full">
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute w-full block bg-gradient-to-r from-accent-green via-accent-cyan to-accent-green bg-clip-text text-transparent"
                      initial={{ opacity: 0, y: 50 }}
                      animate={
                        titleNumber === index
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: titleNumber > index ? -50 : 50 }
                      }
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      {title}
                    </motion.span>
                  ))}
                </div>
              </div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                Supplements
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
            >
              Experience the perfect fusion of cutting-edge science and natural ingredients. 
              Our advanced formulas are designed to optimize your performance and well-being.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <Button size="lg" className="gap-2 bg-accent-green hover:bg-accent-green/90 text-primary min-w-[200px]">
              <Zap className="w-5 h-5" />
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-accent-green/20 text-accent-green hover:bg-accent-green/10 min-w-[200px]">
              <PhoneCall className="w-5 h-5" />
              Schedule Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 w-full max-w-3xl mx-auto"
          >
            {[
              { value: "98%", label: "Customer Satisfaction" },
              { value: "24/7", label: "Expert Support" },
              { value: "50K+", label: "Active Users" },
              { value: "100%", label: "Natural Ingredients" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-accent-green mb-1">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-primary to-transparent" />
    </div>
  );
}

export { Hero };