
function Layout(props) {
    return (
        <div className="text-warm bg-dark font-inter text-lg xl:text-2xl overflow-hidden">
            <div className="px-6 xl:px-40 bg-grain bg-contain">
                {props.children}
            </div>
        </div>

    )
}

export default Layout
