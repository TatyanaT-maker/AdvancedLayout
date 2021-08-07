import React from 'react'
import './style.css'

// import "../FontawesomeIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function AgendaList() {
    return (
        // <div className="styles_landingpage">
        // <div className="styles_body">
        <div className="styles_agenda_list">
            <div className="styles_header_agenda">
                <p class="styles_title_agenda">Order of Ceremony</p>
                <div class="styles_download_icon">
                    <FontAwesomeIcon icon={faDownload} />Download Program
                    </div>
            </div>
            <div className="styles_agenda_body">
                <div className="style_agenda">
                    <p className="styles_time"></p>
                    <p className="agenda_titles" font-weight="bold">Pomp and Circumstances</p>
                </div>
                <div className="style_agenda">
                    <p className="styles_time"></p>
                    <p className="agenda_titles">Invocation</p>
                </div>
                <div className="style_agenda">
                    <p className="styles_time"></p>
                    <p className="agenda_titles">Performance: "Breathe"</p>
                </div>
                <div className="style_agenda">
                    <p className="styles_time"></p>
                    <p className="agenda_titles">Performance: "Bach Cello Suite No. 1 in G Major, Prelude"</p>
                </div>
                <div className="style_agenda">
                    <p className="styles_time"></p>
                    <p className="agenda_titles">Opening Remarks</p>
                </div>
                <div className="style_agenda">
                    <p className="styles_time"></p>
                    <p className="agenda_titles">Reflection by Graduating Student</p>
                </div>
                <div className="style_agenda">
                    <p className="styles_time"></p>
                    <p className="agenda_titles">Acknowledgement of Doctoral Students</p>
                </div>
                <div className="style_agenda">
                    <p className="styles_time"></p>
                    <p className="agenda_titles">Presentation of Doctoral Degrees</p>
                </div>
                <div className="style_agenda">
                    <p className="styles_time"></p>
                    <p className="agenda_titles">Performance: "Watch Night"</p>
                </div>
                <div className="style_agenda">
                    <p className="styles_time"></p>
                    <p className="agenda_titles">Presentation of Master's Degrees</p>
                </div>
                <div className="style_agenda">
                    <p className="styles_time"></p>
                    <p className="agenda_titles">Performance: "Here comes the Sun"</p>
                </div>
                <div className="style_agenda">
                    <p className="styles_time"></p>
                    <p className="agenda_titles">Presentation of Degrees - School of Undergraduate Studies</p>
                </div>
                <div className="style_agenda">
                    <p className="styles_time"></p>
                    <p className="agenda_titles">Alumni Welcome and Benediction</p>
                </div>
                <div className="style_agenda">
                    <p className="styles_time"></p>
                    <p className="agenda_titles">Performance: "Can't Stop Me</p>
                </div>
                <div className="style_agenda">
                    <p className="styles_time"></p>
                    <p className="agenda_titles">Credits</p>
                </div>

            </div>
        </div>

        // </div>
        // </div>
    );
}




export default AgendaList;
