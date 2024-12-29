import { Disclosure } from "@headlessui/react";

import { NavigationSmallScreen } from "./NavigationSmallScreen";
import { NavigationBigScreen } from "./NavigationBigScreen";

export const NavigationUI = () => {
  return (
    <Disclosure
      as="nav"
      className="bg-background/60 border-b border-b-slate-700/50 dark:border-b-foreground/50 shadow-lg shadow-foreground/10 backdrop-blur-lg z-50 p-0 m-0 fixed top-0 left-0 w-full h-fit"
    >
      <NavigationBigScreen />
      <NavigationSmallScreen />
    </Disclosure>
  );
};
