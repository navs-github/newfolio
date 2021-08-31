//packages
import { Link } from 'react-router-dom';

//assets
import Logo from '../logos/Logo'


function TopNav() {
    // const logoRef = useRef()
    // const navRef = useRef()
    // useEffect(() => {
    //     logoRef.current.classList.add('animate-slideup')
    // }, [])

    return (
        <header className="pt-8 xl:pt-12">
            <div className=" flex flex-col space-y-6 xl:flex-row w-full xl:space-y-0 xl:justify-between items-center">
                <div className="animate-slideup">
                    <Logo></Logo>
                </div>
                <nav className="w-full xl:w-auto font-work font-medium text-sm xl:text-lg">
                    <ul className="w-full flex flex-row justify-between xl:justify-start xl:space-x-16">
                        <Link to="/work">
                            <li className="opacity-0 animate-slideup50 hover:text-yellow-base">WORK</li>
                        </Link>
                        <Link to="/about">
                            <li className="opacity-0 animate-slideup100 hover:text-yellow-base">ABOUT</li>
                        </Link>
                        <Link to="/process">
                            <li className="opacity-0 animate-slideup150 hover:text-yellow-base">PROCESS</li>
                        </Link>
                        <Link to="/contact">
                            <li className="opacity-0 animate-slideup200 hover:text-yellow-base">CONTACT</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default TopNav
