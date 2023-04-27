import TerminalWindow from '../../components/terminal/terminalWindow';
import Topcards from '../../components/topThree/topcards.js';
import LeaderboardPopUpPage from '../../components/leaderboard_popup_page/leaderboard_popup_page';
import LeaderboardList from '../../components/leaderboard_list/leaderboard_list.js';
import LeaderboardSearch from '../../components/leaderboard_search/search';
import useFetch from "../../hooks/useFetch";
import { useEffect } from 'react';
import { useState } from 'react';

export default function FFCSLeaderboard() {
    // for applying styles to elements
    // will be used by jsx
    let styleObj = {
        main: { display: false }
    }

    // member whose info is being displayed now on pop up
    let mem = {
        name: "",
        regno: "",
        dept: "",
        points: 0,
        contributions: 0,
        contribution_details: [""],
        photo_path: "https://api.dicebear.com/5.x/avataaars/svg?scale=50",
        extern_style: styleObj
    }

    // member is passed to jsx part to display it.
    const [member, setMember] = useState(mem);
    // open the popup page on true
    const [openPopup, setOpenPopup] = useState(false);
    // stores all members data fetched from the backend
    const [leaderboard_members, setLeaderboardMembers] = useState([]);
    const [leaderboard_all_members, setLeaderboardAllMembers] = useState([]);
    const { api, apiPost, apiURL } = useFetch();
    const picBaseURL = apiURL + "/leaderboard/pic/"

    const fetchMember = () => {
        api("/leaderboard", {
            method: "GET"
        }).then((response) => response.json())
            .then((response) => {
                for (let mem in response) {
                    response[mem].photo_path = picBaseURL + response[mem].regno;
                    if (response[mem].contribution_details) {
                        response[mem].contribution_details = response[mem].contribution_details.split(";")
                    }
                    else {
                        response[mem].contribution_details = []
                    }
                    response[mem].contribution_details.map((contrib) => {
                        return contrib.trim()
                    })
                    response[mem].display = response[mem].name.length > 15 ? response[mem].name.slice(0, 12) + "..." : response[mem].name;
                    response[mem].rank = parseInt(mem, 10) + 1;
                }
                setLeaderboardMembers(response);
                setLeaderboardAllMembers(response);
            })
    }

    function updateMember(e) {
        let reg = e.currentTarget.getAttribute("memberindex");
        let details = leaderboard_members[reg];
        details.extern_style = styleObj;
        setOpenPopup(true);
        setMember(details)
    }

    function close_leaderboard_popup() {
        setOpenPopup(false);
    }

    function getImgfromAPI(ind) {
        if (!leaderboard_all_members[ind].photo_path.startsWith("https://api.dicebear.com/")) {
            let url = "https://api.dicebear.com/5.x/avataaars/svg?backgroundColor=03a9f4&seed=" + (Math.random() + 1).toString(10).substring(7);
            leaderboard_all_members[ind].photo_path = url;
            setLeaderboardMembers(leaderboard_members);
            setLeaderboardAllMembers(leaderboard_all_members);
            return url;
        }
        return leaderboard_all_members[ind].photo_path
    }

    useEffect(() => {
        let memberObj = Object.assign({}, member);
        if (openPopup) {
            memberObj.extern_style.main.display = true;
        }
        else {
            memberObj.extern_style.main.display = false;
        }
        setMember(memberObj)
    }, [openPopup])

    useEffect(fetchMember, [])

    return (
        <TerminalWindow
            prompts={[
                { path: '~', command: 'cd ffcs-leaderboard' },
                { path: '~/ffcs-leaderboard', command: 'cat ffcs_leaderboard.txt' }
            ]}
            title='Leaderboard'
        >
            <Topcards picBaseURL={picBaseURL} top_3_members={leaderboard_all_members.slice(0, 3)} getImgfromAPI={getImgfromAPI}></Topcards>
            <LeaderboardSearch members={leaderboard_all_members} setter={setLeaderboardMembers}></LeaderboardSearch>
            <LeaderboardList picBaseURL={picBaseURL} getImgfromAPI={getImgfromAPI} all_members={leaderboard_members} openPopUp={() => { return updateMember }} />
            <LeaderboardPopUpPage member={member} close_leaderboard_popup={close_leaderboard_popup}></LeaderboardPopUpPage>
        </TerminalWindow>
    );
}
