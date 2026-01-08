import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, Circle } from 'lucide-react';
import type { Resource } from '../data/roadmapData';

interface ResourceCardProps {
  resource: Resource;
  isCompleted: boolean;
  onToggle: (id: string) => void;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource, isCompleted, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`group relative p-6 rounded-xl border-2 transition-all duration-300 ${
        isCompleted
          ? 'bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border-emerald-500/50'
          : 'bg-gray-800/50 border-gray-700 hover:border-blue-500/50'
      }`}
    >
      <div className="flex items-start gap-4">
        <button
          onClick={() => onToggle(resource.id)}
          className="flex-shrink-0 mt-1 transition-transform hover:scale-110"
          aria-label={isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
        >
          {isCompleted ? (
            <CheckCircle2 className="w-6 h-6 text-emerald-400" />
          ) : (
            <Circle className="w-6 h-6 text-gray-500 group-hover:text-blue-400" />
          )}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h4 className={`font-semibold text-lg mb-2 ${
                isCompleted ? 'text-emerald-400 line-through' : 'text-white'
              }`}>
                {resource.title}
              </h4>
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                {resource.platform}
              </span>
            </div>

            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 p-2 rounded-lg bg-gray-700/50 hover:bg-blue-500/20 text-gray-400 hover:text-blue-400 transition-all"
              aria-label={`Open ${resource.title}`}
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
};

export default ResourceCard;
