"use server";

import { createUser, findUserByCredentials } from "@/db/query";
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
    redirect("/");
  } else {
    throw new Error("User not Found !");
  }
}
