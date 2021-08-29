//packages
import { useInView } from 'react-intersection-observer';

//components
import TopNav from '../components/TopNav'
import BoxHeading from '../components/BoxHeading'
import Footer from '../components/Footer'



function Work() {
    //interesction observers for each section
    const [introRef, inViewIntro] = useInView({
        triggerOnce: true,
        rootMargin: '-50px 0px',
    });


    return (
        <div className="text-warm font-inter text-2xl overflow-hidden">
            <div className="px-40 bg-grain bg-contain">
                <TopNav></TopNav>
                {/* Intro Section 👋 */}
                <main ref={introRef} className="mt-32 pb-24 flex flex-col items-start">
                    <BoxHeading inView={inViewIntro}>UNDER CONSTRUCTION</BoxHeading>
                    <p className="mt-12 leading-[180%] opacity-0 animate-fadein">This section is currently undergoing development and testing. I daren't publish something that isn't up to my standards. FIX THIS DEADEND</p>
                </main>
                <Footer></Footer>
            </div>

        </div >
    );
}

export default Work;