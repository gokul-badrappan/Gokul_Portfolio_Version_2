import { createFileRoute } from "@tanstack/react-router";
import { HUD } from "@/components/HUD";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SkillsMarquee } from "@/components/SkillsMarquee";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Credentials } from "@/components/Credentials";
import { Pipeline } from "@/components/Pipeline";
import { Contact } from "@/components/Contact";
import { projects, experience, seo } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { name: "keywords", content: seo.keywords.join(", ") },
      { property: "og:title", content: seo.openGraph.title },
      { property: "og:description", content: seo.openGraph.description },
      { property: "og:url", content: seo.url },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <HUD />
      <Navbar />
      <Hero />
      <div className="max-w-2xl mx-auto px-6 py-8 border-l-2 border-[rgb(58,108,215)] pl-4">
        <p className="font-mono text-white/60 text-sm leading-relaxed">
          <span className="block text-white/40 mb-1">my_overview:</span>
          DevOps Engineer specializing in cloud infrastructure, CI/CD automation, and site
          reliability. This dashboard logs active projects, professional experience, and technical
          capabilities.
        </p>
      </div>
      <SkillsMarquee />
      <Projects items={projects} />
      <Experience items={experience} />
      <Credentials />
      <Pipeline />
      <Contact />
    </main>
  );
}
