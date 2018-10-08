import React, { Component } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import FullWidthImage from 'react-native-fullwidth-image'

import { AdversaryStyles as Styles } from './AdversaryStyles';
import { IconStyles } from '../common/IconStyles';
import Header from '../common/Header';
import Colors from '../constants/colors';

const fearCards = {
    1: '9 (3/3/3)',
    2: '10 (3/4/3)',
    3: '10 (4/4/3)',
    4: '11 (4/4/3)',
    5: '12 (4/4/4)',
    6: '13 (4/5/4)'
}

class SwedenScreen extends Component {
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
                <Header title={'Sweden'} navigation={navigation} navStyle={'back'} />
                <ScrollView style={Styles.scrollContainer} ref={this.scrollView}>
                    <FullWidthImage source={require('./assets/Sweden_Map.png')} width={600} height={408} />
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
                                <Text style={Styles.sectionTextBold}>{'Sprawling Plantations: '}</Text>
                                {'None'}
                            </Text>
                            <Text style={Styles.sectionTextBold}>
                                {'Stage II Escalation '}
                                <Image resizeMode='cover' style={IconStyles.Escalation} source={require('./assets/icons/Escalation.png')} />
                            </Text>
                            <Text style={Styles.sectionText}>
                                <Text style={Styles.sectionTextBold}>{'Swayed by the Invaders: '}</Text>
                                {'After Invaders Explore into each land this Phase, if that land has at least as many Invaders as '}
                                <Image resizeMode='cover' style={IconStyles.Dahan} source={require('./assets/icons/DahanIcon.png')} />
                                {' , replace 1 '}
                                <Image resizeMode='cover' style={IconStyles.Dahan} source={require('./assets/icons/DahanIcon.png')} />
                                {'with 1 '}
                                <Image resizeMode='cover' style={IconStyles.Town} source={require('./assets/icons/TownIcon.png')} />
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
                                    <Text style={Styles.sectionTextBold}>{'(2) Population Pressure at Home: '}</Text>
                                    {'During Setup, on each board add 1 '}
                                    <Image resizeMode='cover' style={IconStyles.City} source={require('./assets/icons/CityIcon.png')} />
                                    {' to land #4. On boards where land #4 starts with '}
                                    <Image resizeMode='cover' style={IconStyles.Blight} source={require('./assets/icons/BlightIcon.png')} />
                                    {' , put that '}
                                    <Image resizeMode='cover' style={IconStyles.Blight} source={require('./assets/icons/BlightIcon.png')} />
                                    {' in land #5 instead.'}
                                </Text>
                            }
                            {
                                difficulty >= 4 &&
                                <Text style={Styles.sectionText}>
                                    <Text style={Styles.sectionTextBold}>{'(4) Royal Backing: '}</Text>
                                    {'During Setup, after adding all other Invaders, discard the top card of the Invader Deck. On each board, add 1 '}
                                    <Image resizeMode='cover' style={IconStyles.Town} source={require('./assets/icons/TownIcon.png')} />
                                    {' to the land of that terrain with the fewest Invaders.'}
                                </Text>
                            }
                            {
                                difficulty >= 6 &&
                                <Text style={Styles.sectionText}>
                                    <Text style={Styles.sectionTextBold}>{'(6) Prospecting Outpost: '}</Text>
                                    {'During setup, on each board add 1 '}
                                    <Image resizeMode='cover' style={IconStyles.Town} source={require('./assets/icons/TownIcon.png')} />
                                    {' and 1 '}
                                    <Image resizeMode='cover' style={IconStyles.Blight} source={require('./assets/icons/BlightIcon.png')} />
                                    {' to land #8. The '}
                                    <Image resizeMode='cover' style={IconStyles.Blight} source={require('./assets/icons/BlightIcon.png')} />
                                    {' comes from the box, not the Blight Card.'}
                                </Text>
                            }
                            <View style={Styles.sectionSpacer} />
                            <Text style={Styles.sectionTextBold}>{'Game Changes: '}</Text>
                            {
                                difficulty >= 1 &&
                                <Text style={Styles.sectionText}>
                                    <Text style={Styles.sectionTextBold}>{'(1) Heavy Mining: '}</Text>
                                    {'If the Invaders do at least 6 Damage to the land during Ravage, add an extra '}
                                    <Image resizeMode='cover' style={IconStyles.Blight} source={require('./assets/icons/BlightIcon.png')} />
                                    {' . The additional '}
                                    <Image resizeMode='cover' style={IconStyles.Blight} source={require('./assets/icons/BlightIcon.png')} />
                                    {' does not destroy '}
                                    <Image resizeMode='cover' style={IconStyles.Presence} source={require('./assets/icons/PresenceIcon.png')} />
                                    {' or cause cascades.'}
                                </Text>
                            }
                            {
                                difficulty >= 3 &&
                                <Text style={Styles.sectionText}>
                                    <Text style={Styles.sectionTextBold}>{'(3) Fine Steel for Tools and Guns: '}</Text>
                                    <Image resizeMode='cover' style={IconStyles.Town} source={require('./assets/icons/TownIcon.png')} />
                                    {' deal 3 Damage. '}
                                    <Image resizeMode='cover' style={IconStyles.City} source={require('./assets/icons/CityIcon.png')} />
                                    {' deal 5 damage.'}
                                </Text>
                            }
                            {
                                difficulty >= 5 &&
                                <Text style={Styles.sectionText}>
                                    <Text style={Styles.sectionTextBold}>{'(5) Mining Rush: '}</Text>
                                    {'When Ravaging adds at least 1 '}
                                    <Image resizeMode='cover' style={IconStyles.Blight} source={require('./assets/icons/BlightIcon.png')} />
                                    {' to a land, also add 1 '}
                                    <Image resizeMode='cover' style={IconStyles.Town} source={require('./assets/icons/TownIcon.png')} />
                                    {' to an adjacent land without '}
                                    <Image resizeMode='cover' style={IconStyles.Town} source={require('./assets/icons/TownIcon.png')} />
                                    {' / '}
                                    <Image resizeMode='cover' style={IconStyles.City} source={require('./assets/icons/CityIcon.png')} />
                                    {' . Cascading '}
                                    <Image resizeMode='cover' style={IconStyles.Blight} source={require('./assets/icons/BlightIcon.png')} />
                                    {' does not cause this effect.'}
                                </Text>
                            }
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default SwedenScreen;