import SearchForm from '@/components/Helper/SearchForm'

export default function Hero() {
  return (
    <div className="relative h-[120vh] sm:h-[100vh] w-full">
      {/* 1. Overlay div */}
      <div className="absolute inset-0 w-full-h-full bg-gray-700 opacity-70"></div>

      {/* 2. video */}
      <video
        src="/images/hero1.mp4"
        autoPlay
        loop
        muted
        preload="metadata"
        className="w-full h-full object-cover"
      />

      {/* 3. Text Content */}

      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
        <div className="flex items-center justify-center flex-col w-full">
          {/* Heading */}
          <div>
            <h1 className="text-[25px] mb-4 md:mb-0 text-center md:text-[35px] lg:text-[45px] tracking-[0.7rem] text-white  uppercase font-bold">
              Lets enjoy the Nature
            </h1>
            <p className="text-lg md:text-base  text-center font-normal text-white [word-spacing:5px] mt-1">
              Get the best prices on 2,000,000+ properties worldwide
            </p>
          </div>

          {/* Search Form */}
          <SearchForm />
        </div>
      </div>
    </div>
  )
}
