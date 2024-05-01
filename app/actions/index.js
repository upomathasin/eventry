"use server";

import {
  createUser,
  findUserByCredentials,
  getEventById,
  updateGoing,
  updateUserInterest,
} from "@/db/query";
import { eventModel } from "@/models/event-model";
import { Resend } from "resend";
import mongoose from "mongoose";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import EmailTemplete from "@/components/EmailTemplete";

export async function registerAction(formData) {
  const user = Object.fromEntries(formData);
  console.log(user);

  const crated = await createUser(user);
  redirect("/login");
}

export async function performLogin(formData) {
  const credential = {};
  credential.email = formData.get("email");
  credential.password = formData.get("password");
  const found = await findUserByCredentials(credential);
  console.log(found, "found");
  if (found) {
    console.log("Login successful");
    return found;
  } else {
    throw new Error("User not Found !");
  }
}

export async function addInterestEvent(eventId, authId) {
  try {
    await updateUserInterest(eventId, authId);
  } catch (e) {
    throw e;
  }
  revalidatePath("/");
}

export async function addGoingEvent(eventId, user) {
  try {
    await updateGoing(eventId, user?._id);
    await sendEmail(eventId, user);
    revalidatePath("/");
    redirect("/");
  } catch (e) {
    throw e;
  }
}

export async function sendEmail(eventId, user) {
  const event = await getEventById(eventId);
  const resend = new Resend(process.env.RESEND_KEY);
  const message = `Dear ${user.name},you have been successfully registered for the event (${event.name}). We are excited to have you here !`;
  const sent = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: ["tahsinchowdhuryupoma@gmail.com"],
    subject: `Successfully registered for the event ${event.name}`,
    text: "it works!",
    react: EmailTemplete({ message }),
  });
}
