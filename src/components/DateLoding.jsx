

// eslint-disable-next-line react/prop-types
const DateLoding = ({height}) => {
  return (
    <div className={`flex justify-center items-center h-${height || 'screen'}`}>
      <span className="loading loading-dots loading-lg"></span>
    </div>
  );
};

export default DateLoding;