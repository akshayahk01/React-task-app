import React, { useState } from 'react';

export default function UpdateArray() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carModel, setCarModel] = useState("");
  const [carMake, setCarMake] = useState("");
  const [yearToRemove, setYearToRemove] = useState(""); // New state for removal by year

  function addCar() {
    if (carModel.trim() === "" || carMake.trim() === "") {
      alert("Please enter a valid car model and make.");
      return;
    }

    const newCar = {
      year: parseInt(carYear), // Ensure it's a number
      model: carModel,
      make: carMake,
    };

    setCars([...cars, newCar]);
    setCarModel("");
    setCarMake("");
    setCarYear(new Date().getFullYear());
  }

  function removeCar(index) {
    setCars(cars.filter((_, i) => i !== index));
  }

  function removeCarsByYear() {
    const year = parseInt(yearToRemove);

    
    if (isNaN(year)) {
      alert("Please enter a valid year to remove.");
      return;
    }

    const filteredCars = cars.filter(car => car.year !== year);
    setCars(filteredCars);
    setYearToRemove("");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>List of Cars</h1>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => removeCar(index)} style={{ cursor: 'pointer' }}>
            {car.year} - {car.make} - {car.model}
          </li>
        ))}
      </ul>

      <input
        type="number"
        value={carYear}
        onChange={e => setCarYear(e.target.value)}
        placeholder="Enter year"
      /><br /><br />

      <input
        type="text"
        value={carModel}
        onChange={e => setCarModel(e.target.value)}
        placeholder="Enter model"
      /><br /><br />

      <input
        type="text"
        value={carMake}
        onChange={e => setCarMake(e.target.value)}
        placeholder="Enter make"
      /><br /><br />

      <button className='buttons' onClick={addCar}>Add Car</button><br /><br />

      <h3>Remove cars by year</h3>
      <input
        type="number"
        value={yearToRemove}
        onChange={e => setYearToRemove(e.target.value)}
        placeholder="Enter year to remove"
      /><br /><br />
      <button className='buttons' onClick={removeCarsByYear}>Remove Cars By Year</button>
    </div>
  );
}
