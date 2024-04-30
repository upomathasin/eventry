import { eventModel } from "@/models/event-model";
import { userModel } from "@/models/user-model";
import mongoose from "mongoose";

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

export async function updateUserInterest(eventId, authId) {
  try {
    const event = await eventModel.findById(eventId);
    const foundUser = event.interested_ids.find(
      (user) => user._id.toString() === authId
    );
    if (foundUser) {
      event?.interested_ids?.pull(new mongoose.Types.ObjectId(authId));
    } else {
      event?.interested_ids?.push(new mongoose.Types.ObjectId(authId));
    }
    event.save();
  } catch (e) {
    throw new Error(e);
  }
}

export async function updateGoing(eventId, authId) {
  const event = await eventModel.findById(eventId);
  event?.going_ids.push(new mongoose.Types.ObjectId(authId));
  event.save();
}
