import '../leaderboard_list/leaderboard_list.css';
export default function List({
    all_members, openPopUp
}) {
    // all_members = all_members.slice(3,)
    return (
        <>
            <div className="container">
                <div className="position">
                    <div className='rank1' style={{ backgroundColor: "#3b4252", fontSize: "20px", fontFamily: "monospace", fontWeight: "bold" }}>Rank</div>
                    <div className="block" style={{ backgroundColor: "#3b4252" }}>
                        {/* <div className="img">
                	<img src={img1} alt="eren jaegar"/>
            	</div> */}
                        <div> Name </div>
                        <div> Reg.No. </div>
                        <div> Department </div>
                        <div> Score </div>
                        <div> Contributions </div>
                    </div>
                </div>


                {all_members.map((member, index) => (


                    <div className="position" onClick={openPopUp(this)} memberindex={index}>
                        <div className='rank1'>{index+1}</div>
                        {/* <div className="img">
                    <img src={img1} alt="eren jaegar"/>
                </div> */}
                        <div className="block">
                            {/* <div className="img">
                    	<img src={img1} alt="eren jaegar"/>
                	</div> */}
                            <div style={{textTransform: "capitalize"}}> {member.name} </div>
                            <div style={{textTransform: "uppercase"}}> {member.regno} </div>
                            <div style={{textTransform: "capitalize"}}> {member.dept} </div>
                            <div> {member.points} </div>
                            <div> {member.contributions} </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}