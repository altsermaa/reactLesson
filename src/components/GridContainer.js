export const GridContainer = (props) => {
    return (
        <div className="w-[1000px] grid grid-cols-3 gap-10px m-auto">
            {props.children}
        </div>
    )
}