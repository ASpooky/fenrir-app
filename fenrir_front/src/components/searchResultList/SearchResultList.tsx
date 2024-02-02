import React from "react";
import { Shop } from "@/types/Gourmet";
import { SearchResultItem } from "./SearchResultItem";

export function SearchResultList(props: {
  shopList: Shop[] | undefined;
  setFocus: any;
}) {
  if (props.shopList == undefined) {
    return <div>Searching</div>;
  }
  return (
    <div>
      {props.shopList.map((s) => {
        return (
          <SearchResultItem
            key={s.id}
            shop={s}
            setFocus={props.setFocus}
          ></SearchResultItem>
        );
      })}
    </div>
  );
}
