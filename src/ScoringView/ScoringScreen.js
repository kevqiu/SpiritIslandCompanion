import React, { Component } from 'react';
import { Text, View, Picker, TextInput, findNodeHandle } from 'react-native';
import Button from 'react-native-flat-button';
import SwitchSelector from 'react-native-switch-selector';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Header from '../common/Header';
import Colors from '../constants/colors';
import { ScoringStyles as Styles } from './ScoringStyles';

const scenarioDifficultyDict = {
    'none': 0,
    'blitz': 0,
    'dahan': 4,
    'guard': 0,
    'powers': 1,
    'flame': 3,
    'terror': 3,
    'second': 1,
    'ward': 2,
    'diversity': 0,
    'despicable': 2,
    'elemental': 1,
    'greatRiver': 3,
    'varied': 2,
}

const adversaryDifficultyDict = {
    'none': [0, 0, 0, 0, 0, 0, 0],
    'brandenburg': [1, 2, 4, 6, 7, 9, 10],
    'england': [1, 3, 4, 6, 7, 9, 10],
    'sweden': [1, 3, 5, 6, 7, 8],
    'france': [2, 3, 5, 7, 8, 9, 10],
    'hapsburg': [2, 3, 5, 6, 8, 9, 10],
    'russia': [1, 3, 4, 6, 7, 9, 11],
    'scotland': [1, 3, 4, 6, 7, 8, 10],
}

class ScoringScreen extends Component {
    constructor(props) {
        super(props);

        this.tallyScore = this.tallyScore.bind(this);
        this._scrollToInput = this._scrollToInput.bind(this);

        this.state = {
            victory: true,
            thematic: false,
            expansion: false,
            players: 1,
            boards: 1,
            scenario: 'none',
            adversary: 'none',
            adversaryLevel: 0,
            invaderCards: 0,
            dahanRemaining: 0,
            blightOnIsland: 0,
            scored: false,
            score: 0,
            invaderError: false,
            dahanError: false,
            blightError: false
        };
    }

    _scrollToInput(reactNode) {
        this.scroll.scrollToFocusedInput(reactNode);
    }

    tallyScore() {
        let {
            victory,
            thematic,
            expansion,
            players,
            boards,
            scenario,
            adversary,
            adversaryLevel,
            invaderCards,
            dahanRemaining,
            blightOnIsland
        } = this.state;

        this.setState({ invaderError: false, dahanError: false, blightError: false });

        let error = false;
        if (!invaderCards) {
            error = true;
            this.setState({ invaderError: true });
        }
        if (!dahanRemaining) {
            error = true;
            this.setState({ dahanError: true });
        }
        if (!blightOnIsland) {
            error = true;
            this.setState({ blightError: true });
        }
        if (error) {
            this.setState({ scored: false });
            return;
        }

        let victoryScore = victory ? 10 : 0;
        let thematicDifficulty = thematic && expansion ? 1 : thematic ? 3 : 0;
        let boardOverflow = boards > players ? (boards - players) * 2.5 : 0;
        let boardOverflowScore = victory ? boardOverflow * 5 : boardOverflow * 2;
        let thematicScore = victory ? thematicDifficulty * boardOverflowScore * 5 : thematicDifficulty * boardOverflowScore * 2;
        let scenarioDifficulty = scenarioDifficultyDict[scenario];
        let scenarioScore = victory ? scenarioDifficulty * 5 : scenarioDifficulty * 2;
        let adversaryDifficulty = adversaryDifficultyDict[adversary][adversaryLevel];
        let adversaryScore = victory ? adversaryDifficulty * 5 : adversaryDifficulty * 2;
        let invaderCardsCount = parseInt(invaderCards);
        let invaderScore = victory ? invaderCardsCount * 2 : invaderCardsCount;
        let dahanScore = parseInt(dahanRemaining) / players;
        let blightScore = parseInt(blightOnIsland) / players;

        let finalScore = victoryScore + boardOverflowScore + thematicScore + scenarioScore + adversaryScore + invaderScore + dahanScore - blightScore;
        this.setState({
            scored: true,
            score: finalScore.toString().match(/(\d+\.\d{1,2}|^\d+$)/)[0]
        });
    }

    render() {
        let { victory, players, boards, scenario, adversary, adversaryLevel, scored, score, invaderError, dahanError, blightError } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <Header title={'Scoring'} navigation={this.props.navigation} navStyle={'drawer'} />

                <View style={Styles.container}>
                    <KeyboardAwareScrollView
                        ref={ref => this.scroll = ref}
                        scrollEnabled={false}
                        resetScrollToCoords={{ x: 0, y: 0 }}
                        contentContainerStyle={Styles.scrollContainer}
                    >
                        <View style={Styles.selectorContainer}>
                            <SwitchSelector
                                style={Styles.slider}
                                height={35}
                                textColor='gray'
                                options={[
                                    { label: 'Victory', value: true },
                                    { label: 'Defeat', value: false }
                                ]}
                                initial={0}
                                buttonColor={Colors.darkBrown}
                                onPress={value => this.setState({ victory: value })}
                            />
                        </View>

                        <View style={Styles.selectorContainer}>
                            <SwitchSelector
                                style={Styles.slider}

                                height={35}
                                textColor='gray'
                                options={[
                                    { label: 'Standard Board', value: false },
                                    { label: 'Thematic Board', value: true }
                                ]}
                                initial={0}
                                buttonColor={Colors.darkBrown}
                                onPress={value => this.setState({ thematic: value })}
                            />
                        </View>

                        <View style={Styles.selectorWithTextContainer}>
                            <Text style={Styles.text}>Branch and Claw:   </Text>
                            <SwitchSelector
                                style={Styles.pickerSmall}
                                height={35}
                                textColor='gray'
                                options={[
                                    { label: 'Y', value: true },
                                    { label: 'N', value: false }
                                ]}
                                initial={false}
                                buttonColor={Colors.darkBrown}
                                onPress={value => this.setState({ expansion: value })}
                            />
                        </View>

                        <View style={Styles.optionContainer}>
                            <Text style={Styles.text}>Number of Players: </Text>
                            <Picker
                                selectedValue={players}
                                prompt='Players'
                                style={Styles.pickerSmall}
                                mode='dropdown'
                                onValueChange={(value) => this.setState({ players: value })}>
                                <Picker.Item label='1' value={1} />
                                <Picker.Item label='2' value={2} />
                                <Picker.Item label='3' value={3} />
                                <Picker.Item label='4' value={4} />
                                <Picker.Item label='5' value={5} />
                                <Picker.Item label='6' value={6} />
                            </Picker>
                        </View>

                        <View style={Styles.optionContainer}>
                            <Text style={Styles.text}>Number of Boards: </Text>
                            <Picker
                                selectedValue={boards}
                                prompt='Boards'
                                style={Styles.pickerSmall}
                                mode='dropdown'
                                onValueChange={(value) => this.setState({ boards: value })}>
                                <Picker.Item label='1' value={1} />
                                <Picker.Item label='2' value={2} />
                                <Picker.Item label='3' value={3} />
                                <Picker.Item label='4' value={4} />
                                <Picker.Item label='5' value={5} />
                                <Picker.Item label='6' value={6} />
                            </Picker>
                        </View>

                        <View style={Styles.optionContainer}>
                            <Text style={Styles.text}>Scenario: </Text>
                            <Picker
                                selectedValue={scenario}
                                mode='dropdown'
                                style={Styles.pickerLarge}
                                itemStyle={Styles.pickerText}
                                onValueChange={(value) => this.setState({ scenario: value })}>
                                <Picker.Item label='None' value='none' />
                                <Picker.Item label='A Diversity of Spirits' value='diversity' />
                                <Picker.Item label='Blitz' value='blitz' />
                                <Picker.Item label='Dahan Insurrection' value='dahan' />
                                <Picker.Item label='Despicable Theft' value='despicable' />
                                <Picker.Item label='Elemental Invocation' value='elemental' />
                                <Picker.Item label={'Guard the Isle\'s Heart'} value='guard' />
                                <Picker.Item label='Powers Long Forgotten' value='powers' />
                                <Picker.Item label='Rituals of the Destroying Flame' value='flame' />
                                <Picker.Item label='Rituals of Terror' value='terror' />
                                <Picker.Item label='Second Wave' value='second' />
                                <Picker.Item label='The Great River' value='greatRiver' />
                                <Picker.Item label='Varied Terrains' value='varied' />
                                <Picker.Item label='Ward the Shores' value='ward' />
                            </Picker>
                        </View>

                        <View style={Styles.optionContainer}>
                            <Text style={Styles.text}>Adversary: </Text>
                            <Picker
                                selectedValue={adversary}
                                mode='dropdown'
                                style={Styles.pickerLarge}
                                itemStyle={Styles.pickerText}
                                onValueChange={(value) => this.setState({ adversary: value })}>
                                <Picker.Item label='None' value='none' />
                                <Picker.Item label='Brandenburg-Prussia' value='brandenburg' />
                                <Picker.Item label='England' value='england' />
                                <Picker.Item label='Sweden' value='sweden' />
                                <Picker.Item label='France' value='france' />
                                <Picker.Item label='Hapsburg Dynasty' value='hapsburg' />
                                <Picker.Item label='Russia' value='russia' />
                                <Picker.Item label='Scotland' value='scotland' />
                                <Picker.Item label='Sweden' value='sweden' />
                            </Picker>
                        </View>

                        {adversary !== 'none' &&
                            <View style={Styles.optionContainer}>
                                <Text style={Styles.text}>Adversary Level: </Text>
                                <Picker
                                    selectedValue={adversaryLevel}
                                    style={Styles.pickerSmall}
                                    mode='dropdown'
                                    onValueChange={(value) => this.setState({ adversaryLevel: value })}>
                                    <Picker.Item label='0' value={0} />
                                    <Picker.Item label='1' value={1} />
                                    <Picker.Item label='2' value={2} />
                                    <Picker.Item label='3' value={3} />
                                    <Picker.Item label='4' value={4} />
                                    <Picker.Item label='5' value={5} />
                                    <Picker.Item label='6' value={6} />
                                </Picker>
                            </View>
                        }

                        <View style={Styles.optionContainer}>
                            <Text style={Styles.text}>Invader Cards {!victory && 'not '}in Deck: </Text>
                            <TextInput
                                keyboardType='numeric'
                                onChangeText={(text) => this.setState({ invaderCards: text })}
                                onSubmitEditing={() => { this.secondInput.focus(); }}
                                blurOnSubmit={false}
                            />
                            {invaderError && <Icon name='alert-circle' size={20}></Icon>}
                        </View>

                        <View style={Styles.optionContainer}>
                            <Text style={Styles.text}>Remaining Dahan: </Text>
                            <TextInput
                                ref={(input) => { this.secondInput = input; }}
                                keyboardType='numeric'
                                onChangeText={(text) => this.setState({ dahanRemaining: text })}
                                onSubmitEditing={() => { this.thirdInput.focus(); }}
                                blurOnSubmit={false}
                                onFocus={e => this._scrollToInput(findNodeHandle(e.target))}
                            />
                            {dahanError && <Icon name='alert-circle' size={20}></Icon>}
                        </View>

                        <View style={Styles.optionContainer}>
                            <Text style={Styles.text}>Blight On Island: </Text>
                            <TextInput
                                ref={(input) => { this.thirdInput = input; }}
                                keyboardType='numeric'
                                onChangeText={(text) => this.setState({ blightOnIsland: text })}
                                onFocus={e => this._scrollToInput(findNodeHandle(e.target))}
                            />
                            {blightError && <Icon name='alert-circle' size={20}></Icon>}
                        </View>

                        <View style={Styles.scoreButtonContainer}>
                            <Button
                                type='custom'
                                onPress={this.tallyScore}
                                backgroundColor={Colors.lightBrown}
                                borderColor={Colors.lightBrownShadow}
                                borderRadius={4}
                                containerStyle={Styles.buttonContainer}
                                contentStyle={Styles.buttonText}
                            >
                                Score
                            </Button>
                        </View>

                        <View style={Styles.optionContainer}>
                            <Text style={Styles.scoreText}>Final Score: </Text>
                            <Text style={Styles.scoreText}>{scored ? score : '\u2014'} </Text>
                        </View>
                    </KeyboardAwareScrollView>
                </View>
            </View>
        );
    }
}

export default ScoringScreen;