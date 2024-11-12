import React, { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  function calculateTimeLeft(endDate: Date) {
    const difference = endDate.getTime() - new Date().getTime();
    
    // Check if the difference is negative (i.e., the target date has passed)
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0 }; // Countdown has ended
    }
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    
    return { days, hours, minutes };
  }
  
  return (
    <span>
      {timeLeft.days > 0 && <span>{timeLeft.days}D </span>}
      {timeLeft.hours > 0 && <span>{timeLeft.hours}hr </span>}
      {timeLeft.minutes >= 0 && <span>{timeLeft.minutes}min</span>}
    </span>
  );
};

export default CountdownTimer