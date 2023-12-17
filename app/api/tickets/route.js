import Ticket from "@/models/ticket";
import connectMongoDB from "@/utils/mongodb";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const { title, description } = await request.json();

    if (!title || !description) {
      return NextResponse.json(
        { message: "Title and description are required" },
        { status: 400 }
      );
    }

    await connectMongoDB();

    const ticket = await Ticket.create({ title, description });
    

    return NextResponse.json(
      { message: "Ticket created successfully!", ticket },
      { status: 201 }
    );
    
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error occurred while creating the ticket" },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    await connectMongoDB();

    const tickets = await Ticket.find({});

    return NextResponse.json(tickets, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error occurred while fetching the tickets" },
      { status: 500 }
    );
  }
};

export const DELETE = async (request) => {
  try {
    const id = request.nextUrl.searchParams.get("id");

    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    await connectMongoDB();

    const deletedTicket = await Ticket.findByIdAndDelete(id);

    if (!deletedTicket) {
      return NextResponse.json(
        { message: "No ticket found with this ID" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Ticket deleted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error occurred while deleting the ticket" },
      { status: 500 }
    );
  }
};
