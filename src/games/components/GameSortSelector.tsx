import SelectBoxOption from "../../utilities/models/selectBoxOption";
import DropDown from "../../utilities/components/DropDown";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder?: string;
}

const GameSortSelector = ({ onSelectSortOrder, sortOrder = "" }: Props) => {
  const sortOrders: SelectBoxOption[] = [
    { value: "", text: "Relevance" },
    { value: "-added", text: "Date added" },
    { value: "name", text: "Name" },
    { value: "-released", text: "Release date" },
    { value: "-metacritic", text: "Popularity" },
    { value: "-rating", text: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find((so) => so.value == sortOrder);

  return (
    <DropDown
      label="Order by"
      onSelect={(val) => onSelectSortOrder(val as string)}
      options={sortOrders}
      defaultSelected={currentSortOrder ? [currentSortOrder.value] : []}
    />
  );
};

export default GameSortSelector;
