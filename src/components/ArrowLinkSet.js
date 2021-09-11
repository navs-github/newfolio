

function ArrowLinkSet(props) {
    return (
        <ul className="mt-8 xl:mt-12 space-y-4 xl:space-y-6 2xl:space-y-8 flex flex-col items-start opacity-0 animate-fadein">
            {props.children}
        </ul>
    )
}

export default ArrowLinkSet
