import React from "react";
import { NavLink } from "react-router-dom";

function DeckForm({ edit, formData, pageName, handleChange, handleSubmit }) {
  if (Object.keys(formData).length) {
    return (
      <div >
        {edit ? (
          <div aria-label="breadcrumb" className="container row">
            <div>
              <NavLink to="/">Home</NavLink> /
            </div>
            <div className="ml-1">{pageName}</div>
          </div>
        ) : null}
        <div>
          <h3>{pageName}</h3>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">
                Deck Name
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Deck Name"
                  onChange={handleChange}
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
                  onChange={handleChange}
                  value={formData.description}
                />
              </label>
            </div>
            <button className="btn-primary rounded" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default DeckForm;
