import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import s from "../../index.module.scss";

const TARGET_DATE = new Date("2025-12-31T23:59:59").getTime();

const Countdown = () => {
  const [time, setTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const prevTime = useRef(time);
  const refs = {
    days: useRef(null),
    hours: useRef(null),
    minutes: useRef(null),
    seconds: useRef(null),
  };

  useEffect(() => {
    const updateTime = () => {
      const now = Date.now();
      const diff = TARGET_DATE - now;
      if (diff <= 0) return;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTime({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Animate only changed values
  useEffect(() => {
    Object.keys(time).forEach((key) => {
      if (time[key] !== prevTime.current[key]) {
        gsap.fromTo(
          refs[key].current,
          { y: 10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" }
        );
      }
    });

    prevTime.current = time;
  }, [time]);

  const Item = ({ label, value, refProp }) => (
    <section className={s.promo__indication__block}>
      <h5 ref={refProp} className="mb-0">
        {value}
      </h5>
      <p className="mb-0">{label}</p>
    </section>
  );

  return (
    <div className={s.promo__indication}>
      <Item label="days" value={time.days} refProp={refs.days} />
      <Item label="hours" value={time.hours} refProp={refs.hours} />
      <Item label="mins" value={time.minutes} refProp={refs.minutes} />
      <Item label="secs" value={time.seconds} refProp={refs.seconds} />
    </div>
  );
};

export default Countdown;
