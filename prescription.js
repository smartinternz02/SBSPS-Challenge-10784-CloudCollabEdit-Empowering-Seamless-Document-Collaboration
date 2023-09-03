// React component for tracking prescriptions
import React, { useState, useEffect } from 'react';

function PrescriptionTracking() {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    // Fetch the user's prescriptions from the backend
    fetch('/api/prescriptions')
      .then((response) => response.json())
      .then((data) => setPrescriptions(data));
  }, []);

  return (
    <div>
      <h2>Prescription Tracking</h2>
      <ul>
        {prescriptions.map((prescription) => (
          <li key={prescription.id}>
            <p>{prescription.medication}</p>
            <p>Start Date: {prescription.startDate}</p>
            <p>End Date: {prescription.endDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PrescriptionTracking;

