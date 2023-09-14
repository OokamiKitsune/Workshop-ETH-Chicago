import React from "react";
import ToolTip from "../../components/ToolTip";

// Welcome to the tool-tip-quest! This quest will teach you how to create a tooltip using React a component.
// We have provided you with a template to get you started. 
// We have created our own component called ToolTip that will be used to display your creation on the DOM.

// Before you implement your own code, you should enter in the values to the const variables below. 
// Tell us about YOU!

const name = "?";
const aboutMe = "?";
const github = "?";
const website = "?";


export default function ToolTipQuest() {

    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="bg-gray-700 rounded-lg p-10 shadow-md hover:drop-shadow-lg transition duration-300 relative flex">
                    <h2 className="text-2xl font-semibold text-white">{name}</h2>
                    <div className="flex-grow" />
                    <div className="ml-4">
                        
                        {/* This is where you will display your tooltip. */}
                        

                    </div>
                </div>
            </div>


        </>
    )
}
