import '../leaderboard_list/leaderboard_list.css';
import img1 from '../../images/top3ffcs/img1.png';
export default function List(){
    return (
        <>
        <div className="container">
        <div className="position">
			<div className='rank'>4</div>
            {/* <div className="img">
                <img src={img1} alt="eren jaegar"/>
            </div> */}
            <div className="block">
				<div className="img">
                	<img src={img1} alt="eren jaegar"/>
					Eren
            	</div>
            </div>
        </div>

    </div>
        </>
    );
}