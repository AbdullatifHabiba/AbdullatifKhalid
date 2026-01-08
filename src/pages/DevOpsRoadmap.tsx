import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Target, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { roadmapData } from '../data/roadmapData';
import RoadmapSection from '../components/RoadmapSection';

const DevOpsRoadmap: React.FC = () => {
  const [completedResources, setCompletedResources] = useState<Set<string>>(new Set());

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('devops-roadmap-progress');
    if (saved) {
      setCompletedResources(new Set(JSON.parse(saved)));
    }
  }, []);

  // Save progress to localStorage
  const toggleResource = (id: string) => {
    setCompletedResources((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      localStorage.setItem('devops-roadmap-progress', JSON.stringify([...newSet]));
      return newSet;
    });
  };

  // Calculate overall progress
  const totalResources = roadmapData.reduce((sum, cat) => sum + cat.resources.length, 0);
  const completedCount = completedResources.size;
  const overallProgress = (completedCount / totalResources) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-5" />
        
        <div className="relative max-w-6xl mx-auto">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Portfolio</span>
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <BookOpen className="w-12 h-12 text-blue-400" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                DevOps Learning
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  {' '}Roadmap
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive guide to mastering DevOps engineering, from Linux fundamentals to advanced Kubernetes orchestration
            </p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Total Resources</p>
                  <p className="text-3xl font-bold text-white">{totalResources}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-500/20 rounded-lg">
                  <Trophy className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Completed</p>
                  <p className="text-3xl font-bold text-white">{completedCount}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <BookOpen className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Overall Progress</p>
                  <p className="text-3xl font-bold text-white">{Math.round(overallProgress)}%</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Overall Progress Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-white">Your Learning Journey</h3>
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                {Math.round(overallProgress)}%
              </span>
            </div>
            <div className="h-4 bg-gray-900 rounded-full overflow-hidden border border-gray-700">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${overallProgress}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Sections */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {roadmapData.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <RoadmapSection
                category={category}
                completedResources={completedResources}
                onToggleResource={toggleResource}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-500/30 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your DevOps Journey?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Track your progress, complete resources, and become a DevOps expert. Your progress is automatically saved!
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DevOpsRoadmap;
