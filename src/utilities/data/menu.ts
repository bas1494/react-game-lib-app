import { IconType } from 'react-icons';
import { BsCollection } from 'react-icons/bs';

interface MenuItem {
    name: string,
    path: string,
    icon: IconType
}

const menuItems: MenuItem[] = [
    {
        name: 'menu.item.games',
        path: '',
        icon: BsCollection
      },
    {
        name: 'page.game_library.title',
        path: 'something-else',
        icon: BsCollection
    },
];

export default menuItems;