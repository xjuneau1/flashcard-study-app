import React from 'react';
import { NavLink, Switch, Route, useRouteMatch } from 'react-router-dom';

function Breadcrumb({deck, pageName}) {
    
    return ( 
        <div className='container row'>
            <div>
                <NavLink to='/'>Home</NavLink> /
            </div>
            <div className='ml-1'>
                <NavLink to={`/decks/${deck.id}`}>{deck.name}</NavLink> {pageName ? '/':''}
            </div>
            <div className='ml-1'>
                {pageName}
            </div>
        </div>
     );
}

export default Breadcrumb;