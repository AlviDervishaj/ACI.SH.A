import { useParams } from "next/navigation";
import {
  MouseEvent,
  ReactElement,
  useMemo,
  useState,
  useTransition,
} from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import { useRouter, usePathname } from "@/i18n/routing";

import { Button } from "../ui/button";

type Props = {
  children: ReactElement[];
  defaultValue: string;
};

export function LocaleSwitcherSelect({ children, defaultValue }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const [isActive, setIsActive] = useState<boolean>(false);

  function onSelectChange(event: MouseEvent<HTMLButtonElement>) {
    const nextLocale = event.currentTarget.value;

    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale },
      );
    });
  }

  const handleLocaleChange = (event: MouseEvent<HTMLButtonElement>) => {
    setIsActive(false);
    onSelectChange(event);
  };

  const currentChild = useMemo(
    () =>
      children.find((child) => {
        if (child) {
          return child.props.value === defaultValue;
        }

        return null;
      }),
    [children.length, defaultValue],
  );

  return (
    <section className="relative p-0 m-0">
      <Button
        defaultValue={defaultValue}
        disabled={isPending}
        variant="outline"
        onClick={() => setIsActive((prev) => !prev)}
      >
        {currentChild}{" "}
        {!isActive ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
      </Button>
      {isActive && (
        <div className="absolute top-auto right-0 bg-background rounded-lg border-2 border-card">
          {children.map((child, index) => (
            <Button
              key={index}
              className="w-full h-fit py-1 border-b border-slate-700/60 last:border-0 rounded-b-none"
              value={child.props.value}
              variant="ghost"
              onClick={handleLocaleChange}
            >
              {child}
            </Button>
          ))}
        </div>
      )}
    </section>
  );
}
