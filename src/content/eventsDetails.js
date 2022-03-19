import React from "react";
import speaker from "./../images/adrenaline/speaker.jpg";
import winnerOne from "./../images/adrenaline/winner-one.jpg";
import winnerTwo from "./../images/adrenaline/winner-two.jpg";

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
                
                <img style = {imgStyle} src = {speaker} /><br/><br/>
                
                A total of 20 participants took part with 1-3 pariticipants in one team. 
                They used FOSS (free and open-source software) resources of a number of fields 
                including computer vision, web scraping, web automation and blockchain technologies.<br/><br/>
                The two winning teams were were:<br/>
                
                <ol>
                    <li>
                        <em>Inclusion of Persons with Disabilities in the Technological World</em> by V Maheysh(19BCE1120), Suriyakrishnan S (19BCE1050) and Mithun P (19BPS1092)<br/><br/>
                        <img
                            style = {imgStyle}
                            src = {winnerOne}
                        /><br/><br/>
                        They created an integrated system to accomodate persons with disabilites in the tech world by using open-source machine learning libraries. They targeted a wide range of disabilities to make the system as inclusive as possible. <br/>
                    </li> <br/>
                    <li>
                        <em>Decentralised Cloud Storage System Using Blockchain</em> by Divyashree S (19BCE1689), Aravinda B (19BCE1190) and Amudhini P K (19BCE1492)<br/><br/>
                        <img
                            style = {imgStyle}
                            src = {winnerTwo}
                        /><br/><br/>
                        They created a system of encrypted storage by utilising popular blockchain technologies. <br/>
                    </li>
                </ol>
                The event was a success with the students learning about the importance of FOSS 
                and getting to know the numerous avenues where open-source tools are used.
            </React.Fragment>
    }
];
