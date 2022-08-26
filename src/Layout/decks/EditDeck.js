import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom'

import { readDeck, updateDeck } from '../../utils/api';

import Breadcrumb from '../Breadcrumb';
import DeckForm from '../forms/DeckForm';

function EditDeck({edit, deck, pageName}) {
    const initFormData ={
        id:'',
        name:'',
        description:'',
        cards:[]
    }
    const {deckId} = useParams()
    const [formData, setFormData] = useState(initFormData)
    const history = useHistory()

    useEffect(()=>{
        async function getDeck(){
            await readDeck(deckId)
            .then((data)=> setFormData({...data}))
        }
        getDeck()
    },[])

    const handleSubmitEdit = async () => {
        if(window.confirm("Submit these changes?")){
            await updateDeck({...formData})
        }
    }
    const handlePropChange = ({target}) => {
        setFormData({...formData, [target.name]: target.value})
        console.log(formData)
    }

    return ( 
        <div>
            <Breadcrumb deck={deck} pageName={pageName} />
            <DeckForm 
            edit={!edit} 
            pageName={pageName} 
            formData={formData}
            handleChange={handlePropChange}
            handleSubmit={handleSubmitEdit}
             />
        </div>
        
     );
}

export default EditDeck;