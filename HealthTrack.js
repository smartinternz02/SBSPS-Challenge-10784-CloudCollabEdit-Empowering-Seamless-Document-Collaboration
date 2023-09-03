// React component for personal health tracking
import React, { useState, useEffect } from 'react';

function PersonalHealthTracking() {
  const [healthMetrics, setHealthMetrics] = useState([]);

  useEffect(() => {
    // Fetch the user's health metrics from the backend
    fetch('/api/health-metrics')
      .then((response) => response.json())
      .then((data) => setHealthMetrics(data));
  }, []);

  return (
    <div>
      <h2>Personal Health Tracking</h2>
      <ul>
        {healthMetrics.map((metric) => (
          <li key={metric.id}>
            <p>{metric.metricName}: {metric.value}</p>
            <p>Date: {metric.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PersonalHealthTracking;

