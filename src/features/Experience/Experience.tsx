import { Box, Typography, Paper } from '@mui/material'
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent,
} from '@mui/lab'
import WorkIcon from '@mui/icons-material/Work'
import { useTranslation } from 'react-i18next'

const Experience = () => {
    const { t } = useTranslation()

    const experiences = [
        {
            role: 'experience.role1',
            company: 'experience.role1_company',
            date: 'experience.role1_date',
            desc: 'experience.role1_desc',
        },
        {
            role: 'experience.role2',
            company: 'experience.role2_company',
            date: 'experience.role2_date',
            desc: 'experience.role2_desc',
        },
        {
            role: 'experience.role3',
            company: 'experience.role3_company',
            date: 'experience.role3_date',
            desc: 'experience.role3_desc',
        },
    ]

    return (
        <Box id="experience" sx={{ py: 8 }}>
            <Typography variant="h2" align="center" gutterBottom sx={{ mb: 6, fontWeight: 'bold', color: 'text.primary' }}>
                {t('experience.title')}
            </Typography>

            <Timeline position="alternate">
                {experiences.map((exp, index) => (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                                {t(exp.date)}
                            </Typography>
                        </TimelineOppositeContent>

                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary" variant="outlined">
                                <WorkIcon fontSize="small" />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>

                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Paper elevation={3} sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
                                <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
                                    {t(exp.role)}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary">
                                    {t(exp.company)}
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 1, lineHeight: 1.6 }}>
                                    {t(exp.desc)}
                                </Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </Box>
    )
}

export default Experience
