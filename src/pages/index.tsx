import { Redirect } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import type { ReactElement } from "react";

export default function Home(): ReactElement {
  const { siteConfig } = useDocusaurusContext();
  const baseUrl = siteConfig.baseUrl;

  return <Redirect to={`${baseUrl}introduction`} />;
}
