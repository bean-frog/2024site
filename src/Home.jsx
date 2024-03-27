import './index.css'

function Home() {
    return (
        <div className="border-2 border-full border-glass-border bg-gradient-to-tr from-glass-dark/40 via-glass-reflective/50 to-glass-dark/40 rounded-md p-6 flex flex-col items-center justify-center">
            <h1 className="text-xl font-bold">Hello World!</h1>
            <h1 className="text-lg">Welcome to my personal site. Here you'll find some information about me, and some cool stuff I created or helped work on. You'll also find some nerdy Linux stuff under the Tech section, because why not.</h1>
        </div>
    )
}

export default Home;