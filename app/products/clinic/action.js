"use server";

import { Appointment, initDB } from "./model";

await initDB()

// Create a new event
export async function createEvent(eventData) {
  const inputDate = eventData.get("date")
  const formattedDate = new Date(inputDate).toISOString().split('T')[0]

  const rawFormData = {
    title: eventData.get("title"),
    date: formattedDate,
    time: eventData.get("time"),
    duration: parseInt(eventData.get("duration"))
  }

  try {
    const event = await Appointment.create(rawFormData);
    console.log("success")
  } catch (error) {
    console.log("error")
  }
}

export async function getAppointments() {
  console.log('point 3')
  try {
    const appointments = await Appointment.findAll();
    console.log(appointments)
  } catch (error) {
    console.log("error")
  }
}
