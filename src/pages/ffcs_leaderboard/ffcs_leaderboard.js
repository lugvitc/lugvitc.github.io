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
    const { api, apiPost, apiURL } = useFetch();

    const fetchMember = () => {
        api("/leaderboard", {
            method: "GET"
        }).then((response) => response.json())
            .then((response) => {
                for (let mem in response) {
                    let check = "/leaderboard/pic/" + response[mem].regno;
                    api(check, {
                        method : "GET"
                    }).then((res)=>{
                        if(!res.ok){
                            response[mem].photo_path = "https://api.dicebear.com/5.x/avataaars/svg?backgroundColor=03a9f4&seed=" + (Math.random() + 1).toString(36).substring(7);
                        }
                        else{
                            response[mem].photo_path = apiURL + "/leaderboard/pic/" + response[mem].regno;
                        }
                        console.log(response[mem], apiURL);
                    })
                    if (response[mem].contribution_details) {
                        response[mem].contribution_details = response[mem].contribution_details.split(";")
                    }
                    else {
                        response[mem].contribution_details = []
                    }
                    response[mem].contribution_details.map((contrib) => {
                        return contrib.trim()
                    })
                    response[mem].display = response[mem].name.length > 17 ? response[mem].name.slice(0,12)+"..." : response[mem].name;
                }
                setLeaderboardMembers(response)
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
            <Topcards top_3_members={leaderboard_members.slice(0, 3)}></Topcards>
            <LeaderboardSearch members={leaderboard_members} setter={setLeaderboardMembers}></LeaderboardSearch>
            <LeaderboardList all_members={leaderboard_members} openPopUp={() => { return updateMember }} />
            <LeaderboardPopUpPage member={member} close_leaderboard_popup={close_leaderboard_popup}></LeaderboardPopUpPage>
        </TerminalWindow>
    );
}
