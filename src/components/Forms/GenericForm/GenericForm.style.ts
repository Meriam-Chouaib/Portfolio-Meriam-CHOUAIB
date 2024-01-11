import { Stack, styled } from '@mui/material'
import { GlobalVariables } from 'config/constant'

export const RootStyle = styled('form')({
  paddingBottom: 16,
})

type InputsStyleProps = {
  full: string
}

export const InputsStyle = styled(Stack)(({ full }: InputsStyleProps) => ({
  maxWidth: full === GlobalVariables.TRUE ? 440 : 660,
}))
