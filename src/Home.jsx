import './index.css'
function Home() {
    return (
        <div className="flex flex-col justify-center items-center p-6 bg-gradient-to-tr rounded-md border-2 backdrop-blur-sm border-full border-glass-border from-glass-dark/30 via-glass-reflective/40 to-glass-dark/30">
            <h1 className="text-xl font-bold">Hello World!</h1>
            <h1 className="text-lg">Welcome to my personal site. Here you'll find some information about me, and some cool stuff I created or helped work on. I have no idea what to put here, so take this cookie, I guess <span>🍪</span></h1>
        </div>
    )
}

export default Home;