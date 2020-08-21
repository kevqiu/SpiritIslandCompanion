import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';

import Header from '../common/Header';
import { AdversaryScreenStyles as Styles } from './AdversaryScreenStyles';
import { ListItem, ListDivider } from '../common/ListItem';

const Adversaries = [
    {
        key: 'brandenburg',
        data: {
            name: 'Brandenburg-Prussia',
            screen: 'Brandenburg',
            difficulty: '1 / 2 / 4 / 6 / 7 / 9 / 10',
            image: require('../Assets/Brand-Prussia_Flag.png'),
        }
    },
    {
        key: 'england',
        data: {
            name: 'England',
            screen: 'England',
            difficulty: '1 / 3 / 4 / 6 / 7 / 9 / 10',
            image: require('../Assets/England_Flag.png'),
        }
    },
    {
        key: 'sweden',
        data: {
            name: 'Sweden',
            screen: 'Sweden',
            difficulty: '1 / 2 / 3 / 5 / 6 / 7 / 8',
            image: require('../Assets/Sweden_Flag.png'),
        }
    },
    {
        key: 'france',
        data: {
            name: 'France',
            screen: 'France',
            difficulty: '2 / 3 / 5 / 7 / 8 / 9 / 10',
            image: require('../Assets/France_Flag.png'),
            expansion: 'BranchAndClaw'
        }
    },
    {
        key: 'hapsburg',
        data: {
            name: 'Hapsburg Dynasty',
            screen: 'Hapsburg',
            difficulty: '2 / 3 / 5 / 6 / 8 / 9 / 10',
            expansion: 'JaggedEarth'
        }
    },
    {
        key: 'russia',
        data: {
            name: 'Russia',
            screen: 'Russia',
            difficulty: '1 / 3 / 4 / 6 / 7 / 9 / 11',
            expansion: 'JaggedEarth'
        }
    },
    {
        key: 'scotland',
        data: {
            name: 'Scotland',
            screen: 'Scotland',
            difficulty: '1 / 3 / 4 / 6 / 7 / 8 / 10',
            expansion: 'JaggedEarth'
        }
    },
]

class AdversaryScreen extends Component {
    render() {
        let { navigation } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <Header title={'Adversaries'} navigation={navigation} navStyle={'drawer'} />

                <View style={Styles.container}>
                    <FlatList
                        data={Adversaries}
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

export default AdversaryScreen;