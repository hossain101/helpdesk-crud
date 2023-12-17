"use client";
import { useState } from "react";
import { HiOutlineTrash, HiOutlineCheck, HiOutlineX } from "react-icons/hi";

const RemoveBtn = ({ id }) => {
  const [showModal, setShowModal] = useState(false);

  const deleteTicket = async () => {
    await fetch(`/api/tickets?id=${id}`, {
      method: "DELETE",
    });
    window.location.reload();
  };

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        <HiOutlineTrash size={24} color="red" />
      </button>

      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="mb-4 text-lg font-semibold">
              Are you sure you want to delete this ticket?
            </p>
            <div className="flex gap-4">
              <button
                className="flex items-center gap-2 px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
                onClick={deleteTicket}
              >
                <HiOutlineCheck />
                Yes
              </button>
              <button
                className="flex items-center gap-2 px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                onClick={() => setShowModal(false)}
              >
                <HiOutlineX />
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RemoveBtn;
