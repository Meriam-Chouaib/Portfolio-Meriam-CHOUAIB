import { RootStyle } from 'components/Cards/MainCard/MainCard.style'
import { MainCardProps } from 'components/Cards/MainCard/MainCard.type'
import ErrorComponent from 'components/Common/ErrorComponent/ErrorComponent'

function MainCard({ children, error }: MainCardProps) {
  return (
    <RootStyle sx={{ maxWidth: 1160 }}>
      {error ? <ErrorComponent error={error} /> : children}
    </RootStyle>
  )
}

export default MainCard
