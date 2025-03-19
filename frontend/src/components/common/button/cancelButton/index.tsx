import React from "react";

type Props = {
  onClick: () => void
  width: string,
  height: string
}
const CancelButton = ({ onClick, width, height }: Props) => {
  return (
    <button className={`h-${height} w-${width} border border-[#ee5253] hover:bg-[#ee5253] rounded-md bg-button-cancel`} onClick={onClick}>
      <span className="text-button-cancel font-semibold">Hủy</span>
    </button>
  );
};

export default CancelButton;
