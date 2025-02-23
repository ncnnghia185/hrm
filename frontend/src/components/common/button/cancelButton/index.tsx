import React from "react";

const CancelButton = () => {
  return (
    <button className="h-10 w-36 border border-[#ee5253] hover:bg-[#ee5253] rounded-md bg-button-cancel">
      <span className="text-button-cancel font-semibold">Hủy</span>
    </button>
  );
};

export default CancelButton;
