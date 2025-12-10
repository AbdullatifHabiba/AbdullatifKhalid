import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data';
import { Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0 border-l-2 border-gray-800 last:border-l-0 ml-4 md:ml-0"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-gray-950"></div>
              
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{job.role}</h3>
                    <div className="flex items-center text-blue-400 mt-1">
                      <Briefcase className="w-4 h-4 mr-2" />
                      <span>{job.company}</span>
                    </div>
                  </div>
                  <span className="text-gray-500 text-sm mt-2 md:mt-0 font-mono bg-gray-800 px-3 py-1 rounded-full w-fit">
                    {job.period}
                  </span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {job.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
