import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Calendar, Users, Beaker, Lightbulb, Recycle, Zap } from 'lucide-react';

const OtherProjects = () => {
  const projects = [
    {
      title: "Microplastic Detection in Water Systems",
      description: "Development of rapid detection methods for microplastics in aquatic environments using spectroscopic techniques.",
      period: "2023 - Present",
      status: "Active",
      type: "Environmental",
      technologies: ["FTIR Spectroscopy", "Machine Learning", "Water Analysis"],
      icon: Recycle,
      color: "text-accent",
      highlights: [
        "Developed AI-powered detection algorithm",
        "99.2% accuracy in microplastic identification",
        "Field testing in 5 water treatment facilities"
      ]
    },
    {
      title: "Solar-Driven Chemical Synthesis",
      description: "Investigating photocatalytic processes for sustainable organic synthesis using solar energy.",
      period: "2022 - 2023",
      status: "Completed",
      type: "Green Chemistry",
      technologies: ["Photocatalysis", "Solar Energy", "Organic Synthesis"],
      icon: Zap,
      color: "text-chemistry-orange",
      highlights: [
        "20% improvement in reaction efficiency",
        "Zero-waste synthetic pathways developed",
        "Published in Green Chemistry Journal"
      ]
    },
    {
      title: "Biocatalyst Engineering for Industrial Applications",
      description: "Protein engineering of enzymes for enhanced stability and activity in harsh industrial conditions.",
      period: "2021 - 2022",
      status: "Completed",
      type: "Biotechnology",
      technologies: ["Protein Engineering", "Enzyme Kinetics", "Bioprocessing"],
      icon: Beaker,
      color: "text-molecular",
      highlights: [
        "Engineered thermostable enzyme variants",
        "50% cost reduction in production",
        "Patent application filed"
      ]
    },
    {
      title: "Smart Sensors for Air Quality Monitoring",
      description: "Development of low-cost, real-time sensors for monitoring industrial air pollutants.",
      period: "2020 - 2021",
      status: "Completed",
      type: "Environmental Tech",
      technologies: ["IoT Sensors", "Data Analytics", "Environmental Monitoring"],
      icon: Lightbulb,
      color: "text-primary",
      highlights: [
        "Sub-ppm detection sensitivity achieved",
        "Network of 50+ sensors deployed",
        "Real-time monitoring dashboard created"
      ]
    }
  ];

  const collaborations = [
    {
      title: "Industry Partnership with ChemCorp",
      description: "Collaborative research on sustainable process optimization",
      duration: "6 months"
    },
    {
      title: "International Research Exchange",
      description: "Visiting researcher at European Green Chemistry Institute",
      duration: "3 months"
    },
    {
      title: "Startup Consulting",
      description: "Technical advisor for cleantech startup focusing on water treatment",
      duration: "Ongoing"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 molecular-bg opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Other Research</span> Projects
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Exploring diverse applications of chemistry beyond my PhD research, 
              from environmental solutions to industrial innovations.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {projects.map((project, index) => (
                <Card key={project.title} className="chemistry-card h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-muted/50`}>
                          <project.icon className={`h-6 w-6 ${project.color}`} />
                        </div>
                        <div>
                          <Badge variant={project.status === 'Active' ? 'default' : 'secondary'}>
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {project.type}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>{project.period}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">{project.description}</p>
                    
                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-primary/10 text-primary rounded border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Key Highlights */}
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="pt-4">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="w-full"
                        onClick={() => {
                          // TODO: Implement project details modal or navigation
                          console.log(`Viewing details for: ${project.title}`);
                        }}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Collaborations Section */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">
                <span className="gradient-text">Collaborations</span> & Partnerships
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {collaborations.map((collab, index) => (
                  <Card key={collab.title} className="chemistry-card text-center">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <Users className="h-8 w-8 text-molecular mx-auto" />
                      </div>
                      <h3 className="font-semibold mb-2 text-foreground">{collab.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{collab.description}</p>
                      <Badge variant="outline" className="text-xs">
                        {collab.duration}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center py-12 mt-16">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Interested in Collaboration?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always open to discussing new research opportunities and collaborative projects 
                in environmental chemistry and green technology.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary-hover">
                <ExternalLink className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OtherProjects;