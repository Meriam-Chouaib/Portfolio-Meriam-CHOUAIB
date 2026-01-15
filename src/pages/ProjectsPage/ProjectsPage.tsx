import { Box, Typography } from '@mui/material'
import CustomItem from 'components/CustomItem/CustomItem'
import { useTranslation } from 'react-i18next'
import { projectItems } from 'pages/ProjectsPage/ProjectsPage.constants'
import {
  BoxGlobal,
  ProjectsBox,
  TextSeparator,
} from 'pages/ProjectsPage/ProjectsPage.style'

const ProjectsPage = () => {
  const { t } = useTranslation() // Ensure useTranslation is imported
  return (
    <BoxGlobal id='projects' sx={{ py: 8 }}>
      <Typography variant="h2" align="center" gutterBottom sx={{ mb: 6, fontWeight: 'bold' }} color='primary'  >
        {t('projects.section_title')}
      </Typography>

      <ProjectsBox>
        {projectItems.map((item, index) => (
          <CustomItem
            description={item.description}
            imgs={item.imgs}
            title={item.title}
            video={item.video}
          />
        ))}
      </ProjectsBox>
    </BoxGlobal>
  )
}

export default ProjectsPage
