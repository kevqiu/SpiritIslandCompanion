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
            image: require('./assets/blitzIcon.png'),
            isExpansion: false
        }
    },
    {
        key: 'dahan',
        data: {
            name: 'Dahan Insurrection',
            screen: 'Dahan',
            difficulty: 4,
            image: require('./assets/dahan.png'),
            isExpansion: false
        }
    },
    {
        key: 'guard',
        data: {
            name: 'Guard the Isle\'s Heart',
            screen: 'Guard',
            difficulty: 0,
            image: require('./assets/guard.png'),
            isExpansion: false
        }
    },
    {
        key: 'powers',
        data: {
            name: 'Powers Long Forgotten',
            screen: 'Powers',
            difficulty: 1,
            image: require('./assets/powers.png'),
            isExpansion: true
        }
    },
    {
        key: 'flame',
        data: {
            name: 'Rituals of the Destroying Flame',
            screen: 'Flame',
            difficulty: 3,
            image: require('./assets/flame.png'),
            isExpansion: true
        }
    },
    {
        key: 'terror',
        data: {
            name: 'Rituals of Terror',
            screen: 'Terror',
            difficulty: 3,
            image: require('./assets/terror.png'),
            isExpansion: false
        }
    },
    {
        key: 'second',
        data: {
            name: 'Second Wave',
            screen: 'Wave',
            difficulty: '±1',
            image: require('./assets/second.png'),
            isExpansion: true
        }
    },
    {
        key: 'ward',
        data: {
            name: 'Ward the Shores',
            screen: 'Shores',
            difficulty: 2,
            image: require('./assets/ward.png'),
            isExpansion: true
        }
    }
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