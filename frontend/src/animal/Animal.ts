export type Animal = {
    id: string,
    name: string,
}

export type AnimalWithXY = {
    id: string,
    name: string,
    position: Position,
}

export type Position = {
    xCoordinate: string,
    yCoordinate: string,
}