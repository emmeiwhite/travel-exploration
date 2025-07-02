import { TbAirBalloon } from 'react-icons/tb'

export default function Nav() {
  return (
    <div className="bg-blue-950 transition-all duration-200 h-[12vh]  ">
      {/* Layout Container */}

      <div className="max-w-5xl mx-auto px-6 flex items-center h-full">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          {/* Icon */}
          <div className="h-10 w-10 bg-rose-500 rounded-full  flex items-center justify-center">
            <TbAirBalloon className="h-6 w-6 text-white" />
          </div>
          {/* Icon Text */}
          <p className="text-xl md:text-2xl font-bold text-white font-bold">Tripi</p>
        </div>
      </div>
    </div>
  )
}
