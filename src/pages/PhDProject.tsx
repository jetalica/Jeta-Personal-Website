import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Target, BookOpen, ExternalLink } from 'lucide-react';

const PhDProject = () => {
  const projectDetails = {
    title: "Green Catalytic Processes for Industrial Waste Remediation",
    subtitle: "Developing sustainable catalytic systems for environmental applications",
    duration: "2021 - 2025",
    location: "University Research Center",
    supervisor: "Prof. Dr. Environmental Chemistry",
    status: "In Progress"
  };

  const objectives = [
    "Design novel green catalysts for industrial waste treatment",
    "Optimize reaction conditions for maximum efficiency",
    "Evaluate environmental impact and sustainability metrics",
    "Scale laboratory findings to pilot plant operations"
  ];

  const methodology = [
    {
      phase: "Literature Review & Theoretical Framework",
      description: "Comprehensive analysis of existing catalytic systems and identification of research gaps",
      status: "Completed"
    },
    {
      phase: "Catalyst Design & Synthesis",
      description: "Development of novel catalytic materials using green chemistry principles",
      status: "In Progress"
    },
    {
      phase: "Performance Evaluation",
      description: "Testing catalytic efficiency under various industrial conditions",
      status: "Ongoing"
    },
    {
      phase: "Scale-up Studies",
      description: "Pilot plant testing and industrial feasibility assessment",
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
              <span className="gradient-text">{projectDetails.title}</span>
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
                <span>{projectDetails.location}</span>
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

            {/* Key Findings */}
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

          </div>
        </div>
      </section>
    </div>
  );
};

export default PhDProject;