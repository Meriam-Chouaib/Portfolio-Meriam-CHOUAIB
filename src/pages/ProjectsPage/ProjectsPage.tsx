import CustomItem from 'components/CustomItem/CustomItem'
import { projectItems } from 'pages/ProjectsPage/ProjectsPage.constants'
import { ProjectsBox } from 'pages/ProjectsPage/ProjectsPage.tyle'

const ProjectsPage = () => {
  return (
    <>
      <ProjectsBox>
        {projectItems.map((item, index) => (
          <CustomItem
            description={item.description}
            img={item.img}
            title={item.title}
          />
        ))}
      </ProjectsBox>
    </>
  )
}

export default ProjectsPage
