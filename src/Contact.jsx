import './index.css'
import { Tooltip } from 'react-tooltip'


function Contact() {
    return (
        <>
        <Tooltip id="my-tooltip" />
       <div className="h-fit w-fit m-2 flex flex-row items-center justify-center space-x-4 opacity-90">
        <a 
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Github"
        data-tooltip-place="top"
        href="https://github.com/bean-frog">
        <i className="fab fa-github text-xl"></i>
        </a>
        <a 
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Instagram (mostly inactive)"
        data-tooltip-place="top"
        href="https://instagram.com/beanfrog_">
        <i className="fab fa-instagram text-xl"></i>
        </a>
        <a 
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Discord"
        data-tooltip-place="top"
        href="https://discord.gg/PAeZHF2yjJ">
        <i className="fab fa-discord text-xl"></i>
        </a>
        <a 
        data-tooltip-id="my-tooltip"
        data-tooltip-content="BlueSky"
        data-tooltip-place="top" 
        href="https://bsky.app/profile/beanfrog.bsky.social">
        <i className="fas fa-cloud text-xl"></i>
        </a>
        <a

        data-tooltip-id="my-tooltip"
        data-tooltip-content="Email"
        data-tooltip-place="top" 
        href="mailto:beanfrog@sug.ma">
        <i className="fas fa-envelope text-xl"></i>
        </a>
       </div>
       </>
    )
}

export default Contact;