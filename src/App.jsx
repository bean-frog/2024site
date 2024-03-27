import './index.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react'; // Import useState and useEffect hooks
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Tech from './Tech';
import Home from './Home';

function Nav() {
  const location = useLocation(); // Get the current location
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  return (
      <div className="border-2 border-full border-glass-border bg-gradient-to-tr from-glass-dark/40 via-glass-reflective/50 to-glass-dark/40 rounded-md flex flex-col items-center justify-center text-black p-6 h-fit w-fit">
        <h1 className="text-2xl font-bold">beanfrog.xyz</h1>
        <nav className="flex flex-row items-center justify-center mt-4 space-x-2">
          <NavLink
            to="/"
            className="text-lg hover:scale-[1.03]"
            currentPath={currentPath}
          >
            Home
          </NavLink>
          <h1> | </h1>
          <NavLink
            to="/about"
            className="text-lg hover:scale-[1.03]"
            currentPath={currentPath}
          >
            About
          </NavLink>
          <h1> | </h1>
          <NavLink
            to="/projects"
            className="text-lg hover:scale-[1.03]"
            currentPath={currentPath}
          >
            Projects
          </NavLink>
          <h1> | </h1>
          <NavLink
            to="/skills"
            className="text-lg hover:scale-[1.03]"
            currentPath={currentPath}
          >
            Skills
          </NavLink>
          <h1> | </h1>
          <NavLink
            to="/tech"
            className="text-lg hover:scale-[1.03]"
            currentPath={currentPath}
          >
            Tech
          </NavLink>
        </nav>
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
    <div className="h-screen w-screen bg-transparent flex flex-col items-center justify-center">

    <Router>
      <>
        <Nav />
        <div className="border-2 border-full border-glass-border bg-gradient-to-tr from-glass-dark/40 via-glass-reflective/50 to-glass-dark/40 rounded-md flex flex-col mt-4 items-center justify-center text-black p-6 h-fit w-1/2">

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
