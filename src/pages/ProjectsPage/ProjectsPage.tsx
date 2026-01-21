import {
  Box,
  Typography,
  Dialog,
  DialogContent,
  IconButton,
  Slide,
  Chip,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import GitHubIcon from '@mui/icons-material/GitHub'
import CustomItem from 'components/CustomItem/CustomItem'
import { useTranslation } from 'react-i18next'
import { projectItems } from 'pages/ProjectsPage/ProjectsPage.constants'
import {
  BoxGlobal,
  ProjectsBox,
} from 'pages/ProjectsPage/ProjectsPage.style'
import { useState, forwardRef, ReactElement, Ref } from 'react'
import { TransitionProps } from '@mui/material/transitions'
import { CustomItemProps } from 'components/CustomItem/CustomItem.type'

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProjectsPage = () => {
  const { t } = useTranslation()
  const [selectedProject, setSelectedProject] = useState<CustomItemProps | null>(null)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleProjectClick = (project: CustomItemProps) => {
    setSelectedProject(project)
  }

  const handleClose = () => {
    setSelectedProject(null)
  }

  return (
    <BoxGlobal id='projects' sx={{ py: 2 }}>
      <Typography variant="h2" align="center" gutterBottom sx={{ mb: 6, fontWeight: 'bold' }} color='primary'>
        {t('projects.section_title')}
      </Typography>

      <ProjectsBox>
        {projectItems.map((item, index) => (
          <CustomItem
            key={index}
            {...item}
            onCardClick={() => handleProjectClick(item)}
          />
        ))}
      </ProjectsBox>

      <Box sx={{ mt: 6, maxWidth: '800px', mx: 'auto', textAlign: 'center', px: 2 }}>
        <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', opacity: 0.8 }}>
          {t('projects.internal_projects_note')}
        </Typography>
      </Box>

      {/* Project Details Dialog */}
      <Dialog
        fullScreen={fullScreen}
        open={Boolean(selectedProject)}
        onClose={handleClose}
        TransitionComponent={Transition}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: fullScreen ? 0 : 4,
            background: theme.palette.background.paper,
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
            boxShadow: theme.shadows[24],
            overflow: 'hidden'
          }
        }}
      >
        {selectedProject && (
          <Box sx={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 16,
                top: 16,
                color: (theme) => theme.palette.grey[500],
                zIndex: 9,
                backgroundColor: 'rgba(0,0,0,0.3)',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.5)',
                }
              }}
            >
              <CloseIcon />
            </IconButton>

            <DialogContent sx={{ p: 0, display: 'flex', flexDirection: fullScreen ? 'column' : 'column' }}>
              {/* Media Section */}
              <Box sx={{
                width: '100%',
                height: fullScreen ? '30vh' : '400px',
                backgroundColor: '#000',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden'
              }}>
                {selectedProject.video ? (
                  <video
                    src={selectedProject.video}
                    controls
                    autoPlay
                    muted
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                ) : Array.isArray(selectedProject.imgs) ? (
                  <Box sx={{ display: 'flex', overflowX: 'auto', width: '100%', height: '100%' }}>
                    {selectedProject.imgs.map((img, i) => (
                      <img key={i} src={img} alt={`${selectedProject.title} ${i}`} style={{ height: '100%', flexShrink: 0 }} />
                    ))}
                  </Box>
                ) : (
                  <img
                    src={selectedProject.imgs}
                    alt={selectedProject.title}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                )}
              </Box>

              {/* Content Section */}
              <Box sx={{ p: 4, flex: 1, overflowY: 'auto' }}>
                <Typography variant="h3" component="div" sx={{ mb: 2, fontWeight: 'bold', color: theme.palette.primary.main }}>
                  {t(selectedProject.title)}
                </Typography>

                {selectedProject.techStack && (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                    {selectedProject.techStack.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        color="secondary"
                        variant="outlined"
                        size={fullScreen ? "small" : "medium"}
                      />
                    ))}
                  </Box>
                )}

                <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, fontSize: '1.1rem', color: theme.palette.text.secondary }}>
                  {t(selectedProject.description)}
                </Typography>

                {selectedProject.githubLink && (
                  <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                      variant="contained"
                      startIcon={<GitHubIcon />}
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="large"
                      sx={{ borderRadius: 2 }}
                    >
                      View Source Code
                    </Button>
                  </Box>
                )}
              </Box>
            </DialogContent>
          </Box>
        )}
      </Dialog>
    </BoxGlobal>
  )
}

export default ProjectsPage
