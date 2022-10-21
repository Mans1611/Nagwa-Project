import { useEffect, useState } from 'react';

const ONE_SEC = 1000 ;

const useTimer = (minute : number) => {
    const TOTAL_MINUTES_IN_MileSec = minute * 60 * 1000;

    const [timeUp,setTimeUp] = useState(0);
  const [timer, setTimer] = useState(
    (TOTAL_MINUTES_IN_MileSec)
  );

  // each second it updated 
  useEffect(() => {
    const interval = setInterval(() => {
        if(timer-ONE_SEC <= 0 )
            setTimeUp(1);
        setTimer(timer - ONE_SEC);

    }, 1000);

    return () => clearInterval(interval); // clearing the interval from the memory
  }, [timer]);

  return getReturnValues(timer,timeUp);
};

const getReturnValues = (timer:number,timeUp:number) => {
  // calculate time left
  const minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timer % (1000 * 60)) / 1000);

  return [ minutes, seconds, timeUp];
};

export { useTimer};
