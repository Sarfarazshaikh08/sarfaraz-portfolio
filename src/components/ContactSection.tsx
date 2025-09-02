
import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(
        'https://vfigfhvbxfrlujuxdcor.supabase.co/functions/v1/send-contact-email',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
    
    setIsSubmitting(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = sectionRef.current?.querySelectorAll('.reveal');
          elements?.forEach((el) => {
            el.classList.add('active');
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="section bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">Contact Me</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8 reveal"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto reveal">
            Feel free to reach out for collaborations, job opportunities, or just to say hello!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 reveal">Get In Touch</h3>
            <p className="text-slate-600 mb-8 reveal">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6">
              <Card className="reveal">
                <CardContent className="flex items-center p-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <MapPin className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Location</p>
                    <p className="font-medium">Bengaluru, India</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="reveal">
                <CardContent className="flex items-center p-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Mail className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <p className="font-medium">sarfarazshaikh0604@gmail.com</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="reveal">
                <CardContent className="flex items-center p-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Phone className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Phone</p>
                    <p className="font-medium">+91 9852922851</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="reveal">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email" 
                    required 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Your subject" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message" 
                  rows={6} 
                  required 
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
