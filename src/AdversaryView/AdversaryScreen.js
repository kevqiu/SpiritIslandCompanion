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
            difficulty: '2 / 4 / 6 / 7 / 9 / 10',
            image: require('./assets/Brand-Prussia_Flag.png'),
            isExpansion: false
        }
    },
    {
        key: 'england',
        data: {
            name: 'England',
            screen: 'England',
            difficulty: '3 / 4 / 6 / 7 / 9 / 10',
            image: require('./assets/England_Flag.png'),
            isExpansion: false
        }
    },
    {
        key: 'france',
        data: {
            name: 'France',
            screen: 'France',
            difficulty: '3 / 5 / 7 / 8 / 9 / 10',
            image: require('./assets/France_Flag.png'),
            isExpansion: true
        }
    },
    {
        key: 'sweden',
        data: {
            name: 'Sweden',
            screen: 'Sweden',
            difficulty: '2 / 3 / 5 / 6 / 7 / 8',
            image: require('./assets/Sweden_Flag.png'),
            isExpansion: false
        }
    }
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