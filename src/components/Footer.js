//packages
import { Link } from 'react-router-dom'

//assets
import Logo from '../logos/Logo'
import LogoDribbble from '../logos/LogoDribbble'
import LogoAngel from '../logos/LogoAngel'
import LogoGithub from '../logos/LogoGithub'
import LogoLinkedin from '../logos/LogoLinkedin'
import LogoSpotify from '../logos/LogoSpotify'

function Footer() {
    return (
        <footer className="-mx-40 px-40 py-24 bg-dark text-lg">
            <div className="flex flex-row space-x-36">
                <nav className="flex flex-col items-center space-y-4">
                    <Logo></Logo>
                    <ul className="flex flex-row space-x-9">
                        <li className=""><LogoGithub></LogoGithub></li>
                        <li className=""><LogoDribbble></LogoDribbble></li>
                        <li className=""><LogoLinkedin></LogoLinkedin></li>
                        <li className=""><LogoAngel></LogoAngel></li>
                        <li className=""><LogoSpotify></LogoSpotify></li>
                    </ul>
                    <span className="pt-4">Based in Guelph, Ontario</span>

                </nav>
                <nav className="">
                    <ul className="flex flex-col space-y-4">
                        <li className="text-base uppercase">NAVIGATION</li>
                        <Link to="/">
                            <li className="hover:text-yellow-base transition-colors duration-200">Home</li>
                        </Link>
                        <Link to="/about">
                            <li className="hover:text-yellow-base transition-colors duration-200">About</li>
                        </Link>
                        <Link to="/work">
                            <li className="hover:text-yellow-base transition-colors duration-200">Work</li>
                        </Link>
                        <Link to="/contact">
                            <li className="hover:text-yellow-base transition-colors duration-200">Contact</li>
                        </Link>
                    </ul>
                </nav>
                <nav className="">
                    <ul className="flex flex-col space-y-4">
                        <li className="text-base uppercase">EXTRAS</li>
                        <Link to="/books">
                            <li className="hover:text-yellow-base transition-colors duration-200">Books</li>
                        </Link>
                        <Link to="/notion">
                            <li className="hover:text-yellow-base transition-colors duration-200">Notion</li>
                        </Link>
                        <Link to="/playlists">
                            <li className="hover:text-yellow-base transition-colors duration-200">Playlists</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer
