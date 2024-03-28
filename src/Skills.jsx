import './index.css'

function SkillCard({text, icon, color}) {
   return (
    <div className={"flex flex-row items-center p-2 m-2 rounded-md border-[1px] border-full border-glass-border " + color}>
        <img src={"https://skillicons.dev/icons?i=" + icon} className="mr-2 w-6 h-6" />
        <h2 className="font-bold text-black">{text}</h2>
    </div>
);

}

function Skills() {
     return (
        <div className="border-2 border-full border-glass-border bg-gradient-to-tr from-glass-dark/30 via-glass-reflective/40 to-glass-dark/30 rounded-md p-6 flex flex-col items-center justify-center backdrop-blur-sm">
            <h1 className="text-xl font-bold">Skills</h1>
            <h1 className="text-lg">Here are some of the skills I've obtained, sorted by color matching my confidence with each.</h1>
            <div className="flex flex-wrap max-w-6xl">
                <SkillCard text="Javascript" icon="js" color="bg-emerald-500/50"/>
                <SkillCard text="HTML" icon="html" color="bg-emerald-500/50"/>
                <SkillCard text="CSS" icon="css" color="bg-emerald-500/50"/>
                <SkillCard text="Arduino" icon="arduino" color="bg-emerald-500/50"/>
                <SkillCard text="Tailwind CSS" icon="tailwind" color="bg-emerald-500/50"/>
                <SkillCard text="Node JS" icon="nodejs" color="bg-emerald-500/50"/>
            </div>
            <div className="flex flex-wrap max-w-6xl">
                 <SkillCard text="Express" icon="express" color="bg-yellow-500/50"/>
                 <SkillCard text="jQuery/jQueryUI" icon="jquery" color="bg-yellow-500/50"/>
                 <SkillCard text="React" icon="react" color="bg-yellow-500/50"/>
                 <SkillCard text="Firebase" icon="firebase" color="bg-yellow-500/50"/>
                 <SkillCard text="Electron" icon="electron" color="bg-yellow-500/50"/>
            </div>
            <div className="flex flex-wrap max-w-6xl">
                <SkillCard text="Rust" icon="rust" color="bg-orange-500/50"/>
                <SkillCard text="Vue" icon="vue" color="bg-orange-500/50"/>
                <SkillCard text="Vercel" icon="vercel" color="bg-orange-500/50"/>
                <SkillCard text="Tauri" icon="tauri" color="bg-orange-500/50"/>
            </div>
            <div className="flex flex-wrap max-w-6xl">
                <SkillCard text="Docker" icon="docker" color="bg-red-500/50"/>
                <SkillCard text="MongoDB" icon="mongodb" color="bg-red-500/50"/>
                <SkillCard text="Ruby" icon="ruby" color="bg-red-500/50"/>
            </div>
        </div>
    )
}

export default Skills;