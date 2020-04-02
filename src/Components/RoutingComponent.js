import React, {Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import Trilogy from "../Views/Trilogy/Trilogy";
import Home from "../Views/Home";
import Kissland from "../Views/Kissland";
import BBTM from "../Views/BBTM";
import Starboy from "../Views/Starboy";
import MDM from "../Views/MDM";
import AfterHours from "../Views/AfterHours";
import HOB from "../Views/Trilogy/HOB";
import Thursday from "../Views/Trilogy/Thursday";
import EOS from "../Views/Trilogy/EOS";

export default class RoutingComponent extends React.Component {

    render() {

        return <Fragment>
            <Switch>
                <Route path={"/trilogy"}>
                    <Trilogy/>
                </Route>
                <Route path={"/hob"}>
                    <HOB/>
                </Route>
                <Route path={"/thursday"}>
                    <Thursday/>
                </Route>
                <Route path={"/eos"}>
                    <EOS/>
                </Route>
                <Route path={"/kissland"}>
                    <Kissland/>
                </Route>
                <Route path={"/bbtm"}>
                    <BBTM/>
                </Route>
                <Route path={"/starboy"}>
                    <Starboy/>
                </Route>
                <Route path={"/mdm"}>
                    <MDM/>
                </Route>
                <Route path={"/afterhours"}>
                    <AfterHours/>
                </Route>
                <Route path={"/gallery"}>
                    <Home/>
                </Route>
                <Route path={""}>
                    <Home/>
                </Route>
            </Switch>
        </Fragment>

    }
}