//packages
import { useInView } from 'react-intersection-observer';

//components
import TopNav from '../components/TopNav'
import BoxHeading from '../components/BoxHeading'
import Footer from '../components/Footer'

function About() {
    //interesction observers for each section
    const [introRef, inViewIntro] = useInView({
        triggerOnce: true,
        rootMargin: '-50px 0px',
    });
    const [posnRef, inViewPosn] = useInView({
        triggerOnce: true,
        rootMargin: '-50px 0px',
    });
    const [expRef, inViewExp] = useInView({
        triggerOnce: true,
        rootMargin: '-200px 0px',
    });
    const [toolsRef, inViewTools] = useInView({
        triggerOnce: true,
        rootMargin: '-200px 0px',
    });
    const [lifeRef, inViewLife] = useInView({
        triggerOnce: true,
        rootMargin: '-200px 0px',
    });

    return (
        <div className="text-warm font-inter text-2xl overflow-hidden">
            <div className="px-40 bg-grain bg-contain">
                <TopNav></TopNav>
                {/* Intro Section 👋 */}
                <main ref={introRef} className="mt-32 flex flex-col items-start">
                    <BoxHeading inView={inViewIntro}>INTRO</BoxHeading>
                    <p className="mt-12 leading-[180%] opacity-0 animate-fadein">Hi, I’m Nav, a creative engineer based in Canada. I enjoy conceptualizing, designing, coding, and improving digital experiences. I live and breathe <span className="font-lora font-bold">websites.</span></p>
                    <p className="mt-8 leading-[180%] opacity-0 animate-fadein">I help teams bridge the gap between design and development with my extraordinarily diverse set of skills. I’m a self-sufficient digital <span className="font-lora font-bold">designer</span> and front-end <span className="font-lora font-bold">developer</span>.</p>                </main>
                {/* Superpowers Section ⚡️ */}
                <section ref={posnRef} className="mt-40 flex flex-col items-start">
                    <BoxHeading inView={inViewPosn}>POSITIONING</BoxHeading>
                    <div className={"opacity-0 " + (inViewPosn ? 'animate-fadein' : 'animate-none')}>
                        <p className="mt-12 leading-[180%]">Despite being able to pilot my own end-to-end design process, I prefer to work in small teams that are open to cross-disciplinary overlap.</p>
                        <p className="mt-8 leading-[180%]">My <span className="font-lora font-bold">design process</span> is centered around making life easy for users, invoking all sorts of positive emotions. I ideate features that reduce complex problems into bite-sized interactions, subject to rigorous feedback and constant iteration.</p>
                        <p className="mt-8 leading-[180%]">My <span className="font-lora font-bold">coding process</span> revolves around writing clean code that lasts. At the start of projects, I find that envisioning and planning out a coherent front-end architecture results in conveniently scalable code, which is easy to read, and highly performant.</p>
                    </div>
                </section>
                {/* Superpowers Section ⚡️ */}
                <section ref={expRef} className="mt-40 flex flex-col items-start">
                    <BoxHeading inView={inViewExp}>EXPERIENCE</BoxHeading>
                    <div className={"opacity-0 " + (inViewExp ? 'animate-fadein' : 'animate-none')}>
                        <p className="mt-12 leading-[180%]">During sophomore year, I discovered my passions for website design and front-end development. Not long after, I wanted my work to reach real users.</p>
                        <p className="mt-8 leading-[180%]">I started my own freelance website agency in 2019. Since then, I’ve formed a network of clients, for whom I’ve <span className="font-lora font-bold">delivered</span> user-facing websites.</p>
                        <p className="mt-8 leading-[180%]">This being a <span className="font-lora font-bold">solo</span> venture, I took on the responsibilities of ideating, designing, and coding by myself. I attribute the diversity in my skill set to my freelancing career.</p>
                    </div>
                </section>
                {/* Work Section 💻 */}
                <section ref={toolsRef} className="mt-40 flex flex-col items-start">
                    <BoxHeading inView={inViewTools}>TOOLS</BoxHeading>
                    <div className={"opacity-0 " + (inViewTools ? 'animate-fadein' : 'animate-none')}>
                        <p className="mt-12 leading-[180%]">My design tool of choice is <span className="font-lora font-bold">Figma</span>. It’s packed with intuitive and time-saving features, along with a wide selection of useful community-made plugins. I plan on writing blog posts about particular Figma features that I love — Auto Layout, for example.</p>
                        <p className="mt-8 leading-[180%]">I’m a <span className="font-lora font-bold">React</span> enthusiast with solid JavaScript fundamentals and all sorts of CSS tricks. I specialize in implementing UI and interactions with clean code. Like most developers, I’m a VS Code and GitHub superuser.</p>
                        <p className="mt-8 leading-[180%]">I use <span className="font-lora font-bold">Notion</span> to harness my productivity, track projects and write stuff down. Since I’m often handling lots of different workflows simultaneously, keeping all that information indexed somewhere is pretty much mandatory.</p>
                    </div>
                </section>
                {/* Contact Section 🤙 */}
                <section ref={lifeRef} className="mt-40 pb-24 flex flex-col items-start">
                    <BoxHeading inView={inViewLife}>LIFE</BoxHeading>
                    <div className={"opacity-0 " + (inViewLife ? 'animate-fadein' : 'animate-none')}>
                        <p className="mt-12 leading-[180%]">In my off time, I take care of my plants and my pet cat, Blue. I spend a decent chunk of my time organizing my belongings and designing the interior of my room. </p>
                        <p className="mt-8 leading-[180%]">I’m a <span className="font-lora font-bold">competitive</span> guy with an affinity for team sports. I will take every opportunity I can get to play a good game of Volleyball. I’ve also enjoyed playing video games competitively in the past, usually hovering in the top 1–5% of playerbases.</p>
                        <p className="mt-8 leading-[180%]">Above all, I make it my mission to bring <span className="font-lora font-bold">positivity</span> wherever I go. I put real effort into my relationships with people and aim to surround myself with like-minded folk.</p>
                    </div>
                </section>
                {/* Footer - EXTRACT this as component soon ✅ */}
                <Footer></Footer>
            </div>

        </div >
    );
}

export default About;