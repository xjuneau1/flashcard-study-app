import React , {useEffect, useState} from 'react';
import Study from './Study';
import EditDeck from './EditDeck';
import EditCard from '../cards/EditCard';
import AddCard from '../cards/AddCard';
import { readDeck } from '../../utils/api';
import { Switch, Route, NavLink, useRouteMatch } from 'react-router-dom';

function Deck() {
    const {path, params} = useRouteMatch()
    const [deck, setDeck] = useState({})
    
    useEffect(()=>{
        async function getDeckById(){
            try {
                setDeck(await readDeck(params.deckId))
            } catch (error) {
                console.log(error)
            }
        }
        getDeckById()

    },[params.deckId])

    return ( 
        <div>
            <Switch>
                <Route exact path={path}>
                    <h1>Deck {params.deckId}</h1>
                    
                </Route>
                <Route exact path={`${path}/study`}>
                    <Study deck={deck} setDeck={setDeck}/>
                </Route>
                <Route path={`${path}/edit`}>
                    <EditDeck />
                </Route>
                <Route path={`${path}/cards/new`}>
                    <AddCard />
                </Route>
                <Route path={`${path}/cards/:cardId/edit`}>
                    <EditCard />
                </Route>
            </Switch>
        </div>
     );
}

export default Deck;