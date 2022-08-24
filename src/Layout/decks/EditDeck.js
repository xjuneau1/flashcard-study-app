import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'

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
    const [formData, setFormData] = useState(initFormData)
    const history = useHistory()

    useEffect(()=>{
        async function getDeck(){
            await readDeck(deck.id)
            .then((data)=> setFormData({...data}))
            .then(console.log)
        }
        getDeck()
    },[])

    const handleSubmitEdit = async () => {
        if(window.confirm("Submit these changes?")){
            await updateDeck(formData)
            history.push('back')
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