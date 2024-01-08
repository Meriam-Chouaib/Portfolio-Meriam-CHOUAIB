import { BoxCenterProps } from 'components/Common/BoxCenter/BoxCenter.type'
import { BoxCenterPageStyled } from 'components/Common/BoxCenterPage/BoxCenterPage.style'

function BoxCenterPage({ children }: BoxCenterProps) {
  return <BoxCenterPageStyled>{children}</BoxCenterPageStyled>
}

export default BoxCenterPage
