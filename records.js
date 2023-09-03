import React, { useState, useEffect } from 'react';

function HealthRecordManagement() {
  const [healthRecords, setHealthRecords] = useState([]);

  useEffect(() => {
    fetch('/api/health-records')
      .then((response) => response.json())
      .then((data) => setHealthRecords(data));
  }, []);

  return (
    <div>
      <h2>Health Record Management</h2>
      <ul>
        {healthRecords.map((record) => (
          <li key={record.id}>{record.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default HealthRecordManagement;


