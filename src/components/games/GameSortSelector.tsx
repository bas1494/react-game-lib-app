import SelectBoxOption from "../../models/selectBoxOption";
import SelectBoxStandAlone from "../utilities/SelectBoxStandAlone";

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
    <SelectBoxStandAlone
      ariaLabel="select game sort order"
      onSelect={onSelectSortOrder}
      options={sortOrders}
      defaultValue={currentSortOrder?.value}
    />
  );
};

export default GameSortSelector;
