import React from 'react'

const EditTicketForm = () => {
  return (
    <div className='p-4 border my-3 mx-3  gap-5 '>
    <form className='flex flex-col gap-3 '>
      <input className='border border-slate-800 px-8 py-2 ' type="text" placeholder="Ticket Title" />
      <input className='border border-slate-800 px-8 py-2 ' type="text" placeholder="Ticket Deccription" />

      <button className='bg-slate-800 text-white px-8 py-2 rounded hover:bg-slate-700 transition-colors w-fit'>Update Ticket</button>
    </form>
    </div>
  )
}

export default EditTicketForm