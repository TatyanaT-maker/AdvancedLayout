import React from 'react'
import "./style.css"
// import Vimeo from '@u-wave/react-vimeo'
function VideoRender() {
    return (
        <div className="styles_landingpage styles_live_video">

            < iframe className="styles_iframe" title="live video" src="https://player.vimeo.com/video/429279529" frameBorder="none" ></iframe >

        </div>



    );
}

export default VideoRender;
