import React from 'react';
import CustomRecurrenceScheduler from './CustomRecurrenceScheduler';

export default {
  title: 'Exported via npm/Utility/CustomRecurrenceScheduler',
  component: CustomRecurrenceScheduler,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onScheduleSet: { action: 'onScheduleSet' },
  },
};

export const Default = {
  args: {},
};

export const WeeklyRecurrence = {
  args: {
    onScheduleSet: (scheduleData) => console.log('Schedule set:', scheduleData),
  },
};

export const MonthlyRecurrence = {
  args: {
    onScheduleSet: (scheduleData) => console.log('Schedule set:', scheduleData),
  },
};

export const YearlyRecurrence = {
  args: {
    onScheduleSet: (scheduleData) => console.log('Schedule set:', scheduleData),
  },
};
