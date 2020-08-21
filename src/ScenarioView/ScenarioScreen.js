import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';

import Header from '../common/Header';
import { ScenarioScreenStyles as Styles } from './ScenarioScreenStyles';
import { ListItem, ListDivider } from '../common/ListItem';

const Scenarios = [
    {
        key: 'blitz',
        data: {
            name: 'Blitz',
            screen: 'Blitz',
            difficulty: 0,
            image: require('../Assets//blitzIcon.png'),
        }
    },
    {
        key: 'dahan',
        data: {
            name: 'Dahan Insurrection',
            screen: 'Dahan',
            difficulty: 4,
            image: require('../Assets//dahan.png'),
        }
    },
    {
        key: 'guard',
        data: {
            name: 'Guard the Isle\'s Heart',
            screen: 'Guard',
            difficulty: 0,
            image: require('../Assets//guard.png'),
        }
    },
    {
        key: 'terror',
        data: {
            name: 'Rituals of Terror',
            screen: 'Terror',
            difficulty: 3,
            image: require('../Assets//terror.png'),
        }
    },
    {
        key: 'powers',
        data: {
            name: 'Powers Long Forgotten',
            screen: 'Powers',
            difficulty: 1,
            image: require('../Assets//powers.png'),
            expansion: 'BranchAndClaw'
        }
    },
    {
        key: 'flame',
        data: {
            name: 'Rituals of the Destroying Flame',
            screen: 'Flame',
            difficulty: 3,
            image: require('../Assets//flame.png'),
            expansion: 'BranchAndClaw'
        }
    },
    {
        key: 'second',
        data: {
            name: 'Second Wave',
            screen: 'Wave',
            difficulty: '±1',
            image: require('../Assets//second.png'),
            expansion: 'BranchAndClaw'
        }
    },
    {
        key: 'ward',
        data: {
            name: 'Ward the Shores',
            screen: 'Shores',
            difficulty: 2,
            image: require('../Assets//ward.png'),
            expansion: 'BranchAndClaw'
        }
    },
    {
        key: 'diversity',
        data: {
            name: 'A Diversity of Spirits',
            screen: 'Diversity',
            difficulty: 0,
            expansion: 'JaggedEarth'
        }
    },
    {
        key: 'despicable',
        data: {
            name: 'Despicable Theft',
            screen: 'Despicable',
            difficulty: '0-3',
            expansion: 'JaggedEarth'
        }
    },
    {
        key: 'elemental',
        data: {
            name: 'Elemental Invocation',
            screen: 'Elemental',
            difficulty: 1,
            expansion: 'JaggedEarth'
        }
    },
    {
        key: 'greatRiver',
        data: {
            name: 'The Great River',
            screen: 'GreatRiver',
            difficulty: 3,
            expansion: 'JaggedEarth'
        }
    },
    {
        key: 'varied',
        data: {
            name: 'Varied Terrains',
            screen: 'Varied',
            difficulty: 2,
            expansion: 'JaggedEarth'
        }
    },
]

class ScenarioScreen extends Component {
    render() {
        let { navigation } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <Header title={'Scenarios'} navigation={navigation} navStyle={'drawer'} />
                <View style={Styles.container}>
                    <FlatList
                        data={Scenarios}
                        renderItem={({ item }) =>
                            <ListItem data={item.data} navigation={navigation} imageStyle={Styles.imageStyle} />
                        }
                        ItemSeparatorComponent={() => <ListDivider />}
                    />
                </View>
            </View>
        );
    }
}

export default ScenarioScreen;