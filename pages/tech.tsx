import React from "react";
import Link from "next/link";
import QuestViewer from "../components/TechQuests/QuestViewer";

export default function tech(){
    return(
        <>
        <div className="flex flex-col justify-center items-center">
            <div className="z-10 flex w-full justify-center">
                <div className=" z-10">
                <QuestViewer />

                </div>
            </div>
        </div>
        
        </>
    )
}