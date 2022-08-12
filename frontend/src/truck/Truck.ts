export type Truck = {
    name: string,
    id: string,
    position: { x: string, y: string } | undefined,
}

export type NewTruck = Omit<Truck, "id" | "position">;

export default Truck;
