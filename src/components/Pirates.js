import React, { useEffect, useState } from 'react';
import * as GQL from "../api/api_gql";
import { useQuery } from "@apollo/client";
import { Card } from "antd";
import * as styles from "../screens/Character.module.scss";

const Pirates = (
    { xxx }
) => {

    const [listOfCharacters, setListOfCharacters] = useState([]);

    const { loading, error, data } = useQuery(GQL.GET_PIRATES);

    useEffect(() => {
        if (data && data.pirates)
            setListOfCharacters(data.pirates);
    }, [data]);

    if (error) return `Error! ${ error.message }`;

    if (loading) return 'Loading...';

    return (
        <main className={ styles.listOfCards }>
            { listOfCharacters.map((_it) =>
                <Card title={ _it.name }
                      style={{ width: '70%' }}
                      className={ styles.card }
                      hoverable />
            )}
        </main>
    );
};

export default Pirates