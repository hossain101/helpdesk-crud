"use client";

import { HiOutlineTrash } from "react-icons/hi";

const RemoveBtn = ({ id }) => {
  console.log("id:" + id);

  const deleteTicket = async () => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this ticket?"
    );
    if (confirmDelete) {
      await fetch(`http://localhost:3000/api/tickets?id=${id}`, {
        method: "DELETE",
      });
     window.location.reload();  
    }
  };

  return (
    <button onClick={deleteTicket}>
      <HiOutlineTrash size={24} color="red" />
    </button>
  );
};

export default RemoveBtn;
