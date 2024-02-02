import React from "react";
import { Shop } from "@/types/Gourmet";
import { Marks } from "./components/Marks";
import { MarksIndex } from "@/types/marks";
import { AruNashiToBoolean } from "@/utils/AruNashiToBoolean";

export function SearchResultItem(props: { shop: Shop; setFocus: any }) {
  const shop = props.shop;
  console.log(shop);

  const marksIndex: MarksIndex = {
    pet: AruNashiToBoolean(props.shop.pet),
    buffet: AruNashiToBoolean(props.shop.free_food),
    free_drink: AruNashiToBoolean(props.shop.free_drink),
    credit: AruNashiToBoolean(props.shop.card),
    cigarette: AruNashiToBoolean(props.shop.non_smoking),
    wifi: AruNashiToBoolean(props.shop.wifi),
  };

  return (
    <div className="border p-5">
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <img
            src={shop.logo_image}
            alt=""
            className="rounded-full w-12 h-12"
          />
          <div className="flex flex-col items-start gap-2 overflow-hidden">
            <p className="text-lg font-sans font-bold underline text-blue-500 underline-offset-2 whitespace-nowrap hover:cursor-pointer">
              {shop.name}
            </p>
            <Marks marksIndex={marksIndex}></Marks>
          </div>
        </div>
        {/* ピンのsvgは*/}
        <button
          className="w-10 h-10 text-slate-300 hover:text-red-300 focus:text-red-500"
          onClick={() => {
            props.setFocus({
              latitude: Number(shop.lat),
              longtitude: Number(shop.lng),
            });
          }}
        >
          <svg
            version="1.1"
            id="_x32_"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            className="fill-current hover:cursor-pointer"
          >
            <g>
              <path
                d="M255.996,0C145.058,0,55.138,89.929,55.138,200.866c0,68.454,34.648,128.363,86.55,165.174
		c47.356,33.594,57.811,41.609,74.462,73.4c13.174,25.147,34.541,69.279,34.541,69.279c1.004,2.008,3.052,3.281,5.306,3.281
		c2.244,0,4.31-1.274,5.313-3.281c0,0,21.368-44.132,34.541-69.279c16.642-31.791,27.106-39.806,74.454-73.4
		c51.91-36.811,86.558-96.72,86.558-165.174C456.862,89.929,366.925,0,255.996,0z M255.996,335.473
		c-74.331,0-134.599-60.268-134.599-134.608c0-74.339,60.268-134.607,134.599-134.607c74.339,0,134.606,60.268,134.606,134.607
		C390.602,275.205,330.335,335.473,255.996,335.473z"
              ></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}
