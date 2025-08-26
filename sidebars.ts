import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // But you can create a sidebar manually
  tutorialSidebar: [
    "introduction",
    {
      type: "category",
      label: "Governance and Structure",
      link: { type: "doc", id: "governance-and-structure/index" },
      items: [
        "governance-and-structure/leadership",
        "governance-and-structure/departments",
        "governance-and-structure/enforcement",
      ],
    },
    {
      type: "category",
      label: "Legislation",
      items: [
        "legislation/bill-of-rights",
        "legislation/integrity-and-standards",
        "legislation/voluntary-blacklist",
      ],
    },
    {
      type: "category",
      label: "Regulation",
      items: ["regulation/definitions", "regulation/harming"],
    },
  ],
};

export default sidebars;
