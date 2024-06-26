import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { TraductionForm } from 'layouts/Header/Header.style'
import { switchLanguage } from 'utils/service/translation.service'

function ButtonTraduction() {
  return (
    <>
      <TraductionForm>
        <Select
          labelId='demo-simple-select-standard-label'
          id='demo-simple-select-standard'
          onChange={(event: SelectChangeEvent) => {
            switchLanguage(event.target.value)
            console.log(
              '🚀 ~ ButtonTraduction ~ event.target.value:',
              event.target.value
            )
          }}
          sx={{ height: '2rem' }}
          defaultValue={'en'}
        >
          <MenuItem value={'en'}>{<span>En</span>}</MenuItem>
          <MenuItem value={'fr'}>{<span>Fr</span>}</MenuItem>
        </Select>
      </TraductionForm>
    </>
  )
}
export default ButtonTraduction
