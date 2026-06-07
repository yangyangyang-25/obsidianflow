export const siteConfig = {
  name: "ObsidianFlow",
  title: "ObsidianFlow",
  description:
    "Obsidian workflow guides for Markdown writing, content planning, templates, and publishing.",
  repo: "obsidianflow",
  basePath: "/obsidianflow",
  siteUrl: "https://yangyangyang-25.github.io",
  nav: [
    { href: "/", label: "Home" },
    { href: "/blog/", label: "Blog" },
    { href: "/about/", label: "About" }
  ],
  categories: [
    "Obsidian Basics",
    "Templates",
    "Markdown Workflow",
    "Knowledge Management",
    "Publishing Workflow"
] as const
};

export type SiteCategory = (typeof siteConfig.categories)[number];
