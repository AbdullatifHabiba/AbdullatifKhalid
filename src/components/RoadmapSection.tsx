import React from 'react';
import { motion } from 'framer-motion';
import type { RoadmapCategory } from '../data/roadmapData';
import ResourceCard from './ResourceCard';

interface RoadmapSectionProps {
  category: RoadmapCategory;
  completedResources: Set<string>;
  onToggleResource: (id: string) => void;
}

const RoadmapSection: React.FC<RoadmapSectionProps> = ({
  category,
  completedResources,
  onToggleResource,
}) => {
  const completedCount = category.resources.filter(r => 
    completedResources.has(r.id)
  ).length;
  const totalCount = category.resources.length;
  const progressPercentage = (completedCount / totalCount) * 100;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      {/* Section Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-5xl">{category.icon}</span>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white mb-2">
              {category.title}
            </h2>
            <p className="text-gray-400 text-lg">
              {category.description}
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-400">
              Progress: {completedCount} / {totalCount}
            </span>
            <span className="text-sm font-bold text-blue-400">
              {Math.round(progressPercentage)}%
            </span>
          </div>
          <div className="h-3 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid gap-4">
        {category.resources.map((resource) => (
          <ResourceCard
            key={resource.id}
            resource={resource}
            isCompleted={completedResources.has(resource.id)}
            onToggle={onToggleResource}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default RoadmapSection;
