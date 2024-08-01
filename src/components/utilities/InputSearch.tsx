//TODO: Add debounce of 500MS
interface Props {
  placeHolder?: string;
  onChange: (value: string) => void;
}

const InputSearch = ({ placeHolder = "Search", onChange }: Props) => {
  return (
    <input
      className="form-control"
      placeholder={placeHolder}
      type="text"
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default InputSearch;
