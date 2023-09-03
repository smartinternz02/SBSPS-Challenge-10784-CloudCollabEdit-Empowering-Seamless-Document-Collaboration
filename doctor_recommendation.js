import React, { useEffect, useState } from 'react';

function DoctorRecommendations() {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    fetch('/api/recommendations')
      .then((response) => response.json())
      .then((data) => setRecommendations(data));
  }, []);

  return (
    <div>
      <h2>Doctor Recommendations</h2>
      <ul>
        {recommendations.map((doctor) => (
          <li key={doctor.id}>{doctor.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorRecommendations;
