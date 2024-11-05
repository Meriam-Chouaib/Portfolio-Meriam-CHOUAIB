import CustomItem from 'components/CustomItem/CustomItem'
import { projectItems } from 'pages/ProjectsPage/ProjectsPage.constants'
import { ProjectsBox } from 'pages/ProjectsPage/ProjectsPage.tyle'

const ProjectsPage = () => {
  return (
    <>
      <ProjectsBox id='projectsId'>
        {projectItems.map((item, index) => (
          <CustomItem
            description={item.description}
            imgs={item.imgs}
            title={item.title}
            video={item.video}
          />
        ))}
      </ProjectsBox>
    </>
  )
}

export default ProjectsPage
