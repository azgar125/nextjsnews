"use client"
import React from "react"
import { Switch } from "./ui/switch"
import { UserIcon } from "lucide-react"
import { useTheme } from "@/app/context/ThemeContext"

const MenuRight = () => {
 const { theme, toggleTheme } = useTheme();

  return (
    <div className=' flex items-center'>
      <div className='mr-2 flex items-center'>
        <span className='text-[20px] mr-2 hidden md:flex'>Dark Mode</span>
          <Switch 
        checked={theme === "dark"} 
        onCheckedChange={toggleTheme} 
      />
      </div>
      <div className=" p-1 border-1 border-black rounded-full dark:border-white">
        <UserIcon size={20}/>
      </div>
    </div>
  )
}

export default MenuRight
