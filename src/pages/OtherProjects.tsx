import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Calendar, Users, Beaker, Lightbulb, Recycle, Zap, Gem, Leaf, Mail } from 'lucide-react';

const OtherProjects = () => {
  const projects = [
    {
      title: "F-HAp Nanomaterials for Dental Applications",
      description: "Novel Innovative Fluorohydroxyapatite-Based Nanomaterials for Dental Applications",
      period: "January 2023 - December 2024",
      status: "Completed",
      type: "Dental Materials",
      technologies: ["Thermal Analysis (TG/DSC)", "Gas Adsorption for Surface Area & Porosity", "Wet and Solid-State Synthesis of Hydroxyapatite (HA)"],
      icon: Gem,
      color: "text-primary",
      highlights: [
        "Gained specialised training in thermal analysis and gas adsorption methods",
        "Optimised HA synthesis for improved purity, crystallinity, surface area, and porosity",
        "Successfully substituted cations and anions in HA to enhance solubility and mechanical properties"
      ]
    },
    {
      title: "Extraction of Medicinal Plants and Impregnation of Antimicrobial Extracts in Dental Prostheses",
      description: "Development of pressurized techniques for the extraction of medicinal plants and the impregnation of antimicrobial extracts in dental prostheses.",
      period: "August 2023 - July 2024",
      status: "Completed",
      type: "Green Chemistry",
      technologies: ["Thermal Analysis (TG/DSC)", "Gas Chromatography (GC-FID)", "CO₂-Based Extraction and Impregnation", "Kinetic and Yield Studies"],
      icon: Leaf,
      color: "text-green-500",
      highlights: [
        "Near critical liquid CO₂-based extraction of medicinal plants",
        "Analysed chemical composition of extracts by GC-FID",
        "Impregnation of PMMA dental discs with the obtained extracts",
        "Conducted yield determination and kinetic studies of the extraction of medicinal plants and the impregnation of PMMA discs"
      ]
    },


  ];

  const collaborations = [
    {
      title: "Industry Partnership with Agrosistemi Srl",
      description: "Collaborative research on the hydrothermal treatment of sewage sludge and implementation of circular practices in using waste as secondary raw materials",
      duration: "Ongoing"
    },
    {
      title: "Academic Partnership with Ivodent Academy",
      description: "Part of the Research team at the Center of Techniques Studies",
      duration: "Ongoing"
    },

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
                    {project.title !== "Extraction of Medicinal Plants and Impregnation of Antimicrobial Extracts in Dental Prostheses" && (
                      <div className="pt-4">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="w-full"
                          onClick={() => {
                            if (project.title === "F-HAp Nanomaterials for Dental Applications") {
                              window.open("https://www.sciencedirect.com/science/article/abs/pii/S0109564123002683?via%3Dihub", "_blank");
                            } else {
                              // TODO: Implement project details modal or navigation for other projects
                              console.log(`Viewing details for: ${project.title}`);
                            }
                          }}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          {project.title === "F-HAp Nanomaterials for Dental Applications" ? "View Paper" : "View Details"}
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Collaborations Section */}
            <div className="py-16">
              <h2 className="text-4xl font-bold mb-12 text-center">
                <span className="gradient-text">Collaborations</span> & Partnerships
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {collaborations.map((collab, index) => (
                  <Card key={collab.title} className="chemistry-card h-full">
                    <CardContent className="p-8">
                      <div className="mb-6">
                        <Users className="h-12 w-12 text-molecular mx-auto" />
                      </div>
                      <h3 className="font-bold text-xl mb-4 text-foreground text-center">{collab.title}</h3>
                      <p className="text-base text-muted-foreground mb-6 text-center leading-relaxed">{collab.description}</p>
                      <div className="text-center mb-6">
                        <Badge variant="outline" className="text-sm px-4 py-2">
                          {collab.duration}
                        </Badge>
                      </div>
                      {collab.title === "Industry Partnership with Agrosistemi Srl" && (
                        <Button 
                          size="lg" 
                          variant="outline" 
                          className="w-full"
                          onClick={() => window.open("https://www.agrosistemi.it/", "_blank")}
                        >
                          <ExternalLink className="h-5 w-5 mr-2" />
                          Visit Partner
                        </Button>
                      )}
                      {collab.title === "Academic Partnership with Ivodent Academy" && (
                        <Button 
                          size="lg" 
                          variant="outline" 
                          className="w-full"
                          onClick={() => window.open("https://ivodent.edu.al/", "_blank")}
                        >
                          <ExternalLink className="h-5 w-5 mr-2" />
                          Visit Partner
                        </Button>
                      )}
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
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-hover"
                onClick={() => {
                  const subject = encodeURIComponent("Invitation for collaboration");
                  const body = encodeURIComponent("Hello Jeta,\n\nI would like to discuss potential collaboration opportunities with you.\n\nBest regards,");
                  window.open(`mailto:jetalica@gmail.com?subject=${subject}&body=${body}`, "_blank");
                }}
              >
                <Mail className="mr-2 h-5 w-5" />
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