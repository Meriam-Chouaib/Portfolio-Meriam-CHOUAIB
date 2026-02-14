import { Box, IconButton, styled } from '@mui/material';
import { TextField } from 'components/hookform';

// Conteneur principal de la section
export const ContactWrapper = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  position: 'relative',
  overflow: 'hidden',
}));

// Conteneur des deux colonnes (Infos + CV)
export const ContentGrid = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(6),
  alignItems: 'stretch',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse',
  },
}));

// Colonne de gauche : Informations de contact
export const InfoColumn = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '32px', // gap: 4
});

// Carte interne contenant les détails (Email, Location, etc.)
export const InfoCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  height: '100%',
  justifyContent: 'center',
}));

// Colonne de droite : Conteneur de l'aperçu CV
export const PreviewColumn = styled(Box)({
  flex: 1.2,
});

// La carte cliquable qui affiche l'iframe
export const CVPreviewCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[6],
  cursor: 'pointer',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  height: 500,
  overflow: 'hidden',
  border: `1px solid ${theme.palette.divider}`,
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[10],
    '& .overlay': {
      opacity: 1,
    },
  },
  [theme.breakpoints.down('md')]: {
    height: 400,
  },
}));

// Boutons du Dialog
export const ActionIconButton = styled(IconButton)(({ theme }) => ({
  color: '#fff',
  backgroundColor: '#110835',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#fff',
    color: '#110835',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
  },
}));

export const TextFieldStyled = styled(TextField)({
  margin: '8px 0px',
  '& .MuiInputBase-root': {
    borderRadius: '30px',
  },
});