"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";

const EditTicketForm = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `http://localhost:3000/api/${id}` ||
          `https://helpdesk-crud.onrender.com/api/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            newTitle: newTitle,
            newDescription: newDescription,
          }),
        }
      );
      const data = await res.json();
      console.log(data);
      if (res.status === 200) {
        //rerender
       router.refresh();
        router.push("/");
      } else {
        console.error("Error creating ticket!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4 border my-3 mx-3  gap-5 ">
      <form className="flex flex-col gap-3 " onSubmit={handleSubmit}>
        <input
          className="border border-slate-800 px-8 py-2 "
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          className="border border-slate-800 px-8 py-2 "
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />

        <button className="bg-slate-800 text-white px-8 py-2 rounded hover:bg-slate-700 transition-colors w-fit">
          Update Ticket
        </button>
      </form>
    </div>
  );
};

export default EditTicketForm;
