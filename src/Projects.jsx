import './index.css'


function ProjectCard({title, link, description}) {
    return (
        <div className="flex flex-row items-center p-2 m-2 rounded-md border-[1px] border-full border-glass-border bg-glass-medium/50">

        </div>
    )
}

function Projects() {
   return (
        <div className="border-2 border-full border-glass-border bg-gradient-to-tr from-glass-dark/40 via-glass-reflective/50 to-glass-dark/40 rounded-md p-6 flex flex-col items-center justify-center">
            <h1 className="text-xl font-bold">Projects</h1>
            <div className="grid grid-cols-3">
            
            </div>
        </div>
    )
}

export default Projects;