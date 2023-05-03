import React, { useState } from "react";

export default function AddNewProductDialogBooxSelectBox() {
  const [selectedOption, setSelectedOption] = useState("");

  const options = ["In Stock", "Out of stock"];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label htmlFor="selectBox">Stock</label>
      <select
        id="selectBox"
        value={selectedOption}
        onChange={handleOptionChange}
        style={{ width: "400px", height: "50px" }}
      >
        <option value="">Stock</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
