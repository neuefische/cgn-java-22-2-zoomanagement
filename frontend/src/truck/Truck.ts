type Truck = {
    name: string,
    id: string
}

export type NewTruck = Omit<Truck, "id">

export default Truck
