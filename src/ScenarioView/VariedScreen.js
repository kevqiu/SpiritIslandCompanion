import React, { Component } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';

import { ScenarioStyles as Styles } from './ScenarioStyles';
import { IconStyles } from '../common/IconStyles';
import Header from '../common/Header';
import { CollapsibleSection } from '../common/CollapsableSection';

class VariedScreen extends Component {
    constructor(props) {
        super(props);

        this.scrollView = React.createRef();
    }
    render() {
        let { navigation } = this.props;

        return (
            <View style={Styles.container} >
                <Header title={'Varied Terrains'} navigation={navigation} navStyle={'back'} />
                <ScrollView style={Styles.scrollContainer} ref={this.scrollView}>
                    <View style={Styles.contentContainer}>
                        <CollapsibleSection sectionTitle='Background'>
                            <View>
                                <Text style={Styles.sectionText}>
                                    {'The island\'s terrains are diverse: the mists and streams of high mountains, the arid scrub of hot sands, river-valleys and swamps, jungle trees towering high. The Invaders have reason to seek all these places out, for each has its own character.'}
                                </Text>
                                <View style={Styles.sectionSpacer} />
                                <Text style={Styles.sectionTextBold}>{'THIS SCENARIO IS NOTABLY EASIER'}</Text>
                                <Text style={Styles.sectionText}>
                                    {'\u2022 for Spirits with very good Build prevention in Jungles and Wetlands (e.g. A Spread of Rampant Green).'}
                                </Text>
                                <Text style={Styles.sectionTextBold}>{'THIS SCENARIO IS NOTABLY HARDER'}</Text>
                                <Text style={Styles.sectionText}>
                                    {'\u2022 with Adversaries that cause many Builds (e.g., The Kingdom of England).'}
                                </Text>
                            </View>
                        </CollapsibleSection>

                        <CollapsibleSection sectionTitle='Rule Changes'>
                            <Text style={Styles.sectionText}>
                                {'Each terrain has a unique effect associated with it:'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                <Text style={Styles.sectionTextBold}>{'Mountains May Hide Gold: '}</Text>
                                {'Add +1 '}
                                <Image resizeMode='cover' style={IconStyles.Explorer} source={require('../Assets/Icons/ExplorerIcon.png')} />
                                {' when Exploring Mountains. (Including during Setup, if appropriate.)'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                <Text style={Styles.sectionTextBold}>{'Jungles Clear-Cut for Land: '}</Text>
                                {'After Invaders Build 1 or more '}
                                <Image resizeMode='cover' style={IconStyles.City} source={require('../Assets/Icons/CityIcon.png')} />
                                {' in a Jungle, add 1 '}
                                <Image resizeMode='cover' style={IconStyles.Blight} source={require('../Assets/Icons/BlightIcon.png')} />
                                {' there. '}
                            </Text>
                            <Text style={Styles.sectionText}>
                                <Text style={Styles.sectionTextBold}>{'Fragile Sands: '}</Text>
                                {'After Setup: '}
                                <Image resizeMode='cover' style={IconStyles.Blight} source={require('../Assets/Icons/BlightIcon.png')} />
                                {' added to Sands cascades as if '}
                                <Image resizeMode='cover' style={IconStyles.Blight} source={require('../Assets/Icons/BlightIcon.png')} />
                                {' were already present, even when it is not. '}
                            </Text>
                            <Text style={Styles.sectionText}>
                                <Text style={Styles.sectionTextBold}>{'Fertile Wetlands: '}</Text>
                                {'After Invaders successfully Build in a Wetland, they Build there a second time. '}
                            </Text>
                            <View style={Styles.sectionSpacer} />
                            <Text style={Styles.sectionText}>
                                {'(If you wish, you can play with a subset of the terrain changes, but the game may be swingy depending on which terrains come up.)'}
                            </Text>
                        </CollapsibleSection>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default VariedScreen;