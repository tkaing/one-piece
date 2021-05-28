import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import * as ROUTE from "./../app/app_routing";
import * as GroupEnum from "../enums/GroupEnum";
import Gvt from "../components/Gvt";
import Navies from "../components/Navies";
import Pirates from "../components/Pirates";

const CharacterScreen = (
    { history, useFruit, useGroup }
) => {

    const { fruit } = useFruit;
    const { group } = useGroup;

    if (!(fruit && group)) {
        history.push(ROUTE._FRUIT);
        return null;
    }

    console.log(group);

    return (
        <main>
            { fruit }, { group }
            { group === GroupEnum._GVT.title && <Gvt /> }
            { group === GroupEnum._NAVY.title && <Navies /> }
            { group === GroupEnum._PIRATE.title && <Pirates /> }
        </main>
    );
};

export default withRouter(CharacterScreen)