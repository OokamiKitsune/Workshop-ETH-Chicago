import Image from 'next/image';
import WorkshopQuickStart from "../components/WorkshopQuickStart";
import ToolTip from "../components/ToolTip";


export default function Home() {


  return (
    <>
        <main>
          <div className="flex flex-col justify-center items-center">
            <div className="z-10 flex w-full justify-center">
              <div className=" z-10">
                <WorkshopQuickStart />
                <ToolTip content={"Hello, this is a tool tip 🙂"} defaultContainerClass={"w-5 h"}>
              </ToolTip>
              </div>
            </div>
          </div>
        </main>
    </>

  );
}
