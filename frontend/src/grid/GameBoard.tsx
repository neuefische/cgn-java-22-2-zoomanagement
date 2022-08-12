import BoardModel from "./BoardModel";
import {Cell} from "./Cell";

type GameBoardProps = {
    cell: Cell,
    gameCells: Cell[],
}

export default function GameBoard(props: GameBoardProps) {

    return (
        <>
            <h2>Game-Board</h2>
            <ol>
                {props.gameCells.map(cell => <li key={cell.index}><BoardModel/>
                </li>)},
            </ol>
        </>
    )
}