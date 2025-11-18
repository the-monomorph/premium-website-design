import { CaseStudyHero } from "../components/CaseStudyHero";
import { ClientOverview } from "../components/ClientOverview";
import { GoalAndStrategy } from "../components/GoalAndStrategy";
import { CreativeProcess } from "../components/CreativeProcess";
import { VisualShowcase } from "../components/VisualShowcase";
import { VideoShowcase } from "../components/VideoShowcase";
import { ResultsAchievements } from "../components/ResultsAchievements";
import { ClientTestimonial } from "../components/ClientTestimonial";
import { FinalOutcome } from "../components/FinalOutcome";
import { MoreCaseStudies } from "../components/MoreCaseStudies";
import { TrendingUp, Users, Eye, Heart } from "lucide-react";

interface CaseStudyBusinessFortuneProps {
  onNavigate: (page: string) => void;
}

export function CaseStudyBusinessFortune({ onNavigate }: CaseStudyBusinessFortuneProps) {
  return (
    <div className="min-h-screen bg-white">
      <CaseStudyHero
        clientName="Business Fortune Magazine"
        description="How we designed premium magazine layouts, editorials, and digital assets that elevated reader experience and established visual excellence."
        image="https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWdhemluZSUyMGVkaXRvcmlhbCUyMGRlc2lnbnxlbnwxfHx8fDE3NjMzOTg0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        logo="📰"
        category="Editorial Design / Branding / Digital Assets"
        color="from-orange-500 to-red-500"
      />

      <ClientOverview
        about="Business Fortune Magazine is a premium business publication covering entrepreneurship, leadership, innovation, and market trends. They serve ambitious business leaders and decision-makers seeking in-depth analysis and inspiring success stories. The magazine prides itself on quality journalism and sophisticated presentation."
        challenges={[
          "Outdated editorial design not reflecting premium positioning",
          "Inconsistent visual language across print and digital",
          "Reader engagement declining due to dated aesthetics",
          "Difficulty competing with modern digital-first publications",
          "Need to appeal to younger business leaders while retaining existing audience",
        ]}
      />

      <GoalAndStrategy
        goals={[
          "Redesign magazine layout for modern sophistication",
          "Create cohesive visual identity across all touchpoints",
          "Improve reader experience and engagement",
          "Establish distinctive editorial style",
          "Elevate brand perception to match content quality",
          "Increase digital presence and social media impact",
        ]}
        strategySteps={[
          "Audit of existing design and competitor analysis",
          "Reader demographic research and preference mapping",
          "Typography and grid system development",
          "Color palette creation reflecting business sophistication",
          "Photography and illustration style guidelines",
          "Digital asset template creation for social media",
        ]}
        strategyImages={[
          "https://images.unsplash.com/photo-1723220217716-a328c198a60c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMHN0cmF0ZWd5JTIwbW9vZGJvYXJkfGVufDF8fHx8MTc2MzQ2MzM3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          "https://images.unsplash.com/photo-1676287567295-135ce512839a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwcGxhbm5pbmclMjBjYWxlbmRhcnxlbnwxfHx8fDE3NjM0NjMzNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        ]}
      />

      <CreativeProcess
        steps={[
          {
            title: "Discovery & Research",
            description: "Analyzed top-tier business publications globally, identified design trends in editorial excellence, understood reader expectations for premium business content, and documented pain points with current design.",
            image: "https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWdhemluZSUyMGVkaXRvcmlhbCUyMGRlc2lnbnxlbnwxfHx8fDE3NjMzOTg0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          },
          {
            title: "Visual Identity Development",
            description: "Created sophisticated color palette with deep navy, gold accents, and clean whites. Selected premium serif and sans-serif typeface pairings. Developed modular grid system for consistency and flexibility.",
            image: "https://images.unsplash.com/photo-1723220217716-a328c198a60c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMHN0cmF0ZWd5JTIwbW9vZGJvYXJkfGVufDF8fHx8MTc2MzQ2MzM3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          },
          {
            title: "Content Planning",
            description: "Mapped content hierarchy for different article types, designed feature spreads, interview layouts, data visualization templates, and created section break treatments that enhance reading flow.",
            image: "https://images.unsplash.com/photo-1676287567295-135ce512839a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwcGxhbm5pbmclMjBjYWxlbmRhcnxlbnwxfHx8fDE3NjM0NjMzNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          },
          {
            title: "Design & Production",
            description: "Produced comprehensive design system with master pages, created digital asset templates for social media promotion, designed infographics and data visualizations, and developed cover concepts for multiple issues.",
            image: "https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWdhemluZSUyMGVkaXRvcmlhbCUyMGRlc2lnbnxlbnwxfHx8fDE3NjMzOTg0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          },
          {
            title: "Execution & Publishing",
            description: "Implemented new design system across print and digital editions. Created brand guidelines for editorial team. Launched redesign with promotional campaign highlighting the transformation.",
            image: "https://images.unsplash.com/photo-1712904311011-66c73f2ed065?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjM0NjIxOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          },
          {
            title: "Performance Tracking",
            description: "Monitored reader feedback and engagement metrics. Tracked social media sharing of articles (visual appeal drives shares). Measured time-on-page improvements. Assessed subscription growth post-redesign.",
            image: "https://images.unsplash.com/photo-1676276375742-9e3d10e39d45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFuYWx5dGljcyUyMGNoYXJ0c3xlbnwxfHx8fDE3NjM0NjMzNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          },
        ]}
      />

      <VisualShowcase
        images={[
          "https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWdhemluZSUyMGVkaXRvcmlhbCUyMGRlc2lnbnxlbnwxfHx8fDE3NjMzOTg0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          "https://images.unsplash.com/photo-1723220217716-a328c198a60c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMHN0cmF0ZWd5JTIwbW9vZGJvYXJkfGVufDF8fHx8MTc2MzQ2MzM3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          "https://images.unsplash.com/photo-1712904311011-66c73f2ed065?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjM0NjIxOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        ]}
      />

      <VideoShowcase
        videos={[
          {
            title: "Magazine Redesign Reveal",
            thumbnail: "https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWdhemluZSUyMGVkaXRvcmlhbCUyMGRlc2lnbnxlbnwxfHx8fDE3NjMzOTg0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            type: "Brand Video",
          },
          {
            title: "Design Process Documentary",
            thumbnail: "https://images.unsplash.com/photo-1723220217716-a328c198a60c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMHN0cmF0ZWd5JTIwbW9vZGJvYXJkfGVufDF8fHx8MTc2MzQ2MzM3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            type: "BTS Documentary",
          },
          {
            title: "Digital Assets Showcase",
            thumbnail: "https://images.unsplash.com/photo-1712904311011-66c73f2ed065?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjM0NjIxOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            type: "Showcase Reel",
          },
        ]}
      />

      <ResultsAchievements
        metrics={[
          {
            label: "Reader Satisfaction",
            value: "92",
            increase: "+92% approval rating",
            icon: Heart,
            color: "from-pink-500 to-rose-500",
          },
          {
            label: "Social Shares",
            value: "185",
            increase: "+185% increase",
            icon: TrendingUp,
            color: "from-orange-500 to-red-500",
          },
          {
            label: "New Subscriptions",
            value: "8500",
            increase: "+8.5K subscribers",
            icon: Users,
            color: "from-purple-500 to-pink-500",
          },
          {
            label: "Digital Engagement",
            value: "145",
            increase: "+145% time on page",
            icon: Eye,
            color: "from-blue-500 to-cyan-500",
          },
        ]}
      />

      <ClientTestimonial
        quote="Mother Superior Media didn't just redesign our magazine—they elevated our entire brand. The new editorial design is sophisticated, modern, and perfectly captures the premium quality our readers expect. The transformation has been remarkable."
        author="James Patterson"
        role="Editor-in-Chief, Business Fortune Magazine"
      />

      <FinalOutcome
        outcomes={[
          "Award-winning editorial design recognized by industry publications",
          "Consistent visual excellence across print and digital platforms",
          "Premium brand positioning reinforced through sophisticated design",
          "Significant increase in reader engagement and subscription growth",
          "Comprehensive design system enabling efficient production",
          "Enhanced social media presence through shareable visual assets",
        ]}
      />

      <MoreCaseStudies currentCaseStudyId="businessfortune" onNavigate={onNavigate} />
    </div>
  );
}
