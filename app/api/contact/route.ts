
import { NextResponse } from "next/server";
import { sendCompanyNotification, sendUserConfirmation } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone } = body;

 
    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, message: "Name, Email & Phone are required." },
        { status: 400 }
      );
    }


    await Promise.all([
      sendCompanyNotification(body),
      sendUserConfirmation(body),
    ]);

    return NextResponse.json(
      { success: true, message: "Enquiry sent successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Email error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send enquiry. Try again later." },
      { status: 500 }
    );
  }
}
