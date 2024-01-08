import React from "react";
import Discord from "../../images/icons/discord.png";
import Instagram from "../../images/icons/instagram.png";
function Footer() {
  return (
    <>
      <section class="flex flex-col  lg:justify-end font-space text-white">
        <div class="w-full bg-[#1A1920] pt-11 dark:bg-gray-900 ">
          <div class="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-0">
            <div class="flex items-center justify-center pb-3 border-b border-gray-300 dark:border-gray-700 lg:justify-between">
              <div class="hidden mr-12 lg:block">
                <span class="text-white dark:text-gray-400">
                  Get connected with us
                </span>
              </div>
              <div class="flex justify-center ">
                <a
                target="_blank"
                  href="https://discord.gg/ApShC247me"
                  class="mr-6 text-gray-600 dark:text-gray-400 hover:text-blue-400"
                >
                  <img
                    src={Discord}
                    alt=""
                    className="h-6 w-6 hover:bg-blue-600 rounded-md"
                  />
                </a>
                <a
                target="_blank"
                  href="https://www.instagram.com/lugvitc/"
                  class="mr-6 text-gray-600 dark:text-gray-400 hover:text-blue-400"
                >
                  <img
                    src={Instagram}
                    alt=""
                    className="h-6 w-6 hover:bg-blue-600 rounded-md"
                  />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/lugvitc"
                  aria-label="GitHub"
                  className="mr-5 rounded-md  "
                >
                  <svg
                    viewBox="0 0 496 512"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 fill-current"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                  </svg>
                </a>
                <a
                target="_blank"
                  href="https://www.linkedin.com/company/lugvitc/"
                  class="mr-6 text-gray-600 dark:text-gray-400 hover:text-blue-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class=" w-5 h-5 bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div class="py-6 text-center bg-[#1A1920] dark:bg-gray-800 dark:text-gray-400">
            <span> &copy; Copyright 2024 . All Rights Reserved : The Linux Club</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
