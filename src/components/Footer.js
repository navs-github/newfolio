//packages
import { Link } from 'react-router-dom'

//assets
import Logo from '../logos/Logo'
import LogoDribbble from '../logos/LogoDribbble'
import LogoAngel from '../logos/LogoAngel'
import LogoGithub from '../logos/LogoGithub'
import LogoLinkedin from '../logos/LogoLinkedin'
import LogoInstagram from '../logos/LogoInstagram'
import LogoSpotify from '../logos/LogoSpotify'

function Footer() {
    return (
        <footer className="flex items-center justify-center border-t border-opacity-30 border-warm -mx-6 px-6 xl:-mx-44 xl:px-44 2xl:px-56 2xl:-mx-56 py-12 xl:py-24 bg-dark">
            {/* 💻 💻 💻 💻 💻 */}
            <div className="hidden xl:flex flex-row space-x-44 text-lg 2xl:text-xl">
                <nav className="flex flex-col items-center">
                    <Logo></Logo>
                    <ul className="mt-7 flex flex-row space-x-9">
                        <li className=""><LogoGithub></LogoGithub></li>
                        <li className=""><LogoDribbble></LogoDribbble></li>
                        <li className=""><LogoLinkedin></LogoLinkedin></li>
                        <li className=""><LogoAngel></LogoAngel></li>
                        <li className=""><LogoSpotify></LogoSpotify></li>
                    </ul>
                    <span className="mt-8">Based in Guelph, Ontario</span>
                    <span className="mt-2 text-sm">© 2021 Abhinav Verma | All Rights Reserved</span>


                </nav>
                <nav className="flex flex-row space-x-20">
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
            {/* 📲📲📲📲📲 */}
            <div className="xl:hidden flex flex-col items-center space-y-12 text-base">

                <nav className="flex flex-row space-x-36">
                    <ul className="flex flex-col space-y-4">
                        <li className="text-sm uppercase">NAVIGATION</li>
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
                    <ul className="flex flex-col space-y-4">
                        <li className="text-sm uppercase">EXTRAS</li>
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
                <nav className="flex flex-col items-center">
                    <Logo></Logo>
                    <ul className="mt-7 flex flex-row space-x-9">
                        <li className=""><LogoGithub></LogoGithub></li>
                        <li className=""><LogoDribbble></LogoDribbble></li>
                        <li className=""><LogoLinkedin></LogoLinkedin></li>
                        <li className=""><LogoAngel></LogoAngel></li>
                        <li className=""><LogoInstagram></LogoInstagram></li>
                        <li className=""><LogoSpotify></LogoSpotify></li>
                    </ul>
                    <span className="mt-8">Based in Guelph, Ontario</span>
                    <span className="mt-2 text-xs">© 2021 Abhinav Verma | All Rights Reserved</span>
                </nav>
            </div>
        </footer>
    )
}

export default Footer
