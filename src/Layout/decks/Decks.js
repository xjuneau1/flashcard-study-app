import React from 'react';
import CreateDeck from './CreateDeck';
import Deck from './Deck';
import { Link, Switch, Route } from 'react-router-dom';
function Decks() {
    return ( 
        <div>
            <Switch>
                <Route path='/decks/new'>
                    <CreateDeck />
                </Route>
                <Route path='/decks/:deckId'>
                    <Deck />
                </Route>
            </Switch>
        </div>
     );
}

export default Decks;