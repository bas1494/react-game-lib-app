import { useTranslation } from "../../utilities/context/TranslationProvider";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../models/gameModels";
import SelectBoxOption from "../../utilities/models/selectBoxOption";
import DropDown from "../../utilities/components/DropDown";

interface Props {
  onSelectPlatform: (platforms: Platform) => void;
}

const GamePlatformSelector = ({ onSelectPlatform }: Props) => {
  const { data } = usePlatforms();
  const { translate } = useTranslation();

  const platformOptions: SelectBoxOption[] = data.map((platform) => {
    return { text: platform.name, value: platform.slug };
  });

  const onDropdownSelect = (value: string): void => {
    const elem = data.find((platform) => platform.slug === (value as string));
    if (!elem) {
      return;
    }

    onSelectPlatform({ id: elem.id, name: elem.name, slug: elem.slug });
  };

  return (
    <DropDown
      label={translate("page.game_library.filters_platform.placeholder")}
      options={platformOptions}
      onSelect={(value) => onDropdownSelect(value as string)}
    />
  );
};

export default GamePlatformSelector;
