"use client";
import useDemoConfig from "./useDemoConfig";
import React from "react";
import { AxisOptions, Chart } from "react-charts";

export default function Line() {
  const { data } = useDemoConfig({
    series: 1,
    dataType: "time",
  });

  const primaryAxis = React.useMemo<
    AxisOptions<(typeof data)[number]["data"][number]>
  >(
    () => ({
      getValue: (datum) => datum.primary as unknown as Date,
      show: false,
    }),
    []
  );

  const secondaryAxes = React.useMemo<
    AxisOptions<(typeof data)[number]["data"][number]>[]
  >(
    () => [
      {
        getValue: (datum) => datum.secondary,
        show: false,
      },
    ],
    []
  );

  return (
    <>
      <Chart
        options={{
          data,
          primaryAxis,
          secondaryAxes,
        }}
      />
    </>
  );
}
