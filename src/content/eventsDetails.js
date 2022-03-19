import React from "react";
import adreanlinePic1 from "./../images/adrenaline/01.jpg";
import adreanlinePic2 from "./../images/adrenaline/02.jpg";
import adreanlinePic3 from "./../images/adrenaline/03.jpg";

const imgStyle = {
    width: "500px",
    height: "auto"
}

export const eventsDetails = [
    {
        number: "00",
        name: "Adrenaline/FOSS Day",
        link: "https://adrenaline.androidclubvit.com/",
        id: "adrenaline",
        details:
            <p>
                Held on the 17th March, 2022, Adreanline/FOSS Day was a one-day event for participants to show-off their familiarity with open-source technologies. Participants gathered to demonstrate their projects to an industry expert.<br/>
                <img style = {imgStyle} src = {adreanlinePic1} />
                <br/>
                A total of x participants took part with 1-3 pariticipants in one team. They used FOSS (free and open-source software) resources of a number of fields including x, y, z, a, b, c, and w.<br/>
                The two winners were:<br/>
                <ol>
                    <li>
                        a, b and c:<br/>
                        <img style = {imgStyle} src = {adreanlinePic2} /><br/>
                        topic, details <br/>
                    </li>
                    <li>
                        a, b and c:<br/>
                        <img style = {imgStyle} src = {adreanlinePic3} /><br/>
                        topic, details <br/>
                    </li>
                </ol>
                The event was 
            </p>
    }
];
