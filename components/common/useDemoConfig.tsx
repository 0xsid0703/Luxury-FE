"use client";
import React from "react";

//

const options = {
  elementType: ["line", "area", "bar"],
  primaryAxisType: ["linear", "time", "log", "band"],
  secondaryAxisType: ["linear", "time", "log", "band"],
  primaryAxisPosition: ["top", "left", "right", "bottom"],
  secondaryAxisPosition: ["top", "left", "right", "bottom"],
  secondaryAxisStack: [true, false],
  primaryAxisShow: [true, false],
  secondaryAxisShow: [true, false],
  interactionMode: ["primary", "closest"],
  tooltipGroupingMode: ["single", "primary", "secondary", "series"],
  tooltipAnchor: [
    "closest",
    "top",
    "bottom",
    "left",
    "right",
    "center",
    "gridTop",
    "gridBottom",
    "gridLeft",
    "gridRight",
    "gridCenter",
    "pointer",
  ],
  tooltipAlign: [
    "auto",
    "top",
    "bottom",
    "left",
    "right",
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight",
    "center",
  ],
  snapCursor: [true, false],
} as const;

type DataType = "time" | "ordinal" | "linear";
type ElementType = (typeof options)["elementType"][number];
type PrimaryAxisType = (typeof options)["primaryAxisType"][number];
type SecondaryAxisType = (typeof options)["secondaryAxisType"][number];
type PrimaryAxisPosition = (typeof options)["primaryAxisPosition"][number];
type SecondaryAxisPosition = (typeof options)["secondaryAxisPosition"][number];
type TooltipAnchor = (typeof options)["tooltipAnchor"][number];
type TooltipAlign = (typeof options)["tooltipAlign"][number];
type InteractionMode = (typeof options)["interactionMode"][number];
type TooltipGroupingMode = (typeof options)["tooltipGroupingMode"][number];

const optionKeys = Object.keys(options) as (keyof typeof options)[];

export default function useChartConfig({
  series,
  datums = 10,
  useR,
  show = [],
  count = 1,
  resizable = true,
  canRandomize = true,
  dataType = "time",
  elementType = "line",
  primaryAxisType = "time",
  secondaryAxisType = "linear",
  primaryAxisPosition = "bottom",
  secondaryAxisPosition = "left",
  primaryAxisStack = false,
  secondaryAxisStack = true,
  primaryAxisShow = true,
  secondaryAxisShow = true,
  tooltipAnchor = "closest",
  tooltipAlign = "auto",
  interactionMode = "primary",
  tooltipGroupingMode = "primary",
  snapCursor = true,
}: {
  series: number;
  datums?: number;
  useR?: boolean;
  show?: (keyof typeof options)[];
  count?: number;
  resizable?: boolean;
  canRandomize?: boolean;
  dataType?: DataType;
  elementType?: ElementType;
  primaryAxisType?: PrimaryAxisType;
  secondaryAxisType?: SecondaryAxisType;
  primaryAxisPosition?: PrimaryAxisPosition;
  secondaryAxisPosition?: SecondaryAxisPosition;
  primaryAxisStack?: boolean;
  secondaryAxisStack?: boolean;
  primaryAxisShow?: boolean;
  secondaryAxisShow?: boolean;
  tooltipAnchor?: TooltipAnchor;
  tooltipAlign?: TooltipAlign;
  interactionMode?: InteractionMode;
  tooltipGroupingMode?: TooltipGroupingMode;
  snapCursor?: boolean;
}) {
  const [state, setState] = React.useState({
    count,
    resizable,
    canRandomize,
    dataType,
    elementType,
    primaryAxisType,
    secondaryAxisType,
    primaryAxisPosition,
    secondaryAxisPosition,
    primaryAxisStack,
    secondaryAxisStack,
    primaryAxisShow,
    secondaryAxisShow,
    tooltipAnchor,
    tooltipAlign,
    interactionMode,
    tooltipGroupingMode,
    snapCursor,
    datums,
    data: makeDataFrom(dataType, series, datums, useR),
  });

  React.useEffect(() => {
    setState((old) => ({
      ...old,
      data: makeDataFrom(dataType, series, datums, useR),
    }));
  }, [count, dataType, datums, series, useR]);

  const randomizeData = () =>
    setState((old) => ({
      ...old,
      data: makeDataFrom(dataType, series, datums, useR),
    }));

  const Options = optionKeys
    .filter((option) => show.indexOf(option) > -1)
    .map((option) => (
      <div key={option}>
        {option}: &nbsp;
        <select
          value={state[option] as string}
          onChange={({ target: { value } }) =>
            setState((old) => ({
              ...old,
              [option]:
                typeof options[option][0] === "boolean"
                  ? value === "true"
                  : value,
            }))
          }
        >
          {options[option].map((d) => (
            <option value={d as string} key={d.toString()}>
              {d.toString()}
            </option>
          ))}
        </select>
        <br />
      </div>
    ));

  return {
    ...state,
    randomizeData,
    Options,
  };
}

function makeDataFrom(
  dataType: DataType,
  series: number,
  datums: number,
  useR?: boolean
) {
  return [
    ...new Array(series || Math.max(Math.round(Math.random() * 5), 1)),
  ].map((d, i) => makeSeries(i, dataType, datums, useR));
}

function makeSeries(
  i: number,
  dataType: DataType,
  datums: number,
  useR?: boolean
) {
  const startPrice = 8000;
  const endPrice = 12000;
  const startDate = new Date('2021');
  const endDate = new Date('2025');

  return {
    label: `Price History`,
    data: Array(datums)
      .fill(0)
      .map((_, i) => {
        const progress = i / (datums - 1);
        const date = new Date(
          startDate.getTime() + progress * (endDate.getTime() - startDate.getTime())
        );
        
        // Generate a smooth price curve with some random variation
        const basePrice = startPrice + progress * (endPrice - startPrice);
        const variation = Math.sin(progress * Math.PI * 2) * 1000;
        const randomness = (Math.random() - 0.5) * 500;
        const price = basePrice + variation + randomness;

        return {
          primary: date,
          secondary: price,
          radius: useR ? 8 : undefined,
        };
      }),
  };
}
