import { MenuItem, SelectChangeEvent } from '@mui/material';
import { TraductionForm } from 'layouts/Header/Header.style';
import { switchLanguage } from 'utils/service/translation.service';
// Import du composant stylisé
import { StyledSelect } from './ButtonTraduction.style';

function ButtonTraduction() {
  const handleChange = (event: SelectChangeEvent<unknown>) => {
    switchLanguage(event.target.value as string);
  };

  return (
    <TraductionForm>
      <StyledSelect
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        onChange={handleChange}
        defaultValue="fr"
      >
        <MenuItem value="en">En</MenuItem>
        <MenuItem value="fr">Fr</MenuItem>
      </StyledSelect>
    </TraductionForm>
  );
}

export default ButtonTraduction;