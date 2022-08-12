import {Cell} from "./Cell";

export default function BoardModel() {

    const maxNumOfRows = 10;
    const maxNumOfColumns = 10;
    let xCounter;
    let yCounter;
    let gameCells: Cell[] = [];
    let newCell: Cell;


    for (yCounter = 0; yCounter < maxNumOfRows; yCounter++) {
        for (xCounter = 0; xCounter < maxNumOfColumns; xCounter++) {
            newCell = {
                index: "" + xCounter + yCounter, position: {x: xCounter.toString(), y: yCounter.toString()},
            }
            gameCells.push(newCell);
        }
    }

    return (
        <>
            {gameCells}
        </>

    )

}