
function Layout(props) {
    return (
        <div className="text-lg xl:text-[28px] 2xl:text-3xl text-warm selection:bg-yellow-base selection:text-black bg-dark font-inter overflow-hidden">
            <div className="px-6 xl:px-44 2xl:px-56 bg-grain bg-contain">
                {props.children}
            </div>
        </div>

    )
}
export default Layout
