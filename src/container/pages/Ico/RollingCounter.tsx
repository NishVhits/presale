import { useState, useEffect } from "react";
import Index from "../../Index";
import PagesIndex from "../../PagesIndex";
import { PresaleDetails } from "../Home/homeInterface";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function RollingCounter() {
  const [data, setData] = useState<PresaleDetails>({
    createdAt: "",
    live_presale_date: "",
    presale_video: "",
    supported_countries: 0,
    token_price_btc: 0,
    total_participants: 0,
    updatedAt: "",
    round_pause: false,
    __v: 0,
    _id: "",
  });
  const handleGetData = () => {
    PagesIndex.apiGetHandler(PagesIndex.Api.GET_SETTING).then((res) => {
      if (res.status === 200 || res.status === 201) {
        setData(res?.data);
      } else {
        PagesIndex.toasterError(res?.message);
      }
    });
  };
  useEffect(() => {
    handleGetData();
  }, []);

  const dateStr = data?.live_presale_date;
  const targetDate = dateStr ? new Date(dateStr) : null;
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    if (!targetDate) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const distance = targetDate.getTime() - now.getTime();

    if (distance < 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const padZero = (num: number): string => num.toString().padStart(2, "0");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <>
      <Index.Box className="rolling-counter-section">
        <Index.Box className="counter-box">
          <Index.Box className="timer-counter-main">
            <Index.Box className="timer-counter-wrraper">
              <Index.Box className="timer-counter-box">
                <Index.Typography className="timer-counter-value">
                  {timeLeft ? padZero(timeLeft?.days) : "00"}
                </Index.Typography>
              </Index.Box>
              <Index.Typography className="timer-counter-lable">
                Days
              </Index.Typography>
            </Index.Box>
            <Index.Box className="timer-counter-wrraper">
              <Index.Box className="timer-counter-box">
                <Index.Typography className="timer-counter-value">
                  {timeLeft ? padZero(timeLeft?.hours) : "00"}
                </Index.Typography>
              </Index.Box>
              <Index.Typography className="timer-counter-lable">
                Hours
              </Index.Typography>
            </Index.Box>
            <Index.Box className="timer-counter-wrraper">
              <Index.Box className="timer-counter-box">
                <Index.Typography className="timer-counter-value">
                  {timeLeft ? padZero(timeLeft?.minutes) : "00"}
                </Index.Typography>
              </Index.Box>
              <Index.Typography className="timer-counter-lable">
                Minutes
              </Index.Typography>
            </Index.Box>
            <Index.Box className="timer-counter-wrraper">
              <Index.Box className="timer-counter-box">
                <Index.Typography className="timer-counter-value">
                  {timeLeft ? padZero(timeLeft?.seconds) : "00"}
                </Index.Typography>
              </Index.Box>
              <Index.Typography className="timer-counter-lable">
                Seconds
              </Index.Typography>
            </Index.Box>
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </>
  );
}
