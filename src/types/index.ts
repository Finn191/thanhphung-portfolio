export interface ProjectMedia {
    type: 'image' | 'video'
    src: string
    caption?: string
}

export interface Project {
    id: string
    title: string
    year: number
    role: string
    shortDescription: string
    fullDescription: string
    thumbnail: string
    teamSize: number
    duration: string
    tools: string[]
    media: ProjectMedia[]
    links?: { label: string; href: string }[]
    tags: string[]
    platform?: string
}