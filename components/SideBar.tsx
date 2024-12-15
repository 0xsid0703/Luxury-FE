"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { DashboardIcon } from "./icons/DashboardIcon";
import { CardsIcon } from "./icons/CardsIcon";
import {
  ActivityIcon,
  FileTextIcon,
  ImageIcon,
  InfoIcon,
  SettingsIcon,
  UploadIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";

const SideBar = () => {
  const pathName = usePathname();
  const menuItems = [
    { icon: <DashboardIcon />, label: "Dashboard", link: "/" },
    { icon: <CardsIcon />, label: "Card Stacks", link: "/cardstacks" },
    { icon: <InfoIcon />, label: "Info", link: "/info" },
    { icon: <ImageIcon />, label: "Images", link: "/images" },
    { icon: <UploadIcon />, label: "Uploader", link: "/uploader" },
    { icon: <FileTextIcon />, label: "Card Details", link: "/card-details" },
    { icon: <UsersIcon />, label: "Users", link: "/users" },
    { icon: <ActivityIcon />, label: "Testing", link: "/testing" },
    { icon: <DashboardIcon />, label: "Statistics", link: "/statistics" },
    { icon: <SettingsIcon />, label: "Settings", link: "/settings" },
  ];
  return (
    <div className="w-64 bg-gray-100 p-4 border-r hidden md:flex shadow-xl flex-col h-screen">
      <div className="text-2xl font-bold mb-8 text-center">TT Admin</div>
      <nav></nav>
      {menuItems.map((menu, index: number) => (
        <Link
          key={index}
          className={`
          flex items-center w-full p-3 mb-2 rounded 
          ${
            pathName === menu.link
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-200"
          }
        `}
          href={menu.link}
        >
          <span className="mr-3">{menu.icon}</span>
          {menu.label}
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
