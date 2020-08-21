import React, { Component } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';

import { AdversaryStyles as Styles } from './AdversaryStyles';
import { IconStyles } from '../common/IconStyles';
import Header from '../common/Header';
import Colors from '../constants/colors';
import Divider from '../common/Divider';

const fearCards = {
    0: '9 (3/3/3)',
    1: '10 (3/3/4)',
    2: '11 (4/3/4)',
    3: '11 (4/4/3)',
    4: '12 (4/4/4)',
    5: '13 (4/5/4)',
    6: '14 (5/5/4)'
}

class RussiaScreen extends Component {
    constructor(props) {
        super(props);

        this.scrollView = React.createRef();

        this.state = {
            difficulty: 0
        }
    }
    render() {
        let { navigation } = this.props;
        let { difficulty } = this.state;

        return (
            <View style={Styles.container} >
                <Header title={'Russia'} navigation={navigation} navStyle={'back'} />
                <ScrollView style={Styles.scrollContainer} ref={this.scrollView}>
                    <View style={Styles.contentContainer}>
                        <View style={Styles.sectionSpacer} />
                        <Text style={Styles.sectionTextBold}>{'Difficulty'}</Text>
                        <View style={Styles.selectorContainer}>
                            <SwitchSelector
                                height={35}
                                textColor='gray'
                                options={[
                                    { label: '0', value: 0 },
                                    { label: '1', value: 1 },
                                    { label: '2', value: 2 },
                                    { label: '3', value: 3 },
                                    { label: '4', value: 4 },
                                    { label: '5', value: 5 },
                                    { label: '6', value: 6 }
                                ]}
                                initial={0}
                                buttonColor={Colors.darkBrown}
                                onPress={value => this.setState({ difficulty: value })}
                            />
                        </View>
                        <View style={Styles.textContainer}>
                            <Text style={Styles.sectionTextBold}>{'Additional Loss Condition'}</Text>
                            <Text style={Styles.sectionText}>
                                <Text style={Styles.sectionTextBold}>{'Hunters Swarm the Island: '}</Text>
                                {'Put '}
                                <Image resizeMode='cover' style={IconStyles.Beast} source={require('../Assets/Icons/BeastIcon.png')} />
                                {' Destroyed by Adversary rules on this panel. If there are ever more '}
                                <Image resizeMode='cover' style={IconStyles.Beast} source={require('../Assets/Icons/BeastIcon.png')} />
                                {' on this panel than on the island, the Invaders win. '}
                            </Text>
                            <Divider />
                            <Text style={Styles.sectionTextBold}>
                                {'Stage II Escalation '}
                                <Image resizeMode='cover' style={IconStyles.Escalation} source={require('../Assets/Icons/Escalation.png')} />
                            </Text>
                            <Text style={Styles.sectionText}>
                                <Text style={Styles.sectionTextBold}>{'Stalk the Predators: '}</Text>
                                {'On each board: Add 2 '}
                                <Image resizeMode='cover' style={IconStyles.Explorer} source={require('../Assets/Icons/ExplorerIcon.png')} />
                                {' (total) among lands with '}
                                <Image resizeMode='cover' style={IconStyles.Beast} source={require('../Assets/Icons/BeastIcon.png')} />
                                {' If you can\'t, instead add 2 '}
                                <Image resizeMode='cover' style={IconStyles.Explorer} source={require('../Assets/Icons/ExplorerIcon.png')} />
                                {' among lands with '}
                                <Image resizeMode='cover' style={IconStyles.Beast} source={require('../Assets/Icons/BeastIcon.png')} />
                                {' on a different board.'}
                            </Text>
                            <Divider />
                            <Text style={Styles.sectionText}>
                                <Text style={Styles.sectionTextBold}>{'Fear Cards: '}</Text>
                                {fearCards[difficulty]}
                            </Text>
                            <Divider />
                            <Text style={Styles.sectionTextBold}>{'Setup Changes: '}</Text>
                            {
                                difficulty === 0 && <Text style={Styles.sectionText}>{'No changes.'}</Text>
                            }
                            {
                                difficulty >= 1 &&
                                <Text style={Styles.sectionText}>
                                    <Text style={Styles.sectionTextBold}>{'(1) Hunters Bring Home Shell and Hide: '}</Text>
                                    {'On each board, add 1 '}
                                    <Image resizeMode='cover' style={IconStyles.Beast} source={require('../Assets/Icons/BeastIcon.png')} />
                                    {' and 1 '}
                                    <Image resizeMode='cover' style={IconStyles.Explorer} source={require('../Assets/Icons/ExplorerIcon.png')} />
                                    {' to the highest-numbered land without '}
                                    <Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
                                    {' / '}
                                    <Image resizeMode='cover' style={IconStyles.City} source={require('../Assets/Icons/CityIcon.png')} />
                                    {'. During Play, '}
                                    <Image resizeMode='cover' style={IconStyles.Explorer} source={require('../Assets/Icons/ExplorerIcon.png')} />
                                    {' do +1 Damage. When Ravage adds '}
                                    <Image resizeMode='cover' style={IconStyles.Blight} source={require('../Assets/Icons/BlightIcon.png')} />
                                    {' to a land (including cascades), Destroy 1 '}
                                    <Image resizeMode='cover' style={IconStyles.Beast} source={require('../Assets/Icons/BeastIcon.png')} />
                                    {' in that land.'}
                                </Text>
                            }
                            {
                                difficulty >= 4 &&
                                <Text style={Styles.sectionText}>
                                    <Text style={Styles.sectionTextBold}>{'(4) Accelerated Exploitation: '}</Text>
                                    {'When making the Invader Deck, put 1 Stage III Card after each Stage II Card. (New Deck Order: 111-2-3-2-3-2-3-2-33)'}
                                </Text>
                            }
                            {
                                difficulty >= 5 &&
                                <Text style={Styles.sectionText}>
                                    <Text style={Styles.sectionTextBold}>{'(5) Entrench in the Face of Fear: '}</Text>
                                    {'Put an unused Stage II Invader Card under the top 3 Fear Cards, and an unused Stage III Card under the top 7 Fear Cards. When one is revealed, immediately place it in the Build space (face-up).'}
                                </Text>
                            }
                            <View style={Styles.sectionSpacer} />
                            <Divider />
                            <Text style={Styles.sectionTextBold}>{'Game Changes: '}</Text>
                            {
                                difficulty <= 1 && <Text style={Styles.sectionText}>{'No changes.'}</Text>
                            }
                            {
                                difficulty >= 2 &&
                                <Text style={Styles.sectionText}>
                                    <Text style={Styles.sectionTextBold}>{'(2) A Sense for Impending Disaster: '}</Text>
                                    {'The first time each Action would Destroy '}
                                    <Image resizeMode='cover' style={IconStyles.Explorer} source={require('../Assets/Icons/ExplorerIcon.png')} />
                                    {': If possible, 1 of those '}
                                    <Image resizeMode='cover' style={IconStyles.Explorer} source={require('../Assets/Icons/ExplorerIcon.png')} />
                                    {' is instead Pushed; 1 '}
                                    <Image resizeMode='cover' style={IconStyles.Fear} source={require('../Assets/Icons/FearIcon.png')} />
                                    {' when you do so.'}
                                </Text>
                            }
                            {
                                difficulty >= 3 &&
                                <Text style={Styles.sectionText}>
                                    <Text style={Styles.sectionTextBold}>{'(3) Competition Among Hunters: '}</Text>
                                    {'Ravage Cards also match lands with 3 or more '}
                                    <Image resizeMode='cover' style={IconStyles.Explorer} source={require('../Assets/Icons/ExplorerIcon.png')} />
                                    {'. (If the land already matched the Ravage Card, it still Ravages just once.)'}
                                </Text>
                            }
                            {
                                difficulty >= 6 &&
                                <Text style={Styles.sectionText}>
                                    <Text style={Styles.sectionTextBold}>{'(6) Pressure for Fast Profit: '}</Text>
                                    {'After the Ravage Step of turn 2+, on each board where it added no '}
                                    <Image resizeMode='cover' style={IconStyles.Blight} source={require('../Assets/Icons/BlightIcon.png')} />
                                    {': In the land with the most '}
                                    <Image resizeMode='cover' style={IconStyles.Explorer} source={require('../Assets/Icons/ExplorerIcon.png')} />
                                    {' (min. 1), add 1 '}
                                    <Image resizeMode='cover' style={IconStyles.Explorer} source={require('../Assets/Icons/ExplorerIcon.png')} />
                                    {' and 1 '}
                                    <Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
                                    {'. '}
                                </Text>
                            }
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default RussiaScreen;