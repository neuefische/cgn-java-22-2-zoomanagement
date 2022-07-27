import {Animal} from "./Animal";

export default function AnimalList(props: { animals: Animal[] }) {

    return (
        <>
            <h2>Tiere</h2>
            <ul>
                {props.animals.map(animal => <li key={animal.id}>{animal.name}</li>)}
            </ul>
        </>);
}