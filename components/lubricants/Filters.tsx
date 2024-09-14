import { Dropdown, Selection, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { ChevronDown } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

type Props = {
  selectedKeys: Selection,
  setSelectedKeys: Dispatch<SetStateAction<Selection>>,
  selectedValue: string,
  isLoading: boolean
};


export function Filters({ selectedKeys, setSelectedKeys, selectedValue, isLoading }: Props) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          isLoading={isLoading}
          variant="light"
          endContent={<ChevronDown color={"#374151"} />}
          className="capitalize"
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Filter Actions"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
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
