import connectionDB from "@/lib/mongoose";
import Subscription from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req: Request) {  
    await connectionDB();
    try {
        const { email } = await req.json();

        // Check if the email already exists in the database
        const existingSubscriber = await Subscription.findOne({ email });

        if (existingSubscriber) {
            return NextResponse.json({ message: "User is already subscribed" }, { status: 200 }); 
        }

        // If email is not found, create a new subscription
        const newSubscriber = new Subscription({ email });
        await newSubscriber.save();

        return NextResponse.json({ message: "Subscription successful", subscriber: newSubscriber }, { status: 201 });
    } catch (error) {
        console.error("Error subscribing user:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
