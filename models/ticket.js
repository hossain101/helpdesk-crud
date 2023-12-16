import mongoose, { Schema } from "mongoose";

const ticketSchema = new Schema({
    title: {
        type: String,
       
    },
   description: {
        type: String,
        
    },
},
{
    timestamps: true,
}

);

const Ticket = mongoose.models.Ticket ||mongoose.model("Ticket", ticketSchema);

export default Ticket;