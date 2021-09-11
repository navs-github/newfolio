
function ArrowLinkExternal(props) {
    return (
        <a href={props.link} rel="noopener noreferrer" target="_blank">
            <span className="group flex flex-row items-center space-x-2.5">
                <span className="text-base xl:text-xl 2xl:text-2xl tracking-wide font-work font-medium uppercase group-hover:text-yellow-base transition-colors duration-200">{props.text}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-base group-hover:text-yellow-accent transition-colors duration-200" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </span>
        </a>
    )
}

export default ArrowLinkExternal
