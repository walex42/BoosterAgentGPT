import { type ReactNode } from "react";
import Head from "next/head";
import DottedGridBackground from "../components/DottedGridBackground";
import Script from "next/script";

interface LayoutProps {
  children: ReactNode;
}

const DefaultLayout = (props: LayoutProps) => {
  const description =
    "Use Booster's AI Agent to help manage your career.";
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#2B2B2B] to-[#1F1F1F]">
      <Head>
        <title>Booster</title>
        <meta name="description" content={description} />
        <meta name="twitter:site" content="@booster_ai" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Booster 🤖" />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="/booster_splash.png"
        />
        <meta name="twitter:image:width" content="1280" />
        <meta name="twitter:image:height" content="640" />
        <meta
          property="og:title"
          content="Booster: Use Booster's AI Agent to help manage your career."
        />
        <meta
          property="og:description"
          content="Use Booster's AI Agent to help manage your career."
        />
        <meta property="og:url" content="/booster_splash.png" />
        <meta
          property="og:image"
          content="/booster_splash.png"
        />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="640" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <DottedGridBackground>{props.children}</DottedGridBackground>
    </div>
  );
};

export default DefaultLayout;
