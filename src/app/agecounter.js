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
      setAge(ageInYears.toFixed(9)); // Set the age with 9 decimal places
    };

    const interval = setInterval(updateAge, 50); // Update every 50 milliseconds
    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <div>
      <h2></h2>
      <p>{age}</p> 
    </div>
  );
};

export default AgeCounter;
