import React from "react";
import { MarkContents, MarksIndex } from "@/types/marks";
import { EachMark } from "./EachMark";

const markContents: MarkContents[] = [
  {
    title: "pet",
    flag: false,
    photo_url: "/marks/dog.svg",
  },
  {
    title: "buffet",
    flag: false,
    photo_url: "/marks/buffet.svg",
  },
  {
    title: "free_drink",
    flag: false,
    photo_url: "/marks/beer.svg",
  },
  {
    title: "credit",
    flag: false,
    photo_url: "/marks/credit.svg",
  },
  {
    title: "cigarette",
    flag: false,
    photo_url: "/marks/cigarette.svg",
  },
  {
    title: "wifi",
    flag: false,
    photo_url: "/marks/wifi.svg",
  },
];
export function Marks(props: { marksIndex: MarksIndex }) {
  return (
    <div className="flex gap-1">
      {markContents.map((mc) => {
        return (
          <EachMark
            url={mc.photo_url}
            flag={props.marksIndex[mc.title]}
            key={mc.title}
          ></EachMark>
        );
      })}
    </div>
  );
}
