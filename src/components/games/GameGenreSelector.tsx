import useGenres from "../../hooks/useGenres";
import { Genre } from "../../models/games";
import SelectBoxOption from "../../models/selectBoxOption";
import DropDown from "../utilities/DropDown";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GameGenreSelector = ({ onSelectGenre }: Props) => {
  const { data } = useGenres();

  const genreOptions: SelectBoxOption[] = data.map((genre) => {
    return { text: genre.name, value: genre.id.toString() };
  });

  const onDropdownSelect = (value: string): void => {
    const elem = data.find((genre) => genre.slug === (value as string));
    if (!elem) {
      return;
    }

    onSelectGenre({
      id: elem.id,
      name: elem.name,
      image_background: elem.image_background,
    });
  };

  return (
    <DropDown
      label="Filter on genre"
      options={genreOptions}
      onSelect={(value) => onDropdownSelect(value as string)}
    />
  );
};

export default GameGenreSelector;
