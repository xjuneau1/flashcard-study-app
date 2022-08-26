import React, {useState} from 'react';
import {useParams} from 'react-router-dom'

import CardForm from '../forms/CardForm';
import Breadcrumb from '../Breadcrumb';
import { createCard } from '../../utils/api';

function AddCard({deck, pageName}) {
    const {deckId} = useParams()

    const initFormData ={
        front: '',
        back:'',
        "id":""
    }
    
    const [formData, setFormData] = useState(initFormData)
    
    const handleAddCard = async (event) => {
        event.preventDefault()
        await createCard(deckId, formData)
        .then(setFormData(initFormData))
    }
    const handlePropChange = ({target}) => {
        setFormData({...formData, [target.name]:target.value })
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