// import img1 from '../../images/top3ffcs/img1.png';
// import img2 from '../../images/top3ffcs/img2.png';
// import img3 from '../../images/top3ffcs/img3.png';


export default function Topcards({
    top_3_members, getImgfromAPI, picBaseURL
}) {
    if (top_3_members.length < 3) {
        return (<></>)
    }
    return (
        // The tailwind styles are repeated here, TODO: make a card component and use that here
        <>
            <div className="flex flex-row justify-evenly md:justify-center items-center flex-wrap w-100 mb-8 h-[60vh]">
                <div className="flex flex-col items-center w-30 sm:w-40 h-20 md:h-[40vh] md:w-52 md:mr-[2vw] md:mt-[7vh]">
                    <div className="flex flex-col items-center justify-center w-20 h-[100px] md:w-52 md:h-52 z-[2]">
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
                        <img className="w-20 h-20 rounded-full md:w-28 md:h-28 border-nord1 border-[1px]" src={picBaseURL + top_3_members[1].regno} onError={({ currentTarget }) => {currentTarget.onerror = null;currentTarget.src=getImgfromAPI(1);}} />
                    </div>
                    <div className="flex flex-col justify-center items-center h-30 w-30 bg-nord2 rounded-2xl text-xs font-mono md:h-60 md:w-52 md:mt-[-40px] md:text-3xl font-bold text-center p-1">
                        <div className="font-poiret text-xl md:text-5xl md:mt-16">
                            2
                        </div>
                        <div className="text-xs md:mt-1 md:text-2xl">
                            {top_3_members[1].display}
                        </div>
                        <div className="text-xs md:mt-1 md:text-2xl">
                            {top_3_members[1].dept}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center w-30 sm:w-40 h-20 md:h-[40vh] md:w-52">
                    <div className="flex flex-col items-center justify-center w-20 h-[100px] md:w-52 md:h-52 z-[2]">
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
                        <img className="w-20 h-20 rounded-full md:w-28 md:h-28 border-nord1 border-[1px]" src={picBaseURL + top_3_members[0].regno} onError={({ currentTarget }) => {currentTarget.onerror = null;currentTarget.src=getImgfromAPI(0);}} />
                    </div>
                    <div className="flex flex-col items-center h-30 w-30 bg-nord2 rounded-2xl text-xs font-mono md:h-60 md:w-52 md:mt-[-40px] md:text-3xl font-bold text-center p-1">
                        <div className="font-poiret text-xl md:text-5xl md:mt-16">
                            1
                        </div>
                        <div className="text-xs md:mt-1 md:text-2xl">
                            {top_3_members[0].display}
                        </div>
                        <div className="text-xs md:mt-1 md:text-2xl">
                            {top_3_members[0].dept}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center w-30 sm:w-40 h-20 md:h-[40vh] md:w-52 md:ml-[2vw] md:mt-[7vh]">
                    <div className="flex flex-col items-center justify-center w-20 h-[100px] md:w-52 md:h-52 z-[2]">
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
                        <img className="w-20 h-20 rounded-full md:w-28 md:h-28 border-nord1 border-[1px]" src={picBaseURL + top_3_members[2].regno} onError={({ currentTarget }) => {currentTarget.onerror = null;currentTarget.src=getImgfromAPI(2);}} />
                    </div>
                    <div className="flex flex-col justify-center items-center h-30 w-30 bg-nord2 rounded-2xl text-xs font-mono md:h-60 md:w-52 md:mt-[-40px] md:text-3xl font-bold text-center p-1">
                        <div className="font-poiret text-xl md:text-5xl md:mt-16">
                            3
                        </div>
                        <div className="md:mt-1 md:text-2xl">
                            {top_3_members[2].display}
                        </div>
                        <div className="md:mt-1 md:text-2xl">
                            {top_3_members[2].dept}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
