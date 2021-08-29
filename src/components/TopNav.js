//packages
import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

//assets
import Logo from '../logos/Logo'


function TopNav() {
    // const logoRef = useRef()
    // const navRef = useRef()
    // useEffect(() => {
    //     logoRef.current.classList.add('animate-slideup')
    // }, [])
    const [logoRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-50px 0px',
    });
    return (
        <header className="pt-12">
            <div className="flex flex-row justify-between items-center">
                <div ref={logoRef} className="animate-slideup">
                    <Link to="/">
                        <Logo></Logo>
                    </Link>
                </div>
                <nav className="font-work font-medium text-lg">
                    <ul className="flex flex-row space-x-16">
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
