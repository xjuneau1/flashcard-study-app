import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CardForm from "../forms/CardForm";
import Breadcrumb from "../Breadcrumb";
import { readCard, updateCard } from "../../utils/api";

function EditCard({ deck }) {
    
  const initFormData = {
    id: deck.cards.length + 1,
    front: "",
    back: "",
  };

  const [formData, setFormData] = useState(initFormData);
  const { cardId } = useParams();

  useEffect(() => {
    async function getCard() {
      await readCard(cardId).then((data) => setFormData({ ...data }));
    }
    getCard();
  }, []);

  const handleEditCard = async () => {
    if (window.confirm("Submit these changes?")) {
      await updateCard({ ...formData });
    }
  };
  const handlePropChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
    console.log(formData);
  };

  return (
    <>
      <Breadcrumb deck={deck} pageName={`Edit Card ${cardId}`} />
      <h2>Edit Card</h2>
      {Object.keys(deck).length ? (
        <CardForm
          formData={formData}
          handleSubmit={handleEditCard}
          handleChange={handlePropChange}
        />
      ) : null}
    </>
  );
}

export default EditCard;
