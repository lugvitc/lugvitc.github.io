import '../topThree/topcards.css';
import img1 from '../../images/top3ffcs/img1.png';
import img2 from '../../images/top3ffcs/img2.png';
import img3 from '../../images/top3ffcs/img3.png';
export default function Topcards(){
    return (
        <>
            <div className="podium">
        <div className="position1">
            <div className="img1">
                <img src={img1} alt="eren jaegar"/>
            </div>
            <div className="second-place">
                <div className="rank">
                    2
                </div>
                <div className="name">
                    Eren
                </div>
                <div className="dept">
                    Media
                </div> 
            </div>
        </div>
        <div className="position2">
            <div className="img2">
                <img src={img2} alt="eren jaegar"/>
            </div>
            <div className="first-place">
                    <div className="rank">
                            1
                    </div>
                    <div className="name">
                            Itachi Uchiha
                    </div>
                    <div className="dept">
                            Technical
                    </div>
            </div> 
        </div>
        <div className="position3">
            <div className="img3">
                <img src={img3} alt="eren jaegar"/>
            </div>
            <div className="third-place">
                    <div className="rank">
                            3
                    </div>
                    <div className="name">
                            Gojo
                    </div>
                    <div className="dept">
                            Technical
                    </div>
            </div> 
        </div>

    </div>
        </>
    );
}