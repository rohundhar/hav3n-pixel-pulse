
import React from 'react';

const FoundersSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet the Founders</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="text-center scroll-fade-in">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center neon-glow">
              <div className="w-44 h-44 rounded-full bg-gray-700 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Portrait Photo</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Co-Founder</h3>
            <p className="text-gray-300 leading-relaxed">
              Passionate about leveraging technology to solve real-world problems. 
              With a background in AI and business strategy, focused on building 
              solutions that make a meaningful impact.
            </p>
          </div>
          
          <div className="text-center scroll-fade-in">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center neon-glow">
              <div className="w-44 h-44 rounded-full bg-gray-700 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Portrait Photo</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Co-Founder</h3>
            <p className="text-gray-300 leading-relaxed">
              Driven by innovation and client success. Specializes in turning 
              complex technical concepts into accessible solutions that drive 
              business growth and operational efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
