import React from 'react';
import { Text, View, Button } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createDrawerNavigator, DrawerItems } from 'react-navigation'

import Colors from './constants/colors';
import HomeScreen from './home/HomeScreen'
import ElementsScreen from './elements/ElementsScreen'
import ScoringScreen from './scoring/ScoringScreen'
import ScenarioScreen from './scenarios/ScenarioScreen'
import AdversaryScreen from './adversaries/AdversaryScreen'
import FaqScreen from './faq/FaqScreen';
import DrawerHeader from './common/DrawerHeader';

export default createDrawerNavigator(
    {
        Elements: {
            screen: ElementsScreen,
            navigationOptions: {
                title: 'Element Tracker',
                drawerIcon: ({ tintColor }) => (
                    <FontAwesome5 name='sun' size={24} color={tintColor} style={{marginLeft:1}}/>
                )
            }
        },
        Scoring: {
            screen: ScoringScreen,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => (
                    <FontAwesome5 name='trophy' size={20} color={tintColor}/>
                )
            }
        },
        Scenarios: {
            screen: ScenarioScreen,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => (
                    <FontAwesome5 name='book' size={22} color={tintColor}/>
                )
            }
        },
        Adversaries: {
            screen: AdversaryScreen,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => (
                    <FontAwesome5 name='fort-awesome' size={24} color={tintColor}/>
                )
            }
        },
        Faq: {
            screen: FaqScreen,
            navigationOptions: {
                title: 'FAQ',
                drawerIcon: ({ tintColor }) => (
                    <FontAwesome5 name='question-circle' size={22} color={tintColor}/>
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
        )
    }
);