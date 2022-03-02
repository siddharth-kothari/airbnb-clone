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
        <header className="sticky top-0 z-50 grid grid-cols-1 md:grid-cols-3 bg-black shadow-md p-5 md:px-10">
            <div className="relative hidden md:flex items-center h-12 
            cursor-pointer">
                <Image
                    src='/airbnb-logo.png'
                    alt="airbnb logo"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>

            <div className="flex  md:border-2 rounded-full py-4 md:py-2 md:shadow-sm bg-white ">
                <input type="text" placeholder="Where are you going ?" className="pl-5 bg-transparent 
                outline-none flex-grow text-sm  text-white placeholder-gray-400 placeholder:text-center md:placeholder:text-left"/>
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full 
                p-2 cursor-pointer md:mx-2"/>
            </div>

            <div className="hidden md:flex space-x-4 items-center justify-end text-white">
                <p className=" cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6"/>
                <div className="hidden md:flex items-start space-x-2 border-2 p-2 rounded-full bg-white text-gray-600">
                    <MenuIcon className="h-6"/>
                    <UserCircleIcon className="h-6"/>
                </div>
            </div>
        </header>
    )
}

export default Header