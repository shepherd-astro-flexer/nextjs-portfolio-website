"use server";

import { validateString, getErrorMessage } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

type EmailResponse = {
  data?: any; // Replace 'any' with a more specific type if possible
  error?: string | { message: string };
};

export async function sendEmail(formData: FormData): Promise<EmailResponse> {
  const senderEmail = formData.get("senderEmail");
  const senderMessage = formData.get("senderMessage");

  // baby's first server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid email",
    };
  }

  if (!validateString(senderMessage, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;

  try {
    const response = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "shepherdastro.feria@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      react: ContactFormEmail({
        senderEmail: senderEmail as string,
        senderMessage: senderMessage as string,
      }),
    });

    // Check if the response contains an error
    if (response.error) {
      console.error("Error sending email:", response.error);
      return {
        error: getErrorMessage(response.error),
      };
    }

    data = response.data;
  } catch (error: unknown) {
    console.error("Error sending email in catch:", getErrorMessage(error));
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
}
