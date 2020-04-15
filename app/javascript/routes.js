import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AlbumScreen from './screens/album';
import DiscoveryScreen from './screens/discovery';
import FavoritesScreen from './screens/favorites';
import HomeScreen from './screens/home';
import SearchScreen from './screens/search';

const Routes = (props) => {
    return (
        <Switch>
            <Route exact path='/' component={HomeScreen} />
            <Route path='/album/:id' component={AlbumScreen} />
            <Route path='/discovery' component={DiscoveryScreen} />
            <Route path='/favorites' component={FavoritesScreen} />
            <Route path='/search' component={SearchScreen} />
        </Switch>
    );
}

export default Routes;