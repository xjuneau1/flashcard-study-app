import React from "react";
import {useHistory, useParams} from 'react-router-dom'

function CardForm({ formData, handleChange, handleSubmit }) {
    const {deckId} = useParams()
    const history = useHistory()
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="front">
            Front
            <textarea
              className="form-control"
              type="text"
              id="front"
              name="front"
              placeholder="Front side of card"
              onChange={handleChange}
              value={formData.front}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="back">
            Back
            <textarea
              className="form-control"
              type="text"
              id="back"
              name="back"
              placeholder="Back side of card"
              onChange={handleChange}
              value={formData.back}
            />
          </label>
        </div>
        <button onClick={()=>history.push(`/decks/${deckId}`)}className="btn-secondary rounded p-1 mr-2">Done</button>
        <button onClick={handleSubmit} className="btn-primary rounded p-1">Save</button>
      </form>
    </div>
  );
}

export default CardForm;
