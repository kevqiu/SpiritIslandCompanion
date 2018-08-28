import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { createBottomTabNavigator } from 'react-navigation'

import Colors from './constants/colors';
import HomeScreen from './home/HomeScreen'
import ElementsScreen from './elements/ElementsScreen'
import ScoringScreen from './scoring/ScoringScreen'
import FaqScreen from './faq/FaqScreen';

export default createBottomTabNavigator(
    {
        Elements: {
            screen: ElementsScreen,
            navigationOptions: {
                title: 'Element Tracker',
                tabBarIcon: ({tintColor}) => (
                    <Icon name='fire' size={30} color={tintColor}></Icon>
                )
            }
        },
        Scoring: {
            screen: ScoringScreen,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon name='cash-100' size={30} color={tintColor}></Icon>
                )
            }
        },
        Faq: {
            screen: FaqScreen,
            navigationOptions: {
                title: 'FAQ',
                tabBarIcon: ({tintColor}) => (
                    <Icon name='help-circle' size={30} color={tintColor}></Icon>
                )
            }
        }
    },
    {
        tabBarOptions: {
            labelStyle: {
                fontFamily: 'ReemKufi',
                marginTop: 1
            },
            style: {
                backgroundColor: Colors.darkYellow,
                height: 52
            },
            activeTintColor: Colors.darkBrown,
            inactiveTintColor: 'gray',
            showIcon: true    
        }
    }
);