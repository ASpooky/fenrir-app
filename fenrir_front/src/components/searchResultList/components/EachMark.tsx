import React from "react";

export function EachMark(props: { url: string; flag: boolean }) {
  const trueStyle = "w-6 h-6";
  const falseStyle = "w-6 h-6 opacity-10";
  const style = props.flag ? trueStyle : falseStyle;
  return (
    <div className="border-2">
      <img src={props.url} alt="" className={style} />
    </div>
  );
}
