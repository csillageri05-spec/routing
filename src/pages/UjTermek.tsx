import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function UjTermek() {
  const [title, setTitle] = useState("");
    const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(`Új termék mentve: ${title}`);
    navigate("/Admin"); 
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Termék neve:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button type="submit">Mentés</button>
      </form>
    </div>
  );
}

export default UjTermek;
