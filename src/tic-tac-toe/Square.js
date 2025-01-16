const Square = ({ square, id, go, setGo, cells, setCells, winningMessage }) => {
    const handleClick = (e) => {
        if (!winningMessage) {
            const taken = e.target.firstChild.classList?.contains("circle") || e.target.firstChild.classList?.contains("cross")
            if (!taken) {
                if (go === "circle") {
                    e.target.firstChild.classList.add("circle")
                    handleCellChange("circle")
                    setGo("cross")
                }
                if (go === "cross") {
                    e.target.firstChild.classList.add("cross")
                    handleCellChange("cross")
                    setGo("circle")
                }
            }
        }
    }
    const handleCellChange = (className) => {
        const nextBoard = cells.map((cell, index) => {
            if (index === id) {
                return className
            } else {
                return cell
            }
        })
        setCells(nextBoard)
        console.log(nextBoard)
    }

    return (<div id={id} className="square" onClick={handleClick}>
        <div>{square}</div>
    </div>);
}

export default Square