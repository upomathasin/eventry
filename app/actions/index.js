"use server";

import {
  createUser,
  findUserByCredentials,
  updateGoing,
  updateUserInterest,
} from "@/db/query";
import { eventModel } from "@/models/event-model";
import mongoose from "mongoose";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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
    revalidatePath("/");
    redirect("/");
  } catch (e) {
    throw e;
  }
}
