import { Box, Grid, Link } from '@mui/material'
import { GridStyled, BoxStyled, ImgDeveloper } from 'pages/Home/Home.style'
import ImgMeriam from 'assets/images/img_developer.png'
import TextDescriptionDeveloper from 'features/TextDescriptionDeveloper/TextDescriptionDeveloper'
import MySocialIcons from 'features/MySocialIcons/MySocialIcons'

function Home() {
  return (
    <BoxStyled sx={{ display: 'flex' }}>
      <GridStyled container spacing={2} margin={'2rem 1rem'}>
        <Grid item xs={12} md={4} lg={5}>
          <TextDescriptionDeveloper />
        </Grid>
        <GridStyled item xs={12} md={8} lg={7} isCenter={true}>
          <ImgDeveloper src={ImgMeriam} />
          <MySocialIcons />
        </GridStyled>
      </GridStyled>
    </BoxStyled>
  )
}
export default Home
