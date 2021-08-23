import { Link } from "react-router-dom";

function Landing() {
    return (
        <div className="w-screen flex  text-purple-100 font-space">
            <div className="">
                <div className="bg-pattern bg-cover bg-bottom px-40 pt-40 pb-40">
                    <span className="font-sofia text-8xl"><span className="">Happy Birthday,</span> Nav</span>
                    <div className="mt-16 font-light tracking-wide leading-relaxed text-4xl">Submit your meaningless business jargon to be used on the site! we don't need a contract, do we can you lower the price for the website?</div>
                </div>
                <div className="bg-[#BE90D4] px-40 py-32">
                    <span className="text-4xl">your homies</span>
                    <div id="parent" className="mt-12 flex flex-row justify-between space-x-4">
                        <div className="flex flex-col h-96 w-full space-y-4">
                            <div className="relative h-40">
                                <div className="absolute top-0 left-0 bg-blue-400 w-full h-full">
                                    <div className="p-10 flex flex-col space-y-2">
                                        <span>text</span>
                                        <span>text</span>
                                        <span>text</span>
                                    </div>
                                </div>
                                <div className="absolute top-0 left-0 h-40 w-full bg-yellow-500 z-20 hover:opacity-0"></div>
                            </div>
                            <div className="h-40 w-full bg-yellow-500"></div>
                        </div>
                        <div className="flex flex-col h-96 w-full space-y-4">
                            <div className="h-40 w-full bg-yellow-500"></div>
                            <div className="h-40 w-full bg-yellow-500"></div>
                        </div>
                        <div className="flex flex-col h-96 w-full space-y-4">
                            <div className="h-40 w-full bg-yellow-500">
                            </div>
                            <div className="h-40 w-full bg-yellow-500"></div>
                        </div>
                        <div className="flex flex-col h-96 w-full space-y-4">
                            <div className="h-36 w-full bg-yellow-500"></div>
                            <div className="h-48 w-full bg-yellow-500"></div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
}

export default Landing;