import React, { useState } from "react";
import { useGourmetQuery } from "@/hooks/useGourmetQuery";
import { Location } from "@/types/location";
import { RadiusToRangeValue } from "@/utils/RadiusToRangeValue";
import { GourmetJsonResponse } from "@/types/Gourmet";

export function InputForm(props: {
  setRadius: React.Dispatch<React.SetStateAction<number>>;
  setSearchList: React.Dispatch<
    React.SetStateAction<GourmetJsonResponse | undefined>
  >;
  location: Location;
}) {
  const [searchValue, setSarchValue] = useState(0);

  //半径から五段階のrange valueに変換している.
  const searchButtonClick = async () => {
    props.setRadius(searchValue);
    let data = await useGourmetQuery(
      props.location,
      RadiusToRangeValue(searchValue),
      "1" //start
    );
    props.setSearchList(data);
  };

  //mapの表示に使用するstate.
  const searchFormChange = (e: any) => {
    setSarchValue(e.target.value);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center p-5">
      <div className="relative mb-4 flex w-full flex-wrap items-stretch justify-center">
        <input
          type="number"
          className="relative m-0 -mr-0.5 block min-w-0 max-w-md flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 focus:outline-none focus:ring-1 focus:ring-blue-100"
          placeholder="検索半径　m"
          onChange={searchFormChange}
        />
        <button
          className="bg-blue-400 ml-0.5 rounded-r hover:bg-blue-500"
          type="button"
          id="button-addon1"
          onClick={searchButtonClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white m-1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
