import React, { useEffect, useState } from 'react';
import {useQuery} from "@apollo/client";
import * as GQL from "../api/api_gql";
import ButtonAction from "./ButtonAction";

const ListOfFruits = (
    { pirateId, fruitId }
) => {

    const [newFruitId, setNewFruitId] = useState();
    const [listOfFruits, setListOfFruits] = useState([]);

    const { loading, error, data } = useQuery(GQL.GET_FRUITS);

    const handleChange = (event) => {
        setNewFruitId(event.target.value);
    };

    useEffect(() => {
        if (data)
            setListOfFruits(data.fruits || []);
        else
            setListOfFruits([]);
    }, [data]);

    if (error) return `Error! ${ error.message }`;

    if (loading) return 'Loading...';

    return (
        <main>
            <select onChange={ handleChange }>
                { listOfFruits.map((_it) =>
                    <option value={ _it.id }
                            selected={ _it.id === fruitId }>
                        { _it.name }
                    </option>
                )}
            </select>
            { newFruitId &&
                <ButtonAction
                    title="Changer le fruit"
                    fruitId={ newFruitId }
                    pirateId={ pirateId }
                />
            }
        </main>
    )
};

export default ListOfFruits