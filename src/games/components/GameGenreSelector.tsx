import { useTranslation } from "../../utilities/context/TranslationProvider";
import useGenres from "../hooks/useGenres";
import { Genre } from "../models/gameModels";
import SelectBoxOption from "../../utilities/models/selectBoxOption";
import DropDown from "../../utilities/components/DropDown";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GameGenreSelector = ({ onSelectGenre }: Props) => {
  const { data } = useGenres();
  const { translate } = useTranslation();

  const genreOptions: SelectBoxOption[] = data.map((genre) => {
    return { text: genre.name, value: genre.id.toString() };
  });

  const onDropdownSelect = (value: string): void => {
    const elem = data.find((genre) => genre.id === Number(value));
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
      label={translate("page.game_library.filters_genre.placeholder")}
      options={genreOptions}
      onSelect={(value) => onDropdownSelect(value as string)}
    />
  );
};

export default GameGenreSelector;
