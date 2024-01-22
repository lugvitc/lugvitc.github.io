import React from "react";
import Particle from "../../components/Particle/Particle";
import Typewriters from "typewriter-effect";

function Blogs() {
  const blogs = [
    {
      author: "Dhananjay",
      date: "Jan 1,2024",
      title: "Lorem ipsum dolor sit amet.",
      likes: "313",
      views: "452",
      slug: "Lorem ipsum dolor sit amet.",
    },
    {
      author: "foefkwopcms",
      date: "Jan 2,2024",
      title: "Lorem scsaipsum dolor sit amet.",
      likes: "313243",
      views: "45213",
      slug: "Lorem dq wipsum dolor sit amet.",
    },
    {
      author: "kikikiwsws",
      date: "Jan 3,2024",
      title: "Loreaxam ipsum dolor sit amet.",
      likes: "313",
      views: "452322",
      slug: "Lorem dvsipsum dolor sit amet.",
    },
    {
      author: "foefkwopcms",
      date: "Jan 2,2024",
      title: "Lorem scsaipsum dolor sit amet.",
      likes: "313243",
      views: "45213",
      slug: "Lorem dq wipsum dolor sit amet.",
    },
    {
      author: "kikikiwsws",
      date: "Jan 3,2024",
      title: "Loreaxam ipsum dolor sit amet.",
      likes: "313",
      views: "452322",
      slug: "Lorem dvsipsum dolor sit amet.",
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
              strings: ["Blogs"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <p className="max-w-5xl px-5 mt-2 text-3xl font-black leading-tight text-center text-white sm:mt-0 sm:px-0 sm:text-4xl">
          Tux Talks Tech: Your Source for Linux News and How-Tos
        </p>
      </div>

      {/* header end */}
      <div class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-transparent  antialiased">
        <div class="flex flex-col justify-between px-4 mx-auto max-w-screen-xl ">
          {blogs.map(({ author, date, title, likes, views, slug }) => {
            return (
              <article class="p-6 mb-6 text-base bg-[#1A1920] border-t border-gray-200 dark:border-gray-700 ">
                <footer class="flex justify-between items-center mb-2">
                  <div class="flex items-center">
                    <p class="inline-flex items-center mr-3 font-semibold text-sm text-white">
                      {author}
                    </p>
                    <p class="text-sm text-white">
                      <time
                        pubdate
                        datetime="2022-03-12"
                        title="March 12th, 2022"
                      >
                        {date}
                      </time>
                    </p>
                  </div>
                  <a
                    href={slug}
                    class="inline-flex items-center p-2 text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 "
                    type="button"
                  >
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
                        d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </a>
                </footer>
                <p className="text-white">{title}</p>
                <div class="flex items-center mt-4 space-x-4">
                  <button
                    type="button"
                    class="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400"
                  >
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
                        d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                      />
                    </svg>

                    <p className="mx-2">{likes}</p>
                  </button>
                  <button
                    type="button"
                    class="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400"
                  >
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
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>

                    <p className="mx-2">{views}</p>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Blogs;
