//import dynamic from "next/dynamic";

import dynamic from "next/dynamic";

//const LargeScreenNavigation = dynamic(
//  () => import("@/components/_layout/Navigation/LargeScreen"),
//);
//const SmallScreenNavigation = dynamic(
//  () => import("@/components/_layout/Navigation/SmallScreen"),
//);
const NavigationUI = dynamic(
  () => import("@/components/_layout/Navigation/NewNavigation"),
);

export default function Navigation() {
  return <NavigationUI />;
}
