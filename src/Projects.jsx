import './index.css'
import ProjectPage from './ProjectPage';

function ProjectCard({title, ghlink, otherlink, olclass, description, icons}) {
    return (
        <div className="flex w-full flex-col items-center p-2 rounded-md border-[1px] border-full border-glass-border bg-glass-medium/50">
        <span className="flex flex-row items-center space-x-2">
            <h1 className='font-bold'>{ title }</h1>
            <img class="h-5 w-fit" src={"https://skillicons.dev/icons?i=" + icons} ></img> 
        </span>
           
            <span className='flex flex-row space-x-2'>
            <a href={ ghlink }><i className='fab fa-github'></i></a>
            <a href={ otherlink }><i className={olclass}></i></a>
           </span>
            <p>{ description }</p>
        </div>
    )
}

function Projects() {
   return (
    
<>

<div className="flex flex-col justify-center items-center p-6 bg-gradient-to-tr rounded-md border-2 backdrop-blur-sm border-full border-glass-border from-glass-dark/30 via-glass-reflective/40 to-glass-dark/30">
<h1 className="text-xl font-bold">Coming soon :)</h1>
           {/* <h1 className="text-xl font-bold">Projects</h1>
            <div className="grid grid-cols-3 gap-2">
                <ProjectCard icons="html,tailwind,js" title="Tuneguessr" ghlink="https://github.com/bean-frog/tuneguessr" otherlink="https://beanfrog.xyz/tuneguessr" olclass="fas fa-globe" description="A game where you guess what country different songs are from."/>
                <ProjectCard icons="react,tailwind" title="Github Lookup" ghlink="https://github.com/bean-frog/github-lookup" otherlink="https://beanfrog.xyz/github-lookup" olclass="fas fa-globe" description="Simple React project to look up info about a Github user."/>
                <ProjectCard icons="react,tailwind" title="Stupid Trivia" ghlink="https://github.com/bean-frog/stupid-trivia" otherlink="https://beanfrog.xyz/stupid-trivia" olclass="fas fa-globe" description="A trivia game where most of the answers are stupid."/>
                <ProjectCard icons="electron,html,js,tailwind" title="Clock App" ghlink="https://github.com/bean-frog/clock-app" description="A simple clock app made with Electron."/>
                <ProjectCard icons="electron,html,tailwind,js" title="GooberFX" ghlink="https://github.com/bean-frog/GooberFX" description="Sound cue application built in Electron, for a school thing."/>
                <ProjectCard icons="js" title="Ligma.js" ghlink="https://github.com/bean-frog/ligma.js" description="Stupid and/or useless JS library"/>
            </div>
            */}
        </div>
        {/*<ProjectPage />*/}

</>



    
    )
}

export default Projects;