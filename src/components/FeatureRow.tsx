
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureRowProps {
  icon: LucideIcon;
  title: string;
  description: string;
  reverse?: boolean;
}

const FeatureRow: React.FC<FeatureRowProps> = ({ icon: Icon, title, description, reverse = false }) => {
  return (
    <div className={`scroll-fade-in flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16 py-16`}>
      <div className="flex-shrink-0">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center neon-glow">
          <Icon size={48} className="text-white" />
        </div>
      </div>
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h3>
        <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">{description}</p>
      </div>
    </div>
  );
};

export default FeatureRow;
