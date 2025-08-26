import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Microscope, Leaf, Target } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'PhD Candidate',
      description: 'Industrial & Environmental Chemistry',
      color: 'text-primary'
    },
    {
      icon: Microscope,
      title: 'Research Focus',
      description: 'Green Chemistry & Sustainable Processes',
      color: 'text-accent'
    },
    {
      icon: Leaf,
      title: 'Specialization',
      description: 'Environmental Impact Reduction',
      color: 'text-molecular'
    },
    {
      icon: Target,
      title: 'Goal',
      description: 'Advancing Sustainable Science',
      color: 'text-chemistry-orange'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About My <span className="gradient-text">Research</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicated to developing innovative chemical solutions that address environmental challenges 
              while maintaining industrial efficiency and sustainability.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((item, index) => (
              <Card key={item.title} className="chemistry-card group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-lg bg-muted/50 group-hover:bg-muted transition-colors">
                      <item.icon className={`h-8 w-8 ${item.color}`} />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main About Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Bridging Chemistry and Environmental Science
              </h3>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  As a PhD candidate in Industrial and Environmental Chemistry, I focus on developing 
                  sustainable chemical processes that minimize environmental impact while maintaining 
                  industrial viability. My research combines theoretical knowledge with practical 
                  applications to address real-world environmental challenges.
                </p>
                
                <p>
                  My work spans across green chemistry principles, catalysis development, and 
                  environmental remediation technologies. I am particularly interested in creating 
                  innovative solutions that can be scaled for industrial implementation.
                </p>
                
                <p>
                  Through interdisciplinary collaboration and cutting-edge research methodologies, 
                  I aim to contribute to the global effort of creating a more sustainable chemical industry.
                </p>
              </div>

              {/* Research Interests */}
              <div className="pt-4">
                <h4 className="font-semibold mb-3 text-foreground">Key Research Areas:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Green Catalysis',
                    'Process Optimization',
                    'Environmental Remediation',
                    'Sustainable Synthesis',
                    'Waste Minimization',
                    'Life Cycle Assessment'
                  ].map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="chemistry-card p-8 text-center">
                <div className="mb-6">
                  <div className="relative mx-auto w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Microscope className="h-16 w-16 text-primary" />
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur animate-pulse" />
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold mb-2 text-foreground">Research Philosophy</h4>
                <p className="text-muted-foreground italic">
                  "Innovation in chemistry should serve both industry and environment, 
                  creating solutions that are economically viable and ecologically responsible."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;