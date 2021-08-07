import React, { useState } from 'react'

import "./style.css"

const EmojiButton = (props) => {
    const [count, setCount] = useState(0);

    return (
        <button className="emoji_button" onClick={() => setCount(count + 1)}>
            {props.children}<p>{count}</p>
        </button>
    )
}





export default EmojiButton;