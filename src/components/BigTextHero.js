
function BigTextHero(props) {
    return (
        <h2 className="self-center text-[40px] xl:text-[120px] 2xl:text-[180px] font-work font-thin leading-[120%] tracking-wider whitespace-nowrap">
            {props.children}
        </h2>
    )
}

export default BigTextHero
