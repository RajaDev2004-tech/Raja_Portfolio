import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Users, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Code2, value: "5+", label: "Years Experience" },
  { icon: Rocket, value: "50+", label: "Projects Completed" },
  { icon: Users, value: "30+", label: "Happy Clients" },
  { icon: Coffee, value: "1000+", label: "Cups of Coffee" },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know me better and what drives my passion for development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-display font-semibold mb-4">
                Passionate Full Stack Developer
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm Raja, a dedicated Full Stack Developer with a passion for creating 
                exceptional digital experiences. With expertise spanning both frontend 
                and backend technologies, I bring ideas to life through clean, 
                efficient, and scalable code.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My journey in software development has equipped me with a deep 
                understanding of modern web technologies, from React and TypeScript 
                on the frontend to Python, FastAPI, and PostgreSQL on the backend.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in continuous learning and staying updated with the latest 
                industry trends. When I'm not coding, you'll find me exploring new 
                technologies, contributing to open-source projects, or sharing 
                knowledge with the developer community.
              </p>
            </div>

            <Button
              size="lg"
              className="gradient-bg text-primary-foreground hover:opacity-90"
            >
              Download Resume
            </Button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-6 rounded-2xl text-center group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl gradient-bg flex items-center justify-center group-hover:glow transition-all">
                  <stat.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h4 className="text-3xl font-display font-bold gradient-text mb-1">
                  {stat.value}
                </h4>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}