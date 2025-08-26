import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Mail, Github, Linkedin, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const quickLinks = [
    { name: 'PhD Project', href: '/phd-project', icon: BookOpen },
    { name: 'Other Projects', href: '/other-projects', icon: ArrowRight },
    { name: 'Portfolio', href: '/portfolio', icon: ArrowRight },
  ];

  const contactLinks = [
    { 
      name: 'Email', 
      href: 'mailto:your.email@university.edu', 
      icon: Mail,
      color: 'text-chemistry-orange hover:text-chemistry-orange/80'
    },
    { 
      name: 'GitHub', 
      href: 'https://github.com/yourusername', 
      icon: Github,
      color: 'text-foreground hover:text-primary'
    },
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/in/yourprofile', 
      icon: Linkedin,
      color: 'text-molecular hover:text-molecular/80'
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 molecular-bg opacity-50" />
      <div className="absolute inset-0 molecular-pattern opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className="fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="gradient-text">Industrial &</span>
              <br />
              <span className="text-foreground">Environmental</span>
              <br />
              <span className="gradient-text">Chemistry</span>
            </h1>
          </div>

          {/* Tagline */}
          <div className="slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Advancing sustainable chemical processes through innovative research in 
              <span className="text-accent font-medium"> green chemistry</span> and 
              <span className="text-molecular font-medium"> environmental solutions</span>
            </p>
          </div>


          {/* Quick Links */}
          <div className="slide-up mb-12" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-lg font-semibold mb-6 text-muted-foreground">Quick Navigation</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {quickLinks.map((link, index) => (
                <Link key={link.name} to={link.href}>
                  <div className="chemistry-card p-6 h-full group cursor-pointer">
                    <div className="flex items-center justify-center mb-3">
                      <link.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
                    </div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {link.name}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Icons */}
          <div className="slide-up" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-lg font-semibold mb-6 text-muted-foreground">Connect With Me</h3>
            <div className="flex justify-center space-x-6">
              {contactLinks.map((contact) => (
                <a
                  key={contact.name}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-3 rounded-full bg-muted/50 hover:bg-muted transition-all duration-300 ${contact.color}`}
                  title={contact.name}
                >
                  <contact.icon className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-accent/20 rounded-full blur-sm animate-pulse" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-molecular/20 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-chemistry-orange/20 rounded-full blur-sm animate-pulse" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default HeroSection;