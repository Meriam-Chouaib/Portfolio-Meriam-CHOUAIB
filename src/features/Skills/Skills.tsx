import { Box, Typography, Chip, Grid, Paper } from '@mui/material'
import { skillsData } from './Skills.constants'
import { useTranslation } from 'react-i18next'

const Skills = () => {
    const { t } = useTranslation()

    return (
        <Box id="skills" sx={{ py: 8 }}>
            <Typography variant="h2" align="center" gutterBottom sx={{ mb: 6, fontWeight: 'bold' }} color={'secondary'}>
                {t('skills.title')}
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {skillsData.map((category) => (
                    <Grid item xs={12} md={4} key={category.category}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: 3,
                                height: '100%',
                                bgcolor: 'background.paper',
                                borderRadius: 2,
                                border: '1px solid',
                                borderColor: 'divider',
                                transition: 'transform 0.2s',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    borderColor: 'primary.main'
                                }
                            }}
                        >
                            <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', mb: 3, fontWeight: 600 }}>
                                {t(category.category)}
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                {category.items.map((skill) => (
                                    <Chip
                                        key={skill}
                                        label={skill}
                                        variant="outlined"
                                        sx={{
                                            fontWeight: 500,
                                        }}
                                    />
                                ))}
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Skills
