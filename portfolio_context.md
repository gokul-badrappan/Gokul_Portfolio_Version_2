Project Identity:
High-performance, single-page Software Engineering and SRE portfolio.

Design Philosophy (Strict):

Ultra-minimalist, low information density. Dark mode (deep slate/midnight).

Primary accent/glow color: rgb(58, 108, 215).

Typography: Lowercase headers, sans-serif for prose, monospace for HUD/metrics.

No corporate logos or profile photos in the UI. Use abstract tech textures or clean brand icons.

Current Tech Stack:

React, Tailwind CSS, Framer Motion.

Icons: Monochrome by default, transitioning to brand colors on hover.

Content rules:

All copy and figures must match resume.pdf. Edit content only in src/data/portfolio.ts.

Every number or status shown on the site must be real (no Math.random telemetry). The HUD and the "how this site ships" section read real build metadata (**COMMIT_SHA**, **BUILD_TIME** in vite.config.ts) and the GitHub Actions badge.

Page order: hero + status readout, experience, projects (with case studies), skills, credentials, how this site ships, for hire, contact.

Open TODOs:

Publish the Secure CI/CD repo and set its github link in portfolio.ts.

Add certification verify links (Credly / Microsoft Learn) in portfolio.ts.

Add a booking link (contact.booking) if using Cal.com or Calendly.
