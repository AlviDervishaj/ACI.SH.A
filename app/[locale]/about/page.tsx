import dynamic from "next/dynamic";
const AboutUsDescription = dynamic(
  () => import("@/components/about/AboutUsDescription"),
);

export default function AboutPage() {
  return <AboutUsDescription />;
}
