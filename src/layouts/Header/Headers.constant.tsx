import React from 'react'; // Indispensable pour utiliser React.ReactNode et le JSX
import FolderIcon from '@mui/icons-material/Folder';
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import ContactMailIcon from '@mui/icons-material/ContactMail';

// L'interface définit ce qu'est un "item" du menu
interface DrawerItem {
  txt: string;
  id: string;
  icon: React.ReactNode;
}

export const items: DrawerItem[] = [
  {
    txt: 'header.projects',
    id: 'projects',
    icon: <FolderIcon />,
  },

  {
    txt: 'header.about',
    id: 'aboutMeId',
    icon: <PersonIcon />,
  },
  {
    txt: 'header.contact',
    id: 'contactId',
    icon: <ContactMailIcon />,
  },
];

export const itemsDrawer = (): DrawerItem[] => {
  return items.map((item) => ({
    ...item,
  }));
};