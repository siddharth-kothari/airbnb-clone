/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"


function Baner() {
  return (
    <div className="relative h-[696px] sm:h-[800px] md:h-[500px] lg:h-[600px]
    xl:h-[700px] 2xl:h-[800px] ml-auto mr-auto sm:mt-0 md:mt-[20px] xl:w-[88%]">
       <Image 
           src='/baner5.jpg'
           alt="airbnb baner"
           layout="fill"
            objectFit=" cover"
            className=" xl:rounded-3xl"
       /> 
       <div className="absolute top-3/4 w-full text-center text-white">
           <p className=" text-center text-4xl">Not sure where to go? Perfect.</p>
           <button className="text-purple-900 bg-white px-6 py-4 mt-[20px] shadow-md 
           rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">I'm flexible</button>
       </div>
    </div>
  )
}

export default Baner