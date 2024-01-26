import { useTranslation } from 'react-i18next'
import { SWIPER_ITEMS } from 'pages/Home/Home.constants'

import { BoxStyled } from 'pages/Home/Home.style'
import { Box, Typography } from '@mui/material'
import BoxCenter from 'components/Common/BoxCenter/BoxCenter'
import CustomSwiper from 'components/CustomSwiper/CustomSwiper'

function Home() {
  const { t } = useTranslation()

  return (
    <BoxCenter>
      <BoxStyled margin={'2rem 0rem'}>
        <CustomSwiper SWIPER_ITEMS={SWIPER_ITEMS} />
        <Box>
          <Typography variant='h1'>{t('home.name')}</Typography>
        </Box>
      </BoxStyled>
    </BoxCenter>
  )
}

export default Home
