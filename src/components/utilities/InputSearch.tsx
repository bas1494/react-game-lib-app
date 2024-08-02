import { useState } from "react";
import useDebounce from "../../hooks/useDebounce";

interface Props {
  placeHolder?: string;
  onChange: (value: string) => void;
}

const InputSearch = ({ placeHolder = "Search", onChange }: Props) => {
  const [inputValue, setInputValue] = useState<string>("");

  const debouncedHandleChange = useDebounce((value: string) => {
    onChange(value);
  }, 400);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setInputValue(event.target.value);
    debouncedHandleChange(event.target.value);
  };

  return (
    <input
      className="form-control"
      placeholder={placeHolder}
      type="text"
      value={inputValue}
      onChange={handleInputChange}
    />
  );
};

export default InputSearch;
