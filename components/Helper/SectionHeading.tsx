type SectionHeadingType = {
  heading: string
  subheading: string
}

export default function SectionHeading({ heading, subheading }: SectionHeadingType) {
  return (
    <div>
      <h2>{heading}</h2>
      <p>{subheading}</p>
    </div>
  )
}
