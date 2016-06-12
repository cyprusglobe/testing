import React from 'react';
import { View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux'
import {
    Balloon,
    Schedule
} from '../components/'

export default function Routes () {
    return (
        <Router>
            <Scene key="root">
                <Scene key="balloons" title="Balloons" component={Balloon} initial={true} hideNavBar={false} />
                <Scene key="schedule" title="Schedule" component={Schedule} initial={false} hideNavBar={false} />
            </Scene>
        </Router>
    )
}