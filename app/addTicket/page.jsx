const AddTicket = () => {
  return (
    <div className='flex flex-col items-center justify-center  min-h-screen bg-gradient-to-r from-green-400 to-blue-500 px-8'>
      <form className='w-full max-w-lg bg-slate-600 rounded-lg shadow-md p-6'>
        <div className='divide-y divide-gray-200'>
          <input className='text-sm text-gray-400 rounded-lg w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline mb-4' type="text" placeholder="Ticket Title" />
          <input className='text-sm text-gray-400 rounded-lg w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline mt-4 mb-6' type="text" placeholder="Ticket Description" />
          <button className='w-full py-3 px-4 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded-lg tracking-wide'>Add Ticket</button>
        </div>
      </form>
    </div>
  )
}

export default AddTicket;
