import { Link } from "react-router-dom"

function ArrowLinkInternal(props) {
    return (
        <Link to={props.to}>
            <span className="group flex flex-row items-center space-x-2.5">
                <span className="uppercase group-hover:text-yellow-base transition-colors duration-200">{props.text}</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:text-yellow-accent transition-colors duration-200" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </span>
        </Link>
    )
}

export default ArrowLinkInternal