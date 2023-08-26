import ContactFormEmail from "@/email/email-form";
import { validateString } from "@/lib/validateString";
import { NextRequest, NextResponse } from "next/server";
import React from "react";
import { Resend } from "resend";

export const POST = async (req: NextRequest) => {
	const { senderEmail, message } = await req.json();
	const resend = new Resend(process.env.RESEND_API_KEY);

	if (!validateString(senderEmail, 500)) {
		return {
			message: "Invalid sender email",
		};
	}
	if (!validateString(message, 5000)) {
		return {
			message: "Invalid message",
		};
	}

	try {
		const data = await resend.emails.send({
			from: "Contact Form <onboarding@resend.dev>",
			to: "awael3977@gmail.com",
			subject: "Message from contact form",
			reply_to: senderEmail,
			react: React.createElement(ContactFormEmail, {
				message: message,
				senderEmail: senderEmail,
			}),
		});

		if (data.id) {
			return NextResponse.json(
				{ message: "Message sent successfully.", ...data },
				{ status: 200, statusText: "success" }
			);
		} else {
			return NextResponse.json({ ...data }, { status: 400 });
		}
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
};
