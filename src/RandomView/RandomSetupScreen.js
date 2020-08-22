import React, { Component } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import Button from 'react-native-flat-button';
import CheckBox from 'react-native-check-box';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import AsyncStorage from '@react-native-community/async-storage';

import { RandomSetupStyles as Styles } from './RandomSetupStyles';
import { IconStyles } from '../common/IconStyles';
import Header from '../common/Header';
import Colors from '../constants/colors';
import Divider from '../common/Divider';

class RandomSetupScreen extends Component {
    constructor(props) {
        super(props);

        this.updateStore = this.updateStore.bind(this);
        this.updateSelection = this.updateSelection.bind(this);
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
            downpourSelected: true,
            finderSelected: true,
            fracturedSelected: true,
            grinningSelected: true,
            lureSelected: true,
            manyMindsSelected: true,
            shiftingSelected: true,
            shroudSelected: true,
            starlightSelected: true,
            stoneSelected: true,
            vengeanceSelected: true,
            volcanoSelected: true,

            brandenburgSelected: true,
            englandSelected: true,
            franceSelected: true,
            swedenSelected: true,
            hapsburgSelected: true,
            russiaSelected: true,
            scotlandSelected: true,

            blitzSelected: true,
            guardSelected: true,
            ritualsFlameSelected: true,
            secondSelected: true,
            dahanSelected: true,
            powersSelected: true,
            ritualsTerrorSelected: true,
            wardSelected: true,
            diversitySelected: true,
            despicableSelected: true,
            elementalSelected: true,
            greatRiverSelected: true,
            variedSelected: true
        }
    }

    async componentDidMount() {
        let settings = await AsyncStorage.getItem('@random_dict');
        if (settings !== null) {
            settings = JSON.parse(settings);
            console.log(settings)

            this.setState(settings);
        }
    }

    async updateStore(dict) {
        try {
            let settings = JSON.parse(await AsyncStorage.getItem('@random_dict'));
            settings = {
                ...settings,
                ...dict
            }
            console.log(settings)
            await AsyncStorage.setItem('@random_dict', JSON.stringify(settings));
        }
        catch (e) { }
    }

    async updateSelection(k, v) {
        try {
            this.setState({ [k]: v });

            let settings = await AsyncStorage.getItem('@random_dict');
            settings = settings !== null ? JSON.parse(settings) : {};
            settings = {
                ...settings,
                [k]: v
            };
            console.log(settings)

            await this.updateStore(settings);
        }
        catch (e) { }
    }

    selectAllSpirits(option) {
        const newValues = {
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
            vitalSelected: option,
            downpourSelected: option,
            finderSelected: option,
            fracturedSelected: option,
            grinningSelected: option,
            lureSelected: option,
            manyMindsSelected: option,
            shiftingSelected: option,
            shroudSelected: option,
            starlightSelected: option,
            stoneSelected: option,
            vengeanceSelected: option,
            volcanoSelected: option,
        }
        this.setState(newValues);
        this.updateStore(newValues);
    }

    selectAllAdversaries(option) {
        const newValues = {
            brandenburgSelected: option,
            englandSelected: option,
            franceSelected: option,
            swedenSelected: option,
            hapsburgSelected: option,
            russiaSelected: option,
            scotlandSelected: option,
        };
        this.setState(newValues);
        this.updateStore(newValues);
    }

    selectAllScenarios(option) {
        const newValues = {
            blitzSelected: option,
            guardSelected: option,
            ritualsFlameSelected: option,
            secondSelected: option,
            dahanSelected: option,
            powersSelected: option,
            ritualsTerrorSelected: option,
            wardSelected: option,
            diversitySelected: option,
            despicableSelected: option,
            elementalSelected: option,
            greatRiverSelected: option,
            variedSelected: option
        };
        this.setState(newValues);
        this.updateStore(newValues);
    }

    goToResults() {
        const { navigate } = this.props.navigation;
        const { players,
            rampartSelected, wildfireSelected, lightningSelected, riverSelected, shadowSelected,
            thunderspeakerSelected, bringerSelected, keeperSelected, oceanSelected, serpentSelected,
            sharpSelected, vitalSelected, downpourSelected, finderSelected, fracturedSelected,
            grinningSelected, lureSelected, manyMindsSelected, shiftingSelected, shroudSelected,
            starlightSelected, stoneSelected, vengeanceSelected, volcanoSelected,

            brandenburgSelected, franceSelected, englandSelected, swedenSelected, hapsburgSelected, russiaSelected, scotlandSelected,

            blitzSelected, guardSelected, ritualsFlameSelected, secondSelected, dahanSelected,
            powersSelected, ritualsTerrorSelected, wardSelected, diversitySelected, despicableSelected,
            elementalSelected, greatRiverSelected, variedSelected
        } = this.state;

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
        if (downpourSelected) spirits.push('Downpour Drenches the World');
        if (finderSelected) spirits.push('Finder of Paths Unseen');
        if (fracturedSelected) spirits.push('Fractured Days Split the Sky');
        if (grinningSelected) spirits.push('Grinning Trickster Stirs Up Trouble');
        if (lureSelected) spirits.push('Lure of the Deep Wilderness');
        if (manyMindsSelected) spirits.push('Many Minds Move as One');
        if (shiftingSelected) spirits.push('Shifting Memory of Ages');
        if (shroudSelected) spirits.push('Shroud of Silent Mist');
        if (starlightSelected) spirits.push('Starlight Seeks Its Form');
        if (stoneSelected) spirits.push('Stone\'s Unyielding Defiance');
        if (vengeanceSelected) spirits.push('Vengeance as a Burning Plague');
        if (volcanoSelected) spirits.push('Volcano Looming High');

        let adversaries = [];
        if (brandenburgSelected) adversaries.push('Brandenburg-Prussia');
        if (franceSelected) adversaries.push('France (Plantation Colony)');
        if (englandSelected) adversaries.push('England');
        if (swedenSelected) adversaries.push('Sweden');
        if (hapsburgSelected) adversaries.push('Hapsburg Dynasty');
        if (russiaSelected) adversaries.push('Russia');
        if (scotlandSelected) adversaries.push('Scotland');

        let scenarios = [];
        if (blitzSelected) scenarios.push('Blitz');
        if (guardSelected) scenarios.push('Guard the Isle\'s Heart');
        if (ritualsFlameSelected) scenarios.push('Rituals of the Destroying Flame');
        if (secondSelected) scenarios.push('Second Wave');
        if (dahanSelected) scenarios.push('Dahan Insurrection');
        if (powersSelected) scenarios.push('Powers Long Forgotten');
        if (ritualsTerrorSelected) scenarios.push('Rituals of Terror');
        if (wardSelected) scenarios.push('Ward the Shores');
        if (diversitySelected) scenarios.push('A Diversity of Spirits');
        if (despicableSelected) scenarios.push('Despicable Theft');
        if (elementalSelected) scenarios.push('Elemental Invocation');
        if (greatRiverSelected) scenarios.push('The Great River');
        if (variedSelected) scenarios.push('Varied Terrains');

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
                                    { label: '4', value: 4 },
                                    { label: '5', value: 5 },
                                    { label: '6', value: 6 },
                                ]}
                                value={this.state.players - 1}
                                buttonColor={Colors.darkBrown}
                                onPress={value => this.updateSelection('players', value)}
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
                                    onClick={() => this.updateSelection('rampartSelected', !this.state.rampartSelected)}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextStyle={Styles.checkBoxText}
                                    rightText={'Lightning\'s Swift Strike'}
                                    isChecked={this.state.lightningSelected}
                                    onClick={() => this.updateSelection('lightningSelected', !this.state.lightningSelected)}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextStyle={Styles.checkBoxText}
                                    rightText={'River Surges in Sunlight'}
                                    isChecked={this.state.riverSelected}
                                    onClick={() => this.updateSelection('riverSelected', !this.state.riverSelected)}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextStyle={Styles.checkBoxText}
                                    rightText={'Thunderspeaker'}
                                    isChecked={this.state.thunderspeakerSelected}
                                    onClick={() => this.updateSelection('thunderspeakerSelected', !this.state.thunderspeakerSelected)}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextView={
                                        <Text style={Styles.checkBoxTextWithIcon}>
                                            {'Keeper of the Forbidden Wilds '}
                                            <Image style={IconStyles.BranchAndClaw} source={require('../Assets/Icons/BranchAndClawIcon.png')} />
                                        </Text>
                                    }
                                    isChecked={this.state.keeperSelected}
                                    onClick={() => this.updateSelection('keeperSelected', !this.state.keeperSelected)}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextView={
                                        <Text style={Styles.checkBoxTextWithIcon}>
                                            {'Heart of the\nWildfire '}
                                            <Image style={IconStyles.Promo} source={require('../Assets/Icons/PromoIcon.png')} />
                                            {' 1'}
                                        </Text>
                                    }
                                    isChecked={this.state.wildfireSelected}
                                    onClick={() => this.updateSelection('wildfireSelected', !this.state.wildfireSelected)}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextView={
                                        <Text style={Styles.checkBoxTextWithIcon}>
                                            {'Downpour Drenches the World '}
                                            <Image style={IconStyles.Promo} source={require('../Assets/Icons/PromoIcon.png')} />
                                            {' 2'}
                                        </Text>
                                    }
                                    isChecked={this.state.downpourSelected}
                                    onClick={() => this.updateSelection('downpourSelected', !this.state.downpourSelected)}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextView={
                                        <Text style={Styles.checkBoxTextWithIcon}>
                                            {'Fractured Days Split the Sky '}
                                            <Image style={IconStyles.JaggedEarth} source={require('../Assets/Icons/JaggedEarthIcon.png')} />
                                        </Text>
                                    }
                                    isChecked={this.state.fracturedSelected}
                                    onClick={() => this.updateSelection('fracturedSelected', !this.state.fracturedSelected)}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextView={
                                        <Text style={Styles.checkBoxTextWithIcon}>
                                            {'Lure of the Deep Wilderness '}
                                            <Image style={IconStyles.JaggedEarth} source={require('../Assets/Icons/JaggedEarthIcon.png')} />
                                        </Text>
                                    }
                                    isChecked={this.state.lureSelected}
                                    onClick={() => this.updateSelection('lureSelected', !this.state.lureSelected)}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextView={
                                        <Text style={Styles.checkBoxTextWithIcon}>
                                            {'Shifting Memory of Ages '}
                                            <Image style={IconStyles.JaggedEarth} source={require('../Assets/Icons/JaggedEarthIcon.png')} />
                                        </Text>
                                    }
                                    isChecked={this.state.shiftingSelected}
                                    onClick={() => this.updateSelection('shiftingSelected', !this.state.shiftingSelected)}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextView={
                                        <Text style={Styles.checkBoxTextWithIcon}>
                                            {'Starlight Seeks Its Form '}
                                            <Image style={IconStyles.JaggedEarth} source={require('../Assets/Icons/JaggedEarthIcon.png')} />
                                        </Text>
                                    }
                                    isChecked={this.state.starlightSelected}
                                    onClick={() => this.updateSelection('starlightSelected', !this.state.starlightSelected)}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextView={
                                        <Text style={Styles.checkBoxTextWithIcon}>
                                            {'Vengeance as a Burning Plague '}
                                            <Image style={IconStyles.JaggedEarth} source={require('../Assets/Icons/JaggedEarthIcon.png')} />
                                        </Text>
                                    }
                                    isChecked={this.state.vengeanceSelected}
                                    onClick={() => this.updateSelection('vengeanceSelected', !this.state.vengeanceSelected)}
                                />
                            </View>
                            <View style={Styles.selectorColumn}>
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextStyle={Styles.checkBoxText}
                                    rightText={'Bringer of Dreams and Nightmares'}
                                    isChecked={this.state.bringerSelected}
                                    onClick={() => this.updateSelection('bringerSelected', !this.state.bringerSelected)}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextStyle={Styles.checkBoxText}
                                    rightText={'Ocean\'s Hungry Grasp'}
                                    isChecked={this.state.oceanSelected}
                                    onClick={() => this.updateSelection('oceanSelected', !this.state.oceanSelected)}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextStyle={Styles.checkBoxText}
                                    rightText={'Shadows Flicker Like Flame'}
                                    isChecked={this.state.shadowSelected}
                                    onClick={() => this.updateSelection('shadowSelected', !this.state.shadowSelected)}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextStyle={Styles.checkBoxText}
                                    rightText={'Vital Strength of the Earth'}
                                    isChecked={this.state.vitalSelected}
                                    onClick={() => this.updateSelection('vitalSelected', !this.state.vitalSelected)}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextView={
                                        <Text style={Styles.checkBoxTextWithIcon}>
                                            {'Sharp Fangs Behind the Leaves '}
                                            <Image style={IconStyles.BranchAndClaw} source={require('../Assets/Icons/BranchAndClawIcon.png')} />
                                        </Text>
                                    }
                                    isChecked={this.state.sharpSelected}
                                    onClick={() => this.updateSelection('sharpSelected', !this.state.sharpSelected)}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextView={
                                        <Text style={[Styles.checkBoxTextWithIcon, { fontSize: responsiveFontSize(1.8) }]}>
                                            {'Serpent Slumbering Beneath the Island '}
                                            <Image style={IconStyles.Promo} source={require('../Assets/Icons/PromoIcon.png')} />
                                            {' 1'}
                                        </Text>
                                    }
                                    isChecked={this.state.serpentSelected}
                                    onClick={() => this.updateSelection('serpentSelected', !this.state.serpentSelected)}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextView={
                                        <Text style={Styles.checkBoxTextWithIcon}>
                                            {'Finder of Paths Unseen '}
                                            <Image style={IconStyles.Promo} source={require('../Assets/Icons/PromoIcon.png')} />
                                            {' 2'}
                                        </Text>
                                    }
                                    isChecked={this.state.finderSelected}
                                    onClick={() => this.updateSelection('finderSelected', !this.state.finderSelected)}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextView={
                                        <Text style={Styles.checkBoxTextWithIcon}>
                                            {'Grinning Trickster Stirs Up Trouble '}
                                            <Image style={IconStyles.JaggedEarth} source={require('../Assets/Icons/JaggedEarthIcon.png')} />
                                        </Text>
                                    }
                                    isChecked={this.state.grinningSelected}
                                    onClick={() => this.updateSelection('grinningSelected', !this.state.grinningSelected)}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextView={
                                        <Text style={Styles.checkBoxTextWithIcon}>
                                            {'Many Minds Move as One '}
                                            <Image style={IconStyles.JaggedEarth} source={require('../Assets/Icons/JaggedEarthIcon.png')} />
                                        </Text>
                                    }
                                    isChecked={this.state.manyMindsSelected}
                                    onClick={() => this.updateSelection('manyMindsSelected', !this.state.manyMindsSelected)}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextView={
                                        <Text style={Styles.checkBoxTextWithIcon}>
                                            {'Shroud of\nSilent Mist '}
                                            <Image style={IconStyles.JaggedEarth} source={require('../Assets/Icons/JaggedEarthIcon.png')} />
                                        </Text>
                                    }
                                    isChecked={this.state.shroudSelected}
                                    onClick={() => this.updateSelection('shroudSelected', !this.state.shroudSelected)}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextView={
                                        <Text style={Styles.checkBoxTextWithIcon}>
                                            {'Stone\'s Unyielding Defiance '}
                                            <Image style={IconStyles.JaggedEarth} source={require('../Assets/Icons/JaggedEarthIcon.png')} />
                                        </Text>
                                    }
                                    isChecked={this.state.stoneSelected}
                                    onClick={() => this.updateSelection('stoneSelected', !this.state.stoneSelected)}
                                />

                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextView={
                                        <Text style={Styles.checkBoxTextWithIcon}>
                                            {'Volcano Looming High '}
                                            <Image style={IconStyles.JaggedEarth} source={require('../Assets/Icons/JaggedEarthIcon.png')} />
                                        </Text>
                                    }
                                    isChecked={this.state.volcanoSelected}
                                    onClick={() => this.updateSelection('volcanoSelected', !this.state.volcanoSelected)}
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
                                    onClick={() => this.updateSelection('brandenburgSelected', !this.state.brandenburgSelected)}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextStyle={Styles.checkBoxText}
                                    rightText={'Sweden'}
                                    isChecked={this.state.swedenSelected}
                                    onClick={() => this.updateSelection('swedenSelected', !this.state.swedenSelected)}
                                />

                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextView={
                                        <Text style={Styles.checkBoxTextWithIcon}>
                                            {'Hapsburg\nDynasty '}
                                            <Image style={IconStyles.JaggedEarth} source={require('../Assets/Icons/JaggedEarthIcon.png')} />
                                        </Text>
                                    }
                                    isChecked={this.state.hapsburgSelected}
                                    onClick={() => this.updateSelection('hapsburgSelected', !this.state.hapsburgSelected)}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextView={
                                        <Text style={Styles.checkBoxTextWithIcon}>
                                            {'Scotland '}
                                            <Image style={IconStyles.JaggedEarth} source={require('../Assets/Icons/JaggedEarthIcon.png')} />
                                        </Text>
                                    }
                                    isChecked={this.state.scotlandSelected}
                                    onClick={() => this.updateSelection('scotlandSelected', !this.state.scotlandSelected)}
                                />
                            </View>
                            <View style={Styles.selectorColumn}>
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextStyle={Styles.checkBoxText}
                                    rightText={'England'}
                                    isChecked={this.state.englandSelected}
                                    onClick={() => this.updateSelection('englandSelected', !this.state.englandSelected)}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextView={
                                        <Text style={Styles.checkBoxTextWithIcon}>
                                            {'France (Plantation Colony) '}
                                            <Image style={IconStyles.BranchAndClaw} source={require('../Assets/Icons/BranchAndClawIcon.png')} />
                                        </Text>
                                    }
                                    isChecked={this.state.franceSelected}
                                    onClick={() => this.updateSelection('franceSelected', !this.state.franceSelected)}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextView={
                                        <Text style={Styles.checkBoxTextWithIcon}>
                                            {'Russia '}
                                            <Image style={IconStyles.JaggedEarth} source={require('../Assets/Icons/JaggedEarthIcon.png')} />
                                        </Text>
                                    }
                                    isChecked={this.state.russiaSelected}
                                    onClick={() => this.updateSelection('russiaSelected', !this.state.russiaSelected)}
                                />
                                <View style={Styles.checkBoxPlaceholder} />
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
                                    onClick={() => this.updateSelection('blitzSelected', !this.state.blitzSelected)}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextStyle={Styles.checkBoxText}
                                    rightText={'Guard the Isle\'s Heart'}
                                    isChecked={this.state.guardSelected}
                                    onClick={() => this.updateSelection('guardSelected', !this.state.guardSelected)}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextView={
                                        <Text style={Styles.checkBoxTextWithIcon}>
                                            {'Powers Long Forgotten '}
                                            <Image style={IconStyles.BranchAndClaw} source={require('../Assets/Icons/BranchAndClawIcon.png')} />
                                        </Text>
                                    }
                                    isChecked={this.state.powersSelected}
                                    onClick={() => this.updateSelection('powersSelected', !this.state.powersSelected)}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextView={
                                        <Text style={Styles.checkBoxTextWithIcon}>
                                            {'Second Wave '}
                                            <Image style={IconStyles.BranchAndClaw} source={require('../Assets/Icons/BranchAndClawIcon.png')} />
                                        </Text>
                                    }
                                    isChecked={this.state.secondSelected}
                                    onClick={() => this.updateSelection('secondSelected', !this.state.secondSelected)}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextView={
                                        <Text style={Styles.checkBoxTextWithIcon}>
                                            {'A Diversity\nin Spirits '}
                                            <Image style={IconStyles.JaggedEarth} source={require('../Assets/Icons/JaggedEarthIcon.png')} />
                                        </Text>
                                    }
                                    isChecked={this.state.diversitySelected}
                                    onClick={() => this.updateSelection('diversitySelected', !this.state.diversitySelected)}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextView={
                                        <Text style={Styles.checkBoxTextWithIcon}>
                                            {'Elemental\nInvocation '}
                                            <Image style={IconStyles.JaggedEarth} source={require('../Assets/Icons/JaggedEarthIcon.png')} />
                                        </Text>
                                    }
                                    isChecked={this.state.elementalSelected}
                                    onClick={() => this.updateSelection('elementalSelected', !this.state.elementalSelected)}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextView={
                                        <Text style={Styles.checkBoxTextWithIcon}>
                                            {'Varied Terrains '}
                                            <Image style={IconStyles.JaggedEarth} source={require('../Assets/Icons/JaggedEarthIcon.png')} />
                                        </Text>
                                    }
                                    isChecked={this.state.variedSelected}
                                    onClick={() => this.updateSelection('variedSelected', !this.state.variedSelected)}
                                />
                            </View>
                            <View style={Styles.selectorColumn}>
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextStyle={Styles.checkBoxText}
                                    rightText={'Dahan Insurrection'}
                                    isChecked={this.state.dahanSelected}
                                    onClick={() => this.updateSelection('dahanSelected', !this.state.dahanSelected)}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextStyle={Styles.checkBoxText}
                                    rightText={'Rituals of Terror'}
                                    isChecked={this.state.ritualsTerrorSelected}
                                    onClick={() => this.updateSelection('ritualsTerrorSelected', !this.state.ritualsTerrorSelected)}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextStyle={Styles.checkBoxText}
                                    rightTextView={
                                        <Text style={Styles.checkBoxTextWithIcon}>
                                            {'Rituals of the Destroying Flame '}
                                            <Image style={IconStyles.BranchAndClaw} source={require('../Assets/Icons/BranchAndClawIcon.png')} />
                                        </Text>
                                    }
                                    isChecked={this.state.ritualsFlameSelected}
                                    onClick={() => this.updateSelection('ritualsFlameSelected', !this.state.ritualsFlameSelected)}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextStyle={Styles.checkBoxText}
                                    rightTextView={
                                        <Text style={Styles.checkBoxTextWithIcon}>
                                            {'Ward the Shores '}
                                            <Image style={IconStyles.BranchAndClaw} source={require('../Assets/Icons/BranchAndClawIcon.png')} />
                                        </Text>
                                    }
                                    isChecked={this.state.wardSelected}
                                    onClick={() => this.updateSelection('wardSelected', !this.state.wardSelected)}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextView={
                                        <Text style={Styles.checkBoxTextWithIcon}>
                                            {'Despicable Theft '}
                                            <Image style={IconStyles.JaggedEarth} source={require('../Assets/Icons/JaggedEarthIcon.png')} />
                                        </Text>
                                    }
                                    isChecked={this.state.despicableSelected}
                                    onClick={() => this.updateSelection('despicableSelected', !this.state.despicableSelected)}
                                />
                                <CheckBox
                                    style={Styles.checkBox}
                                    rightTextView={
                                        <Text style={Styles.checkBoxTextWithIcon}>
                                            {'The Great River '}
                                            <Image style={IconStyles.JaggedEarth} source={require('../Assets/Icons/JaggedEarthIcon.png')} />
                                        </Text>
                                    }
                                    isChecked={this.state.greatRiverSelected}
                                    onClick={() => this.updateSelection('greatRiverSelected', !this.state.greatRiverSelected)}
                                />
                                <View style={Styles.checkBoxPlaceholder} />
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