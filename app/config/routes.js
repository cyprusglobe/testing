import React from 'react';
import { View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux'
import {
    Balloon,
    Schedule,
    BalloonScroll,
    Home
} from '../components/'

export default function Routes () {
    return (
        <Router>
            <Scene key="root">
                <Scene key="balloons" title="BalloonsScroll" component={ BalloonScroll } initial={ true } hideNavBar={ false } />
                <Scene key="balloon_detail" title="Balloon Detail" component={ Home } initial={ false } hideNavBar={ false } />
                <Scene key="home" title="Home" component={ Home } initial={ false } hideNavBar={ false } />
            </Scene>
        </Router>
    )
}
