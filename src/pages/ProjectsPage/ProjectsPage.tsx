import { Box, Typography } from '@mui/material'
import CustomItem from 'components/CustomItem/CustomItem'
import { projectItems } from 'pages/ProjectsPage/ProjectsPage.constants'
import {
  BoxGlobal,
  ProjectsBox,
  TextSeparator,
} from 'pages/ProjectsPage/ProjectsPage.style'

const ProjectsPage = () => {
  return (
    <BoxGlobal id='projectsId'>
      <TextSeparator>... Latest works ...</TextSeparator>

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
