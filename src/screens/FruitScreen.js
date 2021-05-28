import React from 'react';
import * as styles from './Fruit.module.scss';
import { Card } from "antd";
import * as FruitEnum from '../enums/FruitEnum';
import { withRouter } from "react-router-dom";
import * as ROUTE from "./../app/app_routing";

const FruitScreen = (
    { history, useFruit }
) => {

    const { setFruit } = useFruit;

    const listOfFruits = [
        FruitEnum._PARA,
        FruitEnum._ZOAN,
        FruitEnum._LOGIA
    ];

    return (
        <main className={ styles.main }>
            { listOfFruits.map((_it) =>
                <div className={ styles.card }
                     onClick={ () => {
                         history.push(ROUTE._GROUP);
                         setFruit(_it.title);
                     } }>
                    <Card title={ _it.title }
                          cover={ <img alt={ _it.title } src={ _it.image } /> }
                          style={{ width: '100%' }}
                          hoverable>
                        <p>{ [].join(' ') }</p>
                    </Card>
                </div>
            )}
        </main>
    );
};

export default withRouter(FruitScreen)