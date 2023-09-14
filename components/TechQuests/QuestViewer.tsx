import React from "react";
import Link from "next/link";
import ToolTipQuest from "./ToolTipQuest";
import Tooltip from "../ToolTip";

/**
 * This QuestView component is used to display quests.
 * To add your own quest, you will need to create your own component that contains your quest 
 * and then import it on this QuestView.
 * The QuestViwer also handles the routing to the quest page.
 */

// Interface that defines the structure of a quest.
interface Quest {
    name: string;
    description: string;
    difficulty: string;
    component: React.ReactNode;
}

export default function QuestViewer() {
    
    // Format the quest name to be used in the URL.
    const formatQuestName = (name: string) => {
        return name.replace(/\s+/g, '-').toLowerCase();
    }

    // Use this array to add your own quest. Please follow the format below.
    const quests: Quest[] = [
        {
            name: "Tool Tip Quest",
            description: "Context matters. Learn to create a tooltip using React Hooks. This quest is a great introduction to React Hooks and how to use them.",
            difficulty: "Easy",
            component: <ToolTipQuest />
        },
    ]
    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-semibold mb-4">Ceptor Club Tech Quests</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {quests.map((quest, index) => (
                        <div
                            key={index}
                            className="bg-gray-700 rounded-lg p-4 shadow-md hover:drop-shadow-lg transition duration-300"
                        >
                            <Tooltip content={"Hello"} children={undefined} defaultContainerClass={undefined} />
                            <h2 className="text-lg font-semibold text-white">{quest.name}</h2>
                            <p className="text-gray-200 break-words">{quest.description}</p>
                            <p className="text-yellow-600">Difficulty: {quest.difficulty}</p>
                            <Link href={"quests/" + formatQuestName(quest.name)}>
                                <span className="mt-2 text-blue-600 hover:underline">Begin</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}