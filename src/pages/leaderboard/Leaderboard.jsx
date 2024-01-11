import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";

import Particle from "../../components/Particle/Particle";
import Typewriters from "typewriter-effect";
import { useState } from "react";

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

export default function Leaderboard() {
  const recordPerPage = 5;
  tableData.sort((a, b) => b.points > a.points);
  const [currRecord, setCurrRecord] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState(tableData);
  const [data, setData] = useState(
    filteredData.length <= recordPerPage
      ? filteredData
      : tableData.slice(currRecord, currRecord + 5)
  );

  function paginate(start = 0){
    setCurrRecord(start);
    filteredData.sort((a, b) => b.points > a.points);
    setData(filteredData.length <= recordPerPage
      ? filteredData
      : filteredData.slice(currRecord, currRecord + 5));
  }

  function nextPage() {
    setCurrRecord(currRecord + recordPerPage);
    paginate(currRecord);
  }

  function prevPage() {
    setCurrRecord(currRecord - recordPerPage);
    paginate(currRecord);
  }

  function handleSearch(e) {
    console.log(e.target.value);
    const searchTerm = e.target.value;
    setInputValue(searchTerm);

    const results = tableData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredData(results);
    paginate();
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
            src="https://source.unsplash.com/150x150/?portrait?3"
            alt=""
            className="w-32 h-32 mx-auto rounded-full  aspect-square"
          />
          <div className="space-y-4 text-center divide-y ">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl">
                {tableData[0].name}
              </h2>
              <p className="px-5 text-xs sm:text-base ">
                {tableData[0].department}
              </p>
            </div>
            <div className="flex justify-center pt-2 space-x-4 align-center">
              {tableData[0].points}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center max-w-xs h-[23rem] p-6  rounded-xl sm:px-12 bg-[#a1a1a1] mx-5 my-6 shadow-[0px_0px_92px_10px_rgba(159,158,155,0.75)]">
          <img
            src="https://source.unsplash.com/150x150/?portrait?3"
            alt=""
            className="w-32 h-32 mx-auto rounded-full  aspect-square"
          />
          <div className="space-y-4 text-center divide-y ">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl">
                {tableData[1].name}
              </h2>
              <p className="px-5 text-xs sm:text-base ">
                {tableData[1].department}
              </p>
            </div>
            <div className="flex justify-center pt-2 space-x-4 align-center">
              {tableData[1].points}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center max-w-xs h-[20rem] p-6  rounded-xl sm:px-12 bg-[#cd7f32] mx-5 my-6 shadow-[0px_0px_92px_10px_rgba(213,153,100,1)]">
          <img
            src="https://source.unsplash.com/150x150/?portrait?3"
            alt=""
            className="w-32 h-32 mx-auto rounded-full  aspect-square"
          />
          <div className="space-y-4 text-center divide-y ">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl">
                {tableData[2].name}
              </h2>
              <p className="px-5 text-xs sm:text-base ">
                {tableData[2].department}
              </p>
            </div>
            <div className="flex justify-center pt-2 space-x-4 align-center">
              {tableData[2].points}
            </div>
          </div>
        </div>
      </div>

      {/* leaderboard */}
      <div class="antialiased font-space ">
        <div class="container mx-auto px-4 sm:px-8 ">
          <div class="py-8">
            <div>
              <h2 class="text-2xl font-semibold text-white leading-tight">
                Users
              </h2>
            </div>
            <div class="my-2 flex sm:flex-row flex-col opacity-70">
              <div class="flex flex-row mb-1 sm:mb-0">
                <div class="relative">
                  {/* <select
                            class="appearance-none h-full rounded-l  w-full bg-[#1A1920]  text-white py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-[#1A1920] focus:border-gray-500">
                            <option>5</option>
                            <option>10</option>
                            <option>20</option>
                        </select> */}
                  {/* <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div> */}
                </div>
                <div class="relative">
                  <select class=" h-full rounded-r  sm:rounded-r-none sm:border-r-0  block appearance-none w-full bg-[#1A1920] text-white py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-[#1A1920] ">
                    <option>All</option>
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
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
                        More info...
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#16161A]">
                    {data.map(
                      ({
                        img,
                        name,
                        regno,
                        department,
                        org,
                        contributions,
                        points,
                      }) => {
                        return (
                          <tr>
                            <td class="px-5 py-5 border-b border-gray-200 bg-[#16161A] text-sm">
                              <div class="flex items-center">
                                <div class="flex-shrink-0 w-10 h-10">
                                  <img
                                    class="w-full h-full rounded-full"
                                    src={img}
                                    alt=""
                                  />
                                </div>
                                <div class="ml-3">
                                  <p class="text-white whitespace-no-wrap text-md">
                                    {name}
                                  </p>
                                  <p class="text-white font-thin text-sm whitespace-no-wrap">
                                    {regno}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-[#16161A] ">
                              <p class="text-white whitespace-no-wrap text-md">
                                {department}
                              </p>
                              <p class="text-white whitespace-no-wrap text-sm">
                                {org}
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
                                </button>
                              </span>
                            </td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                </table>
                <div class="px-5 py-5 bg-[#16161A] justify-start   flex flex-col xs:flex-row items-center xs:justify-between          ">
                  <span class="text-xs xs:text-sm text-white">
                    Showing {currRecord} to {currRecord + 5} of{" "}
                    {tableData.length} Entries
                  </span>
                  <div class="inline-flex mt-2 xs:mt-0">
                    <button
                      onClick={prevPage}
                      class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
                    >
                      Prev
                    </button>
                    <button
                      onClick={nextPage}
                      class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* table data ends here */}
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <div className="flex flex-row justify-center items-center ">
   

   <Card className="h-full w-full sm:w-[80%] font-space bg-[#1A1920]">
     <CardHeader floated={false} shadow={false} className="rounded-none">
       <div className="mb-8 flex items-center justify-center bg-[#1A1920]" >
         <div>
           <Typography variant="h5" color="white" className="text-center font-space">
             Leaderboard
           </Typography>
           <Typography color="white" className=" font-normal font-space">
           Pioneers of the Penguination: Leading the Linux Way
           </Typography>
         </div>
         
       </div>
       <div className="flex flex-col items-center justify-between gap-4 md:flex-row bg-[#1A1920]">
         <Tabs value="all" className="w-full md:w-max">
           <TabsHeader>
             {TABS.map(({ label, value }) => (
               <Tab key={value} value={value}>
                 &nbsp;&nbsp;{label}&nbsp;&nbsp;
               </Tab>
             ))}
           </TabsHeader>
         </Tabs>
         <div className="w-full md:w-72">
           <Input
             label="Search"
             icon={<MagnifyingGlassIcon className="h-5 w-5" />}
           />
         </div>
       </div>
     </CardHeader>
     <CardBody className="overflow-scroll px-0">
       <table className="mt-4 w-full min-w-max table-auto text-left">
         <thead>
           <tr>
             {TABLE_HEAD.map((head, index) => (
               <th
                 key={head}
                 className="cursor-pointer border-y border-white-100 bg-white-50/50 p-4 transition-colors hover:bg-white-50"
               >
                 <Typography
                   variant="small"
                   color="white"
                   className="flex items-center justify-between gap-2 font-normal leading-none opacity-70 font-space"
                 >
                   {head}{" "}
                   {index !== TABLE_HEAD.length - 1 && (
                     <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                   )}
                 </Typography>
               </th>
             ))}
           </tr>
         </thead>
         <tbody>
           {TABLE_ROWS.map(
             ({ img, name, email, department, org, contributions, points }, index) => {
               const isLast = index === TABLE_ROWS.length - 1;
               const classes = isLast
                 ? "p-4"
                 : "p-4 border-b border-white-50";

               return (
                 <tr key={name}>
                   <td className={classes}>
                     <div className="flex items-center gap-3">
                       <Avatar src={img} alt={name} size="sm" />
                       <div className="flex flex-col">
                         <Typography
                           variant="small"
                           color="white"
                           className="font-normal font-space"
                         >
                           {name}
                         </Typography>
                         <Typography
                           variant="small"
                           color="white"
                           className="font-normal opacity-70 font-space"
                         >
                           {email}
                         </Typography>
                       </div>
                     </div>
                   </td>
                   <td className={classes}>
                     <div className="flex flex-col">
                       <Typography
                         variant="small"
                         color="white"
                         className="font-normal font-space"
                       >
                         {department}
                       </Typography>
                       <Typography
                         variant="small"
                         color="white"
                         className="font-normal opacity-70 font-space"
                       >
                         {org}
                       </Typography>
                     </div>
                   </td>
                   <td className={classes}>
                     <div className="w-max">
                       <Chip
                         variant="ghost"
                         size="sm"
                         value={contributions}
                         color={contributions >= 5 ? "green" : contributions >= 2 ? "orange" : contributions === 0 && "red"}

                       />
                     </div>
                   </td>
                   <td className={classes}>
                     <Typography
                       variant="small"
                       color="white"
                       className="font-normal font-space"
                     >
                       {points}
                     </Typography>
                   </td>
                   <td className={classes}>
                     <Tooltip content="Edit User">
                       <IconButton variant="text">
                         <PencilIcon className="h-4 w-4" />
                       </IconButton>
                     </Tooltip>
                   </td>
                 </tr>
               );
             },
           )}
         </tbody>
       </table>
     </CardBody>
     <CardFooter className="flex items-center justify-between border-t border-white-50 p-4">
       <Typography variant="small" color="white" className="font-normal font-space">
         Page 1 of 10
       </Typography>
       <div className="flex gap-2">
         <Button variant="outlined" size="sm" className="font-space">
           Previous
         </Button>
         <Button variant="outlined" size="sm" className="font-space">
           Next
         </Button>
       </div>
     </CardFooter>
   </Card>
   </div> */
}

// import React from 'react'
// import CardTable from "../../components/CardTable/CardTable";

// function Leaderboard() {
//   return (
//     <>
//       <div className="flex flex-wrap mt-4">
//         <div className="w-full mb-12 px-4">
//           <CardTable />
//         </div>
//         <div className="w-full mb-12 px-4">
//           <CardTable color="dark" />
//         </div>
//       </div>

//     </>
//   )
// }

// export default Leaderboard
