import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Community Water Initiative",
    description:
      "Providing clean and sustainable water solutions for local communities.",
    image: "image6.jpg",
  },
  {
    id: 2,
    title: "Youth Empowerment Program",
    description:
      "Training young individuals with essential skills for self-sufficiency.",
    image: "image4.jpg",
  },
  {
    id: 3,
    title: "Tree Planting Campaign",
    description:
      "Conserving the environment through large-scale reforestation projects.",
    image: "trees.png",
  },
];

const Projects = () => {
    return (
      <section id="projects" className="mx-auto px-6 py-16 bg-orange-100">
        <h2 className="text-center text-4xl font-bold text-green-600 mb-10 mt-10">
          Our Projects
        </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:shadow-lg hover:bg-green-200"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
  
              {/* Project Details */}
              <div className="p-6 pb-16"> {/* Extra padding-bottom to make space for button */}
                <h3 className="text-2xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
  
              {/* Help Fund Button */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <a
                  href="#donate"
                  className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold opacity-90 hover:opacity-100 transition hover:bg-green-800"
                >
                  Help Fund
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    );
  };

export default Projects;