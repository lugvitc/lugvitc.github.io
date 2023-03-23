import '../topThree/topcards.css';
// import img1 from '../../images/top3ffcs/img1.png';
// import img2 from '../../images/top3ffcs/img2.png';
// import img3 from '../../images/top3ffcs/img3.png';
export default function Topcards({
    top_3_members
}){
    if(top_3_members.length == 0){
        return (<></>)
    }
    return (
        <>
            <div className="podium">
        <div className="position1">
            <div className="img1">
                <img src={top_3_members[1].photo_path} alt=""/>
            </div>
            <div className="second-place">
                <div className="rank">
                    2
                </div>
                <div className="name">
                    {top_3_members[1].name}
                </div>
                <div className="dept">
                    {top_3_members[1].dept}
                </div> 
            </div>
        </div>
        <div className="position2">
            <div className="img2">
                <img src={top_3_members[0].photo_path} alt=""/>
            </div>
            <div className="first-place">
                    <div className="rank">
                            1
                    </div>
                    <div className="name">
                            {top_3_members[0].name}
                    </div>
                    <div className="dept">
                            {top_3_members[0].dept}
                    </div>
            </div> 
        </div>
        <div className="position3">
            <div className="img3">
                <img src={top_3_members[2].photo_path} alt=""/>
            </div>
            <div className="third-place">
                    <div className="rank">
                            3
                    </div>
                    <div className="name">
                            {top_3_members[2].name}
                    </div>
                    <div className="dept">
                            {top_3_members[2].dept}
                    </div>
            </div> 
        </div>
      </div>
    </>
  );
}
