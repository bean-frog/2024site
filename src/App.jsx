import './index.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Tech from './Tech';
import Home from './Home';
import Contact from './Contact';
import motds from './motds';

function Nav() {
  const location = useLocation(); 
  const [currentPath, setCurrentPath] = useState('/');
  
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  useEffect(() => {
    updateMotd();
  }, []);

  const motdRef = useRef(null);

  const updateMotd = () => {
    const randomIndex = Math.floor(Math.random() * motds.length);
    const randomMotd = motds[randomIndex];
    motdRef.current.innerText = randomMotd;
  };

  return (
    <div className="flex fixed right-0 left-0 top-6 z-50 flex-col justify-center items-center p-6 px-10 pb-1 mx-auto my-auto text-black bg-gradient-to-tr rounded-md border-2 backdrop-blur-sm border-full border-glass-border from-glass-dark/40 via-glass-reflective/50 to-glass-dark/40 h-fit w-fit">
      <h1 className="text-2xl font-bold tracking-wider">beanfrog.xyz</h1>
      <Contact />
      <nav className="flex flex-row justify-center items-center mt-4 space-x-2">
        <NavLink to="/" className="text-lg transition-all hover:transform hover:-translate-y-[2px]" currentPath={currentPath}>
          Home
        </NavLink>
        <h1> | </h1>
        <NavLink to="/about" className="text-lg transition-all hover:transform hover:-translate-y-[2px]" currentPath={currentPath}>
          About
        </NavLink>
        <h1> | </h1>
        <NavLink to="/projects" className="text-lg transition-all hover:transform hover:-translate-y-[2px]" currentPath={currentPath}>
          Projects
        </NavLink>
        <h1> | </h1>
        <NavLink to="/skills" className="text-lg transition-all hover:transform hover:-translate-y-[2px]" currentPath={currentPath}>
          Skills
        </NavLink>
        <h1> | </h1>
        <NavLink to="/tech" className="text-lg transition-all hover:transform hover:-translate-y-[2px]" currentPath={currentPath}>
          Tech
        </NavLink>
      </nav>
      <h1 onClick={updateMotd} className="text-sm">"<span ref={motdRef}></span>"</h1>
    </div>
  );
}


function NavLink({ to, className, children, currentPath }) {
  const isActive = currentPath === to;
  return (
    <Link to={to} className={`${className} ${isActive ? 'font-bold' : ''}`}>
      {children}
    </Link>
  );
}

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-transparent">
    <Router>
      <>
        <Nav />
        <div className="flex flex-col justify-center items-center p-2 mt-24 w-1/2 text-black h-fit">

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/" element={<Home />} />
        </Routes>
        </div>
      </>
    </Router>
    </div>
  );
}

export default App;
