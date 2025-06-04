
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to submit your request.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to scale your business with AI? Let's discuss how we can help.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-black/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-neon-blue h-12"
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-black/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-neon-blue h-12"
              />
            </div>
            
            <Textarea
              name="message"
              placeholder="Tell us about your project and how we can help..."
              value={formData.message}
              onChange={handleChange}
              className="bg-black/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-neon-blue min-h-32"
              rows={5}
            />
            
            <Button 
              type="submit"
              className="w-full md:w-auto px-12 py-3 bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-blue/80 hover:to-neon-purple/80 text-white font-semibold rounded-lg transition-all duration-300 neon-glow"
            >
              Send Message
            </Button>
          </form>
          
          <div className="mt-16 pt-8 border-t border-gray-800">
            <p className="text-gray-400">
              © 2024 Hav3n. Building the future with AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
