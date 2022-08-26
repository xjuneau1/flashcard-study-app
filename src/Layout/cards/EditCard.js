import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CardForm from "../forms/CardForm";
import Breadcrumb from "../Breadcrumb";
import { readCard, updateCard } from "../../utils/api";

function EditCard({ deck }) {
  const { cardId } = useParams();

  const initFormData = {
    id: "",
    front: "",
    back: "",
  };

  const [formData, setFormData] = useState({ ...initFormData, id: cardId });

  useEffect(() => {
    const abortController = new AbortController();
    async function getCard() {
      await readCard(cardId, abortController.signal).then((data) =>
        setFormData({ ...data })
      );
    }
    getCard();

    return () => {
      abortController.abort();
    };
  }, []);

  const handleEditCard = async (event) => {
    event.preventDefault()
    const abortController = new AbortController();
    if (window.confirm("Submit these changes?")) {
      await updateCard({ ...formData }, abortController.signal);
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
