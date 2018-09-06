import React, { Component } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';

import { ScenarioStyles as Styles } from './ScenarioStyles';
import { IconStyles as IconStyles } from './ScenarioStyles';
import Header from '../common/Header';
import { CollapsibleSection } from '../common/CollapsableSection';

class DahanScreen extends Component {
    constructor(props) {
        super(props);

        this.scrollView = React.createRef();
    }
    render() {
        let { navigation } = this.props;

        return (
            <View style={Styles.container} >
                <Header title={'Dahan Insurrection'} navigation={navigation} navStyle={'back'} />
                <ScrollView style={Styles.scrollContainer} ref={this.scrollView}>
                    <Image resizeMode='cover' style={Styles.headerImage} source={require('./assets/dahan.png')} />
                    <View style={Styles.contentContainer}>
                        <CollapsibleSection sectionTitle='Background'>
                            <View>
                                <Text style={Styles.sectionText}>
                                    {'Citing strategic importance, the Invaders\' government refuses to back down in the face of nebulous fears and rumors of the supernatural. '}
                                    {'They send waves of personnel to support the colony "in response to Dahan belligerence".'}
                                </Text>
                                <View style={Styles.sectionSpacer} />
                                <Text style={Styles.sectionTextBold}>{'THIS SCENARIO IS NOTABLY EASIER'}</Text>
                                <Text style={Styles.sectionText}>
                                    {'\u2022 for spirits with versatile '}
                                    <Image resizeMode='cover' style={IconStyles.Dahan} source={require('./assets/icons/DahanIcon.png')} />
                                    {' movement.'}
                                </Text>
                                <Text style={Styles.sectionText}>
                                    {'\u2022 for spirits good at moving or destroying '}
                                    <Image resizeMode='cover' style={IconStyles.Town} source={require('./assets/icons/TownIcon.png')} />
                                    {' / '}
                                    <Image resizeMode='cover' style={IconStyles.City} source={require('./assets/icons/CityIcon.png')} />
                                    {' (e.g., River Surges in Sunlight)'}
                                </Text>
                                <View style={Styles.sectionSpacer} />
                                <Text style={Styles.sectionTextBold}>{'THIS SCENARIO IS NOTABLY HARDER'}</Text>
                                <Text style={Styles.sectionText}>
                                    {'\u2022 when playing vs. Adversaries that Build lots of '}
                                    <Image resizeMode='cover' style={IconStyles.Town} source={require('./assets/icons/TownIcon.png')} />
                                    {' / '}
                                    <Image resizeMode='cover' style={IconStyles.City} source={require('./assets/icons/CityIcon.png')} />
                                    {' (e.g., Kingdom of England)'}
                                </Text>
                            </View>
                        </CollapsibleSection>

                        <CollapsibleSection sectionTitle='Rule Changes'>
                            <Text style={Styles.sectionText}>
                                <Text style={Styles.sectionTextBold}>{'Constance Raiding: '}</Text>
                                {'Whenever '}
                                <Image resizeMode='cover' style={IconStyles.Dahan} source={require('./assets/icons/DahanIcon.png')} />
                                {' move from one land to another, each '}
                                <Image resizeMode='cover' style={IconStyles.Dahan} source={require('./assets/icons/DahanIcon.png')} />
                                {' that moved does 1 Damage in their land. (Damage happens after fully resolving the Power or other effect which moved them. If a Power moves a '}
                                <Image resizeMode='cover' style={IconStyles.Dahan} source={require('./assets/icons/DahanIcon.png')} />
                                {' multiple times, it only does damage in the land where it ends up.)'}
                            </Text>
                            <View style={Styles.sectionSpacer} />
                            <Text style={Styles.sectionText}>
                                <Text style={Styles.sectionTextBold}>{'Military Response: '}</Text>
                                {'Whenever a '}
                                <Image resizeMode='cover' style={IconStyles.City} source={require('./assets/icons/CityIcon.png')} />
                                {' is destroyed, add 1 '}
                                <Image resizeMode='cover' style={IconStyles.Town} source={require('./assets/icons/TownIcon.png')} />
                                {' to the nearest land with '}
                                <Image resizeMode='cover' style={IconStyles.Dahan} source={require('./assets/icons/DahanIcon.png')} />
                                {' Whenever a '}
                                <Image resizeMode='cover' style={IconStyles.Town} source={require('./assets/icons/TownIcon.png')} />
                                {' is destroyed, add 1 '}
                                <Image resizeMode='cover' style={IconStyles.Explorer} source={require('./assets/icons/ExplorerIcon.png')} />
                                {' to the nearest land with '}
                                <Image resizeMode='cover' style={IconStyles.Dahan} source={require('./assets/icons/DahanIcon.png')} />
                                {' (Add the new invaders after fully resolving the Power or effect which destroyed the old one).'}
                            </Text>
                            <View style={Styles.sectionSpacer} />
                            <Text style={Styles.sectionText}>
                                <Text style={Styles.sectionTextBold}>{'Coordinated Insurrection: '}</Text>

                                {'If you reach Terror level "Victory", '}
                                <Image resizeMode='cover' style={IconStyles.Dahan} source={require('./assets/icons/DahanIcon.png')} />
                                {' immediately Damage Invaders in every land on the board, as if they were fighting back after a Ravage. '}
                                {' If this doesn\'t fulfill the Victory condition on this card, you lose.'}
                            </Text>
                        </CollapsibleSection>

                        <CollapsibleSection sectionTitle='Victory / Loss Conditions' scrollView={this.scrollView}>
                            <Text style={Styles.sectionTextBold}>{'VICTORY'}</Text>
                            <Text style={Styles.sectionText}>
                                {'The normal Fear-based Victory is not available. Instead: '}
                            </Text>
                            <Text style={Styles.sectionText}>
                                <Text style={Styles.sectionTextBold}>{'Terror 2: '}</Text>
                                {'There are no lands where '}
                                <Image resizeMode='cover' style={IconStyles.Town} source={require('./assets/icons/TownIcon.png')} />
                                {' / '}
                                <Image resizeMode='cover' style={IconStyles.City} source={require('./assets/icons/CityIcon.png')} />
                                {' outnumber '}
                                <Image resizeMode='cover' style={IconStyles.Dahan} source={require('./assets/icons/DahanIcon.png')} />
                                {'.'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                <Text style={Styles.sectionTextBold}>{'Terror 3+: '}</Text>
                                {'There is fewer than 1 land per player where '}
                                <Image resizeMode='cover' style={IconStyles.Town} source={require('./assets/icons/TownIcon.png')} />
                                {' / '}
                                <Image resizeMode='cover' style={IconStyles.City} source={require('./assets/icons/CityIcon.png')} />
                                {' outnumber '}
                                <Image resizeMode='cover' style={IconStyles.Dahan} source={require('./assets/icons/DahanIcon.png')} />
                                {'.'}
                            </Text>
                            <View style={Styles.sectionSpacer} />
                            <Text style={Styles.sectionTextBold}>{'ADDITIONAL LOSS CONDITIONS'}</Text>
                            <Text style={Styles.sectionText}>
                                {'There are fewer than 2 '}
                                <Image resizeMode='cover' style={IconStyles.Dahan} source={require('./assets/icons/DahanIcon.png')} />
                                {' per player left alive.'}
                            </Text>
                        </CollapsibleSection>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default DahanScreen;