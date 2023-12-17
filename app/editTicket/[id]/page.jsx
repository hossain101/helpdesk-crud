import EditTicketForm from "@/components/EditTicketForm";

const getTopicById = async (id) => {
  const SITE_URL = process.env.SITE_URL;
  try {
    const res = await fetch(`${SITE_URL}/api/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });

    const data = await res.json();
    console.log(data);
    if (res.status === 200) {
      return data;
    } else {
      console.error("Error fetching ticket!");
    }
  } catch (error) {
    console.error(error);
  }
};

const EditTicket = async ({ params }) => {
  const { id } = params;
  console.log("Now I am in editTicket/%5Bid%5D/page.jsx");

  console.log(id);

  const ticket = await getTopicById(id);

  const title = await ticket?.title;
  const description = await ticket?.description;

  return <EditTicketForm id={id} title={title} description={description} />;
};

export default EditTicket;
