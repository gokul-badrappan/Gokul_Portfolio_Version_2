import { createFileRoute } from "@tanstack/react-router";
import { HUD } from "@/components/HUD";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Credentials } from "@/components/Credentials";
import { SiteInfra } from "@/components/SiteInfra";
import { ForHire } from "@/components/ForHire";
import { Contact } from "@/components/Contact";
import { projects, experience, overview, seo } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { name: "keywords", content: seo.keywords.join(", ") },
      { name: "author", content: "Gokul Badrappan" },
      { property: "og:title", content: seo.openGraph.title },
      { property: "og:description", content: seo.openGraph.description },
      { property: "og:url", content: seo.url },
      { property: "og:image", content: seo.image },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:title", content: seo.openGraph.title },
      { name: "twitter:description", content: seo.openGraph.description },
      { name: "twitter:image", content: seo.image },
    ],
    links: [
      { rel: "canonical", href: seo.url },
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
    <>
      <a
        href="#experience"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-full focus:bg-card font-mono text-xs"
      >
        skip to content
      </a>
      <HUD />
      <Navbar />
      <main className="relative max-w-6xl mx-auto">
        <Hero />
        <div className="max-w-2xl mx-auto px-6 py-8 border-l-2 border-[rgb(58,108,215)] pl-4">
          <p className="font-mono text-white/80 text-sm leading-relaxed">
            <span className="block text-white/60 mb-1">my_overview:</span>
            {overview}
          </p>
        </div>
        <Experience items={experience} />
        <Projects items={projects} />
        <Skills />
        <Credentials />
        <SiteInfra />
        <ForHire />
        <Contact />
      </main>
    </>
  );
}
