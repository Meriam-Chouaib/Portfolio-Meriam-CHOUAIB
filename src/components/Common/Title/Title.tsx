import { TitleStyled } from 'components/Common/Title/Title.style'
import { TitleProps } from 'components/Common/Title/Title.type'

function Title({ text, color, isCenter }: TitleProps) {
  return (
    <TitleStyled color={color} isCenter={isCenter}>
      {text}
    </TitleStyled>
  )
}

export default Title
