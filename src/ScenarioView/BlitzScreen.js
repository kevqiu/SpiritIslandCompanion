import React, { Component } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';

import { ScenarioStyles as Styles } from './ScenarioStyles';
import { IconStyles as IconStyles } from './ScenarioStyles';
import Header from '../common/Header';
import { CollapsibleSection } from '../common/CollapsableSection';

class BlitzScreen extends Component {
    constructor(props) {
        super(props);

        this.scrollView = React.createRef();
    }
    render() {
        let { navigation } = this.props;

        return (
            <View style={Styles.container} >
                <Header title={'Blitz'} navigation={navigation} navStyle={'back'} />
                <ScrollView style={Styles.scrollContainer} ref={this.scrollView}>
                    <Image resizeMode='cover' style={Styles.headerImage} source={require('./assets/blitz.png')} />
                    <View style={Styles.contentContainer}>
                        <CollapsibleSection sectionTitle='Background'>
                            <View>
                                <Text style={Styles.sectionText}>
                                    {'Perhaps the Spirits of the Island are not so slow after all. But still, the Invaders are faster.'}
                                </Text>
                                <View style={Styles.sectionSpacer} />
                                <Text style={Styles.sectionTextBold}>{'THIS SCENARIO IS NOTABLY HARDER'}</Text>
                                <Text style={Styles.sectionText}>
                                    {'\u2022 for slow-developing Spirits (e.g., The Serpent Slumbering Beneath the Island)'}
                                </Text>
                                <Text style={Styles.sectionText}>
                                    {'\u2022 if paired with Brandenburg-Prussia (which pushes tempo in a different way)'}
                                </Text>
                                <View style={Styles.sectionSpacer} />
                                <Text style={Styles.sectionText}>
                                    {'This Scenario can be fun for anyone to try, but is particularly meant for players who find '}
                                    {'they prefer a more play-and-resolve style of game to the planning ahead required by Spirits '}
                                    <Image resizeMode='cover' style={IconStyles.Slow} source={require('./assets/icons/SlowIcon.png')} />
                                    {' Powers.'}
                                </Text>
                            </View>
                        </CollapsibleSection>

                        <CollapsibleSection sectionTitle='Rule Changes'>
                            <Text style={Styles.sectionText}>
                                {'All powers are '}
                                <Image resizeMode='cover' style={IconStyles.Fast} source={require('./assets/icons/FastIcon.png')} />
                                {' .'}                            
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'Powers which were already '}
                                <Image resizeMode='cover' style={IconStyles.Fast} source={require('./assets/icons/FastIcon.png')} />
                                {' (or made '}
                                <Image resizeMode='cover' style={IconStyles.Fast} source={require('./assets/icons/FastIcon.png')} />
                                {' ) cost 1 less Energy. (For Innate Powers and Power Cards cost 0, instead gain 1 Energy.) '}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'When Exploring, once per board, add an additional  '}
                                <Image resizeMode='cover' style={IconStyles.Explorer} source={require('./assets/icons/ExplorerIcon.png')} />
                                {' .'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'If the Island becomes "Blighted", put 1 less '}
                                <Image resizeMode='cover' style={IconStyles.Blight} source={require('./assets/icons/BlightIcon.png')} />
                                {' per player on the Blight Card.'}
                            </Text>
                        </CollapsibleSection>

                        <CollapsibleSection sectionTitle='Setup Changes'>
                            <Text style={Styles.sectionText}>
                                {'Put an additional '}
                                <Image resizeMode='cover' style={IconStyles.Blight} source={require('./assets/icons/BlightIcon.png')} />
                                {' per player on the Blight Card.'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'The invaders get an additional set of actions at the end of Setup. (So they will Explore, then Build and Explore.)'}
                            </Text>
                        </CollapsibleSection>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default BlitzScreen;