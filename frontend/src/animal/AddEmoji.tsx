import React, { useState } from 'react';
import Picker, {IEmojiData} from 'emoji-picker-react';


export default function AddEmoji() {

    const [emoji, setEmoji] = useState('');
    const [showPicker, setShowPicker] = useState(false);

    const onEmojiClick = (_event: React.MouseEvent, emojiObject: IEmojiData) => {
        setEmoji(e => e + emojiObject.emoji);
        setShowPicker(false);
    };

    return (
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
                    onClick={() => setShowPicker(val => !val)} />
                {showPicker && <Picker
                    pickerStyle={{ width: '100%' }}
                    onEmojiClick={onEmojiClick} />}
            </div>
            <button >Save Emoji</button>
        </div>
    );
}
