import { createFileRoute } from "@tanstack/react-router";
import { HUD } from "@/components/HUD";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SkillsMarquee } from "@/components/SkillsMarquee";
import { CardGrid } from "@/components/CardGrid";
import { Pipeline } from "@/components/Pipeline";
import { Contact } from "@/components/Contact";
import { projects, experience, education, seo } from "@/data/portfolio";

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
      <SkillsMarquee />
      <CardGrid id="projects" label="02 · deployments" title="deployments" items={projects} />
      <CardGrid id="experience" label="03 · experience" title="trajectory" items={experience} />
      <CardGrid id="education" label="04 · credentials" title="credentials" items={education} />
      <Pipeline />
      <Contact />
    </main>
  );
}
