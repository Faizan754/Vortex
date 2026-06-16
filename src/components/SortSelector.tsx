import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedSortOrder?: string;
}

const SortSelector = ({ onSelectSortOrder, selectedSortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const selectedSortButton = sortOrders.find(
    (sortOrder) => sortOrder.value === selectedSortOrder,
  );

  return (
    <div>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button colorPalette="gray" variant="subtle">
            Order by: {selectedSortButton?.label || "Relevance"}
            <BsChevronDown />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {sortOrders.map((order) => (
                <Menu.Item
                  onClick={() => onSelectSortOrder(order.value)}
                  value={order.value}
                  key={order.value}
                >
                  {order.label}
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </div>
  );
};

export default SortSelector;
