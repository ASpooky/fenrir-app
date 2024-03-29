import React from "react";
import { Shop } from "@/types/Gourmet";

export function DetailModal(props: {
  modalContent: Shop;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const bgClickHandler = (e: any) => {
    if (e.target.id === "container") props.setModalVisible(false);
  };

  return (
    <div
      id="container"
      onClick={bgClickHandler}
      className="fixed flex justify-center items-center inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-[100]"
    >
      <div className="bg-white rounded-lg shadow-2xl w-3/4 max-w-2xl">
        <div className="flex justify-center items-center bg-zinc-800 text-white">
          <div className="font-bold grow  flex justify-center items-center gap-2 h-12 text-sm md:text-lg">
            {props.modalContent.name}
          </div>
          <button
            className="relative right-4 md:right-9"
            onClick={() => {
              props.setModalVisible(false);
            }}
          >
            X
          </button>
        </div>
        <div className="flex flex-col justify-center items-center p-5 gap-5">
          <img src={props.modalContent.photo.pc.l} alt="" className=" h-52" />
          <div className="flex flex-col justify-center items-start font-monos font-bold gap-2 px-3 text-sm md:text-lg md:px-10 text-slate-700">
            <div>
              住所 :<div className="ml-5">{props.modalContent.address}</div>
            </div>

            <div>
              営業時間 :<div className="ml-5">{props.modalContent.open}</div>
            </div>

            <div>
              住所 :<div className="ml-5">{props.modalContent.address}</div>
            </div>

            <div>
              パーキング :
              <div className="ml-5">{props.modalContent.parking}</div>
            </div>

            <div>
              禁煙席 :
              <div className="ml-5">{props.modalContent.non_smoking}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
