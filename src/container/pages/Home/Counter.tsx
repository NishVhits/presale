import Index from "../../Index";
import { useState, useEffect } from "react";

export default function Counter() {
  // State to hold timer values
  const [time, setTime] = useState({
    days: 0,
    hours: 12,
    minutes: 24,
    seconds: 31
  });

  useEffect(() => {
    // Create a timer that updates the seconds every 1 second
    const timer = setInterval(() => {
      setTime((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        // Handle seconds decrease
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;

          // Handle minutes decrease
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;

            // Handle hours decrease
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;

              // Handle days decrease
              if (days > 0) {
                days--;
              } else {
                // Timer completed
                clearInterval(timer);
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    // Cleanup timer on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Index.Box className="counter-section">
        <Index.Box className="container">
          <Index.Box className="counter-box">
            <Index.Typography className="counter-title">
              Bizzon ICo Is running
            </Index.Typography>
            <Index.Typography className="counter-para">
              Описание, описание описание описание описание описание
            </Index.Typography>
            <Index.Box className="timer-counter-main">
              <Index.Box className="timer-counter-wrraper">
                <Index.Box className="timer-counter-box">
                  <Index.Typography className="timer-counter-value">
                    {String(time.days).padStart(2, "0")}
                  </Index.Typography>
                </Index.Box>
                <Index.Typography className="timer-counter-lable">
                  Days
                </Index.Typography>
              </Index.Box>
              <Index.Box className="timer-counter-wrraper">
                <Index.Box className="timer-counter-box">
                  <Index.Typography className="timer-counter-value">
                    {String(time.hours).padStart(2, "0")}
                  </Index.Typography>
                </Index.Box>
                <Index.Typography className="timer-counter-lable">
                  Hours
                </Index.Typography>
              </Index.Box>
              <Index.Box className="timer-counter-wrraper">
                <Index.Box className="timer-counter-box">
                  <Index.Typography className="timer-counter-value">
                    {String(time.minutes).padStart(2, "0")}
                  </Index.Typography>
                </Index.Box>
                <Index.Typography className="timer-counter-lable">
                  Minutes
                </Index.Typography>
              </Index.Box>
              <Index.Box className="timer-counter-wrraper">
                <Index.Box className="timer-counter-box">
                  <Index.Typography className="timer-counter-value">
                    {String(time.seconds).padStart(2, "0")}
                  </Index.Typography>
                </Index.Box>
                <Index.Typography className="timer-counter-lable">
                  Seconds
                </Index.Typography>
              </Index.Box>
            </Index.Box>
            <Index.Box className="counter-btn-flex white-btn-main">
              <Index.Button className="counter-btn white-btn">
                Get BIZZON
              </Index.Button>
            </Index.Box>
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </>
  );
}
