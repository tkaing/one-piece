import React, { useEffect, useState } from 'react';
import { useQuery } from "@apollo/client";
import { Card } from "antd";
import * as styles from './ListOfCharacters.module.scss';
import ListOfFruits from "./ListOfFruits";

const ListOfCharacters = (
    { query }
) => {

    const [listOfCharacters, setListOfCharacters] = useState([]);

    const { loading, error, data } = useQuery(query);

    useEffect(() => {
        if (data) {
            setListOfCharacters(data.piratesWithZoan
                || data.piratesWithLogia
                || data.piratesWithoutFruit
                || data.piratesWithParamecia
                || []
            );
        } else {
            setListOfCharacters([]);
        }
    }, [data]);

    if (error) return `Error! ${ error.message }`;

    if (loading) return 'Loading...';

    return (
        <main className={ styles.listOfCards }>
            { listOfCharacters.map((_it) =>
                <Card title={ _it.name }
                      style={{ width: '70%' }}
                      className={ styles.card }
                      hoverable>
                    <ListOfFruits
                        fruitId={ _it.fruit ? _it.fruit.id : null }
                        pirateId={ _it.id }
                    />
                </Card>
            )}
        </main>
    );
};

export default ListOfCharacters