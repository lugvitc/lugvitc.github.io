
export default function List({
    all_members, openPopUp, getImgfromAPI, picBaseURL
}) {
    // all_members = all_members.slice(3,)
    return (
        <>
            <div className="mt-4 flex justify-evenly items-start flex-wrap gap-4 w-full">
                {
                    all_members.map((member, index) => (
                        <div className="w-72 h-32 lg:w-96 bg-nord0 border-[1px] border-nord2 rounded-md relative box-content hover:cursor-pointer" key={"img-member-"+member.regno} onClick={openPopUp(this)} memberindex={index}>
                            <img className="w-32 h-32 rounded-l-md object-cover object-center" src={picBaseURL + member.regno} onError={({ currentTarget }) => {currentTarget.onerror = null;currentTarget.src=getImgfromAPI(index);}} />
                            <div className="w-32 h-32 absolute left-0 bottom-0 rounded-l-md bg-gradient-to-t from-black to-[#00000030]">
                            </div>
                            <div className="w-32 h-32 absolute left-0 bottom-0 rounded-l-md font-sans flex flex-col justify-end items-start pl-1.5 pb-1.5 text-2xl font-bold">
                                <div className="italic">№<span className="text-nord10">{member.rank}</span></div>
                                <div className="text-sm font-nord6">{member.display}</div>
                            </div>
                            <div className="absolute right-0 top-0 w-40 lg:w-64 h-32 text-sm lg:text-base flex flex-col justify-evenly lg:text-center items-center italic p-2">
                                <div className="h-6 w-36 lg:w-60 inline-block truncate"><span className="text-nord8">{member.points}</span> points</div>
                                <div className="h-6 w-36 lg:w-60 inline-block truncate"><span className="text-nord8">{member.contributions}</span> contributions</div>
                                <div className="h-6 w-36 lg:w-60 font-semibold inline-block truncate">{member.dept}</div>
                                <div className="h-6 w-36 lg:w-60 text-nord7 inline-block truncate">{member.regno}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}