'use server';

export async function calculateAge(dob) {
  if (!dob) {
    return { message: 'Date of birth is required' };
  }

  const dobDate = new Date(dob);
  const now = new Date();

  if (dobDate > now) {
    return { message: 'Date of birth cannot be in the future' };
  }

  const diffTime = Math.abs(now - dobDate);
  const daysLived = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const weeksLived = Math.floor(daysLived / 7);
  const monthsLived = Math.floor(daysLived / 30.44);

  return {
    message: `You have lived approximately ${daysLived} days, ${weeksLived} weeks, or ${monthsLived} months.`,
  };
}