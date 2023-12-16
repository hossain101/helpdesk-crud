import Ticket from "@/models/ticket";
import { NextResponse } from "next/server";
import connectMongoDB from "@/utils/mongodb";

export const PUT = async (request, { params }) => {
  try {
    const { id } = params;
    const { newTitle: title, newDescription: description } = await request.json();

    await connectMongoDB();

    const updatedTicket = await Ticket.findByIdAndUpdate(id, { title, description });

    if (!updatedTicket) {
      return NextResponse.json({ message: "No ticket found with this ID" }, { status: 404 });
    }

    return NextResponse.json({ message: "Ticket updated successfully!" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "An error occurred while updating the ticket" }, { status: 500 });
  }
};

export const GET = async (request, { params }) => {
  try {
    const { id } = params;
    await connectMongoDB();
    const ticket = await Ticket.findById(id);

    if (!ticket) {
      return NextResponse.json({ message: "No ticket found with this ID" }, { status: 404 });
    }

    return NextResponse.json(ticket, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "An error occurred while fetching the ticket" }, { status: 500 });
  }
};
