import React from "react";
import { useHistory, useParams } from "react-router-dom";

function CardForm({ formData, handleChange, handleSubmit }) {
  const { deckId } = useParams();
  const history = useHistory();
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
        <button
          onClick={() => history.push(`/decks/${deckId}`)}
          className="btn-secondary rounded p-1 mr-2"
        >
          Done
        </button>
        <button onClick={handleSubmit} className="btn-primary rounded p-1">
          Save
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-save ml-1"
            viewBox="0 0 16 16"
          >
            <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z" />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default CardForm;
