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
import { supabase } from "../../utils/supabase";
import "react-responsive-modal/styles.css";
import Modal from "react-responsive-modal";

const defaultTopCardsData = [
  {
    imgUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    name: "Loading...",
    regno: "Loading...",
    department: "Loading...",
    org: "Loading...",
    contributions: 0,
    points: 0,
  },
  {
    imgUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    name: "Loading...",
    regno: "Loading...",
    department: "Loading...",
    org: "Loading...",
    contributions: 0,
    points: 0,
  },
  {
    imgUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    name: "Loading...",
    regno: "Loading...",
    department: "Loading...",
    org: "Loading...",
    contributions: 0,
    points: 0,
  },
  {
    imgUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
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
  const [current_contribution_details, setCurrent_contribution_details] =
    useState("");
  const [modalOpen, setModalOpen] = React.useState(false);
  const onOpenModal = (credential_details) => {
    setCurrent_contribution_details(credential_details);
    setModalOpen(true);
  };
  const onCloseModal = () => setModalOpen(false);

  const getLeaderboardData = async () => {
    try {
      const { data, error } = await supabase
        .from("leaderboard")
        .select()
        .order("points", { ascending: false })
        .order("reg_no", { ascending: true });
      if (error) throw error;
      setData(data);
      console.log(data);
      // create topData from data index 0 to 2, if that index no data then use defaultTopdata for that index
      const topData = [0, 1, 2].map(
        (index) => data[index] || defaultTopCardsData[index],
      );
      setTopCardsData(topData);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getLeaderboardData();
    // axios
    //   .get(`${apiURL}/leaderboard`)
    //   .then(function (response) {
    //     let raw_data = response.data
    //     raw_data.sort((a, b) => b.points - a.points);
    //     setData(raw_data);
    //     setTopCardsData(raw_data.slice(0, 3));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }, []);

  // tableData.sort((a, b) => b.points > a.points);

  function handleSearch(e) {
    console.log(e.target.value);
    const searchTerm = e.target.value;
    if (searchTerm == "") {
      axios
        .get(`${apiURL}/leaderboard`)
        .then(function (response) {
          let raw_data = response.data;
          raw_data.sort((a, b) => b.points - a.points);
          setData(raw_data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      setInputValue(searchTerm);

      const results = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setData(results);
    }
  }

  return (
    <>
      <Particle />
      {/* Header */}
      <div className="flex flex-col justify-center items-center font-space my-5 py-5">
        <h2 className="my-5 text-base font-medium tracking-tight text-gray-200 uppercase">
          <Typewriters
            options={{
              strings: ["Leaderboard"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <p className="max-w-5xl px-5 mt-2 text-3xl font-black leading-tight text-center text-white sm:mt-0 sm:px-0 sm:text-5xl">
          Pioneers of the Penguination: Leading the Linux Way
        </p>
      </div>

      {/* header end */}

      {/* top cards */}
      <div className="flex flex-row flex-wrap justify-center items-center font-space text-white">
        <div className="flex flex-col justify-center max-w-xs h-[23rem] p-6  rounded-xl sm:px-12 mx-5 my-6 shadow-[0px_0px_32px_10px_rgba(159,158,155,0.75)]">
          <img
            src={topCardsData[1].photo ? imageUrl + reg_no : randomPhoto()}
            alt=""
            className="w-32 h-32 mx-auto rounded-full  aspect-square"
            onError={(e) => {
              e.target.onerror = null;
              setTimeout(() => {
                e.target.src = topCardsData[1].photo
                  ? imageUrl + reg_no
                  : randomPhoto();
              }, 1000);
            }}
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

        <div className="flex flex-col justify-center max-w-xs h-[25rem]  p-6  rounded-xl sm:px-12 mx-5 my-6 shadow-[0px_0px_32px_10px_rgba(248,231,28,1)] ">
          <img
            src={topCardsData[0].photo ? imageUrl + reg_no : randomPhoto()}
            alt="loadinf"
            className="w-32 h-32 mx-auto rounded-full  aspect-square"
            onError={(e) => {
              e.target.onerror = null;
              setTimeout(() => {
                e.target.src = topCardsData[0].photo
                  ? imageUrl + reg_no
                  : randomPhoto();
              }, 1000);
            }}
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

        <div className="flex flex-col justify-center max-w-xs h-[20rem] p-6  rounded-xl sm:px-12 mx-5 my-6 shadow-[0px_0px_32px_10px_rgba(213,153,100,1)]">
          <img
            src={topCardsData[2].photo ? imageUrl + reg_no : randomPhoto()}
            alt=""
            className="w-32 h-32 mx-auto rounded-full  aspect-square"
            onError={(e) => {
              e.target.onerror = null;
              setTimeout(() => {
                e.target.src = topCardsData[2].photo
                  ? imageUrl + reg_no
                  : randomPhoto();
              }, 1000);
            }}
          />
          <div className="space-y-4 text-center divide-y ">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl">
                {topCardsData[2].name}
              </h2>
              <p className="px-5 text-xs sm:text-base ">
                {topCardsData[2].department}
              </p>
            </div>
            <div className="flex justify-center pt-2 space-x-4 align-center">
              {topCardsData[2].points}
            </div>
          </div>
        </div>
      </div>

      {/* leaderboard */}
      <div className="antialiased font-space ">
        <div className="container mx-auto px-4 sm:px-8 ">
          <div className="py-8">
            <div></div>
            <div className="my-2 flex sm:flex-row flex-col opacity-70">
              <div className="flex flex-row mb-1 sm:mb-0">
                <div className="relative"></div>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white ">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="block relative ">
                <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2 bg-[#1A1920]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current  text-gray-500"
                  >
                    <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                  </svg>
                </span>
                <input
                  id="search"
                  onChange={handleSearch}
                  placeholder="Search"
                  className="appearance-none rounded-r rounded-l sm:rounded-l-none  block pl-8 pr-6 py-2 w-full bg-[#1A1920] text-sm placeholder-gray-400 text-white focus:bg-[#1A1920] focus:placeholder-gray-600 focus:text-white focus:outline-none"
                />
              </div>
            </div>
            {/* Table rows starts here - */}

            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto ">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden bg-[bg-[#16161A]">
                <table className="min-w-full leading-normal bg-[#16161A]">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-200 text-center text-sm font-semibold text-gray-400 uppercase tracking-wider">
                        Rank
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 text-center text-sm font-semibold text-gray-400 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 text-center text-sm font-semibold text-gray-400 uppercase tracking-wider">
                        Points
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#16161A]">
                    {data.map(
                      (
                        { photo, name, reg_no, contribution_details, points },
                        index,
                      ) => (
                        <tr
                          key={reg_no}
                          onClick={() => onOpenModal(contribution_details)}
                          className="hover:cursor-pointer"
                        >
                          {/* Rank Column */}
                          <td className="px-5 py-5 border-b border-gray-200 bg-[#16161A] text-sm text-white text-center">
                            {index + 1}
                          </td>

                          {/* User Details */}
                          <td className="px-5 py-5 border-b border-gray-200 bg-[#16161A] text-sm">
                            <div className="flex items-center justify-center">
                              <div className="flex-shrink-0 w-10 h-10">
                                <img
                                  className="w-full h-full rounded-full"
                                  src={
                                    photo ? imageUrl + reg_no : randomPhoto()
                                  }
                                  alt="Profile"
                                  onError={(e) => {
                                    e.target.onerror = null;
                                    setTimeout(() => {
                                      e.target.src = photo
                                        ? imageUrl + reg_no
                                        : randomPhoto();
                                    }, 1000);
                                  }}
                                />
                              </div>
                              <div className="ml-3">
                                <p className="text-white whitespace-no-wrap text-md">
                                  {name}
                                </p>
                              </div>
                            </div>
                          </td>

                          {/* Points */}
                          <td className="px-5 py-5 border-b border-gray-200 bg-[#16161A] text-sm text-center">
                            <span className="relative inline-block px-3 py-1 font-semibold text-white leading-tight">
                              <span
                                aria-hidden
                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                              ></span>
                              <span className="relative">{points}</span>
                            </span>
                          </td>
                        </tr>
                      ),
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal open={modalOpen} onClose={onCloseModal}>
        <div className="p-4">
          <Typography color="blue-gray" className="mb-2 text-lg font-bold">
            Contributions
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="mb-14 font-normal text-blue-gray-500"
          >
            {current_contribution_details}
          </Typography>
          <a href="#" className="-ml-3 inline-block"></a>
        </div>
      </Modal>
    </>
  );
}
