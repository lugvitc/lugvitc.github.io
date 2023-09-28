import '../topThree/topcards.css';
// import img1 from '../../images/top3ffcs/img1.png';
// import img2 from '../../images/top3ffcs/img2.png';
// import img3 from '../../images/top3ffcs/img3.png';
export default function Topcards({
    top_3_members, getImgfromAPI, picBaseURL
}) {
    if (top_3_members.length == 0) {
        return (<></>)
    }
    return (
        <>
            <div className="podium">
                <div className="position1">
                    <div className="img1">
                        <svg
                            width="70px"
                            height="70px"
                            viewBox="0 0 1024 1024"
                            class="icon"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M57 438.312l109.536 488.72h697.336l109.536-488.72-259.176 156.816-187.856-333.088-205.352 333.088z"
                                fill="#a7a7a7"
                            />
                            <path
                                d="M629.048 211.888c0 58.912-47.752 106.656-106.672 106.656-58.92 0-106.664-47.744-106.664-106.656 0-58.976 47.744-106.656 106.664-106.656s106.672 47.688 106.672 106.656z"
                                fill="#c0c0c0"
                            />
                            <path
                                d="M522.376 105.232c-58.92 0-106.664 47.68-106.664 106.656 0 58.912 47.744 106.656 106.664 106.656V105.232z"
                                fill="#c0c0c0"
                            />
                            <path d="M57 438.312l109.536 488.72h697.336z" fill="#b1b1b1 " />
                            <path
                                d="M973.408 438.312l-109.536 488.72H166.536z"
                                fill="#b1b1b1"
                            />
                            <path
                                d="M166.536 927.032h697.336L515.2 715.832z"
                                fill="#c0c0c0"
                            />
                            <path
                                d="M1017.856 409.44a55.2 55.2 0 0 1-55.264 55.208 55.184 55.184 0 0 1-55.216-55.208 55.2 55.2 0 0 1 55.216-55.264 55.2 55.2 0 0 1 55.264 55.264z"
                                fill="#c0c0c0"
                            />
                            <path
                                d="M962.592 354.176a55.2 55.2 0 0 0-55.216 55.264 55.184 55.184 0 0 0 55.216 55.208V354.176z"
                                fill="#c0c0c0"
                            />
                            <path
                                d="M116.656 409.44a55.216 55.216 0 0 1-55.272 55.208A55.208 55.208 0 0 1 6.144 409.44a55.208 55.208 0 0 1 55.24-55.264 55.224 55.224 0 0 1 55.272 55.264z"
                                fill="#c0c0c0"
                            />
                            <path
                                d="M61.384 354.176A55.216 55.216 0 0 0 6.144 409.44a55.2 55.2 0 0 0 55.24 55.208V354.176z"
                                fill="#c0c0c0"
                            />
                        </svg>
                        <img src={picBaseURL + top_3_members[1].regno} onError={({ currentTarget }) => {currentTarget.onerror = null;currentTarget.src=getImgfromAPI(1);}} />
                    </div>
                    <div className="second-place">
                        <div className="rank">
                            2
                        </div>
                        <div className="name">
                            {top_3_members[1].display}
                        </div>
                        <div className="dept">
                            {top_3_members[1].dept}
                        </div>
                    </div>
                </div>
                <div className="position2">
                    <div className="img2">
                        <svg
                            width="70px"
                            height="70px"
                            viewBox="0 0 1024 1024"
                            class="icon"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M57 438.312l109.536 488.72h697.336l109.536-488.72-259.176 156.816-187.856-333.088-205.352 333.088z"
                                fill="#EC9312"
                            />
                            <path
                                d="M629.048 211.888c0 58.912-47.752 106.656-106.672 106.656-58.92 0-106.664-47.744-106.664-106.656 0-58.976 47.744-106.656 106.664-106.656s106.672 47.688 106.672 106.656z"
                                fill="#CB1B5B"
                            />
                            <path
                                d="M522.376 105.232c-58.92 0-106.664 47.68-106.664 106.656 0 58.912 47.744 106.656 106.664 106.656V105.232z"
                                fill="#E5226B"
                            />
                            <path d="M57 438.312l109.536 488.72h697.336z" fill="#F4A832" />
                            <path
                                d="M973.408 438.312l-109.536 488.72H166.536z"
                                fill="#F4A832"
                            />
                            <path
                                d="M166.536 927.032h697.336L515.2 715.832z"
                                fill="#F5B617"
                            />
                            <path
                                d="M1017.856 409.44a55.2 55.2 0 0 1-55.264 55.208 55.184 55.184 0 0 1-55.216-55.208 55.2 55.2 0 0 1 55.216-55.264 55.2 55.2 0 0 1 55.264 55.264z"
                                fill="#0472AF"
                            />
                            <path
                                d="M962.592 354.176a55.2 55.2 0 0 0-55.216 55.264 55.184 55.184 0 0 0 55.216 55.208V354.176z"
                                fill="#1A8DCC"
                            />
                            <path
                                d="M116.656 409.44a55.216 55.216 0 0 1-55.272 55.208A55.208 55.208 0 0 1 6.144 409.44a55.208 55.208 0 0 1 55.24-55.264 55.224 55.224 0 0 1 55.272 55.264z"
                                fill="#0472AF"
                            />
                            <path
                                d="M61.384 354.176A55.216 55.216 0 0 0 6.144 409.44a55.2 55.2 0 0 0 55.24 55.208V354.176z"
                                fill="#0092D2"
                            />
                        </svg>
                        <img src={picBaseURL + top_3_members[0].regno} onError={({ currentTarget }) => {currentTarget.onerror = null;currentTarget.src=getImgfromAPI(0);}} />
                    </div>
                    <div className="first-place">
                        <div className="rank">
                            1
                        </div>
                        <div className="name">
                            {top_3_members[0].display}
                        </div>
                        <div className="dept">
                            {top_3_members[0].dept}
                        </div>
                    </div>
                </div>
                <div className="position3">
                    <div className="img3">
                        <svg
                            width="70px"
                            height="70px"
                            viewBox="0 0 1024 1024"
                            class="icon"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M57 438.312l109.536 488.72h697.336l109.536-488.72-259.176 156.816-187.856-333.088-205.352 333.088z"
                                fill="#5e3d1b"
                            />
                            <path
                                d="M629.048 211.888c0 58.912-47.752 106.656-106.672 106.656-58.92 0-106.664-47.744-106.664-106.656 0-58.976 47.744-106.656 106.664-106.656s106.672 47.688 106.672 106.656z"
                                fill="#835220"
                            />
                            <path
                                d="M522.376 105.232c-58.92 0-106.664 47.68-106.664 106.656 0 58.912 47.744 106.656 106.664 106.656V105.232z"
                                fill="#835220"
                            />
                            <path d="M57 438.312l109.536 488.72h697.336z" fill="#704a23" />
                            <path
                                d="M973.408 438.312l-109.536 488.72H166.536z"
                                fill="#704a23"
                            />
                            <path
                                d="M166.536 927.032h697.336L515.2 715.832z"
                                fill="#835220"
                            />
                            <path
                                d="M1017.856 409.44a55.2 55.2 0 0 1-55.264 55.208 55.184 55.184 0 0 1-55.216-55.208 55.2 55.2 0 0 1 55.216-55.264 55.2 55.2 0 0 1 55.264 55.264z"
                                fill="#835220"
                            />
                            <path
                                d="M962.592 354.176a55.2 55.2 0 0 0-55.216 55.264 55.184 55.184 0 0 0 55.216 55.208V354.176z"
                                fill="#835220"
                            />
                            <path
                                d="M116.656 409.44a55.216 55.216 0 0 1-55.272 55.208A55.208 55.208 0 0 1 6.144 409.44a55.208 55.208 0 0 1 55.24-55.264 55.224 55.224 0 0 1 55.272 55.264z"
                                fill="#835220"
                            />
                            <path
                                d="M61.384 354.176A55.216 55.216 0 0 0 6.144 409.44a55.2 55.2 0 0 0 55.24 55.208V354.176z"
                                fill="#835220"
                            />
                        </svg>
                        <img src={picBaseURL + top_3_members[2].regno} onError={({ currentTarget }) => {currentTarget.onerror = null;currentTarget.src=getImgfromAPI(2);}} />
                    </div>
                    <div className="third-place">
                        <div className="rank">
                            3
                        </div>
                        <div className="name">
                            {top_3_members[2].display}
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
