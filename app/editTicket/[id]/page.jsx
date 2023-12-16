import EditTicketForm from '@/components/EditTicketForm'

const getTopicById = async (id) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/tickets/${id}` ||
        `https://helpdesk-crud.onrender.com/api/tickets/${id}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
      }
    );

    
    const data = await res.json();
    console.log(data);
    if (res.status === 200) {
      return data;
    } else {
      console.error("Error fetching ticket!");
    }
  } catch (error) {
}
};


const EditTicket =  async ({params}) => {
  const {id} = params;
  console.log(id);

  
  const ticket = await getTopicById(id);

  const title = ticket.title;
  const description = ticket.description;

  
  return (
    <EditTicketForm id={id} title={title} description={description} />
  )
}

export default EditTicket