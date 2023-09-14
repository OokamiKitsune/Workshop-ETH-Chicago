// Welcome to the tool-tip-quest! This quest will teach you how to create a tooltip using React component.
// We have provided you with a template to get you started. 
// We have created our own component called ToolTip that will be used to display your creation on the DOM.
// Here is a link to the React Hooks documentation: https://reactjs.org/docs/hooks-intro.html


import React from "react";
import ToolTip from "../../components/ToolTip"; // This imports the ToolTip component that we created.

export default function ToolTipQuest() {

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                {/* This is where you will display your tooltip. */}
                <ToolTip content={"Hello World!"} children={undefined} defaultContainerClass={undefined} />

            </div>
        </>
    )
}
