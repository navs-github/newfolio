
function Layout(props) {
    return (
        <div className="text-warm bg-dark font-inter text-lg xl:text-2xl 2xl:text-3xl overflow-hidden">
            <div className="px-6 xl:px-40 2xl:px-56 bg-grain bg-contain">
                {props.children}
            </div>
        </div>

    )
}

export default Layout
