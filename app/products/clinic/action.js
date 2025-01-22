"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Create a new event
export async function createEvent(eventData) {
  try {
    const event = await prisma.event.create({
      data: {
        title: eventData.title,
        description: eventData.description,
        start_time: new Date(eventData.start_time),
        end_time: new Date(eventData.end_time),
        date: new Date(eventData.date),
      },
    });
    return { success: true, data: event };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Get all events
export async function getAllEvents() {
  try {
    const events = await prisma.event.findMany({
      orderBy: {
        date: "asc",
      },
    });
    return { success: true, data: events };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Get events for a specific date
export async function getEventsByDate(date) {
  try {
    const events = await prisma.event.findMany({
      where: {
        date: {
          equals: new Date(date),
        },
      },
      orderBy: {
        start_time: "asc",
      },
    });
    return { success: true, data: events };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Update an event
export async function updateEvent(id, eventData) {
  try {
    const updatedEvent = await prisma.event.update({
      where: {
        id: parseInt(id),
      },
      data: {
        title: eventData.title,
        description: eventData.description,
        start_time: new Date(eventData.start_time),
        end_time: new Date(eventData.end_time),
        date: new Date(eventData.date),
      },
    });
    return { success: true, data: updatedEvent };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Delete an event
export async function deleteEvent(id) {
  try {
    await prisma.event.delete({
      where: {
        id: parseInt(id),
      },
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
