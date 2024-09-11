"use client";
import { ReactNode } from "react";
import { useCheckbox, Chip, VisuallyHidden, tv } from "@nextui-org/react";
import { CheckIcon } from './CustomChip'

const checkbox = tv({
  slots: {
    base: "border-default hover:bg-default-200",
    content: "text-default-500"
  },
  variants: {
    isSelected: {
      true: {
        base: "border-primary bg-primary-500 border-primary-500 hover:bg-primary-400 hover:border-primary-400",
        content: "text-primary-foreground pl-1"
      }
    },
    isFocusVisible: {
      true: {
        base: "outline-none ring-2 ring-focus ring-offset-2 ring-offset-background",
      }
    }
  }
})

export function CustomCheckbox(props: { children: ReactNode }) {
  const {
    isSelected,
    isFocusVisible,
    getBaseProps,
    getLabelProps,
    getInputProps,
  } = useCheckbox({
    size: "md",
  });
  const { ref, ...otherLabelProps } = getLabelProps();

  const styles = checkbox({ isSelected, isFocusVisible })

  return (
    <label {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <Chip
        classNames={{
          base: styles.base(),
          content: styles.content(),
        }}
        startContent={isSelected ? <CheckIcon className="ml-1" /> : null}
        variant="faded"
        {...otherLabelProps}
      >
        {props.children}
      </Chip>
    </label>
  );
}

