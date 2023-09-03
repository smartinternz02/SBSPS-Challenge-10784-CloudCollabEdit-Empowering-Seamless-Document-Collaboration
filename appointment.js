import React, { useState } from 'react';

function AppointmentScheduling() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleAppointmentSubmit = () => {
  };

  return (
    <div>
      <h2>Schedule an Appointment</h2>
      <input type="date" onChange={(e) => handleDateChange(e.target.value)} />
      <input type="time" onChange={(e) => handleTimeChange(e.target.value)} />
      <button onClick={handleAppointmentSubmit}>Schedule</button>
    </div>
  );
}
