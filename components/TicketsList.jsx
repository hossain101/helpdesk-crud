import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";


// export async function getTickets() {
//   try {
//     const res = await fetch(
//       "http://localhost:3000/api/tickets" ||
//         "https://helpdesk-crud.onrender.com/api/tickets",
//       {
//         cache: "no-store",
//       }
//     );
//     if (!res.ok) {
//       throw new Error(`Failed to fetch tickets: ${res.status}`);
//     }
//     const tickets = await res.json();
   
//     return tickets;
//   } catch (error) {
//     console.error("Error Loading Tickets", error);
//     throw error;
//   }
// }

const TicketsList = async () => {
  //const tickets = await getTickets();

  const tickets = [
   
    {
      "title": "Database Indexing Error",
      "description": "Database indexing error leading to slow query performance. Reindex the database to improve query execution.",
      "createdAt": "2023-10-18T18:10:00.000+00:00",
      "updatedAt": "2023-10-19T19:30:00.000+00:00"
    },
    {
      "title": "Error Handling Framework Update",
      "description": "Update error handling framework to address application exceptions more efficiently. Enhance error logging and reporting.",
      "createdAt": "2023-10-19T20:00:00.000+00:00",
      "updatedAt": "2023-10-20T21:25:00.000+00:00"
    },
    {
      "title": "External API Integration Failure",
      "description": "Failure observed in the integration with external APIs. Debug and fix the integration issues for seamless data exchange.",
      "createdAt": "2023-10-20T22:00:00.000+00:00",
      "updatedAt": "2023-10-21T23:20:00.000+00:00"
    }
  ]

  if (!tickets || tickets.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">No tickets available</h1>
      </div>
    );
  }

  return (
    
    <>
      {tickets.map((ticket) => (
        
        <div key={ticket._id}>
          <div className="p-4 border my-3 mx-3 flex justify-between gap-5 items-start rounded-lg bg-orange-200">
            <div className=" ">
              <h2 className="font-bold ">{ticket.title}</h2>
              <p>{ticket.description}</p>
              <p className="text-sm text-gray-400">
                Created:
                {new Date(ticket.createdAt).toLocaleDateString("en-US")}
              </p>
              <p className="text-sm text-gray-400">
                Updated:
                {new Date(ticket.updatedAt).toLocaleDateString("en-US")}
              </p>
            </div>

            <div className="flex gap-2 ">
              <RemoveBtn  id={ticket._id}/>

              <Link href={`/editTickets/${ticket._id}`} as="">
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TicketsList;
