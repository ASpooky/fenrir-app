import React from "react";

export function DetailModal(props: {
  modalContent: any;
  setModalVisible: any;
}) {
  const bgClickHandler = (e: any) => {
    if (e.target.id === "container") props.setModalVisible(false);
  };

  return (
    <div
      id="container"
      onClick={bgClickHandler}
      className="fixed flex justify-center items-center inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-10"
    >
      <div className="bg-white rounded-lg shadow-2xl w-3/4 min-w-modal max-w-2xl">
        <div className="flex justify-center items-center bg-zinc-800 mb-5 text-white">
          <div className="font-bold grow  flex justify-center items-center gap-2 h-12">
            Confirm
          </div>
          <button
            className="relative right-9"
            onClick={() => {
              props.setModalVisible(false);
            }}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}
