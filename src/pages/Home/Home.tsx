import { Box, Grid, Container } from '@mui/material'
import {
  GridStyled,
  BoxStyled,
  ImgDeveloper,
  BoxGlobal,
  AccentGlow,
  ImageContainer,
  GradientBackground,
  DecorativeBorder,
} from 'pages/Home/Home.style'
import ImgMeriam from 'assets/images/miri.jpeg'
import TextDescriptionDeveloper from 'features/TextDescriptionDeveloper/TextDescriptionDeveloper'
import MySocialIcons from 'features/MySocialIcons/MySocialIcons'
import ProjectsPage from 'pages/ProjectsPage/ProjectsPage'
import Contact from 'features/Contact/Contact'
import Skills from 'features/Skills/Skills'
import Experience from 'features/Experience/Experience'

function Home() {
  return (
    <BoxGlobal>
      <Container maxWidth="xl">
        {/* Hero Section */}
        <BoxStyled sx={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
          <GridStyled container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <TextDescriptionDeveloper />
              <Box sx={{ mt: 4 }}>
                <MySocialIcons />
              </Box>
            </Grid>

            <GridStyled item xs={12} md={6} isCenter={false}>
              <ImageContainer>
                <GradientBackground />
                <DecorativeBorder />

                <ImgDeveloper
                  src={ImgMeriam}
                  alt="Meriam - Developer"
                  style={{ position: 'relative', zIndex: 2 }}
                />

                <AccentGlow />
              </ImageContainer>
            </GridStyled>
          </GridStyled>
        </BoxStyled>

        {/* Skills Section */}
        <Skills />

        {/* Experience Section */}
        <Experience />

        {/* Projects Section */}
        <ProjectsPage />

        {/* Contact Section */}
        <Contact />
      </Container>
    </BoxGlobal>
  )
}
export default Home
