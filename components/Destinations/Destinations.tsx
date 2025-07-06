import SectionHeading from '../Helper/SectionHeading'
import DestinationsSlider from './DestinationsSlider'

export default function Destinations() {
  return (
    <div className="py-20">
      {/* 1. Section Heading  */}
      <SectionHeading
        heading="Exploring Popular Destinations"
        subheading="Enjoy the nature to its fullest with curated tour destinations for you and your loved ones"
      />

      {/* 2. Section Content */}
      <div className="mt-14 mx-auto max-w-6xl px-6 sm:px-0">
        <DestinationsSlider />
      </div>
    </div>
  )
}
