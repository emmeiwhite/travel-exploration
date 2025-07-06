type SectionHeadingType = {
  heading: string
  subheading: string
}

export default function SectionHeading({ heading, subheading }: SectionHeadingType) {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-0">
      <h2 className="text-xl sm:text-3xl text-blue-950 font-bold">{heading}</h2>
      <p className="text-sm sm:text-base font-medium mt-2 text-gray-700 ">{subheading}</p>
    </div>
  )
}
