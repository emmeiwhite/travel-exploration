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
      {/* 
      <div className="min-h-[200px] min-w-fit bg-white w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-xl text-black tracking-[0.7rem] uppercase">Lets enjoy the Nature</h1>

        <p>Get the best prices on, 2,000,000 + properties world wide</p>
      </div> */}
    </div>
  )
}
