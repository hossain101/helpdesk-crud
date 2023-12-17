"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";

import { IoMdAddCircleOutline, IoMdRefreshCircle } from "react-icons/io";

const EditTicketForm = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          newTitle: newTitle,
          newDescription: newDescription,
        }),
      });
      const data = await res.json();

      if (res.status === 200) {
        //rerender
        router.refresh('/');
        router.push("/");
      } else {
        console.error("Error creating ticket!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen px-8 ${
        darkMode ? "bg-gray-900" : "bg-gradient-to-r from-green-400 to-blue-500"
      }`}
    >
      <button
        onClick={toggleDarkMode}
        className={`mb-4 py-2 px-4 rounded-full font-bold tracking-wide transform transition duration-500 ease-in-out hover:scale-105 ${
          darkMode ? "text-gray-900 bg-yellow-300" : "text-white bg-gray-600"
        }`}
      >
        Toggle Dark Mode
      </button>
      <form
        className={`w-full max-w-2xl ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        } rounded-lg shadow-md p-6 flex flex-col space-y-4`}
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center">Add Ticket</h2>
        <input
          className="text-sm placeholder-gray-400 rounded-lg w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Ticket Title"
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
        />
        <textarea
          className="resize-none text-sm placeholder-gray-400 rounded-lg w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline min-h-[size]"
          placeholder="Ticket Description"
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
          style={{
            overflow: "hidden",
            overflowWrap: "break-word",
            resize: "none",
            height: "auto",
          }}
          onInput={(e) => {
            e.target.style.height = "auto";
            e.target.style.height = e.target.scrollHeight + "px";
          }}
        />
        <button
          className="w-full py-3 px-4 leading-none text-white bg-purple-500 hover:bg-purple-600 rounded-lg tracking-wide transform transition duration-500 ease-in-out hover:scale-105 flex items-center justify-center"
          type="submit"
        >
          <IoMdAddCircleOutline size={24} className="mr-2" /> Add Ticket
        </button>
      </form>
    </div>
  );
};

export default EditTicketForm;
