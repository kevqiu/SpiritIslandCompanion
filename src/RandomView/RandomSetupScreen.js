import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import Button from 'react-native-flat-button';
import CheckBox from 'react-native-check-box';

import { RandomSetupStyles as Styles } from './RandomSetupStyles';
import Header from '../common/Header';
import Colors from '../constants/colors';
import Divider from '../common/Divider';

class RandomSetupScreen extends Component {
    constructor(props) {
        super(props);

        this.selectAllSpirits = this.selectAllSpirits.bind(this);
        this.selectAllAdversaries = this.selectAllAdversaries.bind(this);
        this.selectAllScenarios = this.selectAllScenarios.bind(this);
        this.goToResults = this.goToResults.bind(this);

        this.state = {
            players: 1,
            rampartSelected: true,
            wildfireSelected: true,
            lightningSelected: true,
            riverSelected: true,
            shadowSelected: true,
            thunderspeakerSelected: true,
            bringerSelected: true,
            keeperSelected: true,
            oceanSelected: true,
            serpentSelected: true,
            sharpSelected: true,
            vitalSelected: true,
            brandenburgSelected: true,
            englandSelected: true,
            franceSelected: true,
            swedenSelected: true,
            blitzSelected: true,
            guardSelected: true,
            ritualsFlameSelected: true,
            secondSelected: true,
            dahanSelected: true,
            powersSelected: true,
            ritualsTerrorSelected: true,
            wardSelected: true,
        }
    }

    selectAllSpirits(option) {
        this.setState({
            rampartSelected: option,
            bringerSelected: option,
            wildfireSelected: option,
            keeperSelected: option,
            lightningSelected: option,
            oceanSelected: option,
            riverSelected: option,
            serpentSelected: option,
            shadowSelected: option,
            sharpSelected: option,
            thunderspeakerSelected: option,
            vitalSelected: option
        });
    }

    selectAllAdversaries(option) {
        this.setState({
            brandenburgSelected: option,
            englandSelected: option,
            franceSelected: option,
            swedenSelected: option
        });
    }

    selectAllScenarios(option) {
        this.setState({
            blitzSelected: option,
            guardSelected: option,
            ritualsFlameSelected: option,
            secondSelected: option,
            dahanSelected: option,
            powersSelected: option,
            ritualsTerrorSelected: option,
            wardSelected: option
        });
    }

    goToResults() {
        const { navigate } = this.props.navigation;
        const { players, rampartSelected, wildfireSelected, lightningSelected, riverSelected, shadowSelected,
            thunderspeakerSelected, bringerSelected, keeperSelected, oceanSelected, serpentSelected,
            sharpSelected, vitalSelected, brandenburgSelected, franceSelected, englandSelected,
            swedenSelected, blitzSelected, guardSelected, ritualsFlameSelected, secondSelected,
            dahanSelected, powersSelected, ritualsTerrorSelected, wardSelected } = this.state;

        let spirits = [];
        if (rampartSelected) spirits.push('A Spread of Rampant Green');
        if (wildfireSelected) spirits.push('Heart of the Wildfire');
        if (lightningSelected) spirits.push('Lightning\'s Swift Strike');
        if (riverSelected) spirits.push('River Surges in Sunlight');
        if (shadowSelected) spirits.push('Shadows Flicker Like Flame');
        if (thunderspeakerSelected) spirits.push('Thunderspeaker');
        if (bringerSelected) spirits.push('Bringer of Dreams and Nightmares');
        if (keeperSelected) spirits.push('Keeper of the Forbidden Wilds');
        if (oceanSelected) spirits.push('Ocean\'s Hungry Grasp');
        if (serpentSelected) spirits.push('Serpent Slumbering Beneath the Island');
        if (sharpSelected) spirits.push('Sharp Fangs Behind the Leaves');
        if (vitalSelected) spirits.push('Vital Strength of the Earth');

        let adversaries = [];
        if (brandenburgSelected) adversaries.push('Brandenburg-Prussia');
        if (franceSelected) adversaries.push('France (Plantation Colony)');
        if (englandSelected) adversaries.push('England');
        if (swedenSelected) adversaries.push('Sweden');

        let scenarios = [];
        if (blitzSelected) scenarios.push('Blitz');
        if (guardSelected) scenarios.push('Guard the Isle\'s Heart');
        if (ritualsFlameSelected) scenarios.push('Rituals of the Destroying Flame');
        if (secondSelected) scenarios.push('Second Wave');
        if (dahanSelected) scenarios.push('Dahan Insurrection');
        if (powersSelected) scenarios.push('Powers Long Forgotten');
        if (ritualsTerrorSelected) scenarios.push('Rituals of Terror');
        if (wardSelected) scenarios.push('Ward the Shores');

        navigate('RandomResults', {
            players: players,
            spirits: spirits,
            adversaries: adversaries,
            scenarios: scenarios
        });
    }

    render() {
        let { navigation } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <Header title={'Random Game Generator'} navigation={navigation} navStyle={'drawer'} />
                <ScrollView style={Styles.scrollView}>
                    <View style={Styles.container}>
                        <Text style={Styles.sectionTextBold}>{'Number of Players'}</Text>
                        <View style={Styles.countContainer}>
                            <SwitchSelector
                                height={35}
                                textColor='gray'
                                options={[
                                    { label: '1', value: 1 },
                                    { label: '2', value: 2 },
                                    { label: '3', value: 3 },
                                    { label: '4', value: 4 }
                                ]}
                                initial={0}
                                buttonColor={Colors.darkBrown}
                                onPress={value => this.setState({ players: value })}
                            />
                        </View>
                        <Divider />
                        <Text style={Styles.sectionTextBold}>{'Select Spirits to be included'}</Text>
                        <View style={Styles.selectorContainer}>
                            <View style={Styles.selectorColumn}>
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextStyle={Styles.checkBoxText}
                                    rightText={'A Spread of Rampant Green'}
                                    isChecked={this.state.rampartSelected}
                                    onClick={() => this.setState({ rampartSelected: !this.state.rampartSelected })}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextStyle={Styles.checkBoxText}
                                    rightText={'Heart of the Wildfire'}
                                    isChecked={this.state.wildfireSelected}
                                    onClick={() => this.setState({ wildfireSelected: !this.state.wildfireSelected })}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextStyle={Styles.checkBoxText}
                                    rightText={'Lightning\'s Swift Strike'}
                                    isChecked={this.state.lightningSelected}
                                    onClick={() => this.setState({ lightningSelected: !this.state.lightningSelected })}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextStyle={Styles.checkBoxText}
                                    rightText={'River Surges in Sunlight'}
                                    isChecked={this.state.riverSelected}
                                    onClick={() => this.setState({ riverSelected: !this.state.riverSelected })}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextStyle={Styles.checkBoxText}
                                    rightText={'Shadows Flicker Like Flame'}
                                    isChecked={this.state.shadowSelected}
                                    onClick={() => this.setState({ shadowSelected: !this.state.shadowSelected })}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextStyle={Styles.checkBoxText}
                                    rightText={'Thunderspeaker'}
                                    isChecked={this.state.thunderspeakerSelected}
                                    onClick={() => this.setState({ thunderspeakerSelected: !this.state.thunderspeakerSelected })}
                                />
                            </View>
                            <View style={Styles.selectorColumn}>
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextStyle={Styles.checkBoxText}
                                    rightText={'Bringer of Dreams and Nightmares'}
                                    isChecked={this.state.bringerSelected}
                                    onClick={() => this.setState({ bringerSelected: !this.state.bringerSelected })}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextStyle={Styles.checkBoxText}
                                    rightText={'Keeper of the Forbidden Wilds'}
                                    isChecked={this.state.keeperSelected}
                                    onClick={() => this.setState({ keeperSelected: !this.state.keeperSelected })}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextStyle={Styles.checkBoxText}
                                    rightText={'Ocean\'s Hungry Grasp'}
                                    isChecked={this.state.oceanSelected}
                                    onClick={() => this.setState({ oceanSelected: !this.state.oceanSelected })}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextStyle={Styles.checkBoxText}
                                    rightText={'Serpent Slumbering Beneath the Island'}
                                    isChecked={this.state.serpentSelected}
                                    onClick={() => this.setState({ serpentSelected: !this.state.serpentSelected })}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextStyle={Styles.checkBoxText}
                                    rightText={'Sharp Fangs Behind the Leaves'}
                                    isChecked={this.state.sharpSelected}
                                    onClick={() => this.setState({ sharpSelected: !this.state.sharpSelected })}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextStyle={Styles.checkBoxText}
                                    rightText={'Vital Strength of the Earth'}
                                    isChecked={this.state.vitalSelected}
                                    onClick={() => this.setState({ vitalSelected: !this.state.vitalSelected })}
                                />
                            </View>
                        </View>
                        <View style={Styles.buttonContainer}>
                            <Button
                                type='custom'
                                onPress={() => this.selectAllSpirits(true)}
                                backgroundColor={Colors.lightBrown}
                                borderColor={Colors.lightBrownShadow}
                                borderRadius={4}
                                containerStyle={Styles.selectButton}
                                contentStyle={Styles.smallButtonText}
                            >
                                Select All
                            </Button>
                            <Button
                                type='custom'
                                onPress={() => this.selectAllSpirits(false)}
                                backgroundColor={Colors.lightBrown}
                                borderColor={Colors.lightBrownShadow}
                                borderRadius={4}
                                containerStyle={Styles.selectButton}
                                contentStyle={Styles.smallButtonText}
                            >
                                Deselect All
                            </Button>
                        </View>
                        <Divider />
                        <Text style={Styles.sectionTextBold}>{'Select Adversaries to be included'}</Text>
                        <View style={Styles.selectorContainer}>
                            <View style={Styles.selectorColumn}>
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextStyle={Styles.checkBoxText}
                                    rightText={'Brandenburg-Prussia'}
                                    isChecked={this.state.brandenburgSelected}
                                    onClick={() => this.setState({ brandenburgSelected: !this.state.brandenburgSelected })}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextStyle={Styles.checkBoxText}
                                    rightText={'France (Plantation Colony)'}
                                    isChecked={this.state.franceSelected}
                                    onClick={() => this.setState({ franceSelected: !this.state.franceSelected })}
                                />
                            </View>
                            <View style={Styles.selectorColumn}>
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextStyle={Styles.checkBoxText}
                                    rightText={'England'}
                                    isChecked={this.state.englandSelected}
                                    onClick={() => this.setState({ englandSelected: !this.state.englandSelected })}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextStyle={Styles.checkBoxText}
                                    rightText={'Sweden'}
                                    isChecked={this.state.swedenSelected}
                                    onClick={() => this.setState({ swedenSelected: !this.state.swedenSelected })}
                                />
                            </View>
                        </View>
                        <View style={Styles.buttonContainer}>
                            <Button
                                type='custom'
                                onPress={() => this.selectAllAdversaries(true)}
                                backgroundColor={Colors.lightBrown}
                                borderColor={Colors.lightBrownShadow}
                                borderRadius={4}
                                containerStyle={Styles.selectButton}
                                contentStyle={Styles.smallButtonText}
                            >
                                Select All
                            </Button>
                            <Button
                                type='custom'
                                onPress={() => this.selectAllAdversaries(false)}
                                backgroundColor={Colors.lightBrown}
                                borderColor={Colors.lightBrownShadow}
                                borderRadius={4}
                                containerStyle={Styles.selectButton}
                                contentStyle={Styles.smallButtonText}
                            >
                                Deselect All
                            </Button>
                        </View>
                        <Divider />
                        <Text style={Styles.sectionTextBold}>{'Select Scenarios to be included'}</Text>
                        <View style={Styles.selectorContainer}>
                            <View style={Styles.selectorColumn}>
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextStyle={Styles.checkBoxText}
                                    rightText={'Blitz'}
                                    isChecked={this.state.blitzSelected}
                                    onClick={() => this.setState({ blitzSelected: !this.state.blitzSelected })}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextStyle={Styles.checkBoxText}
                                    rightText={'Guard the Isle\'s Heart'}
                                    isChecked={this.state.guardSelected}
                                    onClick={() => this.setState({ guardSelected: !this.state.guardSelected })}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextStyle={Styles.checkBoxText}
                                    rightText={'Rituals of the Destroying Flame'}
                                    isChecked={this.state.ritualsFlameSelected}
                                    onClick={() => this.setState({ ritualsFlameSelected: !this.state.ritualsFlameSelected })}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextStyle={Styles.checkBoxText}
                                    rightText={'Second Wave'}
                                    isChecked={this.state.secondSelected}
                                    onClick={() => this.setState({ secondSelected: !this.state.secondSelected })}
                                />
                            </View>
                            <View style={Styles.selectorColumn}>
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextStyle={Styles.checkBoxText}
                                    rightText={'Dahan Insurrection'}
                                    isChecked={this.state.dahanSelected}
                                    onClick={() => this.setState({ dahanSelected: !this.state.dahanSelected })}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextStyle={Styles.checkBoxText}
                                    rightText={'Powers Long Forgotten'}
                                    isChecked={this.state.powersSelected}
                                    onClick={() => this.setState({ powersSelected: !this.state.powersSelected })}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextStyle={Styles.checkBoxText}
                                    rightText={'Rituals of Terror'}
                                    isChecked={this.state.ritualsTerrorSelected}
                                    onClick={() => this.setState({ ritualsTerrorSelected: !this.state.ritualsTerrorSelected })}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextStyle={Styles.checkBoxText}
                                    rightText={'Ward the Shores'}
                                    isChecked={this.state.wardSelected}
                                    onClick={() => this.setState({ wardSelected: !this.state.wardSelected })}
                                />
                            </View>
                        </View>
                        <View style={Styles.buttonContainer}>
                            <Button
                                type='custom'
                                onPress={() => this.selectAllScenarios(true)}
                                backgroundColor={Colors.lightBrown}
                                borderColor={Colors.lightBrownShadow}
                                borderRadius={4}
                                containerStyle={Styles.selectButton}
                                contentStyle={Styles.smallButtonText}
                            >
                                Select All
                            </Button>
                            <Button
                                type='custom'
                                onPress={() => this.selectAllScenarios(false)}
                                backgroundColor={Colors.lightBrown}
                                borderColor={Colors.lightBrownShadow}
                                borderRadius={4}
                                containerStyle={Styles.selectButton}
                                contentStyle={Styles.smallButtonText}
                            >
                                Deselect All
                            </Button>
                        </View>
                        <Divider />
                        <Button
                            type='custom'
                            onPress={this.goToResults}
                            backgroundColor={Colors.lightBrown}
                            borderColor={Colors.lightBrownShadow}
                            borderRadius={4}
                            containerStyle={Styles.button}
                            contentStyle={Styles.buttonText}
                        >
                            Generate!
                            </Button>
                    </View>
                </ScrollView>
            </View>

        );
    }
}

export default RandomSetupScreen;