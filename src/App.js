import React, { useState } from 'react';

import './App.scss';
import 'antd/dist/antd.css';

import FruitScreen from "./screens/FruitScreen";
import CharacterScreen from "./screens/CharacterScreen";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import * as ROUTE from "./app/app_routing";

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache()
});

const App = () => {

    const [fruit, setFruit] = useState();

    const use = {
        Fruit: ({ fruit: fruit, setFruit: setFruit }),
    };

    return (
        <ApolloProvider client={ client }>
            <div className="App">
                <Router>
                    <Switch>
                        <Route path={ ROUTE._FRUIT } exact>
                            <FruitScreen useFruit={ use.Fruit } />
                        </Route>
                        <Route path={ ROUTE._CHARACTER } exact>
                            <CharacterScreen useFruit={ use.Fruit } />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </ApolloProvider>
    );
}

export default App
