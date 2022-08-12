import {Animal} from "./Animal";
import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {Position} from "../shared/Position";
import Picker, {IEmojiData} from "emoji-picker-react";
import {Emoji} from "./Emoji";


export default function AnimalDetails(props: { animal: Animal[], onPlaceAnimal: (animal: Animal, position: Position) => void ,
    onAddEmoji:(animal: Animal , emoji: Emoji ) => void}) {
    const [xCoordinate, setXCoordinate] = useState('');
    const [yCoordinate, setYCoordinate] = useState('');

    const [emoji, setEmoji] = useState('');
    const [showPicker, setShowPicker] = useState(false);

    const {id} = useParams();

    const animalToUpdate = props.animal.find(item => item.id === id);
    if (!animalToUpdate) {
        return <>
            Animal not found</>
    }


    const onEmojiClick = (_event: React.MouseEvent, emojiObject: IEmojiData) => {
        setEmoji(e => e + emojiObject.emoji);
        setShowPicker(false);
    };

    return (
        <>
            <h2>{animalToUpdate.name}</h2>
            <p> X - Coordinate: {animalToUpdate.position?.x}<input type={"input"} value={xCoordinate}
                                                                   onChange={event => setXCoordinate(event.target.value)}/></p>
            <p> Y - Coordinate: {animalToUpdate.position?.y}<input type={"input"} value={yCoordinate}
                                       onChange={event => setYCoordinate(event.target.value)}/></p>
            <button onClick={() => {
                props.onPlaceAnimal(animalToUpdate, {x: xCoordinate, y: yCoordinate})
                setXCoordinate('')
                setYCoordinate('')
            }}>save
            </button>

            <div className="emoji">
            <h3>Add Emoji To Element </h3>
            <div className="picker-container">
                <input
                    className="input-style"
                    value={emoji}
                    onChange={e => setEmoji(e.target.value)} />
                <img
                    className="emoji-icon"
                    src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
                    alt="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
                    onClick={() => setShowPicker(val => !val)} />
                {showPicker && <Picker
                    pickerStyle={{ width: '100%' }}
                    onEmojiClick={onEmojiClick} />}
            </div>
            <button onClick={() => {
                 props.onAddEmoji(animalToUpdate, {emoji})
                setEmoji('')}} >Save Emoji </button>
        </div>

        </>
    )
}
