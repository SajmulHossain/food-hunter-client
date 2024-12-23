

// eslint-disable-next-line react/prop-types
const Heading = ({heading, paragraph}) => {
  return (
    <div className="text-center my-8">
      <h3 className="font-bold text-2xl lg:text-3xl">{heading}</h3>
      {
        paragraph && <p className="max-w-xl mx-auto text-gray-500 italic">{paragraph}</p>
      }
    </div>
  );
};

export default Heading;