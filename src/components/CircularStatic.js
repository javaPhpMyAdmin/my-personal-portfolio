import { useEffect, useState } from 'react';
import { CircularProgressWithLabel } from './CircularProgressWithLabel';

const itemValue = 80;

export const CircularStatic = ({ itemPercentage }) => {
  const [progressStatus, setProgressStatus] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgressStatus((prevProgress) =>
        prevProgress >= itemPercentage ? itemPercentage : prevProgress + 1
      );
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return <CircularProgressWithLabel progress={progressStatus} />;
};
