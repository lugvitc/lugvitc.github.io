import React, { useEffect } from "react";
import axios from "axios";
import { Button } from "@material-tailwind/react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Typography,
} from "@material-tailwind/react";
import Particle from "../../components/Particle/Particle";
import Typewriters from "typewriter-effect";
import { useState } from "react";
import { apiURL, randomPhoto } from "../../utils/constant";

const TABLE_HEAD = [
  "Member",
  "Department",
  "Contributions",
  "Points",
  "More Info",
];

const tableData = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    regno: "22BAX1002",
    department: "Manager",
    org: "Organization",
    contributions: 5,
    points: 3126,
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    regno: "22BAX1002",
    department: "Manager",
    org: "Organization",
    contributions: 5,
    points: 3644,
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    regno: "22BAX1002",
    department: "Manager",
    org: "Organization",
    contributions: 5,
    points: 3515,
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    regno: "22BAX1002",
    department: "Programator",
    org: "Developer",
    contributions: 2,
    points: 2661,
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Laurent Perrier",
    regno: "21BCE4545",
    department: "Executive",
    org: "Projects",
    contributions: 2,
    points: 1919,
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    regno: "22BAX1002",
    department: "Programator",
    org: "Developer",
    contributions: 0,
    points: 1928,
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    regno: "22BAX1002",
    department: "Manager",
    org: "Executive",
    contributions: 2,
    points: 2128,
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    regno: "22BAX1002",
    department: "Programator",
    org: "Developer",
    contributions: 0,
    points: 1912,
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    regno: "22BAX1002",
    department: "Manager",
    org: "Executive",
    contributions: 2,
    points: 962,
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    regno: "22BAX1002",
    department: "Programator",
    org: "Developer",
    contributions: 0,
    points: 291,
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    regno: "22BAX1002",
    department: "Manager",
    org: "Executive",
    contributions: 2,
    points: 29804,
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    regno: "22BAX1002",
    department: "Programator",
    org: "Developer",
    contributions: 0,
    points: 192,
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    regno: "22BAX1002",
    department: "Manager",
    org: "Executive",
    contributions: 2,
    points: 2891,
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Dhananjay Chauhan",
    regno: "22BAX1002",
    department: "Programator",
    org: "Developer",
    contributions: 0,
    points: 198,
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    regno: "22BAX1002",
    department: "Manager",
    org: "Executive",
    contributions: 2,
    points: 981,
  },
];


const defaultTopCardsData = [
  {
    imgUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    name: "Loading...",
    regno: "Loading...",
    department: "Loading...",
    org: "Loading...",
    contributions: 0,
    points: 0,
  },
  {
    imgUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    name: "Loading...",
    regno: "Loading...",
    department: "Loading...",
    org: "Loading...",
    contributions: 0,
    points: 0,
  },
  {
    imgUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    name: "Loading...",
    regno: "Loading...",
    department: "Loading...",
    org: "Loading...",
    contributions: 0,
    points: 0,
  },
  {
    imgUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    name: "Loading...",
    regno: "Loading...",
    department: "Loading...",
    org: "Loading...",
    contributions: 0,
    points: 0,
  },
 
];

export default function Leaderboard() {
  const [data, setData] = useState([]);
  const [topCardsData, setTopCardsData] = useState(defaultTopCardsData);

  const imageUrl = `${apiURL}/leaderboard/image/`;
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  useEffect(() => {
    axios
      .get(`${apiURL}/leaderboard`)
      .then(function (response) {
        console.log(response.data);
        const topData = [];
        let temp ={};
        temp["name"]=response.data[0].name;
        temp["department"]=response.data[0].department;
        temp["points"]=response.data[0].points;
        temp["imgUrl"]=response.data[0].photo ? `${apiURL}/leaderboard/image/`+response.data[0].reg_no : randomPhoto();
        
        topData.push(temp);
        topData.push(temp);
        topData.push(temp);

        console.log(topData);
        setData(response.data);
        setTopCardsData(topData);
        data.sort((a, b) => b.points > a.points);
      })
      .catch(function (error) {
        console.log(error);
        });
  },[]);

  // tableData.sort((a, b) => b.points > a.points);



  function handleSearch(e) {
    console.log(e.target.value);
    const searchTerm = e.target.value;
    if (searchTerm=="") {
      axios
      .get(`${apiURL}/leaderboard`)
      .then(function (response) {
        console.log(response.data);
        // const userData = [];

        setData(response.data);
        data.sort((a, b) => b.points > a.points);
      })
      .catch(function (error) {
        console.log(error);
        });
    }
    else{
      setInputValue(searchTerm);

      const results = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setData(results);
    }
    

  }

  return (
    <>
      <Particle />
      {/* Header */}
      <div className="flex flex-col justify-center items-center font-space my-5 py-5">
        <h2 class="my-5 text-base font-medium tracking-tight text-gray-200 uppercase">
          <Typewriters
            options={{
              strings: ["Leaderboard"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <p class="max-w-5xl px-5 mt-2 text-3xl font-black leading-tight text-center text-white sm:mt-0 sm:px-0 sm:text-5xl">
          Pioneers of the Penguination: Leading the Linux Way
        </p>
      </div>

      {/* header end */}

      {/* top cards */}
      <div className="flex flex-row flex-wrap justify-center items-center font-space text-white">
        <div className="flex flex-col justify-center max-w-xs h-[25rem]  p-6  rounded-xl sm:px-12 bg-[#FFD700] mx-5 my-6 shadow-[0px_0px_92px_10px_rgba(248,231,28,1)] ">
          <img
            src={topCardsData[0].imgUrl}
            alt="loadinf"
            className="w-32 h-32 mx-auto rounded-full  aspect-square"
          />
          <div className="space-y-4 text-center divide-y ">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl">
                {topCardsData[0].name}
              </h2>
              <p className="px-5 text-xs sm:text-base ">
                {topCardsData[0].department}
              </p>
            </div>
            <div className="flex justify-center pt-2 space-x-4 align-center">
              {topCardsData[0].points}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center max-w-xs h-[23rem] p-6  rounded-xl sm:px-12 bg-[#a1a1a1] mx-5 my-6 shadow-[0px_0px_92px_10px_rgba(159,158,155,0.75)]">
          <img
            src={topCardsData[0].imgUrl}
            alt=""
            className="w-32 h-32 mx-auto rounded-full  aspect-square"
          />
          <div className="space-y-4 text-center divide-y ">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl">
                {topCardsData[1].name}
              </h2>
              <p className="px-5 text-xs sm:text-base ">
                {topCardsData[1].department}
              </p>
            </div>
            <div className="flex justify-center pt-2 space-x-4 align-center">
              {topCardsData[1].points}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center max-w-xs h-[20rem] p-6  rounded-xl sm:px-12 bg-[#cd7f32] mx-5 my-6 shadow-[0px_0px_92px_10px_rgba(213,153,100,1)]">
          <img
            src={topCardsData[0].imgUrl}
            alt=""
            className="w-32 h-32 mx-auto rounded-full  aspect-square"
          />
          <div className="space-y-4 text-center divide-y ">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl">
                {topCardsData[0].name}
              </h2>
              <p className="px-5 text-xs sm:text-base ">
                {topCardsData[0].department}
              </p>
            </div>
            <div className="flex justify-center pt-2 space-x-4 align-center">
              {topCardsData[0].points}
            </div>
          </div>
        </div>
      </div>

      {/* leaderboard */}
      <div class="antialiased font-space ">
        <div class="container mx-auto px-4 sm:px-8 ">
          <div class="py-8">
            <div>
              
            </div>
            <div class="my-2 flex sm:flex-row flex-col opacity-70">
              <div class="flex flex-row mb-1 sm:mb-0">
                <div class="relative">
                </div>
                <div class="relative">
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white ">
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="block relative ">
                <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2 bg-[#1A1920]">
                  <svg
                    viewBox="0 0 24 24"
                    class="h-4 w-4 fill-current  text-gray-500"
                  >
                    <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                  </svg>
                </span>
                <input
                  id="search"
                  onChange={handleSearch}
                  placeholder="Search"
                  class="appearance-none rounded-r rounded-l sm:rounded-l-none  block pl-8 pr-6 py-2 w-full bg-[#1A1920] text-sm placeholder-gray-400 text-white focus:bg-[#1A1920] focus:placeholder-gray-600 focus:text-white focus:outline-none"
                />
              </div>
            </div>
            {/* Table rows starts here - */}

            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto ">
              <div class="inline-block min-w-full shadow rounded-lg overflow-hidden bg-[bg-[#16161A]">
                <table class="min-w-full leading-normal bg-[#16161A]">
                  <thead>
                    <tr>
                      <th class="px-5 py-3 border-b-2 border-gray-200  text-left text-sm font-semibold text-gray-400 uppercase tracking-wider">
                        Member
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200  text-left text-sm font-semibold text-gray-400 uppercase tracking-wider">
                        Department
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200  text-left text-sm font-semibold text-gray-400 uppercase tracking-wider">
                        Contributions
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200  text-left text-sm font-semibold text-gray-400 uppercase tracking-wider">
                        Points
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200  text-left text-sm font-semibold text-gray-400 uppercase tracking-wider">
                        More info ..
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#16161A]">
                    {data.map(
                      ({
                        photo,
                        name,
                        reg_no,
                        department,
                        member_type,
                        contributions,
                        contribution_details,
                        points,
                      }) => {
                        return (
                          <tr>
                            <td class="px-5 py-5 border-b border-gray-200 bg-[#16161A] text-sm">
                              <div class="flex items-center">
                                <div class="flex-shrink-0 w-10 h-10">
                                  <img
                                    class="w-full h-full rounded-full"
                                    src={photo ? imageUrl + reg_no : randomPhoto()}
                                    alt=""
                                  />
                                </div>
                                <div class="ml-3">
                                  <p class="text-white whitespace-no-wrap text-md">
                                    {name}
                                  </p>
                                  <p class="text-white font-thin text-sm whitespace-no-wrap">
                                    {reg_no}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-[#16161A] ">
                              <p class="text-white whitespace-no-wrap text-md">
                                {department}
                              </p>
                              <p class="text-white whitespace-no-wrap text-sm">
                                {member_type}
                              </p>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-[#16161A] text-md">
                              <p class="text-white ml-5">{contributions}</p>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-[#16161A] text-sm">
                              <span class="relative inline-block px-3 py-1 font-semibold text-white leading-tight">
                                <span
                                  aria-hidden
                                  class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                ></span>
                                <span class="relative">{points}</span>
                              </span>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-[#16161A] text-sm">
                              <span class="relative inline-block px-3 py-1 font-semibold text-white leading-tight">
                                <span
                                  aria-hidden
                                  class="absolute inset-0  rounded-full"
                                ></span>
                                <button class="relative hover:text-blue-300">
                                  <Popover>
                                    <PopoverHandler>
                                      <Button>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.5"
                                          stroke="currentColor"
                                          class="w-6 h-6"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                          />
                                        </svg>
                                      </Button>
                                    </PopoverHandler>
                                    <PopoverContent className="z-[999] grid w-[28rem] grid-cols-1 overflow-hidden p-0">
                                      <div className="p-4">
                                        <Typography
                                          color="blue-gray"
                                          className="mb-2 text-lg font-bold"
                                        >
                                          Contributions
                                        </Typography>
                                        <Typography
                                          variant="small"
                                          color="gray"
                                          className="mb-14 font-normal text-blue-gray-500"
                                        >
                                          {contribution_details}
                                        </Typography>
                                        <a
                                          href="#"
                                          className="-ml-3 inline-block"
                                        ></a>
                                      </div>
                                    </PopoverContent>
                                  </Popover>
                                </button>
                              </span>
                            </td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}