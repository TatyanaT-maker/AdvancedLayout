import React, { useState } from 'react'
// import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./style.css"
import { GiHearts, GiPartyPopper } from 'react-icons/gi';
// import { GiHearts } from 'react-icons/gi';
import { HiSparkles } from 'react-icons/hi'
import { BsEye } from 'react-icons/bs'
import EmojiButton from '../EmojiButton'
import { faGrinHearts, faGrinStars } from '@fortawesome/free-solid-svg-icons';


// function Icons() {
//     return (
//         <div className="style_body">
//             <div className="styles_emoji">
//                 <div className="style_eye"><BsEye /></div>
//                 <div className="style_placement">
//                     <button className="styles_button"><GiPartyPopper /></button>
//                     <button className="styles_button"><GiHearts /></button>
//                     <button className="styles_button"><FontAwesomeIcon icon={faGrinHearts} /></button>
//                     <button className="styles_button"><HiSparkles /></button>
//                     <button className="styles_button"><FontAwesomeIcon icon={faGrinStars} /></button>
//                 </div>
//             </div>

//         </div>


//     );
// }

function Icons() {
    const [count, setCount] = useState(0);
    return (


        <div className="styles_emoji">
            <div className="style_eye"><BsEye /></div>
            <div className="style_placement">

                <EmojiButton><GiPartyPopper /></EmojiButton>
                <EmojiButton><FontAwesomeIcon icon={faGrinStars} /></EmojiButton>
                <EmojiButton><FontAwesomeIcon icon={faGrinHearts} /></EmojiButton>
                <EmojiButton><HiSparkles /></EmojiButton>
                <EmojiButton><GiHearts /></EmojiButton>

            </div>
        </div>

    )


}





export default Icons;