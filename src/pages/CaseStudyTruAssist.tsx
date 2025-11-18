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

interface CaseStudyTruAssistProps {
  onNavigate: (page: string) => void;
}

export function CaseStudyTruAssist({ onNavigate }: CaseStudyTruAssistProps) {
  return (
    <div className="min-h-screen bg-white">
      <CaseStudyHero
        clientName="TruAssist Tech"
        description="How we transformed their digital presence with emotional storytelling and powerful themed visual design showcasing mobility-assist wheelchair technology."
        image="https://images.unsplash.com/photo-1706700373769-de65812e7b4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwd2hlZWxjaGFpcnxlbnwxfHx8fDE3NjM0NjIxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        logo="♿"
        category="Branding / Video / Social Media"
        color="from-blue-500 to-cyan-500"
      />

      <ClientOverview
        about="TruAssist Tech is an innovative mobility solutions company specializing in advanced wheelchair technology. Their mission is to empower individuals with mobility challenges through cutting-edge assistive technology. They focus on independence, dignity, and quality of life for their users."
        challenges={[
          "Difficulty conveying the emotional impact of their technology",
          "Low brand awareness in a competitive assistive technology market",
          "Technical product features overshadowing human stories",
          "Limited social media presence and engagement",
          "Need to balance technical innovation with emotional connection",
        ]}
      />

      <GoalAndStrategy
        goals={[
          "Build brand awareness through emotional storytelling",
          "Showcase real-life impact on users' lives",
          "Create a visual identity that emphasizes empowerment",
          "Increase engagement with human-centered content",
          "Position TruAssist as an industry leader in innovation",
          "Drive inquiries and conversions through authentic stories",
        ]}
        strategySteps={[
          "User story research and documentation",
          "Identifying key emotional touchpoints in customer journey",
          "Developing visual language that emphasizes ability over disability",
          "Creating content pillars: innovation, empowerment, community, education",
          "Planning testimonial-driven campaigns",
          "Integrating technical features within human narratives",
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
            description: "Deep interviews with users and caregivers to understand real experiences. Documented personal journeys and identified powerful moments that showcase the transformative impact of mobility technology.",
            image: "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MzQ2MzM3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          },
          {
            title: "Visual Identity Development",
            description: "Created a bold, modern color palette using blues and teals to convey trust and innovation. Developed photography guidelines emphasizing action, independence, and joy rather than limitations.",
            image: "https://images.unsplash.com/photo-1723220217716-a328c198a60c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMHN0cmF0ZWd5JTIwbW9vZGJvYXJkfGVufDF8fHx8MTc2MzQ2MzM3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          },
          {
            title: "Content Planning",
            description: "Mapped out user story arcs, feature highlights integrated with benefits, community celebration posts, educational content about mobility solutions, and behind-the-scenes innovation.",
            image: "https://images.unsplash.com/photo-1676287567295-135ce512839a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwcGxhbm5pbmclMjBjYWxlbmRhcnxlbnwxfHx8fDE3NjM0NjMzNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          },
          {
            title: "Design & Production",
            description: "Produced cinematic video content showcasing users in their daily lives. Created motion graphics explaining technical features. Designed carousels that tell complete user transformation stories.",
            image: "https://images.unsplash.com/photo-1673767297196-ce9739933932?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBzdHVkaW98ZW58MXx8fHwxNzYzNDQ1NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          },
          {
            title: "Execution & Publishing",
            description: "Launched coordinated campaigns across platforms with consistent messaging. Optimized posting for maximum reach within disability advocacy and healthcare communities. Engaged with user comments authentically.",
            image: "https://images.unsplash.com/photo-1712904311011-66c73f2ed065?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjM0NjIxOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          },
          {
            title: "Performance Tracking",
            description: "Monitored engagement metrics with special attention to shares and saves indicating emotional resonance. Tracked conversion from social engagement to product inquiries and demo requests.",
            image: "https://images.unsplash.com/photo-1676276375742-9e3d10e39d45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFuYWx5dGljcyUyMGNoYXJ0c3xlbnwxfHx8fDE3NjM0NjMzNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          },
        ]}
      />

      <VisualShowcase
        images={[
          "https://images.unsplash.com/photo-1706700373769-de65812e7b4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwd2hlZWxjaGFpcnxlbnwxfHx8fDE3NjM0NjIxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          "https://images.unsplash.com/photo-1673767297196-ce9739933932?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBzdHVkaW98ZW58MXx8fHwxNzYzNDQ1NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          "https://images.unsplash.com/photo-1723220217716-a328c198a60c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMHN0cmF0ZWd5JTIwbW9vZGJvYXJkfGVufDF8fHx8MTc2MzQ2MzM3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        ]}
      />

      <VideoShowcase
        videos={[
          {
            title: "User Journey Documentary",
            thumbnail: "https://images.unsplash.com/photo-1673767297196-ce9739933932?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBzdHVkaW98ZW58MXx8fHwxNzYzNDQ1NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            type: "Documentary",
          },
          {
            title: "Technology Innovation Reel",
            thumbnail: "https://images.unsplash.com/photo-1706700373769-de65812e7b4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwd2hlZWxjaGFpcnxlbnwxfHx8fDE3NjM0NjIxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            type: "Product Reel",
          },
          {
            title: "Community Stories",
            thumbnail: "https://images.unsplash.com/photo-1712904311011-66c73f2ed065?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjM0NjIxOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            type: "Testimonial Series",
          },
        ]}
      />

      <ResultsAchievements
        metrics={[
          {
            label: "Engagement Rate",
            value: "156",
            increase: "+156% improvement",
            icon: Heart,
            color: "from-pink-500 to-rose-500",
          },
          {
            label: "Video Views",
            value: "320000",
            increase: "320K+ monthly views",
            icon: Eye,
            color: "from-blue-500 to-cyan-500",
          },
          {
            label: "Community Growth",
            value: "18000",
            increase: "+18K new followers",
            icon: Users,
            color: "from-purple-500 to-pink-500",
          },
          {
            label: "Demo Requests",
            value: "67",
            increase: "+67% from social",
            icon: TrendingUp,
            color: "from-emerald-500 to-teal-500",
          },
        ]}
      />

      <ClientTestimonial
        quote="Mother Superior Media didn't just market our product—they told our users' stories with dignity and power. The emotional connection they created has transformed how people perceive mobility technology and our brand."
        author="Sarah Martinez"
        role="CEO, TruAssist Tech"
      />

      <FinalOutcome
        outcomes={[
          "Human-centered brand narrative that resonates emotionally",
          "300%+ increase in social media engagement and reach",
          "Strong positioning as an empowerment-focused technology leader",
          "Authentic community building with users and advocates",
          "Significant increase in product inquiries and demo requests",
          "Award-winning video content recognized in the industry",
        ]}
      />

      <MoreCaseStudies currentCaseStudyId="truassist" onNavigate={onNavigate} />
    </div>
  );
}
