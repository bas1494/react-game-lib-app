import SelectBoxOption from "../models/selectBoxOption";

interface Props {
  ariaLabel: string;
  options: SelectBoxOption[];
  defaultValue?: string | undefined;
  hasUndefinedOption?: boolean;
  onSelect: (selectedValue: string) => void;
}

const SelectBoxStandAlone = ({
  ariaLabel,
  options,
  defaultValue = undefined,
  hasUndefinedOption = false,
  onSelect,
}: Props) => {
  return (
    <select
      className="form-select"
      aria-label={ariaLabel}
      defaultValue={defaultValue}
      onChange={(e) => onSelect(e.target.value)}
    >
      {hasUndefinedOption && <option value={undefined}>Null</option>}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
};

export default SelectBoxStandAlone;
