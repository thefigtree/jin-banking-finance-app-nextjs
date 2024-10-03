"use client";

import CountUp from "react-countup";

export default function Counter({ amount }: { amount: number }) {
  return (
    <div className="w-full">
      <CountUp duration={2.75} end={amount} prefix="￦"></CountUp>
    </div>
  );
}
