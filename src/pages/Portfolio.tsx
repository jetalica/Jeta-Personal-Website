import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, Download, Calendar, MapPin, Award, BookOpen, Users, Presentation } from 'lucide-react';

const Portfolio = () => {
  const publications = [
    {
      title: "Solid state synthesis of hydroxyapatite from different precursors",
      authors: "A. Mele, L. Gjurgjaj, J. Lica, A. Mema, A. Mele, F. Baldassarre, D. Siliqi",
      journal: "Journal of Dental Materials",
      year: "2023",
      status: "Published",
      doi: "https://doi.org/10.1016/j.dental.2023.08.086",
      type: "Research Article"
    },
    {
      title: "Changes in surface and structure of montmorillonite by acid activation",
      authors: "A. Mele, L. Gjurgjaj, J. Lica, A. Mema, A. Mele",
      journal: "Journal of Dental Materials",
      year: "2023",
      status: "Published",
      doi: "https://www.sciencedirect.com/science/article/abs/pii/S0109564123002506?via%3Dihub",
      type: "Research Article"
    }
   ];

  const conferences = [
    {
      title: "Materials and Methodologies for Biomedical Applications ",
      presentation: "Simultaneous Thermal Analysis of high pressure impregnated PMMA for dental applications",
      location: "Online",
      date: "September 2023",
      type: "Oral Presentation",
      award: null
    },
    {
      title: "GEHPT and ESS-HPT 2022",
      presentation: "The Fatty Acid Analysis of Vitex Agnus Castus Extracts Obtained by Liquid CO2",
      location: "Maribor, Slovenia",
      date: "July 2022",
      type: "Oral Presentation",
      award: null
    },
    {
      title: "The 3rd International Conference on Applied Sciences and Engineering 2022",
      presentation: "Determination of the free fatty acid profile of chaste tree ripe fruit",
      location: "Tirana, Albania",
      date: "September 2022",
      type: "Oral Presentation",
      award: null
    },
    {
      title: "Progress in Dental Materials and Digital Engineering",
      presentation: "Solid state synthesis of hydroxyapatite from different precursors",
      location: "Athens, Greece",
      date: "September 2022",
      type: "Oral Presentation",
      award: null
    }
  ];

  const trainings = [
    {
      title: "Service Training for Netzsch Thermal Analysis devices",
      provider: "Netzsch-Gerätebau GmbH",
      date: "September 2023",
      duration: "1 week",
      credential: "Certificate of Completion",
      skills: ["TGA", "DSC", "STA", "Thermal Analysis"]
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
            Overview of My Research Publications, Conference Contributions, and Professional Development.
            </p>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open("https://scholar.google.com/citations?user=vopty4UAAAAJ&hl=en", "_blank")}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              View Google Scholar
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="publications" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
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
                        {pub.impact && (
                          <span className="px-2 py-1 text-xs bg-accent/10 text-accent rounded">
                            {pub.impact}
                          </span>
                        )}
                        {pub.doi && (
                          <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded font-mono">
                            {pub.doi.startsWith('http') ? (
                              <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                View Article
                              </a>
                            ) : (
                              `DOI: ${pub.doi}`
                            )}
                          </span>
                        )}
                      </div>
                      
                        
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

            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;