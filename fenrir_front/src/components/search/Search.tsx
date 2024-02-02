import React, { useEffect, useState } from "react";

import { InputForm } from "../inputForm/MustInput";
import { SearchResultList } from "../searchResultList/SearchResultList";
import { GourmetJsonResponse, Shop } from "@/types/Gourmet";

export function Search(props: {
  radius: number;
  setRadius: any;
  setFocus: any;
}) {
  const [searchList, setSearchList] = useState<GourmetJsonResponse>();
  return (
    <div className="shadow-inner m-5 max-w-5xl w-2/3 flex flex-col justify-center items-center">
      <div className="bg-[#fcd34d] rounded-t text-center text-2xl p-3 font-mono w-full">
        <p>近場の飲食店を探してみましょう!</p>
      </div>
      <InputForm
        setRadius={props.setRadius}
        setSearchList={setSearchList}
      ></InputForm>
      <SearchResultList
        shopList={searchList?.shop}
        setFocus={props.setFocus}
      ></SearchResultList>
    </div>
  );
}
