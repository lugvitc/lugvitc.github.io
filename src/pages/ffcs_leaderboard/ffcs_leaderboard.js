import TerminalWindow from '../../components/terminal/terminalWindow';
import Topcards from '../../components/topThree/topcards.js';
import LeaderboardPopUpPage from '../../components/leaderboard_popup_page/leaderboard_popup_page';
import useFetch from "../../hooks/useFetch";
import { useEffect } from 'react';
import { useState } from 'react';

// stores all members data fetched from the backend
var leaderboard_members = [];

export default function FFCSLeaderboard() {
    // for applying styles to elements
    // will be used by jsx
    let styleObj = {
        main: { display: false }
    }

    // member whose info is being displayed now
    let memberObj = {
        name: "Meetesh",
        reg: "21bce1258",
        dept: "tech",
        score: 250,
        contrib_count: 0,
        contribs: ["this is test this is test this is test this is test this is test this is test this is test", "ABC", "this is test", "ABC", "this is test", "ABC", "this is test", "ABC", ],
        photo_path: "https://api.dicebear.com/5.x/avataaars/svg?scale=50",
        extern_style: styleObj
    }

    // member is passed to jsx part to display it.
    const [member, setMember] = useState(memberObj);
    // open the popup page on true
    const [openPopup, setOpenPopup] = useState(false);
    const { api, apiPost } = useFetch();

    const fetchMember = async () => {
        await api("/leaderboard",{
            method: "GET"
        }).then((response) => response.json())
        .then((response)=>{
            leaderboard_members = response
        })
    }

    function updateMember(e) {
        let reg = e.target.getAttribute("reg");
        let details = leaderboard_members[reg];
        memberObj = details;
        memberObj.extern_style = styleObj;
        setMember(memberObj);
    }

    function close_leaderboard_popup() {
        setOpenPopup(false);
    }

    useEffect(() => {
        if (openPopup) {
            memberObj.extern_style.main.display = true;
        }
        else {
            memberObj.extern_style.main.display = false;
        }
        setMember(memberObj);
    }, [openPopup])



    return (
        <TerminalWindow
            prompts={[
                { path: '~', command: 'cd ffcs-leaderboard' },
                { path: '~/ffcs-leaderboard', command: 'cat ffcs_leaderboard.txt' }
            ]}
            title='Leaderboard'
        >
            <Topcards/>
            <button onClick={() => { setOpenPopup(true); }} >Get</button>
            <LeaderboardPopUpPage member={member} close_leaderboard_popup={close_leaderboard_popup}></LeaderboardPopUpPage>
        </TerminalWindow>
    );
}