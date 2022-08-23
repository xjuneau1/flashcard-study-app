import React from "react";
import { NavLink } from "react-router-dom";
function CreateDeck({ pageName }) {
  return (
    <div>
      <div className="container row">
        <div>
          <NavLink to="/">Home</NavLink> /
        </div>
        <div className="ml-1">{pageName}</div>
      </div>
      <div>Create Deck</div>
    </div>
  );
}

export default CreateDeck;
