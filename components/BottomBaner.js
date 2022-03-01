import Image from "next/image"


function BottomBaner({ img, title, buttonText }) {
  return (
    <section className="relative mb-20">
      <div className="relative h-[500px] min-w-300">
        <Image
          src={img}
          alt=''
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="absolute top-10 left-10">
        <h1 className="text-4xl w-64 mb-3 font-semibold text-white">{title}</h1>
      </div>

      <div className="absolute bottom-10 left-10">
         <button className="text-sm font-medium text-black bg-white rounded-md px-4 py-3 ">{buttonText}</button>
      </div>
    </section>
  )
}

export default BottomBaner
