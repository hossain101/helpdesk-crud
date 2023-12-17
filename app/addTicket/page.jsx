"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";
import { IoMdAddCircleOutline } from 'react-icons/io';
const AddTicket = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

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
        // router.refresh()

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
    <div className={`flex flex-col items-center justify-center min-h-screen px-8 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-green-400 to-blue-500'}`}>
      <button
        onClick={toggleDarkMode}
        className={`mb-4 py-2 px-4 rounded-full font-bold tracking-wide transform transition duration-500 ease-in-out hover:scale-105 ${darkMode ? 'text-gray-900 bg-yellow-300' : 'text-white bg-gray-600'}`}
      >
        Toggle Dark Mode
      </button>
      <form
        className={`w-full max-w-2xl ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} rounded-lg shadow-md p-6 flex flex-col space-y-4`}
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center">Add Ticket</h2>
        <input
          className="text-sm placeholder-gray-400 rounded-lg w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Ticket Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          className="resize-none text-sm placeholder-gray-400 rounded-lg w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Ticket Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          style={{ overflow: 'hidden', overflowWrap: 'break-word', resize: 'none', height: 'auto' }}
          onInput={(e) => { e.target.style.height = 'auto'; e.target.style.height = e.target.scrollHeight + 'px'; }}
        />
        <button
          className="w-full py-2 px-4 leading-none text-white bg-green-500 hover:bg-green-600 rounded-full tracking-wide transform transition duration-500 ease-in-out hover:scale-105 flex items-center justify-center"
          type="submit"
        >
          <IoMdAddCircleOutline className="mr-2" /> Add Ticket
        </button>
      </form>
    </div>
  );
};

export default AddTicket;
