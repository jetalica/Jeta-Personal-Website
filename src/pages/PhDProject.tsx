import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Target, BookOpen, ExternalLink } from 'lucide-react';

const PhDProject = () => {
  const projectDetails = {
    title: "Recovery of Phosphorus from Sewage Sludge Undergoing Hydrothermal Treatment.",
    subtitle: "From phosphorous removal to phosphorous circularity.",
    duration: "2024-2027",
    location: "Università degli Studi di Bari Aldo Moro",
    supervisor: "Prof. Michele Zema",
    status: "In Progress"
  };

  const objectives = [
    "Characterisation of waste materials to understand their potential for resource recovery or use as whole.",
    "Use of adapted separation techniques to extract elements of interest from waste. In particular, develop efficient, sustainable, and cost-effective ways to maximise phosphorus recovery.",
    "Transform waste and/or recovered elements into secondary raw materials with applications in various fields such as building materials, environmental and agricultural etc."
  ];

  const methodology = [
    {
      phase: "Literature Review & Theoretical Framework",
      description: "Study of the state of the art on waste, including its current uses, the recovery of valuable elements and their applications, followed by identification of innovation opportunities where knowledge gaps exist.",
      status: "Completed"
    },
    {
      phase: "Physical and Chemical Characterization of waste",
      description: "Characterization of waste properties using advanced chemical and physical characterization methods in order to validate them.",
      status: "Ongoing"
    },
    {
      phase: "Extraction of valuable elements",
      description: "Develop efficient and sustainable ways to extract phosphorus and other elements of interest using adapted industrial processes, supported by data-driven optimisation.",
      status: "In Progress"
    },
    {
      phase: "Implementation of Circular Practices",
      description: "Development of a framework for integrating recovered phosphorus and synthesised materials back into industrial and agricultural cycles, in cooperation with industry. Conduct life cycle assessment (LCA) to evaluate the environmental benefits and economic feasibility of circular practices.",
      status: "Planned"
    }
  ];

  const keyFindings = [
    "Successfully synthesized bio-based catalysts with 85% efficiency",
    "Reduced reaction time by 40% compared to conventional methods",
    "Achieved 95% waste conversion rate in laboratory conditions",
    "Demonstrated cost-effectiveness for industrial implementation"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 molecular-bg opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              {projectDetails.status}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Recovery of Phosphorus from Sewage</span>
              <br />
              <span className="gradient-text">Sludge Undergoing Hydrothermal Treatment.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {projectDetails.subtitle}
            </p>
            
            {/* Project Meta */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <Calendar className="h-5 w-5" />
                <span>{projectDetails.duration}</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span className="whitespace-nowrap">{projectDetails.location}</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <Users className="h-5 w-5" />
                <span>{projectDetails.supervisor}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            
            {/* Research Objectives */}
            <Card className="chemistry-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-6 w-6 text-primary" />
                  <span>Research Objectives</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {objectives.map((objective, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">{objective}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Methodology */}
            <Card className="chemistry-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-6 w-6 text-molecular" />
                  <span>Research Methodology</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {methodology.map((phase, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className={`w-4 h-4 rounded-full ${
                            phase.status === 'Completed' ? 'bg-accent' :
                            phase.status === 'In Progress' || phase.status === 'Ongoing' ? 'bg-molecular' :
                            'bg-muted'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-foreground">{phase.phase}</h4>
                            <Badge variant={
                              phase.status === 'Completed' ? 'default' :
                              phase.status === 'In Progress' || phase.status === 'Ongoing' ? 'secondary' :
                              'outline'
                            }>
                              {phase.status}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground">{phase.description}</p>
                        </div>
                      </div>
                      {index < methodology.length - 1 && (
                        <div className="absolute left-2 top-6 w-px h-12 bg-border" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Findings - Hidden for now, visible in code for future updates */}
            {/* 
            <Card className="chemistry-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <ExternalLink className="h-6 w-6 text-chemistry-orange" />
                  <span>Key Findings & Results</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {keyFindings.map((finding, index) => (
                    <div key={index} className="chemistry-card p-4 bg-muted/30">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                        </div>
                        <p className="text-foreground font-medium">{finding}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            */}

          </div>
        </div>
      </section>
    </div>
  );
};

export default PhDProject;