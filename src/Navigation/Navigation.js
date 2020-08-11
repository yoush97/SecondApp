import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../Screens/Home';
import Header from '../Header/Header';

export default class App extends Component {
    render() {
        return <AppNavigation />;
    }
}

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle: () => <Header />,
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#ff0000',
        headerStyle: { backgroundColor: '#00aeff', height: 40, }
    }
});

const AppNavigation = createAppContainer(HomeStack);