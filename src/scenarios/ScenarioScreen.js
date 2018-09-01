import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';

import Header from '../common/Header';
import { ScenarioStyles as Styles } from './ScenarioStyles';
import { ListItem, ListDivider } from '../common/ListItem';

const Scenarios = [
    {
        key: 'blitz',
        data: {
            name: 'Blitz',
            difficulty: 0,
            image: require('./assets/blitzIcon.png'),
            isExpansion: false
        }

    },
    {
        key: 'dahan',
        data: {
            name: 'Dahan Insurrection',
            difficulty: 4,
            image: require('./assets/dahan.png'),
            isExpansion: false
        }
    },
    {
        key: 'guard',
        data: {
            name: 'Guard the Isle\'s Heart',
            difficulty: 0,
            image: require('./assets/guard.png'),
            isExpansion: false
        }
    },
    {
        key: 'powers',
        data: {
            name: 'Powers Long Forgotten',
            difficulty: 1,
            image: require('./assets/powers.png'),
            isExpansion: true
        }
    },
    {
        key: 'ritualsFlame',
        data: {
            name: 'Rituals of the Destroying Flame',
            difficulty: 3,
            image: require('./assets/ritualsFlame.png'),
            isExpansion: true
        }
    },
    {
        key: 'ritualsTerror',
        data: {
            name: 'Rituals of Terror',
            difficulty: 3,
            image: require('./assets/ritualsTerror.png'),
            isExpansion: false
        }
    },
    {
        key: 'second',
        data: {
            name: 'Second Wave',
            difficulty: '±1',
            image: require('./assets/second.png'),
            isExpansion: true
        }
    },
    {
        key: 'ward',
        data: {
            name: 'Ward the Shores',
            difficulty: 2,
            image: require('./assets/ward.png'),
            isExpansion: true
        }
    }
]


class ScenarioScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header title={'Scenarios'} navigation={this.props.navigation} />

                <View style={Styles.container}>
                    <FlatList
                        data={Scenarios}
                        renderItem={({ item }) =>
                            <ListItem data={item.data} />
                        }
                        ItemSeparatorComponent={() => <ListDivider />}
                    />
                </View>
            </View>
        );
    }
}

export default ScenarioScreen;