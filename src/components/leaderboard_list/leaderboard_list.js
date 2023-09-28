import '../leaderboard_list/leaderboard_list.css';

export default function List({
    all_members, openPopUp, getImgfromAPI, picBaseURL
}) {
    // all_members = all_members.slice(3,)
    return (
        <>
            <div className="container">
                <div className="position">
                    <div className='rank1' style={{ backgroundColor: "#3b4252", fontFamily: "monospace", fontWeight: "bold" }}>Rank</div>
                    <div className="block" style={{ backgroundColor: "#3b4252" }}>
                        <div>
                            <img className="leaderboard_list_img" style={{opacity: "0"}}/>
                        </div>
                        <div className="leaderboard_list_name">Name</div>
                        <div className="leaderboard_list_regno"> Reg.No. </div>
                        <div className="leaderboard_list_dept"> Department </div>
                        <div className="leaderboard_list_score"> Score </div>
                        <div className="leaderboard_list_contributions"> Contributions </div>
                    </div>
                </div>


                {all_members.map((member, index) => (


                    <div key={"img-member-"+member.regno} className="position" onClick={openPopUp(this)} memberindex={index}>
                        <div className='rank1'>{member.rank}</div>
                        <div className="block">
                            <div><img className="leaderboard_list_img" src={picBaseURL + member.regno} onError={({ currentTarget }) => {currentTarget.onerror = null;currentTarget.src=getImgfromAPI(index);}}></img></div>
                            <div className="leaderboard_list_name" style={{ textTransform: "capitalize"}}><span className="d-inline-block text-truncate">{member.display}</span></div>
                            <div style={{ textTransform: "uppercase" }} className="leaderboard_list_regno"> {member.regno} </div>
                            <div className="leaderboard_list_dept" style={{ textTransform: "capitalize" }}> {member.dept} </div>
                            <div className="leaderboard_list_score"> {member.points} </div>
                            <div className="leaderboard_list_contributions"> {member.contributions} </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}