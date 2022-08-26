import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import DeckForm from "../forms/DeckForm";
import { createDeck, listDecks } from "../../utils/api";

function CreateDeck({ edit, decks, setDecks }) {
  
  const initFormData = {
    name: "",
    description: "",
    "id": "",
    cards: [],
  };
 
  useEffect(() => {
    async function getDecks() {
      listDecks()
        .then((data) => setDecks(data))
    }
    getDecks();
  }, []);

  const history = useHistory();
  const [formData, setFormData] = useState({...initFormData});

  const handleCreateDeck = async (event) => {
    event.preventDefault();
    console.log(formData);
    await createDeck(formData);
    history.push(`/decks/${formData.id}`);
  };
  const handlePropChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value, id:decks.length+1});
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
