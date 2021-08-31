//packages
import { useInView } from 'react-intersection-observer';

//components
import Layout from '../components/Layout';
import TopNav from '../components/TopNav'
import BoxHeading from '../components/BoxHeading'
import Works from '../components/Works'
import Footer from '../components/Footer'



function Work() {
    //interesction observers for each section
    const [workRef, inViewWork] = useInView({
        triggerOnce: true,
        rootMargin: '-50px 0px',
    });


    return (
        <Layout>
            <TopNav></TopNav>
            {/* Intro Section 👋 */}
            <main ref={workRef} className="mt-20 xl:mt-32 pb-24 flex flex-col items-start">
                <BoxHeading inView={inViewWork}>WORK</BoxHeading>
                <Works inView={inViewWork}></Works>
            </main>
            <Footer></Footer>
        </Layout>
    );
}

export default Work;