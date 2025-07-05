import Link from 'next/link'
import { FaCalendarWeek, FaMap } from 'react-icons/fa'

export default function SearchForm() {
  return (
    <section className="w-full flex flex-col items-center">
      {/* Search Form Inputs */}
      <div className="bg-white rounded-sm grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8 w-9/10 sm:w-4/5 items-center justify-center mt-5 sm:mt-12 ">
        {/* First Search Inputt*/}
        <div className="flex items-center gap-6">
          <FaMap className="text-blue-600 w-6 h-6" />

          <div className="flex gap-2 flex-col w-full">
            <p className="text-lg font-medium mb-1">Location</p>
            <input
              type="text"
              className="outline-none border-none placeholder:text-gray-800  w-full text-sm "
              placeholder="Where are you going?"
            />
          </div>
        </div>

        {/* Second Form Element */}

        <div className="flex items-center gap-6 w-full">
          <FaCalendarWeek className="text-blue-600 w-6 h-6" />

          <div className="flex gap-2 flex-col">
            <p className="text-lg font-medium mb-1">Start Date</p>
            <input
              type="date"
              className="outline-none border-none text-sm "
            />
          </div>
        </div>

        {/* Third Form Element */}

        <div className="flex items-center gap-6 w-full">
          <FaCalendarWeek className="text-blue-600 w-6 h-6" />

          <div className="flex gap-2 flex-col">
            <p className="text-lg font-medium mb-1">End Date</p>
            <input
              type="date"
              className="outline-none border-none text-sm "
            />
          </div>
        </div>

        {/* First Search Inputt*/}
        <div className="flex items-center gap-6">
          <FaMap className="text-blue-600 w-6 h-6" />

          <div className="flex gap-2 flex-col w-full">
            <p className="text-lg font-medium mb-1">Guest</p>
            <input
              type="text"
              className="outline-none border-none placeholder:text-gray-800  w-full text-sm "
              placeholder="1 Guest 1 Room"
            />
          </div>
        </div>
      </div>

      {/* Search Button */}
      <Link
        href="#"
        className="flex block rounded px-14 md:px-28 -mt-4 py-3 overflow-hidden group bg-rose-600 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out  duration-300">
        <span
          className="absolute right-0
          w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
        <span className="font-bold text-base">Search</span>
      </Link>
    </section>
  )
}
