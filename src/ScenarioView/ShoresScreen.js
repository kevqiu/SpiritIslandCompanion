import React, { Component } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import FullWidthImage from 'react-native-fullwidth-image'

import { ScenarioStyles as Styles } from './ScenarioStyles';
import { IconStyles } from '../common/IconStyles';
import Header from '../common/Header';
import { CollapsibleSection } from '../common/CollapsableSection';

class TerrorScreen extends Component {
    constructor(props) {
        super(props);

        this.scrollView = React.createRef();
    }
    render() {
        let { navigation } = this.props;

        return (
            <View style={Styles.container} >
                <Header title={'Ward the Shores'} navigation={navigation} navStyle={'back'} />
                <ScrollView style={Styles.scrollContainer} ref={this.scrollView}>
                    <FullWidthImage source={require('../Assets/ward.png')} width={600} height={480} />
                    <View style={Styles.contentContainer}>
                        <CollapsibleSection sectionTitle='Background'>
                            <View>
                                <Text style={Styles.sectionText}>
                                    {'The Dahan learn that these Invaders are merely one of many groups, '}
                                    {'any of who might want to colonize the Island. You decide to set up wardings along the shoreline '}
                                    {'- once they\'re complete, you\'ll be able to deal with the current crop of Invaders and '}
                                    {'keep any others from finding you.'}
                                </Text>
                                <View style={Styles.sectionSpacer} />
                                <Text style={Styles.sectionTextBold}>{'THIS SCENARIO IS NOTABLY EASIER'}</Text>
                                <Text style={Styles.sectionText}>
                                    {'\u2022 for Spirits strong along the coastline (e.g., Ocean\'s Hungry Grasp).'}
                                </Text>
                                <View style={Styles.sectionSpacer} />
                                <Text style={Styles.sectionTextBold}>{'THIS SCENARIO IS NOTABLY HARDER'}</Text>
                                <Text style={Styles.sectionText}>
                                    {'\u2022 against higher-level Brandenburg-Prussia, which brings Invader Stage III much faster.'}
                                </Text>
                            </View>
                        </CollapsibleSection>

                        <CollapsibleSection sectionTitle='Rule Changes'>
                            <Text style={Styles.sectionText}>
                                {'Once per turn, each Spirit may play a Power Card face-down as if it were:'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                <Text style={Styles.sectionTextBold}>{'Speed: '}</Text>
                                <Image resizeMode='cover' style={IconStyles.Slow} source={require('../Assets/Icons/SlowIcon.png')} />
                                <Text style={Styles.sectionTextBold}>{'  |  Range: '}</Text>
                                <Image resizeMode='cover' style={IconStyles.SacredSite} source={require('../Assets/Icons/SacredSiteIcon.png')} />
                                {' '}
                                <Image resizeMode='cover' style={IconStyles.Range} source={require('../Assets/Icons/Range_0.png')} />
                                <Text style={Styles.sectionTextBold}>{'   |  Cost: '}</Text>
                                {'0'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                <Text style={Styles.sectionTextBold}>{'Effect: '}</Text>
                                {'Pay 2 Energy per '}
                                <Image resizeMode='cover' style={IconStyles.Blight} source={require('../Assets/Icons/BlightIcon.png')} />
                                {' and 2 Energy per '}
                                <Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
                                {' / '}
                                <Image resizeMode='cover' style={IconStyles.City} source={require('../Assets/Icons/CityIcon.png')} />
                                {' to add a Warding Pattern. (This uses a card play as normal.)'}
                            </Text>
                            <View style={Styles.sectionSpacer} />
                            <Text style={Styles.sectionText}>
                                {'Once placed, each Warding Pattern grants Defend 3 in its land. They are destroyed any time '}
                                <Image resizeMode='cover' style={IconStyles.Blight} source={require('../Assets/Icons/BlightIcon.png')} />
                                {' is added to their land.'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                <Text style={Styles.sectionTextBold}>{'Stage III Surge: '}</Text>
                                {'During Stage III, Explore adds 1 '}
                                <Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
                                {' in addition to the usual 1 '}
                                <Image resizeMode='cover' style={IconStyles.Explorer} source={require('../Assets/Icons/ExplorerIcon.png')} />
                                {' .'}
                            </Text>
                        </CollapsibleSection>

                        <CollapsibleSection sectionTitle='Setup Changes'>
                            <Text style={Styles.sectionText}>
                                {'The normal Fear Victory is not Available. Instead:                                         '}
                            </Text>
                            <Text style={Styles.sectionText}>
                                <Text style={Styles.sectionTextBold}>{'Terror 2+: '}</Text>
                                {'There is a Warding Pattern in every Coastal land.'}
                            </Text>
                        </CollapsibleSection>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default TerrorScreen;