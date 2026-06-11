export const siteConfig = {
  name: "ObsidianFlow",
  title: "ObsidianFlow",
  description:
    "Obsidian workflow guides for Markdown writing, content planning, templates, and publishing.",
  repo: "obsidianflow",
  author: "Jun Yang",
  repositoryUrl: "https://github.com/yangyangyang-25/obsidianflow",
  issuesUrl: "https://github.com/yangyangyang-25/obsidianflow/issues",
  lastPolicyUpdate: "2026-06-11",
  basePath: "",
  siteUrl: "https://obsidianflow.pages.dev",
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
