import React, { useState, useEffect} from 'react';
import Marked from 'marked-react';
import TuneguessrMarkdown from './datasources/projects/tuneguessr.md';
import GithubLookupMarkdown from './datasources/projects/githublookup.md';
import GooberFXMarkdown from './datasources/projects/gooberfx.md';

const Tuneguessr = () => <Marked>{TuneguessrMarkdown}</Marked>;
const GithubLookup = () => <Marked>{GithubLookupMarkdown}</Marked>;
const GooberFX = () => <Marked>{GooberFXMarkdown}</Marked>;

const DynamicComponent = ({ id }) => {
  let Component;
  switch (id) {
    case 'tuneguessr':
      Component = Tuneguessr;
      break;
    case 'githublookup':
      Component = GithubLookup;
      break;
    case 'gooberfx':
      Component = GooberFX;
      break;
    default:
      Component = () => <h1>Invalid Option</h1>;
  }

  return <Component />;
};


const ProjectPage = () => {
 const [id, setId] = useState(null);

 useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get('id');
    setId(idParam);
 }, []);

 return (
    <>
      {id ? (
        <div className="overflow-y-auto overflow-x-hidden absolute top-6 z-50 p-6 mb-6 w-3/4 h-5/6 bg-gradient-to-tr rounded-md border-2 backdrop-blur-xl border-full border-glass-border from-glass-dark/30 via-glass-reflective/40 to-glass-dark/30">
          <DynamicComponent id={id} />
        </div>
      ) : null}
    </>
 );
};

export default ProjectPage;
