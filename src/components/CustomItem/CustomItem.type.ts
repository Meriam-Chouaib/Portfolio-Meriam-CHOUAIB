export interface CustomItemProps {
  video?: string
  imgs?: string[] | string
  description: string
  title: string
  techStack?: string[]
  githubLink?: string
  externalVideoLink?: string
  onCardClick?: () => void
}
