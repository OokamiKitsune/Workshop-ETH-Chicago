import React from "react";
import ToolTip from "../../components/ToolTip";

// Welcome to the tool-tip-quest! This quest will teach you how to create a tooltip using React a component.
// We have provided you with a template to get you started. 
// We have created our own component called ToolTip that will be used to display your creation on the DOM.
// Before you implement your own code, enter in the values too the const variables below.

const name = "Tim Palumbo";
const aboutMe = "I am a software engineer at a company called Ceptor. I am a full stack developer and I love to learn new things.";
const github = "http://www.github.com/OokamiKitsune";
const website = "http://www.dot.cards/tjp";


export default function ToolTipQuest() {

    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="bg-gray-700 rounded-lg p-10 shadow-md hover:drop-shadow-lg transition duration-300 relative flex">
                    <h2 className="text-2xl font-semibold text-white">{name}</h2>
                    <div className="flex-grow" />
                    <div className="ml-4">
                        
                        {/* This is where you will display your tooltip. */}
                        <ToolTip content={github + website + aboutMe} children={undefined} defaultContainerClass={undefined} />

                    </div>
                </div>
            </div>


        </>
    )
}
