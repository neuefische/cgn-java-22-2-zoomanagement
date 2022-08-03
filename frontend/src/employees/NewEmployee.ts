import {Employee} from "./Employee";

export type NewEmployee = Omit<Employee, "id">;
