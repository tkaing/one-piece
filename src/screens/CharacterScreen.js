import React, {useEffect, useState} from 'react';
import { withRouter } from "react-router-dom";
import * as ROUTE from "./../app/app_routing";
import ListOfCharacters from "../components/ListOfCharacters";
import * as FruitEnum from "./../enums/FruitEnum";
import * as GQL from "../api/api_gql";
import * as styles from './Character.module.scss';

const CharacterScreen = (
    { history, useFruit }
) => {

    const [query, setQuery] = useState();

    const { fruit } = useFruit;

    const getQuery = () => {
        switch (fruit) {
            case FruitEnum._NONE.title:
                return GQL.GET_NONE;
            case FruitEnum._PARA.title:
                return GQL.GET_PARA;
            case FruitEnum._ZOAN.title:
                return GQL.GET_ZOAN;
            case FruitEnum._LOGIA.title:
                return GQL.GET_LOGIA;
            default:
                return null;
        }
    }

    useEffect(() => {
        if (fruit)
            setQuery(getQuery());
    }, [fruit]);

    useEffect(() => {
        console.log(query);
    }, [query]);

    if (!fruit) {
        history.push(ROUTE._FRUIT);
        return null;
    }

    return (
        <main>
            <div className={ styles.headline }>{ fruit }</div>
            { fruit && query && <ListOfCharacters fruit={ fruit } query={ query } /> }
        </main>
    );
};

export default withRouter(CharacterScreen)