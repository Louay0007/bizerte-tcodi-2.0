import { NextResponse } from "next/server";

const recipient = "bizerte.tcodi@gmail.com";

export async function POST(request: Request) {
  const payload = await request.json() as Record<string, unknown>;
  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const organization = typeof payload.organization === "string" ? payload.organization.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";
  const enquiryType = payload.enquiryType === "partner" ? "partner" : "participant";

  if (!name || !email || !message || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: "Please provide a name, valid email, and message." }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const sender = process.env.CONTACT_FROM_EMAIL;
  if (!resendApiKey || !sender) {
    return NextResponse.json({ error: "Email delivery is not configured." }, { status: 503 });
  }

  const deliveryResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${resendApiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: sender,
      to: [recipient],
      reply_to: email,
      subject: `[Bizerte Tcodi] ${enquiryType} enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nOrganization: ${organization || "Not provided"}\nEnquiry type: ${enquiryType}\n\nMessage:\n${message}`,
    }),
  });

  if (!deliveryResponse.ok) {
    return NextResponse.json({ error: "Email delivery failed." }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}