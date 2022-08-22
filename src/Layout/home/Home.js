import React, {useEffect} from 'react';
import DeckList from './DeckList';
import { NavLink, Switch, Route } from 'react-router-dom';
import { listDecks } from '../../utils/api';

function Home({decks, setDecks}) {
    useEffect(() => {
        async function getDecks() {
          listDecks()
            .then((data) => setDecks(data))
            .then(console.log(decks));
        }
        getDecks();
      }, []);
    return ( 
        <div>
            <Switch>
                <Route exact path='/'>
                    <NavLink className='btn-primary rounded p-1' to="/decks/new">Create Deck</NavLink>
                    <DeckList decks={decks} setDecks={setDecks} />
                </Route>
            </Switch>
        </div>
     );
}

export default Home;