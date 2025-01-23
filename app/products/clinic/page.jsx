// 'use client'
import CalendarGrid from './_components/CalendarGrid';
import { getAppointments } from './action';

export default async function page() {

  const appointmentData = await getAppointments()
  return (
    <>
      <CalendarGrid appointments={appointmentData}/>
    </>
  );
}
