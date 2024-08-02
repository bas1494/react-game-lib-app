import { useState } from "react";
import SelectBoxOption from "../../models/selectBoxOption";

interface Props {
  label: string;
  options: SelectBoxOption[];
  currentSelected?: string[];
  multiSelect?: boolean;
  onSelect: (values: string[] | string) => void;
}

const DropDown = ({
  label,
  options,
  currentSelected = [],
  multiSelect = false,
  onSelect,
}: Props) => {
  const [selectedValues, setSelectedValues] = useState<Set<string>>(
    new Set<string>(currentSelected)
  );

  const clearSelection = (): void => {
    setSelectedValues(() => {
      onSelect([]);
      return new Set();
    });
  };

  const onItemClick = (value: string): void => {
    if (!multiSelect) {
      const newValues = new Set<string>().add(value);
      setSelectedValues(newValues);
      onSelect(value);
      return;
    }

    setSelectedValues((current) => {
      const newValues = new Set(current);
      newValues.has(value) ? newValues.delete(value) : newValues.add(value);
      onSelect(Array.from(newValues.values()));
      return newValues;
    });
  };

  const isSelected = (value: string): boolean => {
    return selectedValues.has(value);
  };

  const boxLabel =
    selectedValues.size === 0
      ? label
      : selectedValues.size === 1
      ? options.find(
          (option) => option.value === selectedValues.values().next().value
        )?.text
      : selectedValues.size + " Selected";

  return (
    <div>
      <div
        className="form-select"
        data-bs-toggle="dropdown"
        data-bs-auto-close={multiSelect ? "outside" : "inside"}
        aria-expanded="false"
      >
        {boxLabel}
      </div>
      <ul className="dropdown-menu">
        {options.map((option) => (
          <li key={option.value} onClick={() => onItemClick(option.value)}>
            <div
              className={
                "dropdown-item " +
                (isSelected(option.value) ? "dropdown-item-selected" : "")
              }
            >
              {option.text}
            </div>
          </li>
        ))}
        {multiSelect && (
          <li onClick={clearSelection}>
            <button
              className="dropdown-item btn btn-outline text-danger"
              disabled={selectedValues.size === 0}
            >
              Clear selection
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default DropDown;
