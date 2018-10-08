import React, { Component } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import FullWidthImage from 'react-native-fullwidth-image'

import { AdversaryStyles as Styles } from './AdversaryStyles';
import { IconStyles } from '../common/IconStyles';
import Header from '../common/Header';
import Colors from '../constants/colors';

const fearCards = {
    1: '10 (3/4/3)',
    2: '11 (4/4/3)',
    3: '13 (4/5/4)',
    4: '14 (4/5/5)',
    5: '14 (4/5/5)',
    6: '13 (4/5/4)'
}

class EnglandScreen extends Component {
    constructor(props) {
        super(props);

        this.scrollView = React.createRef();

        this.state = {
            difficulty: 1
        }
    }
    render() {
        let { navigation } = this.props;
        let { difficulty } = this.state;

        return (
            <View style={Styles.container} >
                <Header title={'England'} navigation={navigation} navStyle={'back'} />
                <ScrollView style={Styles.scrollContainer} ref={this.scrollView}>
                    <FullWidthImage source={require('./assets/England_Map.png')} width={600} height={408} />
                    <View style={Styles.contentContainer}>
                        <View style={Styles.sectionSpacer} />
                        <Text style={Styles.sectionTextBold}>{'Difficulty'}</Text>
                        <View style={Styles.selectorContainer}>
                            <SwitchSelector
                                height={35}
                                textColor='gray'
                                options={[
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
                                <Text style={Styles.sectionTextBold}>{'Proud & Mighty Capital: '}</Text>
                                {'If 7 or more '}
                                <Image resizeMode='cover' style={IconStyles.Town} source={require('./assets/icons/TownIcon.png')} />
                                {' / '}
                                <Image resizeMode='cover' style={IconStyles.City} source={require('./assets/icons/CityIcon.png')} />
                                {' are ever in a single land, the Invaders win.'}
                            </Text>
                            <Text style={Styles.sectionTextBold}>
                                {'Stage II Escalation '}
                                <Image resizeMode='cover' style={IconStyles.Escalation} source={require('./assets/icons/Escalation.png')} />
                            </Text>
                            <Text style={Styles.sectionText}>
                                <Text style={Styles.sectionTextBold}>{'Building Boom: '}</Text>
                                {'On each board with '}
                                <Image resizeMode='cover' style={IconStyles.Town} source={require('./assets/icons/TownIcon.png')} />
                                {' / '}
                                <Image resizeMode='cover' style={IconStyles.City} source={require('./assets/icons/CityIcon.png')} />
                                {' , Build in the land with the most '}
                                <Image resizeMode='cover' style={IconStyles.Town} source={require('./assets/icons/TownIcon.png')} />
                                {' / '}
                                <Image resizeMode='cover' style={IconStyles.City} source={require('./assets/icons/CityIcon.png')} />
                                {'.'}
                            </Text>
                            <View style={Styles.sectionSpacer} />
                            <Text style={Styles.sectionText}>
                                <Text style={Styles.sectionTextBold}>{'Fear Cards: '}</Text>
                                {fearCards[difficulty]}
                            </Text>
                            <View style={Styles.sectionSpacer} />
                            <Text style={Styles.sectionTextBold}>{'Setup Changes: '}</Text>
                            {
                                difficulty == 1 && <Text style={Styles.sectionText}>{'No changes.'}</Text>
                            }
                            {
                                difficulty >= 2 &&
                                <Text style={Styles.sectionText}>
                                    <Text style={Styles.sectionTextBold}>{'(2) Criminals and Malcontents: '}</Text>
                                    {'During Setup, on each board add 1 '}
                                    <Image resizeMode='cover' style={IconStyles.City} source={require('./assets/icons/CityIcon.png')} />
                                    {' to land #1 and 1 '}
                                    <Image resizeMode='cover' style={IconStyles.Town} source={require('./assets/icons/TownIcon.png')} />
                                    {' to land #2.'}
                                </Text>
                            }
                            {
                                difficulty === 6 &&
                                <Text style={Styles.sectionText}>
                                    <Text style={Styles.sectionTextBold}>{'(6) Independent Resolve: '}</Text>
                                    {'During Setup, add an additional '}
                                    <Image resizeMode='cover' style={IconStyles.Fear} source={require('./assets/icons/FearIcon.png')} />
                                    {' to the Fear Pool per player in the game. During any Invader Phase where you resolve no Fear Cards,'}
                                    {' preform the Build from High Immigration twice. (This has no effect if no card is on the extra Build slot.)'}
                                </Text>
                            }
                            <View style={Styles.sectionSpacer} />
                            <Text style={Styles.sectionTextBold}>{'Game Changes: '}</Text>
                            {
                                difficulty >= 1 &&
                                <Text style={Styles.sectionText}>
                                    <Text style={Styles.sectionTextBold}>{'(1) Indentured Servants Earn Land: '}</Text>
                                    {'Invader Build actions affect lands without Invaders, if they are adjacent to at least 2 '}
                                    <Image resizeMode='cover' style={IconStyles.Town} source={require('./assets/icons/TownIcon.png')} />
                                    {' / '}
                                    <Image resizeMode='cover' style={IconStyles.City} source={require('./assets/icons/CityIcon.png')} />
                                    {' before the Build Action.'}
                                </Text>
                            }
                            {
                                difficulty >= 3 &&
                                <Text style={Styles.sectionText}>
                                    {
                                        difficulty == 3 ?
                                            <Text style={Styles.sectionTextBold}>{'(3) High Immigration (I): '}</Text>
                                            : <Text style={Styles.sectionTextBold}>{'(3+4) High Immigration (full): '}</Text>
                                    }
                                    {'Put the "High Immigration" tile on the Invader board, to the left of "Ravage". '}
                                    {'The Invaders take this Build action each Invader phase before Ravaging. Cards slide left from Ravage to it, and from it to the discard pile. '}
                                    {
                                        difficulty == 3 ?
                                            'Remove the tile when a Stage II card slides onto it, putting that card in the discard.'
                                            : 'The extra Build tile remains out the entire game.'
                                    }
                                </Text>
                            }
                            {
                                difficulty >= 5 &&
                                <Text style={Styles.sectionText}>
                                    <Text style={Styles.sectionTextBold}>{'(5) Local Autonomy: '}</Text>
                                    <Image resizeMode='cover' style={IconStyles.Town} source={require('./assets/icons/TownIcon.png')} />
                                    {' / '}
                                    <Image resizeMode='cover' style={IconStyles.City} source={require('./assets/icons/CityIcon.png')} />
                                    {' have +1 Health.'}
                                </Text>
                            }
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default EnglandScreen;