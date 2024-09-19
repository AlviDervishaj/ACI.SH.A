import { InputProps, Input as NInput } from "@nextui-org/react";

/**
 * Custom Input Component based on Next UI Input.
 * Font Size set to base so that it does not cause any issues on mobile.
* */
export default function Input(props: InputProps) {
  const { classNames, ...otherProps } = props;
  return <NInput classNames={{ input: "text-base", ...classNames }} {...otherProps} />
}

