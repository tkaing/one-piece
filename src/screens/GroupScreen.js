import React from 'react';
import * as GroupEnum from "../enums/GroupEnum";
import * as styles from "./Group.module.scss";
import { Card } from "antd";
import { withRouter } from 'react-router-dom';
import * as ROUTE from "../app/app_routing";

const GroupScreen = (
    { history, useGroup }
) => {

    const { setGroup } = useGroup;

    const listOfGroups = [
        GroupEnum._PIRATE,
        GroupEnum._NAVY,
        GroupEnum._GVT
    ];

    return (
        <main className={ styles.main }>
            { listOfGroups.map((_it) =>
                <div className={ styles.card }
                     onClick={ () => {
                         history.push(ROUTE._CHARACTER);
                         setGroup(_it.title);
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

export default withRouter(GroupScreen)