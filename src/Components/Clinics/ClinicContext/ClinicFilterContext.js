// ClinicFilterContext.js
import React, { createContext, useState } from 'react';

export const ClinicFilterContext = createContext();

export const ClinicFilterProvider = ({ children }) => {
  const [selectedPathies, setSelectedPathies] = useState([]);
  const [selectedCity, setSelectedCity] = useState([]);

  const handlePathyChange = (newPathies) => {
    setSelectedPathies(newPathies);
  };

  const handleCityChange = (newCity) => {
    setSelectedCity(newCity);
  };

  return (
    <ClinicFilterContext.Provider
      value={{
        selectedPathies,
        selectedCity,
        handlePathyChange,
        handleCityChange,
      }}
    >
      {children}
    </ClinicFilterContext.Provider>
  );
};
