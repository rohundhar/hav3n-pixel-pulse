
import React, { useEffect } from 'react';
import { Circle, ArrowUp, Mail } from 'lucide-react';
import FeatureRow from './FeatureRow';

const FeaturesSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <FeatureRow
            icon={Circle}
            title="AI-Driven Innovation"
            description="We leverage cutting-edge artificial intelligence to create solutions that adapt, learn, and evolve with your business needs. Our AI-first approach ensures your technology stays ahead of the curve."
          />
          
          <FeatureRow
            icon={ArrowUp}
            title="Scalable Business Solutions"
            description="From startups to established enterprises, we design systems that grow with you. Our scalable architecture and strategic approach ensure your investment delivers long-term value and sustainable growth."
            reverse
          />
          
          <FeatureRow
            icon={Mail}
            title="Client-Centric Collaboration"
            description="We believe in true partnership. Working closely with you every step of the way, we ensure our solutions align perfectly with your vision, goals, and unique business requirements."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
