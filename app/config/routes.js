import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import {
    BalloonDetailView,
    BalloonListView,
    Home
} from '../components/'

export default function Routes () {
    return (
        <Router>
            <Scene key="root">
                <Scene key="balloons" title="Balloons" component={ BalloonListView } initial={ true } hideNavBar={ false } />
                <Scene key="balloons_detail" title="Balloon Detail" component={ BalloonDetailView } initial={ false } hideNavBar={ false } />
                <Scene key="home" title="Home" component={ Home } initial={ false } hideNavBar={ false } />
            </Scene>
        </Router>
    )
}
