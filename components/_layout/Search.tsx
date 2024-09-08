"use client";
import { Autocomplete, AutocompleteItem, MenuTriggerAction } from "@nextui-org/react";
import { useFilter } from "@react-aria/i18n";
import { SearchIndex } from "@/searchIndex";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { usePathname, useRouter } from "@/config/routing";

type Key = string | number;

type FieldState = {
  selectedKey: Key | null | undefined;
  inputValue: string;
  items: typeof SearchIndex;
};

export function Search() {
  const router = useRouter();
  const pathname = usePathname();

  // Store Autocomplete input value, selected option, open state, and items
  // in a state tracker
  const [fieldState, setFieldState] = useState<FieldState>({
    selectedKey: "",
    inputValue: "",
    items: SearchIndex,
  });

  // Implement custom filtering logic and control what items are
  // available to the Autocomplete.
  const { startsWith } = useFilter({ sensitivity: "base" });

  // Specify how each of the Autocomplete values should change when an
  // option is selected from the list box
  const onSelectionChange = (key: Key | null) => {
    setFieldState((prevState) => {
      let selectedItem = prevState.items.find((option) => option.title === key);

      return {
        inputValue: selectedItem?.title || "",
        selectedKey: key,
        items: SearchIndex.filter((item) => startsWith(item.title, selectedItem?.title || "")),
      };
    });
    if (fieldState.items.length === 1) {
      console.log({ items: fieldState.items });
      router.push(fieldState.items[0].href);
      setFieldState({
        selectedKey: "",
        inputValue: "",
        items: SearchIndex,
      })
    }
  };

  // Specify how each of the Autocomplete values should change when the input
  // field is altered by the user
  const onInputChange = (value: string) => {
    setFieldState((prevState) => ({
      inputValue: value,
      selectedKey: value === "" ? null : prevState.selectedKey,
      items: SearchIndex.filter((item) => startsWith(item.title, value)),
    }));
  };

  // Show entire list if user opens the menu manually
  const onOpenChange = (isOpen: boolean, menuTrigger: MenuTriggerAction) => {
    if (menuTrigger === "manual" && isOpen) {
      setFieldState((prevState) => ({
        inputValue: prevState.inputValue,
        selectedKey: prevState.selectedKey,
        items: SearchIndex,
      }));
    }
  };

  const EmptyContent = () => {
    return (
      <button
        className="w-full h-full text-left cursor-pointer select-none text-default-900"
        onClick={() => searchItemNavigation()}
      >
        <p> Search in Products </p>
      </button>
    )
  }

  function searchItemNavigation() {
    const value: string = fieldState.inputValue;
    console.log({ value });
    // query params
    const searchParams = new URLSearchParams("name");
    if (value) {
      // set search param
      searchParams.set("name", value);
    }
    else searchParams.delete("name");

    // place them in url
    router.replace(`${pathname}/products/?${searchParams.toString()}`);
  };

  return (
    <Autocomplete
      inputValue={fieldState.inputValue}
      items={fieldState.items}
      style={{ fontSize: "17px" }}
      label="Search"
      selectedKey={fieldState.selectedKey}
      variant="flat"
      selectorIcon={<SearchIcon size={24} color={"#6b7280"} />}
      onInputChange={onInputChange}
      disableSelectorIconRotation
      listboxProps={{
        emptyContent: <EmptyContent />
      }}
      onOpenChange={onOpenChange}
      onSelectionChange={onSelectionChange}
    >
      {(item) => <AutocompleteItem key={item.title}>{item.title}</AutocompleteItem>}
    </Autocomplete>
  );
}
