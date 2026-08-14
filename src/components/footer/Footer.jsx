import { IconBrandInstagram } from '@tabler/icons-react';
import { IconBrandLinkedin } from '@tabler/icons-react';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import { IconBrandGithub } from '@tabler/icons-react';
import { IconBrandDiscord } from '@tabler/icons-react';

function Footer() {
  return (
    <>
      <section className="flex flex-col  lg:justify-end font-space text-white">
        <div className="w-full bg-[#1A1920] pt-11 dark:bg-gray-900 ">
          <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-0">
            <div className="flex items-center justify-center pb-3 border-b border-gray-300 dark:border-gray-700 lg:justify-between">
              <div className="hidden mr-12 lg:block">
                <span className="text-white dark:text-gray-400">
                  Get connected with us
                </span>
              </div>
              <div className="flex justify-center ">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://chat.whatsapp.com/F5QbgiT6fmRIuzaJcEyEne"
                  aria-label="WhatsApp"
                  className="mr-5 rounded-md p-1 hover:bg-teal-600"
                >
                  <IconBrandWhatsapp/>
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://discord.gg/F3ZH6sTY99"
                  aria-label="Discord"
                  className="mr-5 rounded-md p-1 hover:bg-indigo-600"
                >
                  <IconBrandDiscord/>
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/lugvitc"
                  aria-label="GitHub"
                  className="mr-5 rounded-md p-1 hover:bg-green-600"
                >
                  <IconBrandGithub/>
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.instagram.com/lugvitc/"
                  aria-label="Instagram"
                  className="mr-5 rounded-md p-1 hover:bg-pink-600"
                >
                  <IconBrandInstagram/>
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://linkedin.com/company/lugvitc"
                  aria-label="LinkedIn"
                  className="mr-5 rounded-md p-1 hover:bg-blue-600"
                >
                  <IconBrandLinkedin/>
                </a>
              </div>
            </div>
          </div>
          <div className="py-6 text-center bg-[#1A1920] dark:bg-gray-800 dark:text-gray-400">
            <span>
              {" "}
              &copy; Copyright 2026. All Rights Reserved: Linux User Group, VIT Chennai
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
