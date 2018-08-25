import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { createBottomTabNavigator } from 'react-navigation'


import HomeScreen from './home/HomeScreen'
import ElementsScreen from './elements/ElementsScreen'
import FaqScreen from './faq/FaqScreen';

export default createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon name='home' size={30} color={tintColor}></Icon>
                )
            }
        },
        Elements: {
            screen: ElementsScreen,
            navigationOptions: {
                title: 'Element Tracker',
                tabBarIcon: ({tintColor}) => (
                    <Icon name='fire' size={30} color={tintColor}></Icon>
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
                // fontSize: 24,
                marginTop: 1
            },
            style: {
                backgroundColor: '#F8F2C4',
                borderColor: 'transparent',
                height: 52
            },
            activeTintColor: '#955529',
            inactiveTintColor: 'gray',
            showIcon: true    
        }
    }
);