//packages
import { Link } from 'react-router-dom'


//components
import ArrowLinkInternal from './ArrowLinkInternal'

function Project(props) {
    return (
        <div className="">
            <div className="flex flex-row items-center space-x-2">
                <h2 className="font-work font-medium text-lg">{props.title}</h2>
                <div className="w-full h-[1px] bg-warm opacity-30"></div>
            </div>
            <p className="mt-4">{props.body}</p>
            <Link to={props.to}>
                <img src={props.thumb} className="mt-6 p-1 border border-warm" width="700" height="200" alt="" srcset="" />
            </Link>
            <div className="mt-5">
                <ArrowLinkInternal text="MORE" to={props.to}></ArrowLinkInternal>
            </div>
        </div>
    )
}

export default Project
