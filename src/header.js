import "./header.css";
import { useState } from "react";
function Header({ search, title }) {
  const [valueInput, setValue] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(valueInput);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="head">
      <form onSubmit={handleFormSubmit}>
        <label> What Are You Searching?</label>
        <label> {title}</label>

        <input
          value={valueInput}
          onChange={handleChange}
          placeholder="Write To Here..."
        />
      </form>
    </div>
  );
}

export default Header;
