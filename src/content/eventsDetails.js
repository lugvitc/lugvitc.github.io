import React from "react";
import adreanlinePic1 from "./../images/adrenaline/speaker.jpg";
import adreanlinePic2 from "./../images/adrenaline/winner-one.jpg";
import adreanlinePic3 from "./../images/adrenaline/winner-two.jpg";

const imgStyle = {
    width: "500px",
    height: "auto"
}

export const eventsDetails = [
    {
        number: "00",
        name: "Adrenaline/FOSS Day",
        link: "lugvitc.github.io/#/events#adrenaline",
        id: "adrenaline",
        details:
            <React.Fragment>
                Held on the 17th March, 2022, Adreanline/FOSS Day was a one-day event for participants 
                to show-off their familiarity with open-source technologies. 
                Participants gathered to demonstrate their projects to an industry expert.<br/><br/>
                
                <img style = {imgStyle} src = {adreanlinePic1} /><br/>
                
                A total of x participants took part with 1-3 pariticipants in one team. 
                They used FOSS (free and open-source software) resources of a number of fields 
                including x, y, z, a, b, c, and w.<br/><br/>
                The two winning teams were were:<br/>
                
                <ol>
                    <li>
                        a, b and c: topic<br/><br/>
                        <img
                            style = {imgStyle}
                            src = {adreanlinePic2}
                        /><br/><br/>
                        details <br/>
                    </li>
                    <li>
                        a, b and c: topic<br/><br/>
                        <img
                            style = {imgStyle}
                            src = {adreanlinePic3}
                        /><br/><br/>
                        details <br/>
                    </li>
                </ol>
                The event was a success with the students learning about the importance of FOSS 
                and getting to know the numerous avenues where open-source tools are used.
            </React.Fragment>
    }
];
