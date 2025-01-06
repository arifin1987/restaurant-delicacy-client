

const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="text-center md:w-4/12 my-8 mx-auto">
        <p className="text-green-500 text-2xl mb-2">{subHeading}</p>
        <h1 className="text-6xl border-y-4 py-4 border-green-300  ">{heading}</h1>
      
    </div>
  )
}

export default SectionTitle
