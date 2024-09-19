import {
  Dropdown,
  Selection,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { ChevronDown } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

type Props = {
  selectedKeys: Selection;
  setSelectedKeys: Dispatch<SetStateAction<Selection>>;
  selectedValue: string;
  isLoading: boolean;
};

export default function Filters({
  selectedKeys,
  setSelectedKeys,
  selectedValue,
  isLoading,
}: Props) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          className="capitalize"
          endContent={<ChevronDown color={"#374151"} />}
          isLoading={isLoading}
          variant="light"
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        aria-label="Filter Actions"
        selectedKeys={selectedKeys}
        selectionMode="single"
        onSelectionChange={setSelectedKeys}
      >
        <DropdownItem key="default">Default</DropdownItem>
        <DropdownItem key="newest">Newest</DropdownItem>
        <DropdownItem key="price-high-low">Price: High - Low</DropdownItem>
        <DropdownItem key="price-low-high">Price: High - Low</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
