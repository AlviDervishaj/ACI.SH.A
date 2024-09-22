import { ReactNode } from "react";

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <div className="w-full h-full p-4">{children}</div>;
}
