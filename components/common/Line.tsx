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
          primaryCursor: {
            show: false,
          },
          secondaryCursor: {
            show: false,
          },
          defaultColors: ["#9C7C55"],
          // tooltip: {
          //   render: ({ datum, primaryAxis, getStyle }) => {
          //     return (
          //       <div
          //         style={{
          //           background: '#fff',
          //           padding: '8px',
          //           borderRadius: '4px',
          //           boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
          //           color: '#333',
          //         }}
          //       >
          //         <div>Date: {}</div>
          //         <div>Value: {}</div>
          //       </div>
          //     )
          //   }
          // },
          getSeriesStyle: () => ({
            strokeWidth: 3,
            stroke: "#9C7C55",
            backgroundStroke: "#59443C",
            backgroundStrokeWidth: 6,
          }),
          getDatumStyle: () => ({
            stroke: "#fff",
            strokeWidth: 2,
            ":hover": {
              stroke: "#fff",
              strokeWidth: 4,
              backgroundStroke: "#59443C",
              backgroundStrokeWidth: 12,
            },
          }),
        }}
      />
    </>
  );
}
