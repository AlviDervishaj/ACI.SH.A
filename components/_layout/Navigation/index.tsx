import dynamic from "next/dynamic";

const LargeScreenNavigation = dynamic(
  () => import("@/components/_layout/Navigation/LargeScreen"),
);
const SmallScreenNavigation = dynamic(
  () => import("@/components/_layout/Navigation/SmallScreen"),
);

export default function Navigation() {
  return (
    <nav className="w-full p-2 h-fit !sticky top-0 left-0 bg-slate-200/95 dark:bg-background z-50 border-b-2 dark:border-slate-200/50 border-b-slate-700/50">
      {/* Large Screen Navigation */}
      <LargeScreenNavigation />
      {/* Small Screen Navigation */}
      <SmallScreenNavigation />
    </nav>
  );
}
