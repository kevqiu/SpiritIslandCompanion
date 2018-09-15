import React from 'react';
import { Text, View, Button } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createDrawerNavigator, createBottomTabNavigator, DrawerItems } from 'react-navigation'
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
import WaveScreen from './ScenarioView/SecondScreen';


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

const ElementsView = createBottomTabNavigator(
    {
        ElementsOne: {
            screen: ElementsScreen,
            navigationOptions: {
                title: 'Spirit 1',
                tabBarIcon: ({ tintColor }) => (
                    <FontAwesome5 name='fire' size={22} color={tintColor} />
                )
            }
        },
        ElementsTwo: {
            screen: ElementsScreen,
            navigationOptions: {
                title: 'Spirit 2',
                tabBarIcon: ({ tintColor }) => (
                    <FontAwesome5 name='tint' size={22} color={tintColor} />
                )
            }
        },
        ElementsThree: {
            screen: ElementsScreen,
            navigationOptions: {
                title: 'Spirit 3',
                tabBarIcon: ({ tintColor }) => (
                    <FontAwesome5 name='sun' size={22} color={tintColor} solid />
                )
            }
        },
        ElementsFour: {
            screen: ElementsScreen,
            navigationOptions: {
                title: 'Spirit 4',
                tabBarIcon: ({ tintColor }) => (
                    <FontAwesome5 name='moon' size={22} color={tintColor} solid />
                )
            }
        },
    },
    {
        tabBarOptions: {
            labelStyle: {
                fontFamily: 'ReemKufi',
            },
            style: {
                backgroundColor: Colors.darkYellow,
                // height: 50
            },
            activeTintColor: Colors.darkBrown,
            inactiveTintColor: 'gray',
            showIcon: true
        }
    }
);

export default createDrawerNavigator(
    {
        Elements: {
            screen: ElementsView,
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
        initialRouteName: 'Elements'
    }
);
