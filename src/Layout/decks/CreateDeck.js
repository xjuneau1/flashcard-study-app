import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import DeckForm from "../forms/DeckForm";
import { createDeck } from "../../utils/api";

function CreateDeck({ edit, decks }) {
  const initFormData = {
    id: decks.length + 2,
    name: "",
    description: "",
    cards: [],
  };

  const history = useHistory();
  const [formData, setFormData] = useState(initFormData);
  console.log(formData);

  const handleCreateDeck = async (event) => {
    event.preventDefault();
    console.log(formData);
    await createDeck(formData);
    history.push(`/decks/${formData.id}`);
  };
  const handlePropChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
    console.log(formData);
  };

  return (
    <div className="container">
      <DeckForm
      edit={edit}
        handleChange={handlePropChange}
        handleSubmit={handleCreateDeck}
        formData={formData}
        pageName={"Create Deck"}
      />
    </div>
  );
}

export default CreateDeck;
