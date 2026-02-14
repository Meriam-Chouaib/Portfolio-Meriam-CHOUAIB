import { styled } from '@mui/material/styles';
import { Select } from '@mui/material';

export const StyledSelect = styled(Select)(({ theme }) => ({
    height: '2rem',
    color: '#6db5a2',
    // Cibler l'icône de la flèche
    '& .MuiSvgIcon-root': {
        color: '#6db5a2',
    },
    // Cibler la bordure (notchedOutline)
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#6db5a2',
    },
    // État au survol
    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#6db5a2',
        borderWidth: '1px', // Optionnel : évite que la bordure s'épaississe trop
    },
    // État focus (quand on clique dessus)
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#6db5a2',
        borderWidth: '2px',
    },
}));