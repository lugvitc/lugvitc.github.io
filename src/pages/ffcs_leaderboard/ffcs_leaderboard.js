import TerminalWindow from '../../components/terminal/terminalWindow';
import Topcards from '../../components/topThree/topcards.js';
import LeaderboardPopUpPage from '../../components/leaderboard_popup_page/leaderboard_popup_page';
import useFetch from "../../hooks/useFetch";
import { useEffect } from 'react';
import { useState } from 'react';

var leaderboard_members = {};

export default function FFCSLeaderboard() {
    let styleObj = {
        main: { display: false }
    }

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
    const [member, setMember] = useState(memberObj);
    const [openPopup, setOpenPopup] = useState(false);
    const { apiPost } = useFetch();

    const fetchMember = async () => {
        // apiPost("/endpoint", {
        //     ""
        // }).then()
    }

    function updateMember(e) {
        let reg = e.target.getAttribute("reg");
        let details = leaderboard_members[reg];
        memberObj = details;
        memberObj.extern_style = styleObj;
        setMember(memberObj);
    }

    useEffect(() => {
        if (openPopup) {
            memberObj.extern_style.main.display = true;
            setMember(memberObj);
        }
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
            <LeaderboardPopUpPage member={member}></LeaderboardPopUpPage>
        </TerminalWindow>
    );
}