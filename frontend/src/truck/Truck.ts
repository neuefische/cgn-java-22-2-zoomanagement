export type Truck = {
    name: string,
    id: string,
    position?: { x: string, y: string },
}

export type NewTruck = Omit<Truck, "id">;
