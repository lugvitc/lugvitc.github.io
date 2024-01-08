import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  
  Collapse,

  List,
  ListItem,

} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  HomeIcon,
  AcademicCapIcon,
  UserGroupIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
  TrophyIcon
} from "@heroicons/react/24/solid";

import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  PhoneIcon,
  SquaresPlusIcon,
  SunIcon,
} from "@heroicons/react/24/solid";





// nav list menu
const navListMenuItems = [
  {
    title: "Forums",
    description:
      "Linux Club's own forum and discussion area.",
    link:"https://forum.lugvitc.org/"
  },
  {
    title: "Cloud",
    description:
      "Linux Club's own online management tool to manage club's activities",
    link:"https://cloud.lugvitc.org/"
  },
  
];

const navListMenuItemsAboutUs = [
  {
    title: "Gallary",
    description: "Sharing our experiences.",
    icon: SquaresPlusIcon,
    link:"#/gallary"
  },
  {
    title: "About Us",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
    link:"#/about"
  },
  {
    title: "Blog",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
    link:"https://cloud.lugvitc.org/"
  },
  {
    title: "Members",
    description: "Amazing group of inquisitive people.",
    icon: UserGroupIcon,
    link:"#/members"
  },
  {
    title: "Leaderboard",
    description: "leaderboard for club members.",
    icon: TrophyIcon,
    link:"#/leaderboard"
  },

];

const navListMenuItemsSupport = [
  {
    title: "Support",
    description: "Reach out to us for assistance or inquiries on our Forums",
    icon: GlobeAmericasIcon,
    link:"https://forum.lugvitc.org/"
  },
  {
    title: "Contact",
    description: "Find the perfect solution for your needs.",
    icon: PhoneIcon,
    link:"#/contact"
  },
];

function NavListMenuSupport() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItemsSupport.map(
    ({ icon, title, description ,link}, key) => (
      <a href={link} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg  hover:text-white p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold font-space"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-600 font-space"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    ),
  );
 
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="top"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-space text-xs text-white font-thin hover:bg-[#1f2937] hover:text-white"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <Square3Stack3DIcon className="h-[18px] w-[18px] text-white"  />{" "}
              ~cd Support
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
function NavListMenuAboutUs() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItemsAboutUs.map(
    ({ icon, title, description,link }, key) => (
      <a href={link} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg  hover:text-white p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold font-space"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-600 font-space"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    ),
  );
 
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="top"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-space text-xs text-white font-thin hover:bg-[#1f2937] hover:text-white"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <Square3Stack3DIcon className="h-[18px] w-[18px] text-white"  />{" "}
              ~whoami 
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(({ title, description,link }) => (
    // <Link to={link}>
     <a href={link} key={title}> 
      <MenuItem>
        <Typography variant="h6" color="gray" className="mb-1 font-space">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal font-space">
          {description}
        </Typography>
      </MenuItem>
     </a> 
    // </Link>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal text-white ">
            <MenuItem className="hidden items-center gap-2 font-light font-space text-xs  text-white  lg:flex lg:rounded-full hover:bg-[#1f2937] hover:text-white " >
              <Square3Stack3DIcon className="h-[18px] w-[18px] text-white"  />{" "}
              ~cd community{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform text-white ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid ">
          <Card
            color="gray"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md outline-none "
          >
            <UserGroupIcon strokeWidth={1} className="h-28 w-28" />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1 outline-none">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-light font-space text-xs  text-white lg:hidden  hover:bg-[#1f2937] hover:text-white">
        <Square3Stack3DIcon className="h-[18px] w-[18px] text-white" />{" "}
        ~cd community{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

// nav list component
const navListItems = [
  {
    label: "~cd root",
    icon: HomeIcon,
    link:"#/"
  },
  {
    label: "~cd learn",
    icon: AcademicCapIcon,
    link:"#/learn"
  },
  {
    label: "~cd events",
    icon: CubeTransparentIcon,
    link:"#/events"
  },
  


];

function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center ">
      {navListItems.map(({ label, icon ,link}, key) => (
      
      // <Link to={link} key={key}>
        <Typography
        key={label}
        as="a"
        href={link}
        variant="small"
        color="gray"
        className="font-light font-space text-xs  text-white"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full hover:bg-[#1f2937]">
            {React.createElement(icon, { className: "h-[18px] w-[18px] text-white" })}{" "}
            <span className="text-white "> {label}</span>
          </MenuItem>
        </Typography>
        // </Link>
      ))}
      <NavListMenu />
      <NavListMenuAboutUs />
      <NavListMenuSupport />
    </ul>
  );
}

export function MainNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    // <div className="bg-black ">

    <Navbar
    color="transparent" 
    className=" max-w-screen-xl p-2 lg:rounded-full lg:pl-6 "
    >
      <div className="relative mx-auto flex items-center justify-between text-white">
        <Typography
          as="a"
          href="#"
          className="mr-4 ml-2  py-1.5 font-light font-space text-xs "
        >
          lugvitc
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        

        {/* <Button size="sm" variant="text" className="hover:bg-[#1f2937] text-white font-space text-xs">
          <span>Log In</span>
        </Button> */}
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
    // </div>
  );
}


///////////////////////////////////////////////////////////////////////////////////////
//  