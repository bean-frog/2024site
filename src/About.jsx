import './index.css'

function About() {
    return (
        <div className="flex flex-col justify-center items-center p-6 bg-gradient-to-tr rounded-md border-2 backdrop-blur-sm border-full border-glass-border from-glass-dark/30 via-glass-reflective/40 to-glass-dark/30">
            <h1 className="text-xl font-bold">About Me</h1>
            <h1 className="text-lg">Hello World! I'm a Junior in high school who loves programming, dogs, and playing games. In 6th grade, I was forced to take a computer class where I learned HTML and Scratch, which is what initially sparked my interest in computers. Ever since, I've been expanding my knowledge of frontend development with JS, Tailwind, React, and more. I've played around with native development using Electron, though I've since switched to Tauri. I've also been learning electronics via the Arduino microcontroller platform. I have two Golden Retrievers, and when I'm not working or programming I enjoy playing Half-Life 2, Deadshot.io, and Valorant.</h1>
        </div>
    )
}

export default About;