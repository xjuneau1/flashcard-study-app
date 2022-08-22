import React from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';

function Deck() {
    const {params} = useRouteMatch()
    return ( 
        <div>
            Deck{params.deckId}
        </div>
     );
}

export default Deck;