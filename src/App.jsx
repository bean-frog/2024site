import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import "./util.css";

function Contact() {
  return (
    <div className="flex flex-row justify-center items-center mt-2 space-x-4">
      <a
        href="https://github.com/bean-frog"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github text-2xl hover:scale-[1.05] active:scale-95"></i>
      </a>
      <a
        href="https://bsky.app/profile/beanfrog.bsky.social"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-bluesky text-2xl hover:scale-[1.05] active:scale-95"></i>
      </a>
      <a
        href="mailto:beanfrog@sug.ma"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-envelope text-2xl hover:scale-[1.05] active:scale-95"></i>
      </a>
    </div>
  );
}

function Nav() {
  return (
    <div className="flex flex-col w-full h-full encode-sans">
      <Link to="/" className="p-2 w-full transition-all duration-200 h-fit hover:transform hover:translate-x-2 hover:font-bold">Home</Link>
      <Link to="/about" className="p-2 w-full transition-all duration-200 h-fit hover:transform hover:translate-x-2 hover:font-bold">About</Link>
      {/*<Link to="/projects" className="p-2 w-full transition-all duration-200 h-fit hover:transform hover:translate-x-2 hover:font-bold">Projects</Link>*/}
      <Link to="/skills" className="p-2 w-full transition-all duration-200 h-fit hover:transform hover:translate-x-2 hover:font-bold">Skills</Link>
      <Link to="/tech" className="p-2 w-full transition-all duration-200 h-fit hover:transform hover:translate-x-2 hover:font-bold">Tech</Link>
    </div>
  );
}


function Home() {
  const [cookiesThisSession, setCookiesThisSession] = useState(0);
 // const [cookiesAllTime, setCookiesAllTime] = useState(parseInt(localStorage.getItem('cookiesAllTime')));
  const [gameVisible, setGameVisible] = useState(false);
/*
  useEffect(() => {
    const allTimeCookies = parseInt(localStorage.getItem('cookiesAllTime')) || 0;
    setCookiesAllTime(allTimeCookies);
  }, []);

  useEffect(() => {
    localStorage.setItem('cookiesAllTime', cookiesAllTime + cookiesThisSession);
  }, [cookiesThisSession, cookiesAllTime]);

  const handleClick = () => {
    setCookiesThisSession(cookiesThisSession + 1);
    setCookiesAllTime(cookiesAllTime + 1);
  };
*/
  return (
    <>
      {gameVisible ? (
        <div className="flex flex-col justify-between items-center w-full h-full">
          <div className="flex flex-col flex-grow justify-center items-center">
            <button 
             /*onClick={handleClick}  */
             onClick={() => {setCookiesThisSession(cookiesThisSession + 1)}}
              className="scale-[5] cursor-pointer active:scale-[4]"
            >
              🍪
            </button>
          </div>
          <h1 className="mb-2">Cookies: {cookiesThisSession}</h1>
          {/*<h1 className="mb-4">Cookies (All Time): {cookiesAllTime}</h1>*/}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center w-full h-full">
          <button 
            onClick={() => setGameVisible(true)} 
            className="mb-4 text-4xl animate-bounce cursor-pointer active:scale-95"
          >
            🍪
          </button>
          <span>Here, have a cookie.</span>
        </div>
      )}
    </>
  );
}

function About() {
  return (
    <div className="flex flex-col items-center pt-6 w-full h-full encode-sans">
    <h1 className="text-xl font-bold">About Me</h1>
    <p className="p-6 encode-sans">
      Hello World! I am a high school student who loves programming, dogs, and caffeine. I took my first computer related class in 6th grade, where I learned HTML and Scratch, and from there I was sold. Over the years, I've expanded my knowledge of web development, as well as microcontroller programming and hardware through Arduino. I have also begun learning Rust which I hope to make some cool projects with, and I picked up a basic understanding of C through Harvard's CS50x course.
    </p>
      </div>

  )
}

function Projects() {
  return (
    <div className="flex flex-col justify-center items-center p-6 encode-sans">
      <h1 className="text-xl font-bold">Projects</h1>
      <div className="grid grid-cols-2 gap-2 p-2 w-full lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
        <div className="flex flex-col items-start px-4 py-2 rounded-md border border-white border-solid h-fit bg-richblack">
          <h1 className="font-bold text-md">Tuneguessr</h1>
        </div>
        <div className="flex flex-col items-start px-6 py-4 rounded-md border border-white border-solid h-fit bg-richblack"></div>
        <div className="flex flex-col items-start px-6 py-4 rounded-md border border-white border-solid h-fit bg-richblack"></div>
        <div className="flex flex-col items-start px-6 py-4 rounded-md border border-white border-solid h-fit bg-richblack"></div>
        <div className="flex flex-col items-start px-6 py-4 rounded-md border border-white border-solid h-fit bg-richblack"></div>
        <div className="flex flex-col items-start px-6 py-4 rounded-md border border-white border-solid h-fit bg-richblack"></div>
        <div className="flex flex-col items-start px-6 py-4 rounded-md border border-white border-solid h-fit bg-richblack"></div>
        <div className="flex flex-col items-start px-6 py-4 rounded-md border border-white border-solid h-fit bg-richblack"></div>
        <div className="flex flex-col items-start px-6 py-4 rounded-md border border-white border-solid h-fit bg-richblack"></div>
        <div className="flex flex-col items-start px-6 py-4 rounded-md border border-white border-solid h-fit bg-richblack"></div>
      </div>
    </div>
  )
}

function Skills() {
  return (
    <div className="flex flex-col justify-center items-center p-6 encode-sans">
    <h1 className="text-xl font-bold">Skills</h1>
      <ul className="flex flex-col items-start">
        <li>
        <h1 className="text-xl font-bold">Proficient</h1>
        </li>
        <li><img src="https://go-skill-icons.vercel.app/api/icons?i=js,html,css,tailwind,react,nodejs,grunt,electron"></img></li>
        <li>
        <h1 className="text-xl font-bold">Competent</h1>
        </li>
        <li><img src="https://go-skill-icons.vercel.app/api/icons?i=c,python,sqlite,firebase,arduino,vercel"></img></li>
        <li>
        <h1 className="text-xl font-bold">Learning</h1>
        </li>
        <li><img src="https://go-skill-icons.vercel.app/api/icons?i=rust,java,tauri,ruby,docker"></img></li>
      </ul>
</div>
  )
}

function Tech() {
  return (
    <div className="flex flex-col justify-center items-center p-6 encode-sans">
            <h1 className="text-xl font-bold">Tech Stuff</h1>
            <div className="flex flex-col justify-center p-4">
                <ul>
                    <li>I use <strong><a target="_blank" rel="noreferrer" className="underline" href="https://cachyos.org">CachyOS</a></strong> and <strong><a target="_blank" rel="noreferrer" className="underline" href="https://endeavouros.com/">EndeavourOS</a></strong>.</li>
                    <li>I love using <strong><a target="_blank" rel="noreferrer" className="underline" href="https://hyprland.org/">Hyprland</a></strong> as my desktop.</li>
                    <li>My preferred shell is <strong><a target="_blank" rel="noreferrer" className="underline" href="https://fishshell.com/">fish</a></strong>.</li>
                    <li>For editing text on the command line, I use <strong><a target="_blank" rel="noreferrer" className="underline" href="https://github.com/zyedidia/micro">micro</a></strong>.</li>
                    <li>For writing code, I use <strong><a target="_blank" rel="noreferrer" className="underline" href="https://code.visualstudio.com/">VS Code</a></strong>.</li>
                    <li>I use <strong><a target="_blank" rel="noreferrer" className="underline" href="https://obsidian.md/">Obsidian</a></strong> for note-taking and idea storage.</li>
                    <li><strong><a target="_blank" rel="noreferrer" className="underline" href="https://app.diagrams.net">Drawio</a></strong> is great for organizing thoughts.</li>
                    <li>To browse the web, I use <strong><a target="_blank" rel="noreferrer" className="underline" href="https://thorium.rocks">Thorium</a></strong> and <strong><a target="_blank" rel="noreferrer" className="underline" href="https://brave.com">Brave</a></strong>.</li>
                </ul>
            </div>
        </div>
  )
}

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const randomTimeout = Math.floor(Math.random() * 1000) + 1500;
    const timer = setTimeout(() => {
      setLoading(false);
    }, randomTimeout);
    return () => clearTimeout(timer);
  }, []);

  //the loading thing is fake, but i like it lol
  const getLoadingText = () => {
    const texts = [
      "erasing braincells",
      "hacking the mainframe",
      "downloading more ram",
      "rickrolling joe biden",
      "eating the eiffel tower",
      "investing in sh*tcoins",
      "reviving ken block",
      "installing temple os",
      "executing malware"
    ];
    
    const rareTexts = [
      "purchasing serbian uncles",
      "committing heinous acts",
      "laundering money",
      "asking chatgpt"
    ];
  
    const chance = Math.random() * 100;
  
    if (chance < 1) {
      const rareRandomIndex = Math.floor(Math.random() * rareTexts.length);
      return rareTexts[rareRandomIndex];
    } else {
      const randomIndex = Math.floor(Math.random() * texts.length);
      return texts[randomIndex];
    }
  };
  
  function Background() {
    return (
      <div className="container absolute w-screen h-screen bg-richblack">
      	<div className="grid">
		      <div className="grid-fade"></div>
		      <div className="grid-lines"></div>
	      </div>
      </div>
    )
  }

  return (
    <>
   
      <div className="flex flex-col justify-center items-center w-screen h-screen text-white">
      <Background />
        {loading ? (
          <h1 className="inline-block relative text-3xl encode-sans">
            {getLoadingText()}
            <span className="dots"></span>
          </h1>
        ) : (
          <Router>
          <div className="flex z-50 flex-col w-1/2 h-3/5 rounded-lg border-2 border-white border-solid transition-all duration-300 bg-richblack/85">
            <div className="flex flex-col items-center pb-2 w-full rounded-t-md border-2 border-solid border-b-white">
              <h1 className="mt-2 text-4xl tracking-widest encode-sans">
                beanfrog.xyz
              </h1>
              <Contact />
            </div>
            <div className="flex overflow-hidden flex-row flex-1 w-full">
              <div className="overflow-hidden w-1/4 h-full rounded-bl-md border-2 border-solid border-r-white">
                <Nav />
              </div>
              <div className="overflow-y-scroll w-3/4 h-full max-h-full scrollbar">
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/tech" element={<Tech />} />
                  <Route path="/" element={<Home />} />
                </Routes>
              </div>
            </div>
          </div>
        </Router> 
        )}
      </div>
    </>
  );
}

export default App;
