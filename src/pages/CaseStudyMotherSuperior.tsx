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

interface CaseStudyMotherSuperiorProps {
  onNavigate: (page: string) => void;
}

export function CaseStudyMotherSuperior({ onNavigate }: CaseStudyMotherSuperiorProps) {
  return (
    <div className="min-h-screen bg-white">
      <CaseStudyHero
        clientName="Mother Superior Media"
        description="How we built our own signature brand voice, reel style, and trending content strategy that improved brand recall and positioned us as industry leaders."
        image="https://images.unsplash.com/photo-1666698809123-44e998e93f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMG9mZmljZXxlbnwxfHx8fDE3NjMzNjMxMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        logo="🎬"
        category="Internal Branding / Content Strategy / Marketing"
        color="from-purple-500 to-pink-500"
      />

      <ClientOverview
        about="Mother Superior Media is our own digital branding and social media marketing agency. As creators and strategists, we needed to practice what we preach—building a distinctive brand presence that showcases our expertise, creativity, and results-driven approach in the competitive agency landscape."
        challenges={[
          "Establishing credibility in a saturated agency market",
          "Differentiating from countless other marketing agencies",
          "Balancing client work with our own brand building",
          "Creating content that demonstrates our expertise authentically",
          "Building a recognizable visual and narrative identity",
        ]}
      />

      <GoalAndStrategy
        goals={[
          "Develop a unique brand voice that stands out",
          "Create signature visual style and content formats",
          "Demonstrate expertise through valuable content",
          "Build trust and authority in the digital marketing space",
          "Attract high-quality clients through thought leadership",
          "Establish Mother Superior Media as a premium agency brand",
        ]}
        strategySteps={[
          "Deep brand positioning analysis and competitor research",
          "Defining our unique value proposition and brand personality",
          "Creating visual identity guidelines for consistency",
          "Developing content pillars: tips, case studies, trends, education",
          "Establishing tone of voice: confident, creative, data-driven",
          "Building a content calendar that showcases diverse skills",
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
            description: "Analyzed successful agency brands, identified gaps in the market, and defined what makes Mother Superior Media unique. Established our core values: creativity, strategy, results, and authenticity.",
            image: "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MzQ2MzM3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          },
          {
            title: "Visual Identity Development",
            description: "Created a bold gradient color palette (purple, pink, blue) that conveys creativity and premium quality. Developed typography system, icon library, and photography style that exudes modern professionalism.",
            image: "https://images.unsplash.com/photo-1723220217716-a328c198a60c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMHN0cmF0ZWd5JTIwbW9vZGJvYXJkfGVufDF8fHx8MTc2MzQ2MzM3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          },
          {
            title: "Content Planning",
            description: "Mapped content series: Marketing Minute tips, Case Study Spotlights, Trend Analysis, Behind-the-Scenes agency life, and Educational carousels. Planned to demonstrate expertise while providing value.",
            image: "https://images.unsplash.com/photo-1676287567295-135ce512839a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwcGxhbm5pbmclMjBjYWxlbmRhcnxlbnwxfHx8fDE3NjM0NjMzNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          },
          {
            title: "Design & Production",
            description: "Produced high-quality reels with signature transitions and brand elements. Created carousel templates that are visually consistent yet versatile. Established motion graphics style for animated content.",
            image: "https://images.unsplash.com/photo-1673767297196-ce9739933932?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBzdHVkaW98ZW58MXx8fHwxNzYzNDQ1NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          },
          {
            title: "Execution & Publishing",
            description: "Maintained consistent posting schedule across platforms. Engaged authentically with our community. Shared wins, learnings, and insights. Positioned ourselves as approachable experts.",
            image: "https://images.unsplash.com/photo-1712904311011-66c73f2ed065?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjM0NjIxOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          },
          {
            title: "Performance Tracking",
            description: "Monitored which content types resonated most with our target audience. Tracked inbound inquiries from social. Refined strategy based on engagement data and conversion metrics.",
            image: "https://images.unsplash.com/photo-1676276375742-9e3d10e39d45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFuYWx5dGljcyUyMGNoYXJ0c3xlbnwxfHx8fDE3NjM0NjMzNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          },
        ]}
      />

      <VisualShowcase
        images={[
          "https://images.unsplash.com/photo-1666698809123-44e998e93f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMG9mZmljZXxlbnwxfHx8fDE3NjMzNjMxMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          "https://images.unsplash.com/photo-1723220217716-a328c198a60c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMHN0cmF0ZWd5JTIwbW9vZGJvYXJkfGVufDF8fHx8MTc2MzQ2MzM3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          "https://images.unsplash.com/photo-1712904311011-66c73f2ed065?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjM0NjIxOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        ]}
      />

      <VideoShowcase
        videos={[
          {
            title: "Marketing Tips Series",
            thumbnail: "https://images.unsplash.com/photo-1673767297196-ce9739933932?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBzdHVkaW98ZW58MXx8fHwxNzYzNDQ1NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            type: "Educational Reel",
          },
          {
            title: "Behind the Agency",
            thumbnail: "https://images.unsplash.com/photo-1666698809123-44e998e93f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMG9mZmljZXxlbnwxfHx8fDE3NjMzNjMxMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            type: "BTS Reel",
          },
          {
            title: "Client Success Stories",
            thumbnail: "https://images.unsplash.com/photo-1712904311011-66c73f2ed065?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjM0NjIxOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            type: "Case Study Reel",
          },
        ]}
      />

      <ResultsAchievements
        metrics={[
          {
            label: "Brand Recall",
            value: "210",
            increase: "+210% improvement",
            icon: TrendingUp,
            color: "from-purple-500 to-pink-500",
          },
          {
            label: "Content Reach",
            value: "450000",
            increase: "450K+ monthly reach",
            icon: Eye,
            color: "from-blue-500 to-cyan-500",
          },
          {
            label: "Agency Following",
            value: "25000",
            increase: "+25K followers",
            icon: Users,
            color: "from-emerald-500 to-teal-500",
          },
          {
            label: "Engagement Rate",
            value: "8",
            increase: "8.5% avg engagement",
            icon: Heart,
            color: "from-pink-500 to-rose-500",
          },
        ]}
      />

      <ClientTestimonial
        quote="Practicing what we preach has been transformative. Building our own brand with the same rigor we apply to client work has not only attracted better clients but also pushed us to innovate constantly. We've become the agency we always wanted to work with."
        author="The Mother Superior Team"
        role="Internal Reflection"
      />

      <FinalOutcome
        outcomes={[
          "Distinctive brand identity recognized in the industry",
          "Consistent high engagement with target audience of business owners",
          "Premium positioning attracting quality clients",
          "Thought leadership established through valuable content",
          "Strong differentiation from commodity agencies",
          "Inbound lead quality and volume significantly increased",
        ]}
      />

      <MoreCaseStudies currentCaseStudyId="mothersuperiormedia" onNavigate={onNavigate} />
    </div>
  );
}
