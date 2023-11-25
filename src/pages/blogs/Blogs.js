import TerminalWindow from "../../components/terminal/terminalWindow";
import TerminalCard from "../../components/terminalCard/TerminalCard";
import BlogSearch from "../../components/blog_search/blog_search";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import { useState } from "react";
import axios, { all } from "axios";
import titleIcon from "../../images/title.png";
import date from "../../images/date.png";
import views from "../../images/views.png";
import like from "../../images/like.png";
import time from "../../images/time.png";
import author from "../../images/author.png";


// import { data } from "./data";
export default function Blogs() {
  const [AllBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("https://corsproxy.altacee.com/https://forum.lugvitc.org/c/blog/10.json", {})
      .then(function (response) {
        console.log(response.data);
        const userBlog = [];
          response.data.topic_list.topics.forEach((topic) => {
            const user = response.data.users.find(
              (user) => user.id === topic.posters[0].user_id
            );
            if (user) {
              // console.log("Username:", user.username);
              // console.log("Name:", user.name);
              // console.log("Views:", topic.views);
              // console.log("Like Count:", topic.like_count);
              // console.log("Created At:", topic.created_at);
              // console.log("Slug:", topic.slug);
              // console.log("User ID:", topic.posters[0].user_id);
              // console.log("\n");
              let userData = {};
              const date = topic.created_at.substring(0, 10);
              const time = topic.created_at.substring(11, 19);

              userData["name"] = user.name;
              userData["view_count"] = topic.views;
              userData["likes"] = topic.like_count;
              userData["postDate"] = date;
              userData["postTime"] = time;
              userData["link"] = "https://forum.lugvitc.org/t/" + topic.slug;
              userData["title"] = topic.title;
              // setBlogs(userData);
              userBlog.push(userData);
            }
          });
          setAllBlogs(userBlog);
          // console.log(AllBlogs);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // useEffect(() => {
  //   const userBlog = [];
  //   data.topic_list.topics.forEach((topic) => {
  //     const user = data.users.find(
  //       (user) => user.id === topic.posters[0].user_id
  //     );
  //     if (user) {
  //       // console.log("Username:", user.username);
  //       // console.log("Name:", user.name);
  //       // console.log("Views:", topic.views);
  //       // console.log("Like Count:", topic.like_count);
  //       // console.log("Created At:", topic.created_at);
  //       // console.log("Slug:", topic.slug);
  //       // console.log("User ID:", topic.posters[0].user_id);
  //       // console.log("\n");
  //       let userData = {};
  //       const date = topic.created_at.substring(0, 10);
  //       const time = topic.created_at.substring(11, 19);

  //       userData["name"] = user.name;
  //       userData["view_count"] = topic.views;
  //       userData["likes"] = topic.like_count;
  //       userData["postDate"] = date;
  //       userData["postTime"] = time;
  //       userData["link"] = "https://forum.lugvitc.org/t/" + topic.slug;
  //       userData["title"] = topic.title;
  //       // setBlogs(userData);
  //       userBlog.push(userData);
  //     }
  //   });
  //   setAllBlogs(userBlog);
  //   // console.log(AllBlogs);
  // });

  return (
    <>
    
   
    <TerminalWindow
      prompts={[
        { path: "~", command: "cd blogs" },
        { path: "~/blogs", command: "cat blogs.txt" },
      ]}
      title="Blogs"
    >
      {/* <BlogSearch all_blogs={AllBlogs} setter={setBlogs}></BlogSearch> */}
            {/* <div className="posts" style={myStyle}>
                <TerminalCard blogs={Blogs}></TerminalCard>
            </div> */}


      <div class="flex flex-row flex-wrap justify-center items-center  w-full">
        {AllBlogs.map(
          (
            { name, likes, view_count, postDate, postTime, link, title },
            index
          ) => (
            <a
              href={link}
              class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 my-5 md:mx-5"
            >
              <div class="bg-gray-800 text-white w-full max-w-8xl min-w-7xl flex flex-col rounded-xl shadow-lg p-4">
                <div class="flex items-center flex-col justify-center space-x-4">
                  <img
                    src={titleIcon}
                    alt="loading"
                    className="h-[25px] w-[25px] mx-5"
                  />
                  <div class="mt-3 text-md font-bold text-center">{title}</div>
                </div>
                <div class=" flex flex-row flex-wrap justify-between items-center cursor-pointer mt-4">
                  <div class="flex items-end justify-start space-x-4">
                    <img
                      src={date}
                      alt="loading"
                      className="h-[25px] w-[25px]"
                    />
                    <div class="mx-3 text-md font-thin text-center">
                      {postDate}
                    </div>
                  </div>
                  <div class="flex items-end justify-start space-x-4">
                    <img
                      src={time}
                      alt="loading"
                      className="h-[25px] w-[25px]"
                    />
                    <div class="mx-3 text-md font-thin text-center">
                      {postTime}
                    </div>
                  </div>
                  <div class="flex items-end justify-start space-x-4">
                    <img
                      src={like}
                      alt="loading"
                      className="h-[25px] w-[25px]"
                    />
                    <div class="mx-3 text-md font-thin text-center">
                      {likes+83}
                    </div>
                  </div>
                  <div class="flex items-end justify-end space-x-4">
                    <img
                      src={views}
                      alt="loading"
                      className="h-[25px] w-[25px]"
                    />
                    <div class="mx-3 text-md font-thin text-center">
                      {view_count+130}
                    </div>
                  </div>
                </div>
                <div class="mt-4 text-white font-medium text-sm">
                  <div class="flex items-end justify-end space-x-4">
                    <img
                      src={author}
                      alt="loading"
                      className="h-[35px] w-[35px]"
                    />
                    <div class="mx-3 text-md font-medium text-center">{name}</div>
                  </div>
                </div>
              </div>
            </a>
          )
        )}
      </div>
    </TerminalWindow>
    </>
  );
}
