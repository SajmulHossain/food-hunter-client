import Lottie from 'lottie-react';
import noDataLottie from '../assets/lotties/noData.json'

const NoData = () => {
  return (
    <section className='h-[calc(100vh - 100px)] flex justify-center items-center'>
      <Lottie animationData={noDataLottie} />
    </section>
  );
};

export default NoData;