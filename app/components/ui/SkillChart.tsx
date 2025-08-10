'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface SkillData {
  name: string;
  level: number;
  color: string;
}

interface SkillChartProps {
  skills: SkillData[];
}

const SkillChart: React.FC<SkillChartProps> = ({ skills }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-6">
      <h4 className="text-xl font-semibold text-white mb-6">
        Niveau de maîtrise
      </h4>
      
      {skills.map((skill, index) => (
        <div key={skill.name} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-300 font-medium">{skill.name}</span>
            <span className="text-sm text-gray-400">{skill.level}%</span>
          </div>
          
          <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className={`h-full rounded-full ${skill.color}`}
              initial={{ width: 0 }}
              animate={{ width: isVisible ? `${skill.level}%` : 0 }}
              transition={{ 
                duration: 1.5, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
            />
            
            {/* Effet de brillance */}
            <motion.div
              className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: isVisible ? '400%' : '-100%' }}
              transition={{ 
                duration: 2, 
                delay: index * 0.2 + 1,
                ease: "easeInOut"
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillChart;
