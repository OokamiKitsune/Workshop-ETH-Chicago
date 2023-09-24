import Image from "next/image";
import tooltipIcon from "../public/images/tooltip-icon.png";
import Tippy from "@tippyjs/react";
import InfoIcon from "./InfoIcon";
import React from "react";

Tippy.defaultProps = {
  placement: "top",
  arrow: true,
  delay: [500, 0],
  duration: [250, 1000],
  className: "w-96 lg:w-80 md:w-64 sm:w-48 bg-gray-300 text-black p-4",
  aria: "describedby",
};

export default function Tooltip({
  content,
  children,
  defaultContainerClass: setCustomStyle,
  ...props
}) {
  return (
    <Tippy
      content={
        <div className="oswald flex flex-row items-center text-left max-w-xl">
          <Image
            className="mr-4 h-8"
            src={tooltipIcon}
            width={25}
            height={25}
            alt="Tip"
          />
          <div className="max-w-xs break-words">
            {content.split("\n").map((text, index, array) => (
              <React.Fragment key={index}>
                {text}
                {/* Add a line break for all except the last */}
                {index === array.length - 1 ? null : <br />}
              </React.Fragment>
            ))}
          </div>
        </div>
      }
      {...props}
    >
      <div
        className={`absolute top-3 right-6 flex items-center justify-center w-8 h-8 rounded-full bg-purple-700 ${setCustomStyle}`}
      >
        <InfoIcon />
        {children}
      </div>
    </Tippy>
  );
}
