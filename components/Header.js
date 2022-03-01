import Image from "next/image"
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserIcon,
    UserCircleIcon
} from '@heroicons/react/solid'

function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-black shadow-md p-5 md:px-10">
            <div className="relative flex items-center h-12 
            cursor-pointer">
                <Image
                    src='/airbnb-logo.png'
                    alt="airbnb logo"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>

            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
                <input type="text" placeholder="Start your search" className="pl-5 bg-transparent 
                outline-none flex-grow text-sm  text-white placeholder-gray-400"/>
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full 
                p-2 cursor-pointer md:mx-2"/>
            </div>

            <div className=" flex space-x-4 items-center justify-end text-white">
                <p className="hidden md:inline cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6"/>
                <div className="flex items-start space-x-2 border-2 p-2 rounded-full bg-white text-gray-600">
                    <MenuIcon className="h-6"/>
                    <UserCircleIcon className="h-6"/>
                </div>
            </div>
        </header>
    )
}

export default Header