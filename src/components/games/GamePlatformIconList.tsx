import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../../models/games";
import { IconType } from "react-icons";

import { IconContext } from "react-icons";

interface Props {
  platforms: Platform[];
}

const GamePlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <IconContext.Provider value={{ className: "platform-icon" }}>
      {platforms.map((platform) => {
        const IconComponent = iconMap[platform.slug];
        return IconComponent && <IconComponent key={platform.id} />;
      })}
    </IconContext.Provider>
  );
};

export default GamePlatformIconList;
