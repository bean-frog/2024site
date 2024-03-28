import './index.css'

function Tech() {
     return (
        <div className="lowtaperfade flex flex-col justify-center items-center p-6 bg-gradient-to-tr rounded-md border-2 backdrop-blur-sm border-full border-glass-border from-glass-dark/30 via-glass-reflective/40 to-glass-dark/30">
            <h1 className="text-xl font-bold">Tech Stuff</h1>
            <div className="flex flex-col justify-center p-4">
            <h1 className="font-bold text-2xl">On the System</h1>
                <ul>
                    <li>I use <strong><a target="_blank" className="underline" href="https://cachyos.org">CachyOS</a></strong>, and so should you.</li>
                    <li>For the desktop environment, I like both <strong><a target="_blank" className="underline" href="https://xfce.org/">XFCE</a></strong> and <strong><a target="_blank" className="underline" href="https://kde.org/plasma-desktop/">KDE Plasma</a></strong>.</li>
                    <li>My preferred shell is <strong><a target="_blank" className="underline" href="https://fishshell.com/">fish</a></strong>.</li>
                    <li>For editing text on the command line, I use <strong><a target="_blank" className="underline" href="https://github.com/zyedidia/micro">micro</a></strong>.</li>
                    <li>For writing code, I use both <strong><a target="_blank" className="underline" href="https://www.sublimetext.com/">Sublime Text</a></strong> and <strong><a target="_blank" className="underline" href="https://code.visualstudio.com/">VS Code</a></strong>.</li>
                    <li>I use <strong><a target="_blank" className="underline" href="https://obsidian.md/">Obsidian</a></strong> and <strong><a target="_blank" className="underline" href="https://app.diagrams.net"> drawio</a></strong> to organize my thoughts.</li>
                    <li>To browse the web, I use <strong><a target="_blank" className="underline" href="https://thorium.rocks">Thorium</a></strong> on my slower machine, and <strong><a target="_blank" className="underline" href="https://brave.com">Brave</a></strong> on the other.</li>
                    <li>I listen to music on <strong><a target="_blank" className="underline" href="https://spotube.krtirtho.dev">Spotube</a></strong>.</li>
                </ul>

                 <h1 className="font-bold text-2xl">In the IDE</h1>
                <ul>
                    <li>I prefer to style using <strong><a target="_blank" className="underline" href="https://tailwindcss.com">Tailwind</a></strong>.</li>
                    <li>When using React, I usually bootstrap with <strong><a target="_blank" className="underline" href="https://create-react-app.dev/">CRA</a></strong>, but sometimes I use <strong><a target="_blank" className="underline" href="https://nextjs.org/">Next</a></strong>.</li>
                    <li>For desktop apps, I use <strong><a target="_blank" className="underline" href="https://www.electronjs.org/">Electron</a></strong>, and I'm currently learning <strong><a target="_blank" className="underline" href="https://tauri.app/">Tauri</a></strong>.</li>                    
                </ul>
            </div>
        </div>
    )
}

export default Tech;