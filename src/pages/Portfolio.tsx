import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, Download, Calendar, MapPin, Award, BookOpen, Users, Presentation } from 'lucide-react';

const Portfolio = () => {
  const publications = [
    {
      title: "Green Catalytic Processes for Industrial Waste Treatment: A Comprehensive Review",
      authors: "J. Smith, A. Johnson, M. Chen",
      journal: "Journal of Environmental Chemistry",
      year: "2024",
      status: "Published",
      impact: "Q1 Journal, IF: 4.2",
      doi: "10.1016/j.envche.2024.01.001",
      type: "Review Article"
    },
    {
      title: "Novel Bio-based Catalysts for Sustainable Organic Synthesis",
      authors: "J. Smith, P. Williams, R. Davis",
      journal: "Green Chemistry",
      year: "2023",
      status: "Published",
      impact: "Q1 Journal, IF: 5.1",
      doi: "10.1039/d3gc01234a",
      type: "Research Article"
    },
    {
      title: "Microplastic Detection Using AI-Enhanced Spectroscopy",
      authors: "J. Smith, L. Anderson, K. Brown",
      journal: "Environmental Science & Technology",
      year: "2024",
      status: "Under Review",
      impact: "Q1 Journal, IF: 6.8",
      type: "Research Article"
    },
    {
      title: "Photocatalytic Water Treatment: From Laboratory to Industrial Scale",
      authors: "J. Smith, T. Wilson",
      journal: "Applied Catalysis B: Environmental",
      year: "2024",
      status: "In Preparation",
      impact: "Q1 Journal, IF: 7.2",
      type: "Research Article"
    }
  ];

  const conferences = [
    {
      title: "Green Chemistry & Engineering Conference 2024",
      presentation: "Sustainable Catalytic Processes for Environmental Remediation",
      location: "Berlin, Germany",
      date: "June 2024",
      type: "Oral Presentation",
      award: "Best Student Presentation Award"
    },
    {
      title: "International Conference on Environmental Chemistry",
      presentation: "AI-Driven Microplastic Detection in Aquatic Systems",
      location: "San Francisco, USA",
      date: "March 2024",
      type: "Poster Presentation",
      award: null
    },
    {
      title: "European Symposium on Industrial Chemistry",
      presentation: "Scale-up Challenges in Green Catalytic Processes",
      location: "Amsterdam, Netherlands",
      date: "September 2023",
      type: "Invited Speaker",
      award: null
    },
    {
      title: "Young Researchers in Chemistry Symposium",
      presentation: "Photocatalytic Approaches to Sustainable Synthesis",
      location: "Online",
      date: "May 2023",
      type: "Oral Presentation",
      award: "Outstanding Presentation Recognition"
    }
  ];

  const trainings = [
    {
      title: "Advanced Spectroscopic Techniques",
      provider: "International Chemistry Institute",
      date: "February 2024",
      duration: "2 weeks",
      credential: "Certificate of Completion",
      skills: ["FTIR", "NMR", "Mass Spectrometry", "Data Analysis"]
    },
    {
      title: "Machine Learning for Chemical Applications",
      provider: "Tech University Online",
      date: "November 2023",
      duration: "6 weeks",
      credential: "Professional Certificate",
      skills: ["Python", "TensorFlow", "Chemical Informatics", "Data Mining"]
    },
    {
      title: "Green Chemistry Principles and Applications",
      provider: "Green Chemistry Institute",
      date: "August 2023",
      duration: "1 week",
      credential: "Certification",
      skills: ["Sustainable Design", "Life Cycle Assessment", "Process Optimization"]
    },
    {
      title: "Project Management in Research",
      provider: "Academic Leadership Center",
      date: "March 2023",
      duration: "3 days",
      credential: "Workshop Certificate",
      skills: ["Project Planning", "Team Leadership", "Budget Management", "Risk Assessment"]
    }
  ];

  const awards = [
    {
      title: "Outstanding PhD Student Award",
      organization: "University Chemistry Department",
      year: "2024",
      description: "Recognizing exceptional research contributions and academic excellence"
    },
    {
      title: "Best Student Presentation",
      organization: "Green Chemistry & Engineering Conference",
      year: "2024",
      description: "For innovative research in sustainable catalytic processes"
    },
    {
      title: "Environmental Research Grant",
      organization: "National Science Foundation",
      year: "2023",
      description: "$15,000 grant for microplastic detection research"
    },
    {
      title: "Academic Excellence Scholarship",
      organization: "University Graduate School",
      year: "2022",
      description: "Merit-based scholarship for outstanding academic performance"
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
              Academic <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A comprehensive overview of my research publications, conference presentations, 
              professional development, and academic achievements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-hover">
                <Download className="mr-2 h-5 w-5" />
                Download Full CV
              </Button>
              <Button size="lg" variant="outline">
                <ExternalLink className="mr-2 h-5 w-5" />
                View Google Scholar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="publications" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="publications" className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4" />
                  <span>Publications</span>
                </TabsTrigger>
                <TabsTrigger value="conferences" className="flex items-center space-x-2">
                  <Presentation className="h-4 w-4" />
                  <span>Conferences</span>
                </TabsTrigger>
                <TabsTrigger value="training" className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>Training</span>
                </TabsTrigger>
                <TabsTrigger value="awards" className="flex items-center space-x-2">
                  <Award className="h-4 w-4" />
                  <span>Awards</span>
                </TabsTrigger>
              </TabsList>

              {/* Publications Tab */}
              <TabsContent value="publications" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2">Research Publications</h2>
                  <p className="text-muted-foreground">Peer-reviewed articles and research contributions</p>
                </div>
                
                {publications.map((pub, index) => (
                  <Card key={index} className="chemistry-card">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <Badge variant={
                          pub.status === 'Published' ? 'default' :
                          pub.status === 'Under Review' ? 'secondary' :
                          'outline'
                        }>
                          {pub.status}
                        </Badge>
                        <Badge variant="outline">{pub.type}</Badge>
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-2 text-foreground">{pub.title}</h3>
                      <p className="text-muted-foreground mb-2">{pub.authors}</p>
                      <p className="text-sm text-muted-foreground mb-3">
                        <span className="font-medium">{pub.journal}</span> ({pub.year})
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-2 py-1 text-xs bg-accent/10 text-accent rounded">
                          {pub.impact}
                        </span>
                        {pub.doi && (
                          <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded font-mono">
                            DOI: {pub.doi}
                          </span>
                        )}
                      </div>
                      
                      {pub.status === 'Published' && (
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Article
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              {/* Conferences Tab */}
              <TabsContent value="conferences" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2">Conference Presentations</h2>
                  <p className="text-muted-foreground">International conferences and symposiums</p>
                </div>
                
                {conferences.map((conf, index) => (
                  <Card key={index} className="chemistry-card">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <Badge variant="default">{conf.type}</Badge>
                        {conf.award && (
                          <Badge variant="secondary" className="bg-chemistry-orange/10 text-chemistry-orange">
                            <Award className="h-3 w-3 mr-1" />
                            Award
                          </Badge>
                        )}
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-2 text-foreground">{conf.title}</h3>
                      <p className="text-muted-foreground mb-3 font-medium">{conf.presentation}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{conf.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{conf.date}</span>
                        </div>
                      </div>
                      
                      {conf.award && (
                        <div className="p-3 bg-chemistry-orange/5 border border-chemistry-orange/20 rounded-lg">
                          <p className="text-sm text-chemistry-orange font-medium">{conf.award}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              {/* Training Tab */}
              <TabsContent value="training" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2">Professional Development</h2>
                  <p className="text-muted-foreground">Specialized training and skill development</p>
                </div>
                
                {trainings.map((training, index) => (
                  <Card key={index} className="chemistry-card">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <Badge variant="outline">{training.credential}</Badge>
                        <Badge variant="secondary">{training.duration}</Badge>
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-2 text-foreground">{training.title}</h3>
                      <p className="text-muted-foreground mb-3">{training.provider}</p>
                      
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-4">
                        <Calendar className="h-4 w-4" />
                        <span>{training.date}</span>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Skills Acquired:</h4>
                        <div className="flex flex-wrap gap-2">
                          {training.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 text-xs bg-primary/10 text-primary rounded border border-primary/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              {/* Awards Tab */}
              <TabsContent value="awards" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2">Awards & Recognition</h2>
                  <p className="text-muted-foreground">Academic achievements and honors</p>
                </div>
                
                {awards.map((award, index) => (
                  <Card key={index} className="chemistry-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-chemistry-orange/10 rounded-full flex items-center justify-center">
                            <Award className="h-6 w-6 text-chemistry-orange" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-semibold text-foreground">{award.title}</h3>
                            <Badge variant="outline">{award.year}</Badge>
                          </div>
                          <p className="text-muted-foreground font-medium mb-2">{award.organization}</p>
                          <p className="text-sm text-muted-foreground">{award.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;