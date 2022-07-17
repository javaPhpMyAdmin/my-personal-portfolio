import { useEffect, useState } from 'react';
import { CircularProgressWithLabel } from './CircularProgressWithLabel';

export const CircularStatic = ({percentage}) => {
  const [progressStatus, setProgressStatus] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgressStatus((prevProgress) =>
        prevProgress >= percentage ? percentage : prevProgress + 1
      );
    }, 30);
    return () => clearInterval(timer);
  }, [percentage]);

  return <CircularProgressWithLabel progress={progressStatus} />;
};
