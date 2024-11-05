import { Box, Grid } from '@mui/material'
import { GridStyled, BoxStyled, ImgDeveloper } from 'pages/Home/Home.style'
import ImgMeriam from 'assets/images/img_developer.png'
import TextDescriptionDeveloper from 'features/TextDescriptionDeveloper/TextDescriptionDeveloper'
import MySocialIcons from 'features/MySocialIcons/MySocialIcons'
import ProjectsPage from 'pages/ProjectsPage/ProjectsPage'

function Home() {
  return (
    <>
      <BoxStyled>
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
      <ProjectsPage />
      {/* TODO create the form contact */}
      <Box id='contactId'></Box>
    </>
  )
}
export default Home
