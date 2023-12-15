import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const TopicsList = () => {
  return (
    <>
      <div className="">
        <div className="p-4 border my-3 mx-3 flex justify-between gap-5 items-start rounded-lg bg-orange-200">
          <div className=" ">
            <h2 className="font-bold ">Ticket Title</h2>
            <p>Ticket Description</p>
          </div>

          <div className="flex gap-2 ">
            <RemoveBtn />
            <Link href="/editTicket/1" as="/topics/1">
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopicsList;
