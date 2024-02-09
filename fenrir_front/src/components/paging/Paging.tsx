import React, { useState, useCallback, useEffect } from "react";
import { Pagination } from "@mui/material";
import { useGourmetQuery } from "@/hooks/useGourmetQuery";
import { Location } from "@/types/location";
import { RadiusToRangeValue } from "@/utils/RadiusToRangeValue";
import { GourmetJsonResponse } from "@/types/Gourmet";

export function Paging(props: {
  allPages: number;
  currentPage: number;
  setSearchList: React.Dispatch<
    React.SetStateAction<GourmetJsonResponse | undefined>
  >;
  location: Location;
  radius: number;
}) {
  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage(0);
  }, [props.allPages, props.radius]);

  const updateList = async (
    location: Location,
    radius: number,
    newPage: number
  ) => {
    const PagingStart = String(10 * (newPage - 1) + 1);
    let data = await useGourmetQuery(
      location,
      RadiusToRangeValue(radius),
      PagingStart
    );
    props.setSearchList(data);
  };

  const handleChangePage = useCallback(
    (event: unknown, newPage: number) => {
      setPage(newPage - 1);
      updateList(props.location, props.radius, newPage);
    },
    [props.location, props.radius]
  );

  return (
    <div className="flex justify-center items-center pb-8">
      <Pagination
        // ページのトータルのカウント数（例えば、100行のテーブルで表示数10の場合は10となり、ページネーションボタンが10まで表示される）
        count={props.allPages}
        page={page + 1}
        // ページが変更されたときに発生する処理
        onChange={handleChangePage}
        showFirstButton
        showLastButton
        color="primary"
        size="small"
      />
    </div>
  );
}
