//packages
import { useInView } from 'react-intersection-observer';

//components
import Layout from '../components/Layout'
import TopNav from '../components/TopNav'
import BoxHeading from '../components/BoxHeading'
import ArrowLinkExternal from '../components/ArrowLinkExternal'
import Footer from '../components/Footer'

function Contact() {
    const [firstRef, inViewFirst] = useInView({
        triggerOnce: true,
        rootMargin: '-50px 0px',
    });

    return (
        <Layout>
            <TopNav></TopNav>
            <main ref={firstRef} className="mt-20 xl:mt-32 pb-24 flex flex-col items-start">
                <BoxHeading inView={inViewFirst}>AVAILABILITY</BoxHeading>
                <div className={"flex flex-col items-start opacity-0 " + (inViewFirst ? 'animate-fadein' : 'animate-none')}>
                    <p className="mt-8 xl:mt-12 leading-[180%]">I’m on the hunt for a full-time gig at an agency or startup. Looking to relocate to either Toronto or Vancouver.</p>
                    <p className="mt-6 xl:mt-8 leading-[180%]">I'm quickest to respond on my work email, or my angel account.</p>
                    <div className="mt-12 flex flex-col space-y-4">
                        <ArrowLinkExternal text="EMAIL ME" link="mailto:nav.verma.work@gmail.com"></ArrowLinkExternal>
                        <ArrowLinkExternal text="MY ANGEL PROFILE" link="https://angel.co/u/nav-verma"></ArrowLinkExternal>
                    </div>

                </div>
            </main>
            <Footer></Footer>
        </Layout>
    )
}

export default Contact
