import Image from "next/image"
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UsersIcon,
    UserCircleIcon
} from '@heroicons/react/solid'
import { useState } from "react"
import "react-date-range/dist/theme/default.css"
import "react-date-range/dist/styles.css"
import { DateRangePicker } from "react-date-range"
import { useRouter } from "next/router"


function Header() {
    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfguests, setNoOfGuests] = useState(1);
    const router = useRouter();

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const resetInput = () =>{
        setSearchInput("");
    }

    const search = () =>{
        router.push({
            pathname: "/search",
            query:{
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfguests,
            }
        });
    }

    return (
        <header className="sticky top-0 z-50 grid grid-cols-2 md:grid-cols-3 bg-black shadow-md p-5 md:px-10">
            <div onClick={() => router.push("/")} className="relative hidden md:flex items-center h-12 
            cursor-pointer">
                <Image
                    src='/airbnb-logo.png'
                    alt="airbnb logo"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>

            <div className="flex md:border-2 rounded-full py-4 md:py-2 md:shadow-sm bg-white ">
                <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    type="text"
                    placeholder="Where are you going ?"
                    className="pl-5 bg-transparent outline-none flex-grow text-sm  
                text-black placeholder-gray-400 placeholder:text-center md:placeholder:text-left"/>
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full 
                p-2 cursor-pointer md:mx-2"/>
            </div>

            <div className="flex space-x-4 items-center justify-end text-white">
                <p className="hidden md:flex cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6 hidden md:flex" />
                <div className="flex space-x-2 border-2 p-2 rounded-full bg-white text-gray-600">
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>

            {searchInput && (
                <div className="flex flex-col md:col-span-3 mx-auto my-0.5">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#FD5B61"]}
                        onChange={handleSelect}
                    />
                    <div className="flex items-center border-b mb-4">
                        <h2 className="text-white text-2xl font-semibold flex-grow mt-2 ">No. of Guests</h2>
                        <UsersIcon className="h-6 text-white mt-2" />
                        <input type="number"
                            value={noOfguests}
                            min={1}
                            onChange={(e) => setNoOfGuests(e.target.value)}
                            className="w-12 pl-2 text-lg text-red-400 bg-black"
                        />
                    </div>

                    <div className="flex flex-grow">
                        <button onClick={resetInput} className="flex-grow text-white">Cancel</button>
                        <button onClick={search} className="flex-grow text-red-400">Search</button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header