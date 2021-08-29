//packages
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'



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
        <div className={"mt-12 flex flex-row w-full justify-between leading-[160%] opacity-0 " + (props.inView ? 'animate-fadein' : 'animate-none')}>
            <ul className="items-start flex flex-col space-y-12">
                <Link to="/">
                    <li onMouseOver={setEnrollerThumb} ref={defaultThumbRef} className="text-yellow-base hover:text-yellow-base transition-all duration-300">Enroller</li>
                </Link>
                <Link to="/">
                    <li onMouseOver={setRaofolioThumb} className="hover:text-yellow-base transition-all duration-300">raofolio</li>
                </Link>
                <Link to="/">
                    <li onMouseOver={setUnicodesThumb} className="hover:text-yellow-base transition-all duration-300">navs-unicodes</li>
                </Link>
            </ul>
            <img src={workImage} className="w-[700px] p-2 border border-warm" width="700" height="200" alt="" srcset="" />
        </div>
    )
}

export default Works
