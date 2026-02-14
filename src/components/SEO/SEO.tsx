import { Helmet } from 'react-helmet-async'
import { useTheme } from '@mui/material/styles'

interface SEOProps {
    title?: string
    description?: string
    keywords?: string
    name?: string
    type?: string
    image?: string
    url?: string
}

export default function SEO({
    title = 'Portfolio Meriam',
    description = 'Professional portfolio of Meriam Chouaib, showcasing projects and skills in web development.',
    keywords = 'Meriam Chouaib, Portfolio, Web Developer, React, Frontend Developer',
    name = 'Meriam Chouaib',
    type = 'website',
    image = '/logo192.png',
    url = 'https://cheery-croquembouche-4cfcd2.netlify.app/',
}: SEOProps) {
    const theme = useTheme()

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
            <meta name='author' content={name} />
            <meta name='theme-color' content={theme.palette.background.default} />

            {/* Facebook tags */}
            <meta property='og:type' content={type} />
            <meta property='og:title' content={title} />
            <meta property='og:description' content={description} />
            <meta property='og:image' content={image} />
            <meta property='og:url' content={url} />

            {/* Twitter tags */}
            <meta name='twitter:creator' content={name} />
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:title' content={title} />
            <meta name='twitter:description' content={description} />
            <meta name='twitter:image' content={image} />
        </Helmet>
    )
}
