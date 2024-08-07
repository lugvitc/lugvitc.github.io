import React from "react";
import Particle from "../../components/Particle/Particle";
import Typewriters from "typewriter-effect";
import LugIcon from "../../images/icons/lug.png";

function Contact() {
  const data = [
    {
      label: "Technical",
      value: "Technical",
      head: "Aadivishnu Gajendra",
      contact: "8657069756",
    },
    {
      label: "Outreach",
      value: "Outreach",
      head: "Keerthana S",
      contact: "8838747110",
    },
    {
      label: "Media",
      value: "Media",
      head: "Harshanth Srinivasan",
      contact: "7200043686",
    },
    // {
    //   label: "Advisory",
    //   value: "Advisory",
    //   desc: `advisory@lugvitc.net`,
    //   head:"",
    //   contact:""
    // },
    {
      label: "Treasury",
      value: "Treasury",
      head: "Shyam Sundar R",
      contact: "7449097613",
    },
    {
      label: "Content",
      value: "Content",
      head: "Siya Kumar",
      contact: "8920892177",
    },
  ];
  return (
    <>
      <Particle />
      {/* Header */}
      <div className="flex flex-col justify-center items-center font-space my-5 py-5">
        <h2 className="my-5 text-base font-medium tracking-tight text-white uppercase">
          <Typewriters
            options={{
              strings: ["Contact Us"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <p className="max-w-5xl px-5 mt-2 text-3xl font-black leading-tight text-center text-white sm:mt-0 sm:px-0 sm:text-4xl">
          Send a Ping, Receive a Pong: Connecting Through the Linux Way.
        </p>
      </div>

      {/* header end */}
      <div className="h-10"></div>
      <div className="h-10"></div>
      <div className="bg-transparent rounded-lg shadow-xl pb-8">
        {/* <div className="w-full h-[250px]">
           <img src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg" className="w-full h-full rounded-tl-lg rounded-tr-lg"/>
       </div> */}

        <div className="flex flex-col items-center -mt-20 font-space text-white">
          <img src={LugIcon} className="w-20 h-20   rounded-full" />
          <div className="flex items-center space-x-2 mt-2">
            <p className="text-2xl text-center">The Linux Club</p>
            <span className="bg-white rounded-full p-1" title="Verified">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-black h-2.5 w-2.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </span>
          </div>
          <p className="text-gray-100 text-center">
            Vellore Institute of Technology, Chennai Campus
          </p>
          <p className="text-sm text-center text-gray-300">
            Kelambakkam - Vandalur Rd, Rajan Nagar, Chennai, Tamil Nadu 600127
          </p>
        </div>
      </div>

      {/*  */}
      <div className="h-10"></div>
      <div className="w-full mx-auto px-4 font-space ">
        <div className="flex flex-wrap text-center justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold text-white">
              <Typewriters
                options={{
                  strings: ["Call us here"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            <p className="text-lg  leading-relaxed mt-4 mb-4 text-white">
              Contact the people who lead us.
            </p>
          </div>
        </div>
      </div>
      <div className="h-20"></div>

      <div className="flex flex-row flex-wrap justify-evenly items-center w-full">
        <div className="w-[300px] sm:w-[300px]  px-6 mx-5 text-center">
          <div className=" p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </div>
          <h6 className="text-xl mt-5 font-semibold text-white">President</h6>
          <p className="mt-2 mb-4 text-white">Ojass Praven Bharati </p>
          <p className="mt-2 mb-4 text-white">+91 8830933096</p>
        </div>
        <div className="w-[300px] sm:w-[300px]  px-6 mx-5 text-center">
          <div className=" p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </div>
          <h5 className="text-xl mt-5 font-semibold text-white">
            Vice-President
          </h5>
          <p className="mt-2 mb-4 text-white">Shaina</p>
          <p className="mt-2 mb-4 text-white">+91 8925785445</p>
        </div>
        {/* <div className="w-[300px] sm:w-[300px]  px-6 mx-5 text-center">
          <div className=" p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
            <i className="fas fa-phone text-xl"></i>
          </div>
          <h5 className="text-xl mt-5 font-semibold text-white">
            Faculty Co-ordinator
          </h5>
          <p className="mt-2 mb-4 text-white">Somenoe</p>
          <p className="mt-2 mb-4 text-white">+91 8072320756</p>
        </div> */}
      </div>

      <div className="h-10"></div>
      <div className="flex flex-row justify-center items-center"></div>

      {/*  */}

      <div class="w-10/12 md:w-7/12 lg:5/12 mx-auto relative py-20 font-space text-wh">
        <h1 class="text-3xl text-center font-bold text-white">
          <Typewriters
            options={{
              strings: ["Contact our departments!"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <div class="border-l-2 mt-10">
          {data.map(({ label, desc, head, contact }) => {
            return (
              <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center justify-evenly px-6 py-4 bg-white text-blue-gray-800 rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                <div class="w-5 h-5 bg-white absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                <div class="w-10 h-1 bg-white absolute -left-10 z-0"></div>
                {/* <div className="flex flex-row justify-start items-center"> */}
                <div class="flex-auto mx-5">
                  <h1 class="text-xl font-bold">{label}</h1>
                </div>
                <a href="#" class="text-center text-blue-gray-800 mx-5">
                  {head}
                </a>
                <a href="#" class="text-center text-blue-gray-800 mx-5">
                  {contact}
                </a>
                {/* </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Contact;
