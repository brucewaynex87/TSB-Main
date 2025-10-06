import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  DollarSign, 
  Zap, 
  Target, 
  UserPlus, 
  Activity, 
  TrendingUp,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    problems: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.problems) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Google Sheets webhook integration
      // Users need to create a Google Apps Script webhook or use Zapier
      const webhookUrl = "https://script.google.com/macros/s/AKfycbzaQ_Php1wAgWQ1Nh1ns8VdPo4WOaIMnMtHkxOjqMZG7Q7UwIAsWKE9bk1BT4Nsc2CylQ/exec";
      
      await fetch(webhookUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          problems: formData.problems,
          timestamp: new Date().toISOString()
        })
      });

      toast({
        title: "Welcome to the Beta! 🎉",
        description: "We'll be in touch soon with your early access.",
      });

      setFormData({ name: "", email: "", problems: "" });
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission Received",
        description: "Thank you for joining! We'll contact you soon.",
      });
      setFormData({ name: "", email: "", problems: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="container mx-auto px-4 py-20 lg:py-32 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 text-sm font-medium">
              <Activity className="w-4 h-4" />
              Now accepting beta signups
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Social Media Monitoring{" "}
              <span 
                className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              >
                Without Enterprise Pricing
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Built for solopreneurs and freelancers who need powerful social media 
              tracking but can't afford expensive enterprise solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8 shadow-lg"
                onClick={() => document.getElementById('beta-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join the Beta <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8"
              >
                Learn More
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6">
              No credit card required • Free beta access • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Why Choose trendspottter?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to monitor your social presence, nothing you don't.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow animate-fade-in">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Affordable Pricing</h3>
              <p className="text-muted-foreground">
                Enterprise features at a fraction of the cost. Built specifically for 
                solopreneurs and small teams who need powerful monitoring without breaking the bank.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow animate-fade-in-delay">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Real-Time Tracking</h3>
              <p className="text-muted-foreground">
                Monitor mentions, trends, and engagement across all major platforms in 
                real-time. Never miss an important conversation about your brand again.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow animate-fade-in-delay" style={{ animationDelay: "0.2s" }}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Actionable Insights</h3>
              <p className="text-muted-foreground">
                Get clear, actionable insights without the complexity. See what matters 
                most to your business with simple, beautiful analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started with social media monitoring in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-secondary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg animate-float">
                01
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <UserPlus className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Sign Up</h3>
              <p className="text-muted-foreground">
                Join the beta in under 60 seconds. No credit card, no commitments.
              </p>
            </div>

            <div className="text-center animate-fade-in-delay">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-secondary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg animate-float" style={{ animationDelay: "0.5s" }}>
                02
              </div>
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Activity className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Connect & Monitor</h3>
              <p className="text-muted-foreground">
                Link your social accounts and start tracking mentions, trends, and engagement.
              </p>
            </div>

            <div className="text-center animate-fade-in-delay" style={{ animationDelay: "0.2s" }}>
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-secondary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                03
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Get Insights</h3>
              <p className="text-muted-foreground">
                Receive actionable insights that help you engage better with your audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beta Signup Form Section */}
      <section id="beta-form" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Help Us Build What You Need
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We're building trendspottter specifically for solopreneurs and freelancers. 
                  Your feedback will directly shape the features we prioritize.
                </p>
                <p className="text-muted-foreground">
                  Tell us about the challenges you face with social media monitoring today. 
                  What frustrates you about current solutions? What features would make your 
                  life easier?
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl shadow-lg animate-fade-in-delay">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="problems" className="block text-sm font-medium mb-2">
                      What problems are you facing?
                    </label>
                    <Textarea
                      id="problems"
                      placeholder="Tell us about your social media monitoring challenges..."
                      value={formData.problems}
                      onChange={(e) => setFormData({ ...formData, problems: e.target.value })}
                      className="w-full min-h-[120px]"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Joining..." : "Join the Beta"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 text-sm font-medium">
              <CheckCircle2 className="w-4 h-4" />
              Join early adopters
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Take Control of Your{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Social Media Presence?
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              Join the beta today and be among the first to experience affordable, 
              powerful social media monitoring built for solopreneurs.
            </p>
            
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8 shadow-lg"
              onClick={() => document.getElementById('beta-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Beta Access <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <p className="text-sm text-muted-foreground mt-6">
              No credit card required • Free during beta
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary to-secondary" />
              <span className="text-xl font-bold">trendspottter</span>
            </div>
            
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="text-center mt-8 text-sm text-muted-foreground">
            <p>© 2025 trendspottter. All rights reserved.</p>
            <p className="mt-2">Affordable social media monitoring for solopreneurs and freelancers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
