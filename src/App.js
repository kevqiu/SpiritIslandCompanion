import React from 'react';

import HomeScreen from './home/HomeScreen'
import ElementsScreen from './elements/ElementsScreen'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { createBottomTabNavigator } from 'react-navigation'

export default createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            header: {
                titleStyle: {
                    fontFamily: 'monospace'
                }
            },
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon name='home' size={30} color={tintColor}></Icon>
                )
            }
        },
        Elements: {
            screen: ElementsScreen,
            header: {
                titleStyle: {
                    fontFamily: 'ReemKufi'
                }
            },
            navigationOptions: {
                title: 'Element Tracker',
                tabBarIcon: ({tintColor}) => (
                    <Icon name='fire' size={30} color={tintColor}></Icon>
                )
            }
        }
    },
    {
        tabBarOptions: {
            labelStyle: {
                fontFamily: 'ReemKufi',
                fontSize: 11,
                marginTop: 1
            },
            style: {
                backgroundColor: '#F8F2C4'
            },
            activeTintColor: '#955529',
            inactiveTintColor: 'gray',
            showIcon: true    
        }
    }
);