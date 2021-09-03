//packages
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

//components
import Project from './Project'


//assets
import enroller_preview from '../img/enroller_preview.webp'
import unicodes_preview from '../img/unicodes_preview.webp'
import raofolio_preview from '../img/raofolio_preview.webp'


function Works(props) {

    const defaultThumbRef = useRef()

    const [workImage, setWorkImage] = useState(enroller_preview)
    function setEnrollerThumb() {
        setWorkImage(enroller_preview)
    }
    function setRaofolioThumb() {
        setWorkImage(raofolio_preview)
        defaultThumbRef.current.classList.remove('text-yellow-base')
    }
    function setUnicodesThumb() {
        setWorkImage(unicodes_preview)
        defaultThumbRef.current.classList.remove('text-yellow-base')
    }
    return (
        <div className="w-full">
            <article className={"w-full hidden mt-12 xl:flex flex-row justify-between leading-[160%] opacity-0 " + (props.inView ? 'animate-fadein' : 'animate-none')}>
                <ul className="items-start flex flex-col space-y-12 2xl:space-y-20">
                    <Link to="/enroller">
                        <li onMouseOver={setEnrollerThumb} ref={defaultThumbRef} className="text-yellow-base hover:text-yellow-base transition-all duration-300">Enroller</li>
                    </Link>
                    <Link to="/raofolio">
                        <li onMouseOver={setRaofolioThumb} className="hover:text-yellow-base transition-all duration-300">raofolio</li>
                    </Link>
                    <Link to="/unicodes">
                        <li onMouseOver={setUnicodesThumb} className="hover:text-yellow-base transition-all duration-300">navs-unicodes</li>
                    </Link>
                </ul>
                <img src={workImage} className="w-[700px] 2xl:w-[1100px] p-2 border border-warm" width="700" height="200" alt="" srcset="" />
            </article>
            <article className={"mt-8 xl:hidden flex flex-col space-y-36 leading-[160%] opacity-0 " + (props.inView ? 'animate-fadein' : 'animate-none')}>
                <Project
                    title="Enroller"
                    body="A SaaS app that makes administrative tasks easy for students by simplifying complex processes such as course management and tuition payment."
                    thumb={enroller_preview}
                    to="/enroller"
                />
                <Project
                    title="Raofolio"
                    body="A fashion model's online portfolio. Designed with a minimal dark theme to keep the focus on the finer details of the imagery."
                    thumb={raofolio_preview}
                    to="/raofolio"
                />
                <Project
                    title="Unicodes"
                    body="An online web tool that allows quick access to unique special characters. Implemented with live search for a smooth, one-page experience."
                    thumb={unicodes_preview}
                    to="/unicodes"
                />
            </article >
        </div >
    )
}

export default Works
