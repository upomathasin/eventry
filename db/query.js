import { eventModel } from "@/models/event-model";
import { userModel } from "@/models/user-model";

export async function getAllEvents() {
  const allEvents = await eventModel.find().lean();
  return allEvents;
}

export async function getEventById(id) {
  const event = await eventModel.findById(id);
  return event;
}

export async function createUser(user) {
  await userModel.create(user);
}

export async function findUserByCredentials(credentials) {
  const user = await userModel.findOne(credentials).lean();
  return user;
}
