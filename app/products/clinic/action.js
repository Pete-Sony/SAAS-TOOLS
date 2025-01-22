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
  try {
    const appointments = await Appointment.findAll();
    const plainAppointments = appointments.map((appointment) => appointment.toJSON())
    console.log(plainAppointments)
    return plainAppointments
  } catch (error) {
    console.log("Error Fetching Appointments", error)
    return []
  }

}
