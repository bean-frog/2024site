import './index.css'


function ProjectCard({title, ghlink, otherlink, olclass, description}) {
    return (
        <div className="flex w-full flex-col items-center p-2 rounded-md border-[1px] border-full border-glass-border bg-glass-medium/50">
            <h1 className='font-bold'>{ title }</h1>
            <span className='flex flex-row'>
            <a href={ ghlink }><i className='fab fa-github'></i></a>
            <a href={ otherlink }><i className={olclass}></i></a>
           </span>
            <p>{ description }</p>
        </div>
    )
}

function Projects() {
   return (
        <div className="flex flex-col justify-center items-center p-6 bg-gradient-to-tr rounded-md border-2 backdrop-blur-sm border-full border-glass-border from-glass-dark/40 via-glass-reflective/50 to-glass-dark/40">
            <h1 className="text-xl font-bold">Projects</h1>
            <div className="grid grid-cols-3 gap-2">
                <ProjectCard title="Tuneguessr" ghlink="https://github.com" description="game where you music and stuff"/>
                <ProjectCard title="Tuneguessr" ghlink="https://github.com" description="game where you music and stuff"/>
                <ProjectCard title="Tuneguessr" ghlink="https://github.com" description="game where you music and stuff"/>
                <ProjectCard title="Tuneguessr" ghlink="https://github.com" description="game where you music and stuff"/>
                <ProjectCard title="Tuneguessr" ghlink="https://github.com" description="game where you music and stuff"/>
            </div>
        </div>
    )
}

export default Projects;