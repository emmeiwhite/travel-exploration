'use client'

import { destinationData } from '@/data/data'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Image from 'next/image'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
}

export default function DestinationsSlider() {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}>
      {destinationData.map(data => {
        return (
          <div
            className="m-3"
            key={data.id}>
            <div className="relative h-[400px]">
              {/* Overaly */}
              <div className="absolute inset-0 bg-black opacity-25 rounded-lg"></div>

              {/* Image */}
              <Image
                src={data.image}
                alt={data.country}
                width={500}
                height={500}
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
          </div>
        )
      })}
    </Carousel>
  )
}
