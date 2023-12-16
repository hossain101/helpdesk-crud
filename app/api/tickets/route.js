import Ticket from "@/models/ticket";
import connectMongoDB from "@/utils/mongodb";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { title, description } = await request.json();

  await connectMongoDB();

  const ticket = await Ticket.create({
    title,
    description,
  });

  await ticket.save();

  return NextResponse.json(
    { message: "Ticket created successfully!" },
    { status: 201 }
  );
};

export const GET = async () => {
  await connectMongoDB();

  const tickets = await Ticket.find({});

  return NextResponse.json(tickets);
};

export const DELETE = async (request) => {
  const id = request.nextUrl.searchParams.get("id");

  await connectMongoDB();

  await Ticket.findByIdAndDelete(id);

  return NextResponse.json(
    { message: "Ticket deleted successfully!" },
    { status: 200 }
  );
};


