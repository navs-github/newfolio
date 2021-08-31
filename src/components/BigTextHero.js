
function BigTextHero(props) {
    return (
        <h2 className="self-center text-[42px] xl:text-[136px] font-work font-thin leading-[120%] tracking-wider whitespace-nowrap">
            {props.children}
        </h2>
    )
}

export default BigTextHero
