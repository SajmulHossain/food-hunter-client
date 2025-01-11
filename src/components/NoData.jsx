import Lottie from 'lottie-react';
import noDataLottie from '../assets/lotties/noData.json'
import { motion } from "motion/react";

const NoData = () => {
  return (
    <motion.section
      animate={{ y: [-10, 10, -10] }}
      transition={{ duration: 10, repeat: Infinity }}
      className="min-h-[calc(100vh-100px] flex justify-center items-center"
    >
      <Lottie animationData={noDataLottie} />
    </motion.section>
  );
};

export default NoData;