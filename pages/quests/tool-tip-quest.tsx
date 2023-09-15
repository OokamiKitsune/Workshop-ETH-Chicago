import React from "react";
import ToolTipBox from "../../components/TechQuests/ToolTipBox";

// Welcome to the tool-tip-quest! This quest will teach you how to create a tooltip using React components.
// We have provided you with most of the code you need to get started. 
// For context: We have created our own component called ToolTipBox that will be used to display some basic information on the DOM.
// Before you implement your own code, you will need to create a developer object and import it to this file. Simply adding a string is not good practice. 
// These objects are located in the components/developers folder.


export default function ToolTipQuest() {

    return (
    <>
        <div className="flex items-center justify-center mt-10 mb-10">
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl font-semibold text-center">To begin, open this page in your IDE: /pages/quests/tool-tip-quest</h1>
                {/* Use the ToolTipBox component and pass developer-specific data as props */}


            </div>
        </div>
    
    </>
  );
}