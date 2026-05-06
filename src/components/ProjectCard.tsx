import type { Project } from '../types'

interface ProjectCardProps {
    project: Project
    onOpen: (project: Project) => void
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
    return (
        <article
            className="cursor-pointer bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#000] transition-all duration-200"
            onClick={() => onOpen(project)}
        >
            {/* Thumbnail */}
            <div className="relative overflow-hidden aspect-square border-b-4 border-black">
                <img
                    src={project.thumbnail}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Meta badges */}
            <div className="flex items-center gap-2 px-5 pt-4 flex-wrap">
                <span className="flex items-center gap-1.5 bg-[#C4B5FD] border-2 border-black px-3 py-1 text-base font-black uppercase">
                    <svg width="11" height="11" viewBox="0 0 640 512" fill="currentColor">
                        <path d="M144 160A80 80 0 1 0 144 0a80 80 0 1 0 0 160zm368 0A80 80 0 1 0 512 0a80 80 0 1 0 0 160zM0 298.7C0 310.4 9.6 320 21.3 320H234.7c.2 0 .4 0 .7 0c-26.6-23.5-43.3-57.8-43.3-96c0-7.6 .7-15 1.9-22.3c-13.6-6.3-28.7-9.7-44.6-9.7H117.3C52.5 192 0 244.5 0 309.3v-10.7zm640 10.7C640 244.5 587.5 192 522.7 192H496c-15.9 0-31 3.5-44.6 9.7c1.3 7.2 1.9 14.7 1.9 22.3c0 38.2-16.8 72.5-43.3 96c.2 0 .4 0 .7 0H618.7c11.8 0 21.3-9.6 21.3-21.3v10.7zM320 224a96 96 0 1 1 0 192A96 96 0 1 1 320 224zM144 512H496c17.7 0 32-14.3 32-32v-8c0-61.9-50.1-112-112-112H224c-61.9 0-112 50.1-112 112v8c0 17.7 14.3 32 32 32z" />
                    </svg>
                    {project.teamSize}
                </span>
                <span className="flex items-center gap-1.5 bg-[#FFD93D] border-2 border-black px-3 py-1 text-base font-black uppercase">
                    <svg width="11" height="11" viewBox="0 0 512 512" fill="currentColor">
                        <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.5 33.3-6.5s4.5-25.9-6.5-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                    </svg>
                    {project.duration}
                </span>
                <span className="flex items-center gap-1.5 bg-white border-2 border-black px-3 py-1 text-base font-black uppercase">
                    <svg width="11" height="11" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M1 0L0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-3.14 3.142L10 4l-.364-2.757L12.777.102a3 3 0 0 0-3.675 3.68L6.457 6.46 4.793 4.795a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0z" />
                    </svg>
                    {project.tools[0]}
                </span>
                {project.platform && (
                    <span className="flex items-center gap-1.5 bg-[#FF9B6A] border-2 border-black px-3 py-1 text-base font-black uppercase">
                        <svg width="11" height="11" viewBox="0 0 576 512" fill="currentColor">
                            <path d="M420.55,301.93a24,24,0,1,0,24.21,24,24.09,24.09,0,0,0-24.21-24M204.86,291.4c7,0,13-4.29,14.71-11.36a15.22,15.22,0,0,0-14.71-18.3c-7.93,0-14.71,6.12-14.71,14.83,0,8.31,6.16,14.83,14.71,14.83m167-11.36c1.69,7.07,7.71,11.36,14.71,11.36,8.55,0,14.71-6.52,14.71-14.83,0-8.71-6.78-14.83-14.71-14.83a15.22,15.22,0,0,0-14.71,18.3M576,263.91c0,42.9-26,78.26-60.06,78.26a61.21,61.21,0,0,1-22.14-4.21L467.47,384H432l8.33-32.07c-15.31-11.52-25.66-29.49-28.75-50.3a86.49,86.49,0,0,1-1.06-13.72c0-50.51,36.74-91.49,82.06-91.49S576,237.4,576,263.91ZM155.45,301.93a24,24,0,1,0,24.21,24,24.09,24.09,0,0,0-24.21-24M0,263.91C0,237.4,36.74,196.42,82.06,196.42s82.06,41,82.06,91.49a86.49,86.49,0,0,1-1.06,13.72c-3.09,20.81-13.44,38.78-28.75,50.3L142.64,384H107.17L80.77,338c-7.38,2.73-15.2,4.21-23.35,4.21C23.43,342.17,0,306.81,0,263.91ZM288,0C128.94,0,0,114.62,0,256c0,45.52,13.31,88.18,36.55,124.86C26.51,394.73,19.53,412.54,16,432c40.54-9.58,76.76-30.47,96.85-54.73C155.68,400.59,219.61,416,288,416s132.32-15.41,175.15-38.73C483.24,401.53,519.46,422.42,560,432c-3.53-19.46-10.51-37.27-20.55-51.14C562.69,344.18,576,301.52,576,256,576,114.62,447.06,0,288,0Z" />
                        </svg>
                        {project.platform}
                    </span>
                )}
            </div>

            {/* Title row */}
            <div className="flex items-center justify-between px-5 mt-3">
                <h3 className="font-black text-xl uppercase tracking-tight text-[#FF6B6B]">
                    {project.title}
                </h3>
                <span className="font-black text-black text-xl leading-none">→</span>
            </div>

            {/* Role */}
            <p className="text-black/50 text-sm font-bold px-5 mt-1 uppercase tracking-widest">{project.role}</p>

            {/* Description */}
            <p className="text-black text-lg leading-relaxed px-5 pt-2 pb-6 font-bold mb-1">
                {project.shortDescription}
            </p>
        </article>
    )
}
