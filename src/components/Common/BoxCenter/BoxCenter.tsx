import { BoxCenterStyled } from 'components/Common/BoxCenter/BoxCenter.style'
import { BoxCenterProps } from 'components/Common/BoxCenter/BoxCenter.type'

function BoxCenter({ children }: BoxCenterProps) {
  return <BoxCenterStyled>{children}</BoxCenterStyled>
}

export default BoxCenter
