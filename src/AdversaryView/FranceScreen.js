import React, { Component } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import FullWidthImage from 'react-native-fullwidth-image'

import { AdversaryStyles as Styles } from './AdversaryStyles';
import { IconStyles } from '../common/IconStyles';
import Header from '../common/Header';
import Colors from '../constants/colors';
import Divider from '../common/Divider';

const fearCards = {
    0: '9 (3/3/3)',
    1: '9 (3/3/3)',
    2: '10 (3/4/3)',
    3: '11 (4/4/3)',
    4: '12 (4/4/4)',
    5: '13 (4/5/4)',
    6: '14 (4/5/5)'
}

class FranceScreen extends Component {
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
                <Header title={'France'} navigation={navigation} navStyle={'back'} />
                <ScrollView style={Styles.scrollContainer} ref={this.scrollView}>
                    <FullWidthImage source={require('../Assets/France_Map.png')} width={600} height={408} />
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
                                <Text style={Styles.sectionTextBold}>{'Sprawling Plantations: '}</Text>
                                {'Before Setup, return all but 7 '}
                                <Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
                                {' per player ot the box. Invaders win if you ever cannot place a '}
                                <Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
                                {'.'}
                            </Text>
                            <Divider />
                            <Text style={Styles.sectionTextBold}>
                                {'Stage II Escalation '}
                                <Image resizeMode='cover' style={IconStyles.Escalation} source={require('../Assets/Icons/Escalation.png')} />
                            </Text>
                            <Text style={Styles.sectionText}>
                                <Text style={Styles.sectionTextBold}>{'Demand for New Cash Crops: '}</Text>
                                {'After Exploring, on each board, pick a land of the shown terrain. If it has '}
                                <Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
                                {' / '}
                                <Image resizeMode='cover' style={IconStyles.City} source={require('../Assets/Icons/CityIcon.png')} />
                                {' add 1 '}
                                <Image resizeMode='cover' style={IconStyles.Blight} source={require('../Assets/Icons/BlightIcon.png')} />
                                {'. Otherwise, add 1 '}
                                <Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
                                {'.'}
                            </Text>
                            <Divider />
                            <Text style={Styles.sectionText}>
                                <Text style={Styles.sectionTextBold}>{'Fear Cards: '}</Text>
                                {fearCards[difficulty]}
                            </Text>
                            <Divider />
                            <Text style={Styles.sectionTextBold}>{'Setup Changes: '}</Text>
                            {
                                difficulty <= 1 && <Text style={Styles.sectionText}>{'No changes.'}</Text>
                            }
                            {
                                difficulty >= 2 &&
                                <Text style={Styles.sectionText}>
                                    <Text style={Styles.sectionTextBold}>{'(2) Slave Labor: '}</Text>
                                    {'During Setup, put the "Slave Rebellion" event under the top 3 cards of the Event Deck.'}
                                </Text>
                            }
                            {
                                difficulty >= 3 &&
                                <Text style={Styles.sectionText}>
                                    <Text style={Styles.sectionTextBold}>{'(3) Early Plantations: '}</Text>
                                    {'During Setup on each board, add 1 '}
                                    <Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
                                    {' to the highest-numbered land without '}
                                    <Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
                                    {'. Add 1 '}
                                    <Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
                                    {' to land #1.'}
                                </Text>
                            }
                            <Divider />
                            <Text style={Styles.sectionTextBold}>{'Game Changes: '}</Text>
                            {
                                difficulty === 0 && <Text style={Styles.sectionText}>{'No changes.'}</Text>
                            }
                            {
                                difficulty >= 1 &&
                                <Text style={Styles.sectionText}>
                                    <Text style={Styles.sectionTextBold}>{'(1) Frontier Explorers: '}</Text>
                                    {'After Setup, when Invaders successfully Explore into a land without '}
                                    <Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
                                    {' / '}
                                    <Image resizeMode='cover' style={IconStyles.City} source={require('../Assets/Icons/CityIcon.png')} />
                                    {', add another '}
                                    <Image resizeMode='cover' style={IconStyles.Explorer} source={require('../Assets/Icons/ExplorerIcon.png')} />
                                    {'.'}
                                </Text>
                            }
                            {
                                difficulty >= 2 &&
                                <Text style={Styles.sectionText}>
                                    <Text style={Styles.sectionTextBold}>{'(2) Slave Labor: '}</Text>
                                    {'After Invaders Build in a land with 2 '}
                                    <Image resizeMode='cover' style={IconStyles.Explorer} source={require('../Assets/Icons/ExplorerIcon.png')} />
                                    {' or more, replace all but 1 '}
                                    <Image resizeMode='cover' style={IconStyles.Explorer} source={require('../Assets/Icons/ExplorerIcon.png')} />
                                    {' there with an equal number of '}
                                    <Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
                                    {'.'}
                                </Text>
                            }
                            {
                                difficulty >= 4 &&
                                <Text style={Styles.sectionText}>
                                    <Text style={Styles.sectionTextBold}>{'(4) Triangle Trade: '}</Text>
                                    {'Whenever Invaders build a Coastal '}
                                    <Image resizeMode='cover' style={IconStyles.City} source={require('../Assets/Icons/CityIcon.png')} />
                                    {', add 1 '}
                                    <Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
                                    {' to the adjacent land with the fewest '}
                                    <Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
                                    {'.'}
                                </Text>
                            }
                            {
                                difficulty >= 5 &&
                                <Text style={Styles.sectionText}>
                                    <Text style={Styles.sectionTextBold}>{'(5) Slow-healing Ecosystem: '}</Text>
                                    {'When you remove '}
                                    <Image resizeMode='cover' style={IconStyles.Blight} source={require('../Assets/Icons/BlightIcon.png')} />
                                    {' from the board, put it here instead of onto the Blight Card. As soon as you have 3 '}
                                    <Image resizeMode='cover' style={IconStyles.Blight} source={require('../Assets/Icons/BlightIcon.png')} />
                                    {' per player here, move it all back to the Blight Card.'}
                                </Text>
                            }
                            {
                                difficulty === 6 &&
                                <Text style={Styles.sectionText}>
                                    <Text style={Styles.sectionTextBold}>{'(6) Persistent Explorers: '}</Text>
                                    {'After the normal Explore Phase, on each board add 1 '}
                                    <Image resizeMode='cover' style={IconStyles.Explorer} source={require('../Assets/Icons/ExplorerIcon.png')} />
                                    {' to a land without any. Fear Card effects never remove '}
                                    <Image resizeMode='cover' style={IconStyles.Explorer} source={require('../Assets/Icons/ExplorerIcon.png')} />
                                    {'. If one would, you may instead Push that '}
                                    <Image resizeMode='cover' style={IconStyles.Explorer} source={require('../Assets/Icons/ExplorerIcon.png')} />
                                    {'.'}
                                </Text>
                            }
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default FranceScreen;