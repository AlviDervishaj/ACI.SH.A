import clsx from "clsx";

import { InputProps, Input as NInput } from "@/components/ui/input";

/**
 * Custom Input Component based on Next UI Input.
 * Font Size set to base so that it does not cause any issues on mobile.
 * */
export default function Input(props: InputProps) {
  const { className, ...otherProps } = props;

  return <NInput className={clsx("text-base", className)} {...otherProps} />;
}
