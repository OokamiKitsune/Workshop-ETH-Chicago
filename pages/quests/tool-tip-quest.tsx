import React from "react";
import ToolTip from "../../components/ToolTip";
import ToolTipBox from "../../components/TechQuests/ToolTipBox";
import developerGandalf from "./developers/developerTemplate";

// Welcome to the tool-tip-quest! This quest will teach you how to create a tooltip using React components.
// We have provided you with most of the code you need to get started. 
// For context: We have created our own component called ToolTip that will be used to display some basic information on the DOM.
// Before you implement your own code, you will need to create a developer object and import it to this file. Simply adding a string is not good practice. 
// These objects are located in the pages/quest/developers folder.


export default function ToolTipQuest() {

    return (
        <>
      <div className="flex items-center justify-center mt-10 mb-10">
      <div className="flex flex-col mb-5">
        {/* Use the ToolTipBox component and pass developer-specific data as props */}
        <ToolTipBox name={developerGandalf.name} characterClass={developerGandalf.characterClass} />
        <ToolTipBox name={developerGandalf.name} characterClass={developerGandalf.characterClass} />
        <ToolTipBox name={developerGandalf.name} characterClass={developerGandalf.characterClass} />
        <ToolTipBox name={developerGandalf.name} characterClass={developerGandalf.characterClass} />
        <ToolTipBox name={developerGandalf.name} characterClass={developerGandalf.characterClass} />



      </div>
        </div>
    
    </>
  );
}