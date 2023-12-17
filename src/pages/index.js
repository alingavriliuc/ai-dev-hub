import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx("hero hero--primary", styles.heroBanner)}>
			<div className={clsx(styles.heroBannerCover)}></div>
			<div className={clsx("container hero-content", styles.heroContent)}>
				<Heading as="h1" className="hero__title">
					{siteConfig.title}
				</Heading>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<div className={styles.buttons}>
					<Link className="button button--secondary button--lg" to="/docs/machine-learning/">
						Discover tools &#x2192;
					</Link>
				</div>
			</div>
		</header>
	);
}

export default function Home() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
			<HomepageHeader />
			<main className="container">
				<HomepageFeatures />
        <Heading as="h2" className="hero__title">
					About AI-DevHub
				</Heading>
				<p className={clsx(styles.descriptionParagraph)}>
					Welcome to AI-DevHub, your premier destination for exploring the world of Artificial Intelligence (AI) development tools. Dive into our comprehensive repository featuring
					industry-leading resources like TensorFlow, PyTorch, and LangChain, designed to empower developers at every skill level. From cutting-edge tutorials and in-depth guides to a
					vibrant community of AI enthusiasts, AI-DevHub is dedicated to advancing the field of AI development. Whether you're starting your AI journey or are an experienced developer
					seeking innovative tools and insights, AI-DevHub is your go-to platform for staying ahead in the dynamic and ever-evolving realm of AI technology.
				</p>
			</main>
		</Layout>
	);
}
