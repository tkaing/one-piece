import React, {useEffect, useState} from "react";
import { Button } from "antd";
import * as styles from './ButtonAction.module.scss';
import { useMutation } from '@apollo/client';
import * as GQL from "../api/api_gql";

const ButtonAction = (
    { title, fruitId, pirateId }
) => {

    const [loading, setLoading] = useState(false);
    const [updateFruit, { data }] = useMutation(GQL.UPDATE_FRUIT);

    useEffect(() => {
        if (data) {
            console.log(data);
            setLoading(false);
        }
    }, [data]);

    return (
        <Button className={ styles.button }
                onClick={ () => {
                    setLoading(true);
                    updateFruit({ variables: { $fruitId: fruitId, pirateId: pirateId } });
                } }
                disabled={ loading }
                type="primary">
            { title }
        </Button>
    );
};

export default ButtonAction