import React from 'react'
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  MailIcon,
  DotsCircleHorizontalIcon,
  UserIcon,
  HomeIcon,
} from '@heroicons/react/outline'
import SidebarRow from './SidebarRow'

function Sidebar() {
  return (
    <div className="flex flex-col col-span-2 items-center px-4 md:items-start">
      <img
        className="m-3 h-10 w-10"
        src="https://img.icons8.com/color/344/twitter--v1.png"
        alt="twitter"
      />
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={MailIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={CollectionIcon} title="Lists" />
      <SidebarRow Icon={UserIcon} title="Sign In" />
      <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
      <button className="mt-5 bg-twitter p-3 h-12 text-white w-24 sm:w-36 rounded-full lg:w-52">
        Tweet
      </button>
    </div>
  )
}

export default Sidebar
