

function BoxHeading(props) {

    return (
        <div className="opacity-90 overflow-hidden py-2 px-3 xl:py-2.5 xl:px-3.5 border border-warm border-opacity-60 bg-dark">
            <div className="overflow-hidden">
                <h1 className={"text-sm xl:text-xl 2xl:text-2xl font-work font-medium tracking-wider " + (props.inView ? 'opacity-1 animate-slideupalt' : 'opacity-0 animate-none')}>{props.children}</h1>
            </div>
        </div>
    )
}

export default BoxHeading
