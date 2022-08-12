import {Cell} from "./Cell";
import "./BoardModel.css";

export default function GameBoard() {

    const maxNumOfRows = 10;
    const maxNumOfColumns = 10;
    let gameCells: Cell[] = [];
    let newCell: Cell;

    for (let yCounter = 0; yCounter < maxNumOfRows; yCounter++) {
        for (let xCounter = 0; xCounter < maxNumOfColumns; xCounter++) {
            newCell = {
                index: "" + yCounter + xCounter, position: {x: xCounter.toString(), y: yCounter.toString()},
            }
            gameCells.push(newCell);
        }
    }

    return (
        <>
            <h2>Game-Board</h2>
            <div className={"board"}>
                {gameCells.map(cell => <div className={"cell"} key={cell.index}>
                </div>)}
            </div>
        </>
    )
}
