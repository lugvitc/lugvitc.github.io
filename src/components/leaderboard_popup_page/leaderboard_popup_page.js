
export default function LeaderboardPopUpPage({
    member, close_leaderboard_popup
}) {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex flex-row justify-center items-center" style={{display: (member.extern_style.main.display ? "flex" : "none")}}>
            <div className="flex-col w-[80%] h-fit bg-nord2 border-2 border-nord3 rounded-lg">
                <div>
                    <div className="overflow-hidden relative h-80 rounded-t-lg">
                        <img className="w-full h-80 rounded-t-lg object-cover object-center blur-lg brightness-90 absolute top-0 left-0" alt="" onerror="this.style.display='none'" src={member.photo_path}/>
                        <img className="w-full h-80 rounded-t-lg object-contain absolute top-0 left-0" alt="" onerror="this.style.display='none'" src={member.photo_path}/>
                        <div className="absolute bottom-0 h-80 w-full bg-gradient-to-t from-black to-transparent rounded-t-lg">
                            <div className="h-full flex flex-col p-4 justify-end font-sans">
                                <h1 className="text-nord8 text-xl font-semibold mb-1">{member.name}</h1>
                                <div className="grid grid-rows-4 w-fit gap-1 font-sans italic font-bold">
                                    <p className="text-xs md:text-sm">Score - {member.points}</p>
                                    <p className="text-xs md:text-sm">Register Number - {member.regno}</p>
                                    <p className="text-xs md:text-sm">Contributions - {member.contributions}</p>
                                    <p className="text-xs md:text-sm">Department - {member.dept}</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 mr-2 mt-2 rounded-full bg-nord0 p-2" onClick={close_leaderboard_popup}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                            </svg>
                        </div>
                    </div>
                    <div className="p-4 text-base font-sans flex flex-col justify-evenly items-start">
                        <div className="text-lg font-semibold">Contributions</div>
                        <div className="text-sm font-sans">
                            {member.contribution_details.map((line, index) => (
                                <span key={index}>{line}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}