import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Microscope, Leaf, Target } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'PhD Candidate',
      description: 'PhD Candidate in Chemistry',
      color: 'text-primary'
    },
    {
      icon: Microscope,
      title: 'Research Focus',
      description: 'Phosphorus Recovery & Waste Valorization',
      color: 'text-accent'
    },
    {
      icon: Leaf,
      title: 'Specialization',
      description: 'Circular Economy & Green Chemistry',
      color: 'text-molecular'
    },
    {
      icon: Target,
      title: 'Goal',
      description: 'Waste-to-Value Solutions',
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
            My PhD research is all about turning a major environmental challenge into a sustainable solution 💡. I'm focusing on sewage sludge, which is typically seen as just waste. However, it's actually a rich source of phosphorus, a non-renewable nutrient that is absolutely essential for the fertilizers that grow our food. My project involves developing an innovative and eco-friendly process to efficiently recover this phosphorus, transforming it from a potential pollutant into a valuable resource. The ultimate goal is to create a true circular economy model ♻️, where we close the loop by taking waste, reclaiming a critical element, and creating a sustainable raw material that supports our environment and global food security.
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
                I'm a materials science researcher 🔬 passionate about sustainability and innovation. My work is centered on a simple but powerful idea: transforming overlooked materials—like waste products or natural resources—into valuable new products for industry, agriculture, and healthcare. Essentially, I find hidden value where others see waste, developing practical, eco-friendly solutions to real-world problems.
                </p>
                
                <p>
                My current PhD research puts this directly into practice by tackling a major environmental challenge: sewage sludge. Instead of treating it as a disposal problem, I see it as a rich source of resources. I'm developing an innovative process to recover phosphorus ♻️, a non-renewable nutrient that is absolutely vital for the fertilizers that grow our food. This project aims to create a true circular economy model, turning a waste management issue into a sustainable solution that protects our environment and supports global food security. This hands-on approach to creating value is a common thread throughout my work. I have experience designing advanced materials from the ground up, such as engineering next-generation nanomaterials for better dental applications, and I specialize in using eco-friendly "green chemistry" techniques, like using clean CO₂ to isolate potent antimicrobial extracts from medicinal plants 🌱. Ultimately, my work connects the dots between the lab and the real world, focusing on designing smarter systems where resources are continuously reused to build a more sustainable future. 💡
                </p>
              
              </div>

              {/* Research Interests */}
              <div className="pt-4">
                <h4 className="font-semibold mb-3 text-foreground">Key Research Areas:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Circular Economy',
                    'Waste Valorisation',
                    'Phosphorus Recovery',
                    'Sustainable Materials',
                    'Industrial Process Optimisation'
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
                  "I believe that research should generate tangible benefits for society while advancing scientific knowledge. My approach combines rigorous experimentation, data-driven optimisation, and interdisciplinary collaboration to develop solutions that are not only innovative but also practical and environmentally responsible. Sustainability, efficiency, and real-world applicability guide every stage of my work."
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