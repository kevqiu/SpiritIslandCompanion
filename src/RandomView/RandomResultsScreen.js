import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { RandomResultsStyles as Styles } from './RandomResultsStyles';
import Header from '../common/Header';

class RandomResultsScreen extends Component {
    selectN(array, number) {
        let selected = [];
        for (let i = 0; i < number && array.length >= number - i; i++) {
            const index = Math.floor(Math.random() * array.length);
            const item = array[index];
            array.splice(index, 1);
            selected.push(item);
        }
        return selected;
    }

    render() {
        const { navigation } = this.props;
        let players = navigation.getParam('players', 1);
        let spirits = navigation.getParam('spirits', []);
        let adversaries = navigation.getParam('adversaries', []);
        let scenarios = navigation.getParam('scenarios', []);

        const selectedSpirits = this.selectN(spirits, players);
        const selectedAdversary = adversaries[Math.floor(Math.random() * adversaries.length)];
        const selectedScenario = scenarios[Math.floor(Math.random() * scenarios.length)];

        const boards = [];
        if (players === 1) {
            boards.push(require('../Assets/1_Board.png'));
        }
        else if (players === 2) {
            boards.push(require('../Assets/2_Boards_A.png'));
            boards.push(require('../Assets/2_Boards_B.png'));
            boards.push(require('../Assets/2_Boards_C.png'));
        }
        else if (players === 3) {
            boards.push(require('../Assets/3_Boards_A.png'));
            boards.push(require('../Assets/3_Boards_B.png'));
            boards.push(require('../Assets/3_Boards_C.png'));
        }
        else if (players === 4) {
            boards.push(require('../Assets/4_Boards_A.png'));
            boards.push(require('../Assets/4_Boards_B.png'));
            boards.push(require('../Assets/4_Boards_C.png'));
        }
        const randomBoard = boards[Math.floor(Math.random() * boards.length)];
        const boardLetters = this.selectN(['A', 'B', 'C', 'D'], players).sort().join(', ');

        return (
            <View style={{ flex: 1 }}>
                <Header navigation={navigation} navStyle={'back'} />
                <View style={Styles.container}>
                    <View style={Styles.sectionContainer}>
                        <Text style={Styles.sectionTextBold}>{'Board Setup'}</Text>
                        <View style={Styles.boardImageContainer}>
                            <Image
                                style={Styles.boardImage}
                                source={randomBoard}
                                resizeMode='contain'
                            />
                        </View>
                        <Text style={Styles.text}>{`With Board${players > 1 ? 's' : ''} ${boardLetters}`}</Text>
                    </View>

                    {selectedSpirits.length > 0 &&
                        <View style={Styles.sectionContainer}>
                            <Text style={Styles.sectionTextBold}>{'Spirits'}</Text>
                            {
                                selectedSpirits.map((spirit, k) => (
                                    <Text style={Styles.text} key={k}>{spirit}</Text>
                                ))
                            }
                        </View>
                    }

                    {selectedAdversary &&
                        <View style={Styles.sectionContainer}>
                            <Text style={Styles.sectionTextBold}>{'Adversary'}</Text>
                            <Text style={Styles.text}>{selectedAdversary}</Text>
                        </View>
                    }

                    {selectedScenario &&
                        <View style={Styles.sectionContainer}>
                            <Text style={Styles.sectionTextBold}>{'Scenario'}</Text>
                            <Text style={Styles.text}>{selectedScenario}</Text>
                        </View>
                    }
                </View>
            </View>
        );
    }
}

export default RandomResultsScreen;
