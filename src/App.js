import React from 'react';
import { View } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createDrawerNavigator, createBottomTabNavigator, DrawerItems, StackNavigator } from 'react-navigation';
import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';
// import { AdMobBanner } from 'react-native-admob'

import Colors from './constants/colors';
import DrawerHeader from './common/DrawerHeader';
import HomeScreen from './HomeView/HomeScreen'
import ElementsScreen from './ElementView/ElementsScreen'
import ScoringScreen from './ScoringView/ScoringScreen'
import FaqScreen from './FaqView/FaqScreen';

import ScenarioScreen from './ScenarioView/ScenarioScreen'
import BlitzScreen from './ScenarioView/BlitzScreen';
import DahanScreen from './ScenarioView/DahanScreen';
import GuardScreen from './ScenarioView/GuardScreen';
import PowersScreen from './ScenarioView/PowersScreen';
import FlameScreen from './ScenarioView/FlameScreen';
import TerrorScreen from './ScenarioView/TerrorScreen';
import ShoresScreen from './ScenarioView/ShoresScreen';
import WaveScreen from './ScenarioView/SecondScreen';
import DiversityScreen from './ScenarioView/DiversityScreen';
import DespicableScreen from './ScenarioView/DespicableScreen';
import ElementalScreen from './ScenarioView/ElementalScreen';
import GreatRiverScreen from './ScenarioView/GreatRiverScreen';
import VariedScreen from './ScenarioView/VariedScreen';

import AdversaryScreen from './AdversaryView/AdversaryScreen'
import BrandenburgScreen from './AdversaryView/BrandenburgScreen';
import EnglandScreen from './AdversaryView/EnglandScreen';
import FranceScreen from './AdversaryView/FranceScreen';
import SwedenScreen from './AdversaryView/SwedenScreen';
import HapsburgScreen from './AdversaryView/HapsburgScreen';
import RussiaScreen from './AdversaryView/RussiaScreen';
import ScotlandScreen from './AdversaryView/ScotlandScreen';

import RandomSetupScreen from './RandomView/RandomSetupScreen';
import RandomResultsScreen from './RandomView/RandomResultsScreen';
import ContactScreen from './ContactView/ContactScreen';

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
        Shores: { screen: ShoresScreen },
        Diversity: { screen: DiversityScreen },
        Despicable: { screen: DespicableScreen },
        Elemental: { screen: ElementalScreen },
        GreatRiver: { screen: GreatRiverScreen },
        Varied: { screen: VariedScreen },
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: Colors.darkYellow,
            },
            header: null
        },
        transitionConfig: () => ({
            screenInterpolator: sceneProps => {
                return StackViewStyleInterpolator.forHorizontal(sceneProps);
            }
        }),
        initialRouteName: 'Scenarios'
    }
);

const AdversaryView = StackNavigator(
    {
        Adversaries: {
            screen: AdversaryScreen,
            navigationOptions: {
                header: null
            }
        },
        Brandenburg: { screen: BrandenburgScreen },
        England: { screen: EnglandScreen },
        France: { screen: FranceScreen },
        Sweden: { screen: SwedenScreen },
        Hapsburg: { screen: HapsburgScreen },
        Russia: { screen: RussiaScreen },
        Scotland: { screen: ScotlandScreen },
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: Colors.darkYellow,
            },
            header: null

        },
        transitionConfig: () => ({
            screenInterpolator: sceneProps => {
                return StackViewStyleInterpolator.forHorizontal(sceneProps);
            }
        }),
        initialRouteName: 'Adversaries'
    }
);

const ElementsView = createBottomTabNavigator(
    {
        ElementsOne: {
            screen: ElementsScreen,
            navigationOptions: {
                title: 'Spirit 1',
                tabBarIcon: ({ tintColor }) => (
                    <FontAwesome5 name='fire' size={20} color={tintColor} />
                )
            }
        },
        ElementsTwo: {
            screen: ElementsScreen,
            navigationOptions: {
                title: 'Spirit 2',
                tabBarIcon: ({ tintColor }) => (
                    <FontAwesome5 name='tint' size={20} color={tintColor} />
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
                    <FontAwesome5 name='moon' size={20} color={tintColor} solid />
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
                backgroundColor: Colors.darkYellow
            },
            activeTintColor: Colors.darkBrown,
            inactiveTintColor: 'gray',
            showIcon: true
        }
    }
);

const RandomView = StackNavigator(
    {
        RandomSetup: { screen: RandomSetupScreen },
        RandomResults: { screen: RandomResultsScreen }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: Colors.darkYellow,
            },
            header: null
        },
        transitionConfig: () => ({
            screenInterpolator: sceneProps => {
                return StackViewStyleInterpolator.forHorizontal(sceneProps);
            }
        }),
        initialRouteName: 'RandomSetup'
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
        Adversaries: {
            screen: AdversaryView,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => (
                    <FontAwesome5 name='fort-awesome' size={22} color={tintColor} />
                )
            }
        },
        Random: {
            screen: RandomView,
            navigationOptions: {
                title: 'Random Game Generator',
                drawerIcon: ({ tintColor }) => (
                    <FontAwesome5 name='random' size={22} color={tintColor} />
                )
            }
        },
        Faq: {
            screen: FaqScreen,
            navigationOptions: {
                title: 'FAQ',
                drawerIcon: ({ tintColor }) => (
                    <FontAwesome5 name='question-circle' size={22} color={tintColor} />
                )
            }
        },
        Contact: {
            screen: ContactScreen,
            navigationOptions: {
                title: 'Contact Me!',
                drawerIcon: ({ tintColor }) => (
                    <FontAwesome5 name='envelope' size={22} color={tintColor} />
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
                {/* <AdMobBanner
                    adSize="fullBanner"
                    adUnitID="ca-app-pub-2718134854377699/7551199765"
                    testDevices={[AdMobBanner.simulatorId]}
                    onAdFailedToLoad={error => console.error(error)}
                /> */}
            </View>
        ),
        initialRouteName: 'Elements'
    }
);
