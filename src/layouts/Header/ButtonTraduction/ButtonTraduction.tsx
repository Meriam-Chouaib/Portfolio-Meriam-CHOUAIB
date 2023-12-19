import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { switchLanguage } from 'utils/service/translation.service'

function ButtonTraduction() {
  return (
    <>
      <FormControl>
        <Select
          labelId='demo-simple-select-standard-label'
          id='demo-simple-select-standard'
          onChange={(event: SelectChangeEvent) =>
            switchLanguage(event.target.value)
          }
          sx={{ height: '2rem' }}
          defaultValue={'en'}
        >
          <MenuItem value={'en'}>
            {<span style={{ color: 'red' }}>En</span>}
          </MenuItem>
          <MenuItem value={'fr'}>
            {<span style={{ color: 'red' }}>Fr</span>}
          </MenuItem>
        </Select>
      </FormControl>
    </>
  )
}
export default ButtonTraduction
