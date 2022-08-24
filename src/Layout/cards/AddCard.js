import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'

import CardForm from '../forms/CardForm';
import Breadcrumb from '../Breadcrumb';
import { createCard, readDeck } from '../../utils/api';

function AddCard({deck, pageName}) {
    const {deckId} = useParams()

    const initFormData ={
        id:deck.cards.length,
        front: '',
        back:''
    }
    
    const [formData, setFormData] = useState(initFormData)
    console.log(formData)
    const handleAddCard = async () => {
        await createCard(deckId, formData)
        setFormData({...initFormData, id:deck.cards.length+1})
    }
    const handlePropChange = ({target}) => {
        setFormData({...formData, [target.name]:target.value})
    }
    return ( 
        <>
            <Breadcrumb deck={deck} pageName={pageName} />
            <h2>{deck.name}: Add Card</h2>
            <CardForm formData={formData} handleSubmit={handleAddCard} handleChange={handlePropChange} />
        </>
     );
}

export default AddCard;