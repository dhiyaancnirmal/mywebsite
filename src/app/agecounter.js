"use client";
import React, { useEffect, useState } from 'react';

const AgeCounter = () => {
  const birthDate = new Date('2007-02-19T00:00:00'); // Replace with your birth date
  const [age, setAge] = useState(0);

  useEffect(() => {
    const updateAge = () => {
      const now = new Date();
      const diff = now - birthDate; // Difference in milliseconds
      const ageInYears = diff / (1000 * 60 * 60 * 24 * 365.25); // Convert to years
      setAge(ageInYears.toFixed(2)); // Set the age with 2 decimal places
    };

    const interval = setInterval(updateAge, 1000); // Update every 1 second
    updateAge(); // Initial call to set age immediately
    return () => clearInterval(interval); // Clean up on component unmount
  }, [birthDate]);

  return (
    <div>
      <p>{age} years</p>
    </div>
  );
};

export default AgeCounter;
