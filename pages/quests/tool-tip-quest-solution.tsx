import React from "react";
import ToolTip from "../../components/ToolTip";
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
                <div className="bg-gray-700 rounded-lg p-10 shadow-md hover:drop-shadow-lg transition duration-300 relative flex">
                    {/* This is where you will display your Name. */}
                    <h2 className="text-2xl font-semibold text-white">{developerGandalf.name}</h2>
                    <div className="flex-grow" />
                    <div className="ml-4">
                        
                        {/* This is where you will display your tooltip. */}
                        <ToolTip content={"Class: " + developerGandalf.characterClass} children={undefined} defaultContainerClass={undefined} />
                        


                    </div>
                </div>
            </div>

        </>
    )
}
