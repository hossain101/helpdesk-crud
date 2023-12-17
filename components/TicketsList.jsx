import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

export async function getTickets() {
  try {
    const res = await fetch(
      "http://localhost:3000/api/tickets" ||
        "https://helpdesk-crud.onrender.com/api/tickets",
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch tickets: ${res.status}`);
    }
    const tickets = await res.json();

    return tickets;
  } catch (error) {
    console.error("Error Loading Tickets", error);
    throw error;
  }
}

const TicketsList = async () => {
  const tickets = await getTickets();

  if (!tickets || tickets.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">No tickets available</h1>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    {tickets.map((ticket, index) => (
      <div
        key={ticket._id}
        className="rounded-lg overflow-hidden shadow-lg p-6 bg-white dark:bg-gray-800"
      >
        <div className="flex justify-start items-center">
          <div className="rounded-full h-8 w-8 bg-white flex items-center justify-center mb-4">
            <span className="text-gray-900">{index + 1}</span>
          </div>
        </div>
        <h3 className="font-bold text-2xl mb-2 text-gray-900 dark:text-white">
          Issue:  {ticket.title}
        </h3>
        <h3 className="text-gray-50 dark:text-gray-50 text-base mb-4">
          Details: {ticket.description}
        </h3>
        <div className="pt-4 pb-2">
          <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-900 mr-2 mb-2">
            Created: {new Date(ticket.createdAt).toLocaleDateString("en-US")}
          </span>
          <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-900 mr-2 mb-2">
            Updated: {new Date(ticket.updatedAt).toLocaleDateString("en-US")}
          </span>
        </div>
        <div className="flex items-center justify-between mt-4">
          <RemoveBtn id={ticket._id} />
          <Link href={`/editTicket/${ticket._id}`}>
            <HiPencilAlt
              size={24}
              className="text-gray-900 dark:text-white"
            />
          </Link>
        </div>
      </div>
    ))}
  </div>
  );
};

export default TicketsList;
