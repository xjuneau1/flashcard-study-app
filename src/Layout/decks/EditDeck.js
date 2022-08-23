import React from 'react';
import Breadcrumb from '../Breadcrumb';
function EditDeck({deck, pageName}) {
    return ( 
        <div>
            <Breadcrumb deck={deck} pageName={pageName} />
            <h1>Edit Deck {deck.id}</h1>
        </div>
        
     );
}

export default EditDeck;