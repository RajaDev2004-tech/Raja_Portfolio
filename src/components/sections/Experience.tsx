import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Company",
    period: "2022 - Present",
    description:
      "Leading development of scalable web applications using React, TypeScript, and Node.js. Mentoring junior developers and implementing best practices.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Agency",
    period: "2020 - 2022",
    description:
      "Developed and maintained multiple client projects. Implemented RESTful APIs and integrated third-party services.",
    technologies: ["React", "Python", "FastAPI", "MongoDB"],
  },
  {
    title: "Frontend Developer",
    company: "Startup Inc",
    period: "2019 - 2020",
    description:
      "Built responsive user interfaces and improved application performance. Collaborated with designers to implement pixel-perfect designs.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Redux"],
  },
  {
    title: "Junior Developer",
    company: "Software Solutions",
    period: "2018 - 2019",
    description:
      "Started my professional journey working on web applications. Gained experience in full development lifecycle.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional journey and growth as a developer
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px w-0.5 h-full bg-border" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full gradient-bg z-10" />

              {/* Content */}
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 pl-8 md:pl-0" : "md:pl-12 pl-8"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass p-6 rounded-2xl group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center group-hover:glow-sm transition-all">
                      <Briefcase className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg">
                        {exp.title}
                      </h3>
                      <p className="text-primary text-sm">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}