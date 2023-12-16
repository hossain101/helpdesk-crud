import Ticket from "@/models/ticket";
import { NextResponse } from "next/server";
import connectMongoDB from "@/utils/mongodb";



export const PUT = async (request, { params }) => {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();

  await connectMongoDB();

  await Ticket.findByIdAndUpdate(id, { title, description });

  return NextResponse.json(
    { message: "Ticket updated successfully!" },
    { status: 200 }
  );
};  


export const GET = async (request,{params}) => {
    const { id } = params;
    await connectMongoDB();
    const ticket = await Ticket.findById(id);
    return NextResponse.json(ticket);
    
    };
