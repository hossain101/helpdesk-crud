"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddTicket = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "http://localhost:3000/api/tickets" ||
          "https://helpdesk-crud.onrender.com/api/tickets",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, description }),
        }
      );
      const data = await res.json();
      console.log(data);
      if (res.status === 201) {
        //rerender
        
        router.replace("/");
       
      } else {
        console.error("Error creating ticket!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 px-8">
      <form
        className="w-full max-w-lg bg-slate-600 rounded-lg shadow-md p-6"
        onSubmit={handleSubmit}
      >
        <div className="divide-y divide-gray-200">
          <input
            className="text-sm text-black placeholder-gray-400 rounded-lg w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline mb-4"
            type="text"
            placeholder="Ticket Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <input
            className="text-sm text-black placeholder-gray-400 rounded-lg w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline mt-4 mb-6"
            type="text"
            placeholder="Ticket Description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <button
            className="w-full py-3 px-4 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded-lg tracking-wide"
            type="submit"
          >
            Add Ticket
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTicket;
