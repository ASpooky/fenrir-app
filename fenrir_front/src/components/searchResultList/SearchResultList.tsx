import { useEffect, useState } from "react";
import { Shop } from "@/types/Gourmet";
import { SearchResultItem } from "./SearchResultItem";
import { DetailModal } from "../detailModal/DetailModal";

export function SearchResultList(props: {
  resultAvailable: number;
  shopList: Shop[] | undefined;
  setFocus: any;
}) {
  if (props.resultAvailable == 0) {
    return (
      <div className=" pb-16">
        <p className="text-slate-500">
          検索範囲内にお店がないかもしれません。。
        </p>
      </div>
    );
  }
  if (props.shopList == undefined) {
    return (
      <div className="pb-16">
        <p className="text-slate-500">Let's Search!</p>
      </div>
    );
  }

  useEffect(() => {
    const elem = document.getElementById("shopList");
    elem?.scrollTo({ top: 0, behavior: "smooth" });
  }, [props.shopList]);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState<Shop>();

  return (
    <div className="pb-5">
      <div
        className="overflow-y-auto h-96 md:w-full max-w-2xl border-t rounded-b"
        id="shopList"
      >
        {modalVisible ? (
          <DetailModal
            modalContent={modalContent}
            setModalVisible={setModalVisible}
          ></DetailModal>
        ) : (
          ""
        )}
        {props.shopList.map((s) => {
          return (
            <SearchResultItem
              key={s.id}
              shop={s}
              setFocus={props.setFocus}
              setModalContent={setModalContent}
              setModalVisible={setModalVisible}
            ></SearchResultItem>
          );
        })}
      </div>
    </div>
  );
}
