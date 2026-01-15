import { Box, Grid, Container } from '@mui/material'
import {
  GridStyled,
  BoxStyled,
  ImgDeveloper,
  BoxGlobal,
} from 'pages/Home/Home.style'
import ImgMeriam from 'assets/images/img_developer.png'
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
            <GridStyled item xs={12} md={6} isCenter={true} sx={{ position: 'relative' }}>
              <Box
                sx={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  bgcolor: 'secondary.main', // Use secondary (Teal) for glow contrast
                  opacity: 0.15,
                  borderRadius: '50%',
                  filter: 'blur(90px)',
                  zIndex: 0
                }}
              />
              <ImgDeveloper src={ImgMeriam} style={{ position: 'relative', zIndex: 1, maxWidth: '80%' }} />
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
