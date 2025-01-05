"use client";
import CountUp from "react-countup";
import { user } from "../data";

const Stats = () => {
  return (
    <section className="pb-12">
      <div className="flex flex-col xl:flex-row flex-wrap gap-6 max-w-[80vm] mx-auto xl:max-w-none">
        {user.stats.map((item, index) => {
          return (
            <div
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              key={index}
            >
              <CountUp
                end={item.num}
                duration={2}
                delay={0.5}
                className="text-4xl  xl:text-6xl font-extrabold "
              />
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug `}
              >
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stats;
