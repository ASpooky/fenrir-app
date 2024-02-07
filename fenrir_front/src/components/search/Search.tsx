import React, { useEffect, useState } from "react";

import { InputForm } from "../inputForm/MustInput";
import { SearchResultList } from "../searchResultList/SearchResultList";
import { GourmetJsonResponse, Shop } from "@/types/Gourmet";
import { Location } from "@/types/location";
import { Paging } from "../paging/Paging";

export function Search(props: {
  radius: number;
  location: Location;
  setRadius: any;
  setFocus: any;
}) {
  const [searchList, setSearchList] = useState<GourmetJsonResponse>();

  return (
    <div className="shadow-inner m-5 max-w-5xl flex flex-col justify-center items-center md:w-2/3">
      <div className="bg-[#fcd34d] rounded-t text-center font-sans font-bold text-xl md:text-2xl p-3 md:font-mono w-full">
        <p className="">近場の飲食店を探してみましょう!</p>
      </div>
      <InputForm
        setRadius={props.setRadius}
        setSearchList={setSearchList}
        location={props.location}
      ></InputForm>
      <Paging
        allPages={Math.floor(
          Number(searchList ? searchList.results_available : 0) / 10
        )}
        currentPage={1}
        onChange={() => {
          console.log("click!");
        }}
        setSearchList={setSearchList}
        location={props.location}
        radius={props.radius}
      ></Paging>
      <SearchResultList
        resultAvailable={Number(searchList?.results_available)}
        shopList={searchList?.shop}
        setFocus={props.setFocus}
      ></SearchResultList>
    </div>
  );
}
