"use client";
import { LoaderCircle } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "@nextui-org/react";

import { Item } from "@/types";

export function LoadItemsInsideForm({ items }: { items: Item[] }) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <div className="absolute mt-1 rounded-md z-50 p-1 left-0 w-full h-full bg-default-200 flex flex-row items-center content-center justify-center">
          <button
            className="animate-spin w-fit h-fit flex flex-row items-center content-center"
            onClick={() => {}}
          >
            <LoaderCircle className="stroke-default-600" />
          </button>
        </div>
      ) : items.length >= 1 ? (
        <div className="absolute mt-1 rounded-md p-1 z-50 left-0 w-full h-fit !max-h-[25rem] bg-default-200 flex flex-col items-center content-center justify-center overflow-y-visible">
          {items.map((item) => (
            <Button
              key={item.id}
              className="w-full"
              id={`${item.id} ${item.name}`}
              variant="light"
            >
              {item.name}
            </Button>
          ))}
        </div>
      ) : null}
    </>
  );
}
