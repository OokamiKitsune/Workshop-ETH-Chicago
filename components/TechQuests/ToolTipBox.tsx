import React from "react";
import ToolTip from "../../components/ToolTip";

export default function ToolTipBox({ name, characterClass }) {
  return (
    <div className="bg-gray-700 rounded-lg p-10 shadow-md hover:drop-shadow-lg transition duration-300 relative flex mr-5">
      <h2 className="text-2xl font-semibold text-white">{name}</h2>
      <div className="flex-grow" />
      <div className="ml-4">
        <ToolTip content={"Class: " + characterClass} children={undefined} defaultContainerClass={undefined} />
      </div>
    </div>
  );
}
