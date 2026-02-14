
// import { Box, Typography, Paper, Chip, Stack, List, ListItem, ListItemIcon, ListItemText, useMediaQuery, useTheme, Container } from '@mui/material'
// import {
//     Timeline,
//     TimelineItem,
//     TimelineSeparator,
//     TimelineConnector,
//     TimelineDot,
//     TimelineContent,
//     TimelineOppositeContent,
// } from '@mui/lab'
// import { timelineItemClasses } from '@mui/lab/TimelineItem'
// import WorkIcon from '@mui/icons-material/Work'
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
// import { useTranslation } from 'react-i18next'

// const Experience = () => {
//     const { t } = useTranslation()
//     const theme = useTheme()
//     const isMobile = useMediaQuery(theme.breakpoints.down('md'))

//     const getDescPoints = (key: any) => {
//         const fullDesc = t(key);
//         return fullDesc.split('•').filter(p => p.trim() !== '');
//     }

//     const experiences = [
//         {
//             role: 'experience.role1',
//             company: 'experience.role1_company',
//             date: 'experience.role1_date',
//             descKey: 'experience.role1_desc',
//             tech: ['NestJS', 'React', 'TypeScript', 'MongoDB', 'Socket.io']
//         },
//         {
//             role: 'experience.role2',
//             company: 'experience.role2_company',
//             date: 'experience.role2_date',
//             descKey: 'experience.role2_desc',
//             tech: ['Next.js', 'Express', 'MySQL', 'Prisma', 'Redux', 'MUI']
//         },
//         {
//             role: 'experience.role3',
//             company: 'experience.role3_company',
//             date: 'experience.role3_date',
//             descKey: 'experience.role3_desc',
//             tech: ['Génie Logiciel', 'Architecture', 'Leadership']
//         },
//     ]

//     return (
//         <Box id="experience" sx={{ py: isMobile ? 4 : 8, backgroundColor: 'rgba(0,0,0,0.02)', overflow: 'hidden' }}>
//             <Container maxWidth="lg">
//                 <Typography
//                     variant={isMobile ? "h4" : "h2"}
//                     align="center"
//                     gutterBottom
//                     sx={{ mb: isMobile ? 6 : 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2 }}
//                     color={'secondary'}
//                 >
//                     {t('experience.title')}
//                 </Typography>

//                 <Timeline
//                     position={isMobile ? "right" : "alternate"}
//                     sx={{
//                         p: 0,
//                         [`& .${timelineItemClasses.root}:before`]: {
//                             // Supprime le décalage automatique de MUI qui casse l'alignement
//                             flex: isMobile ? 0 : 1,
//                             padding: 0,
//                         },
//                     }}
//                 >
//                     {experiences.map((exp, index) => (
//                         <TimelineItem key={index}>

//                             {/* Côté Date (Desktop) */}
//                             {!isMobile && (
//                                 <TimelineOppositeContent
//                                     sx={{
//                                         m: 'auto 0',
//                                         fontWeight: 800,
//                                         color: 'secondary.main',
//                                         fontSize: '1rem',
//                                         px: 4
//                                     }}
//                                 >
//                                     {t(exp.date)}
//                                 </TimelineOppositeContent>
//                             )}

//                             {/* La ligne centrale et l'icône */}
//                             <TimelineSeparator>
//                                 <TimelineConnector sx={{ bgcolor: 'primary.light', opacity: 0.2 }} />
//                                 <TimelineDot
//                                     color="secondary"
//                                     variant="filled" // "filled" est souvent plus stable visuellement pour l'alignement
//                                     sx={{
//                                         m: 2,
//                                         boxShadow: '0 0 0 4px rgba(25, 118, 210, 0.1)',
//                                     }}
//                                 >
//                                     <WorkIcon sx={{ fontSize: 18 }} />
//                                 </TimelineDot>
//                                 <TimelineConnector sx={{ bgcolor: 'primary.main', opacity: 0.2 }} />
//                             </TimelineSeparator>

//                             {/* Côté Carte */}
//                             <TimelineContent sx={{ py: '24px', px: isMobile ? 2 : 4 }}>
//                                 <Paper
//                                     elevation={0}
//                                     sx={{
//                                         p: 3,
//                                         borderRadius: 4,
//                                         border: '1px solid rgba(0,0,0,0.08)',
//                                         background: '#fff',
//                                         position: 'relative',
//                                         transition: 'transform 0.2s ease-in-out',
//                                         '&:hover': {
//                                             transform: 'scale(1.02)',
//                                             boxShadow: '0 10px 40px rgba(0,0,0,0.05)'
//                                         }
//                                     }}
//                                 >
//                                     {isMobile && (
//                                         <Typography variant="overline" sx={{ fontWeight: 800, color: 'primary.main', display: 'block' }}>
//                                             {t(exp.date)}
//                                         </Typography>
//                                     )}

//                                     <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.5 }}>
//                                         {t(exp.role)}
//                                     </Typography>

//                                     <Typography variant="subtitle2" sx={{ color: 'primary.main', fontWeight: 700, mb: 2 }}>
//                                         {t(exp.company)}
//                                     </Typography>

//                                     <List sx={{ p: 0, mb: 2 }}>
//                                         {getDescPoints(exp.descKey).map((point, i) => (
//                                             <ListItem key={i} sx={{ alignItems: 'flex-start', px: 0, py: 0.5 }}>
//                                                 <ListItemIcon sx={{ minWidth: 20, mt: 0.8 }}>
//                                                     <ArrowForwardIosIcon sx={{ fontSize: 9, color: 'primary.main' }} />
//                                                 </ListItemIcon>
//                                                 <ListItemText
//                                                     primary={point.trim()}
//                                                     primaryTypographyProps={{
//                                                         variant: 'body2',
//                                                         color: 'text.secondary',
//                                                         lineHeight: 1.6
//                                                     }}
//                                                 />
//                                             </ListItem>
//                                         ))}
//                                     </List>

//                                     <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
//                                         {exp?.tech.map((skill) => (
//                                             <Chip
//                                                 key={skill}
//                                                 label={skill}
//                                                 size="small"
//                                                 sx={{
//                                                     fontSize: '0.7rem',
//                                                     fontWeight: 700,
//                                                     borderRadius: '6px',
//                                                     bgcolor: 'rgba(25, 118, 210, 0.05)',
//                                                     color: 'primary.main'
//                                                 }}
//                                             />
//                                         ))}
//                                     </Stack>
//                                 </Paper>
//                             </TimelineContent>
//                         </TimelineItem>
//                     ))}
//                 </Timeline>
//             </Container>
//         </Box>
//     )
// }

// export default Experience;

import {
    Box,
    Typography,
    Paper,
    Chip,
    Stack,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    useMediaQuery,
    useTheme,
    Container
} from '@mui/material'
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineDot,
    TimelineContent,
    TimelineOppositeContent,
} from '@mui/lab'
import { timelineItemClasses } from '@mui/lab/TimelineItem'
import WorkIcon from '@mui/icons-material/Work'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useTranslation } from 'react-i18next'

const Experience = () => {
    const { t } = useTranslation()
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    const getDescPoints = (key: any) => {
        const fullDesc = t(key);
        return fullDesc.split('•').filter(p => p.trim() !== '');
    }

    const experiences = [
        {
            role: 'experience.role1',
            company: 'experience.role1_company',
            date: 'experience.role1_date',
            descKey: 'experience.role1_desc',
            tech: ['NestJS', 'React', 'TypeScript', 'MongoDB', 'Socket.io']
        },
        {
            role: 'experience.role2',
            company: 'experience.role2_company',
            date: 'experience.role2_date',
            descKey: 'experience.role2_desc',
            tech: ['Next.js', 'Express', 'MySQL', 'Prisma', 'Redux', 'MUI']
        },
        {
            role: 'experience.role3',
            company: 'experience.role3_company',
            date: 'experience.role3_date',
            descKey: 'experience.role3_desc',
            tech: ['Génie Logiciel', 'Architecture', 'Leadership']
        },
    ]

    return (
        <Box id="experience" sx={{ py: isMobile ? 4 : 8, backgroundColor: 'rgba(0,0,0,0.02)', overflow: 'hidden' }}>
            <Container maxWidth="lg">
                <Typography
                    variant={isMobile ? "h4" : "h2"}
                    align="center"
                    gutterBottom
                    sx={{
                        mb: isMobile ? 6 : 10,
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: 2,
                        color: 'secondary.main'
                    }}
                >
                    {t('experience.title')}
                </Typography>

                <Timeline
                    position={isMobile ? "right" : "alternate"}
                    sx={{
                        p: 0,
                        [`& .${timelineItemClasses.root}:before`]: {
                            flex: isMobile ? 0 : 1,
                            padding: 0,
                        },
                    }}
                >
                    {experiences.map((exp, index) => (
                        <TimelineItem key={index}>

                            {/* Côté Date (Desktop) */}
                            {!isMobile && (
                                <TimelineOppositeContent
                                    sx={{
                                        m: 'auto 0',
                                        fontWeight: 800,
                                        color: 'secondary.main',
                                        fontSize: '1rem',
                                        px: 4
                                    }}
                                >
                                    {t(exp.date)}
                                </TimelineOppositeContent>
                            )}

                            {/* La ligne centrale et l'icône */}
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'primary.light', opacity: 0.2 }} />
                                <TimelineDot
                                    color="secondary"
                                    variant="filled" // "filled" est souvent plus stable visuellement pour l'alignement
                                    sx={{
                                        m: 2,
                                        boxShadow: '0 0 0 4px rgba(25, 118, 210, 0.1)',
                                    }}
                                >
                                    <WorkIcon sx={{ fontSize: 18 }} />
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'primary.main', opacity: 0.2 }} />
                            </TimelineSeparator>

                            {/* Côté Carte */}
                            <TimelineContent sx={{ py: '24px', px: isMobile ? 2 : 4 }}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 3,
                                        borderRadius: 4,
                                        border: '1px solid rgba(17, 8, 53, 0.08)',
                                        background: '#fff',
                                        position: 'relative',
                                        transition: 'transform 0.2s ease-in-out',
                                        '&:hover': {
                                            transform: 'scale(1.02)',
                                            boxShadow: '0 10px 40px rgba(17, 8, 53, 0.05)'
                                        }
                                    }}
                                >
                                    {isMobile && (
                                        <Typography variant="overline" sx={{ fontWeight: 800, color: '#110835', display: 'block' }}>
                                            {t(exp.date)}
                                        </Typography>
                                    )}

                                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.5, color: '#110835' }}>
                                        {t(exp.role)}
                                    </Typography>

                                    <Typography variant="subtitle2" sx={{ color: '#110835', opacity: 0.8, fontWeight: 700, mb: 2 }}>
                                        {t(exp.company)}
                                    </Typography>

                                    <List sx={{ p: 0, mb: 2 }}>
                                        {getDescPoints(exp.descKey).map((point, i) => (
                                            <ListItem key={i} sx={{ alignItems: 'flex-start', px: 0, py: 0.5 }}>
                                                <ListItemIcon sx={{ minWidth: 20, mt: 0.8 }}>
                                                    <ArrowForwardIosIcon sx={{ fontSize: 9, color: '#110835' }} />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={point.trim()}
                                                    primaryTypographyProps={{
                                                        variant: 'body2',
                                                        color: '#110835', // Couleur des points de description
                                                        lineHeight: 1.6,
                                                        fontWeight: 500
                                                    }}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>

                                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                        {exp?.tech.map((skill) => (
                                            <Chip
                                                key={skill}
                                                label={skill}
                                                size="small"
                                                sx={{
                                                    fontSize: '0.7rem',
                                                    fontWeight: 700,
                                                    borderRadius: '6px',
                                                    bgcolor: 'rgba(17, 8, 53, 0.05)', // Fond très léger en accord avec le texte
                                                    color: '#110835' // Texte des technologies
                                                }}
                                            />
                                        ))}
                                    </Stack>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Container>
        </Box>
    )
}

export default Experience;