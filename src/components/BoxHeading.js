

function BoxHeading(props) {

    return (
        <div className="overflow-hidden border py-2.5 px-3.5 border-warm bg-dark text-xl font-work font-medium tracking-wider">
            <div className="overflow-hidden">
                <h1 className={" " + (props.inView ? 'opacity-1 animate-slideupalt' : 'opacity-0 animate-none')}>{props.children}</h1>
            </div>
        </div>
    )
}

export default BoxHeading
