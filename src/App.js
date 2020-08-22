import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import 'react-native-gesture-handler';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList
} from '@react-navigation/drawer';

import Colors from './constants/colors';
import DrawerHeader from './common/DrawerHeader';
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

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ElementsTabs = () => (
    <Tab.Navigator tabBarOptions={{
        labelStyle: {
            fontFamily: 'ReemKufi',
        },
        style: {
            backgroundColor: Colors.darkYellow
        },
        activeTintColor: Colors.darkBrown,
        inactiveTintColor: 'gray',
        showIcon: true
    }}>
        <Tab.Screen
            name="ElementsOne"
            component={ElementsScreen}
            options={{
                title: 'Spirit 1',
                tabBarIcon: ({ color }) => (
                    <FontAwesome5 name='fire' size={20} color={color} />
                )
            }}
        />
        <Tab.Screen
            name="ElementsTwo"
            component={ElementsScreen}
            options={{
                title: 'Spirit 2',
                tabBarIcon: ({ color }) => (
                    <FontAwesome5 name='tint' size={20} color={color} />
                )
            }}
        />
        <Tab.Screen
            name="ElementsThree"
            component={ElementsScreen}
            options={{
                title: 'Spirit 3',
                tabBarIcon: ({ color }) => (
                    <FontAwesome5 name='sun' size={20} color={color} />
                )
            }}
        />
        <Tab.Screen
            name="ElementsFour"
            component={ElementsScreen}
            options={{
                title: 'Spirit 4',
                tabBarIcon: ({ color }) => (
                    <FontAwesome5 name='moon' size={20} color={color} />
                )
            }}
        />
    </Tab.Navigator>
);

const AdversaryStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Adversaries" component={AdversaryScreen} />
        <Stack.Screen name="Brandenburg" component={BrandenburgScreen} />
        <Stack.Screen name="England" component={EnglandScreen} />
        <Stack.Screen name="France" component={FranceScreen} />
        <Stack.Screen name="Sweden" component={SwedenScreen} />
        <Stack.Screen name="Hapsburg" component={HapsburgScreen} />
        <Stack.Screen name="Russia" component={RussiaScreen} />
        <Stack.Screen name="Scotland" component={ScotlandScreen} />
    </Stack.Navigator>
);

const ScenarioStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Scenarios" component={ScenarioScreen} />
        <Stack.Screen name="Blitz" component={BlitzScreen} />
        <Stack.Screen name="Dahan" component={DahanScreen} />
        <Stack.Screen name="Guard" component={GuardScreen} />
        <Stack.Screen name="Powers" component={PowersScreen} />
        <Stack.Screen name="Flame" component={FlameScreen} />
        <Stack.Screen name="Terror" component={TerrorScreen} />
        <Stack.Screen name="Wave" component={WaveScreen} />
        <Stack.Screen name="Shores" component={ShoresScreen} />
        <Stack.Screen name="Diversity" component={DiversityScreen} />
        <Stack.Screen name="Despicable" component={DespicableScreen} />
        <Stack.Screen name="Elemental" component={ElementalScreen} />
        <Stack.Screen name="GreatRiver" component={GreatRiverScreen} />
        <Stack.Screen name="Varied" component={VariedScreen} />
    </Stack.Navigator>
);

const RandomStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Setup" component={RandomSetupScreen} />
        <Stack.Screen name="RandomResults" component={RandomResultsScreen} />
    </Stack.Navigator>
);

const AppDrawer = () => (
    <Drawer.Navigator
        initialRouteName="Setup"
        drawerContent={(props) => (
            <DrawerContentScrollView {...props}>
                <DrawerHeader />
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        )}
        drawerContentOptions={{
            labelStyle: {
                fontFamily: 'ReemKufi',
            },
            activeTintColor: Colors.darkBrown,
            inactiveTintColor: 'gray',
        }}
    >
        <Drawer.Screen
            name="Elements"
            component={ElementsTabs}
            options={{
                title: 'Element Tracker',
                drawerIcon: ({ color }) => (
                    <FontAwesome5 name='fire' size={22} color={color} style={{ marginLeft: 1 }} />
                )
            }}
        />
        <Drawer.Screen
            name="Scoring"
            component={ScoringScreen}
            options={{
                drawerIcon: ({ color }) => (
                    <FontAwesome5 name='trophy' size={22} color={color} style={{ marginRight: -6 }} />
                )
            }}
        />
        <Drawer.Screen
            name="Scenarios"
            component={ScenarioStack}
            options={{
                drawerIcon: ({ color }) => (
                    <FontAwesome5 name='book' size={22} color={color} />
                )
            }}
        />
        <Drawer.Screen
            name="Adversaries"
            component={AdversaryStack}
            options={{
                drawerIcon: ({ color }) => (
                    <FontAwesome5 name='fort-awesome' size={22} color={color} />
                )
            }}
        />
        <Drawer.Screen
            name="RandomStack"
            component={RandomStack}
            options={{
                title: 'Random Game Generator',
                drawerIcon: ({ color }) => (
                    <FontAwesome5 name='random' size={22} color={color} />
                )
            }}
        />
        <Drawer.Screen
            name="Contact"
            component={ContactScreen}
            options={{
                title: 'Contact me!',
                drawerIcon: ({ color }) => (
                    <FontAwesome5 name='envelope' size={22} color={color} />
                )
            }}
        />
        <Drawer.Screen
            name="FAQ"
            component={FaqScreen}
            options={{
                title: 'FAQ',
                drawerIcon: ({ color }) => (
                    <FontAwesome5 name='question-circle' size={22} color={color} />
                )
            }}
        />
    </Drawer.Navigator>
);

const App = () => (
    <NavigationContainer>
        <AppDrawer />
    </NavigationContainer>
);

export default App;