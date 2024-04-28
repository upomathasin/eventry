import { eventModel } from "@/models/event-model";

export async function getAllEvents() {
  const allEvents = await eventModel.find().lean();
  return allEvents;
}

export async function getEventById(id) {
  const event = await eventModel.findById(id);
  return event;
}
