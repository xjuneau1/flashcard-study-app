import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

import { createDeck } from "../../utils/api";

function CreateDeck({ decks, pageName }) {
  const initFormData = {
    id: decks.length+1,
    name: "",
    description: "",
    cards: [],
  };

  const history = useHistory()
  const [formData, setFormData] = useState(initFormData);
  console.log(formData);

  const handleCreateDeck = (event) => {
    event.preventDefault();
    console.log(formData);
    //createDeck(formData)
    history.push(`/decks/${formData.id}`)
  };
  const handleNameChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
    console.log(formData);
  };

  return (
    <div className="container">
      <div aria-label="breadcrumb" className="container row">
        <div>
          <NavLink to="/">Home</NavLink> /
        </div>
        <div className="ml-1">{pageName}</div>
      </div>
      <div>
        <h3>Create Deck</h3>
        <form className="form" onSubmit={handleCreateDeck}>
          <div className="form-group">
            <label htmlFor="name">
              Deck Name
              <input
                className="form-control"
                type="text"
                id="name"
                name="name"
                placeholder="Deck Name"
                onChange={handleNameChange}
                value={formData.name}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="description">
              Deck description
              <textarea
                className="form-control"
                type="text"
                id="description"
                name="description"
                rows="5"
                placeholder="Deck Description"
                onChange={handleNameChange}
                value={formData.description}
              />
            </label>
          </div>
          <button className="btn-primary rounded" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateDeck;
