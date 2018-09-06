import React from 'react';
import { Text, View, Button } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createDrawerNavigator, DrawerItems } from 'react-navigation'
import StackNavigator from 'react-navigation/src/navigators/createContainedStackNavigator';

import Colors from './constants/colors';
import DrawerHeader from './common/DrawerHeader';
import HomeScreen from './HomeView/HomeScreen'
import ElementsScreen from './ElementView/ElementsScreen'
import ScoringScreen from './ScoringView/ScoringScreen'
import ScenarioScreen from './ScenarioView/ScenarioScreen'
import AdversaryScreen from './AdversaryView/AdversaryScreen'
import FaqScreen from './FaqView/FaqScreen';
import BlitzScreen from './ScenarioView/BlitzScreen';
import DahanScreen from './ScenarioView/DahanScreen';
import GuardScreen from './ScenarioView/GuardScreen';
import PowersScreen from './ScenarioView/PowersScreen';
import FlameScreen from './ScenarioView/FlameScreen';
import TerrorScreen from './ScenarioView/TerrorScreen';
import ShoresScreen from './ScenarioView/ShoresScreen';
import WaveScreen from './ScenarioView/WaveScreen';


const ScenarioView = StackNavigator(
    {
        Scenarios: {
            screen: ScenarioScreen,
            navigationOptions: {
                header: null
            }
        },
        Blitz: { screen: BlitzScreen },
        Dahan: { screen: DahanScreen },
        Guard: { screen: GuardScreen },
        Powers: { screen: PowersScreen },
        Flame: { screen: FlameScreen },
        Terror: { screen: TerrorScreen },
        Wave: { screen: WaveScreen },
        Shores: { screen: ShoresScreen }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: Colors.darkYellow,
            },
            header: null

        },
        initialRouteName: 'Scenarios'
    }
);

export default createDrawerNavigator(
    {
        Elements: {
            screen: ElementsScreen,
            navigationOptions: {
                title: 'Element Tracker',
                drawerIcon: ({ tintColor }) => (
                    <FontAwesome5 name='fire' size={22} color={tintColor} style={{ marginLeft: 1 }} />
                )
            }
        },
        Scoring: {
            screen: ScoringScreen,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => (
                    <FontAwesome5 name='trophy' size={22} color={tintColor} />
                )
            }
        },
        Scenarios: {
            screen: ScenarioView,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => (
                    <FontAwesome5 name='book' size={22} color={tintColor} />
                )
            }
        },
        // Adversaries: {
        //     screen: AdversaryScreen,
        //     navigationOptions: {
        //         drawerIcon: ({ tintColor }) => (
        //             <FontAwesome5 name='fort-awesome' size={22} color={tintColor} />
        //         )
        //     }
        // },
        Faq: {
            screen: FaqScreen,
            navigationOptions: {
                title: 'FAQ',
                drawerIcon: ({ tintColor }) => (
                    <FontAwesome5 name='question-circle' size={22} color={tintColor} />
                )
            }
        }
    },
    {
        contentOptions: {
            labelStyle: {
                fontFamily: 'ReemKufi',
            },
            activeTintColor: Colors.darkBrown,
            inactiveTintColor: 'gray',
        },
        contentComponent: (navigation) => (
            <View>
                <DrawerHeader />
                <DrawerItems {...navigation} />
            </View>
        ),
        initialRouteName: 'Scenarios'
    }
);
