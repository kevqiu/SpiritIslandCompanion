import React, { Component } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

import { ScenarioStyles as Styles } from './ScenarioStyles';
import { IconStyles as IconStyles } from './ScenarioStyles';
import Header from '../common/Header';
import { CollapsibleSection } from '../common/CollapsableSection';

const tableHead = ['', 'Wave 3', 'Wave 4', 'Wave 5', 'Wave 6', 'Wave 7'];
const tableCol = ['Blight', 'Closer to Coast', 'Add town to']
const tableData = [
    ['1', '2', '3', '4', '5'],
    ['a', 'b', 'c', 'd', 'e'],
    ['1', '2', '3', '456', '123']
]

class SecondScreen extends Component {
    constructor(props) {
        super(props);

        this.scrollView = React.createRef();
    }

    render() {
        let { navigation } = this.props;

        return (
            <View style={Styles.container} >
                <Header title={'Second Wave'} navigation={navigation} navStyle={'back'} />
                <ScrollView style={Styles.scrollContainer} ref={this.scrollView}>
                    <Image resizeMode='cover' style={Styles.headerImage} source={require('./assets/second.png')} />
                    <View style={Styles.contentContainer}>
                        <CollapsibleSection sectionTitle='Background'>
                            <View>
                                <Text style={Styles.sectionText}>
                                    {'The Invaders have been drive off once, but they are not staying away, '}
                                    {'and the Spirits who first defended the island have grown to powerful '}
                                    {'and slow to react to this second wave of Invaders. '}
                                    {'Can a new set of spirits rise to the occasion and keep the island safe? '}
                                </Text>
                                <View style={Styles.sectionSpacer} />
                                <Text style={Styles.sectionTextBold}>{'THIS SCENARIO IS NOTABLY EASIER'}</Text>
                                <Text style={Styles.sectionText}>
                                    {'\u2022 If you delay the prior games\'s victory to stack the board. '}
                                    {'Either don\'t do that or using scoring.'}
                                </Text>
                                <View style={Styles.sectionSpacer} />
                                <Text style={Styles.sectionTextBold}>{'THIS SCENARIO IS NOTABLY HARDER'}</Text>
                                <Text style={Styles.sectionText}>
                                    {'\u2022 Against French Plantation Colony - due to '}
                                    <Image resizeMode='cover' style={IconStyles.Town} source={require('./assets/icons/TownIcon.png')} />
                                    {' limits, later waves will become outright impossible.'}
                                </Text>
                                <Text style={Styles.sectionText}>
                                    {'This Scenario is played as a follow-up game, set decades later. '}
                                    {'you play different Spirits in the second game, fighting against the same Adversary.'}
                                </Text>
                            </View>
                        </CollapsibleSection>

                        <CollapsibleSection sectionTitle='Rule Changes'>
                            <Text style={Styles.sectionTextBold}>{'Assistance From the First Spirits'}</Text>
                            <Text style={Styles.sectionText}>
                                {'Once Stage 3 begins the Power Cards set aside from the first game may be "played" '}
                                {'(during the Spirit Phase, as usual). They cost nobody any Energy or Card Plays, '}
                                {'grant no Elements, and may target any land. Thresholds trigger if they require 10 or fewer Elements. '}
                                {'Each one is discarded after one use (or at the end of the game, if playing further waves).'}
                            </Text>
                            <View style={Styles.sectionSpacer} />


                            <Text style={Styles.sectionTextBold}>{'After the First Game'}</Text>
                            <Text style={Styles.sectionText}>
                                {'Each Spirit sets aside one Power Card to assist with the next game. '}
                                {'(See "Assistance From the First Spirits above") Remove all '}
                                <Image resizeMode='cover' style={IconStyles.Presence} source={require('./assets/icons/PresenceIcon.png')} />
                                {' and Invaders. Leave on the island:'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 One of each token-type per player (so in a 2p game: 2 '}
                                <Image resizeMode='cover' style={IconStyles.Beast} source={require('./assets/icons/BeastIcon.png')} />
                                {' , 2 '}
                                <Image resizeMode='cover' style={IconStyles.Wild} source={require('./assets/icons/WildIcon.png')} />
                                {' , 2 '}
                                <Image resizeMode='cover' style={IconStyles.Disease} source={require('./assets/icons/DiseaseIcon.png')} />
                                {' ).'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 2 '}
                                <Image resizeMode='cover' style={IconStyles.Blight} source={require('./assets/icons/BlightIcon.png')} />
                                {'  per player. Return the rest to the Blight card.'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 All '}
                                <Image resizeMode='cover' style={IconStyles.Dahan} source={require('./assets/icons/DahanIcon.png')} />
                                {' In lands with 2 '}
                                <Image resizeMode='cover' style={IconStyles.Dahan} source={require('./assets/icons/DahanIcon.png')} />
                                {' or more, Push 1 '}
                                <Image resizeMode='cover' style={IconStyles.Dahan} source={require('./assets/icons/DahanIcon.png')} />
                                {' to adjacent lands until there are 2 or fewer.'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 Then, on each board with 2-4 '}
                                <Image resizeMode='cover' style={IconStyles.Dahan} source={require('./assets/icons/DahanIcon.png')} />
                                {' , add 1 '}
                                <Image resizeMode='cover' style={IconStyles.Dahan} source={require('./assets/icons/DahanIcon.png')} />
                                {' to the lowest-numbered land with '}
                                <Image resizeMode='cover' style={IconStyles.Dahan} source={require('./assets/icons/DahanIcon.png')} />
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 Then, on each board with 9 '}
                                <Image resizeMode='cover' style={IconStyles.Dahan} source={require('./assets/icons/DahanIcon.png')} />
                                {' or more, remove '}
                                <Image resizeMode='cover' style={IconStyles.Dahan} source={require('./assets/icons/DahanIcon.png')} />
                                {' until there are 8 or fewer.'}
                            </Text>
                        </CollapsibleSection>

                        <CollapsibleSection sectionTitle='Setup Changes'>
                            <Text style={Styles.sectionTextBold}>{'Second Game Setup'}</Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 If the Blight card is on the Healthy side: Increase the Adversary Level by 1.'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 If the Blight card is on the Blighted side: Return it to "Healthy". Leave 2 '}
                                <Image resizeMode='cover' style={IconStyles.Blight} source={require('./assets/icons/BlightIcon.png')} />
                                {' per player on it, and set the rest next to the card. If it flips to Blighted ignore the amount of '}
                                <Image resizeMode='cover' style={IconStyles.Blight} source={require('./assets/icons/BlightIcon.png')} />
                                {' printed on the Blighted side and instead use the '}
                                <Image resizeMode='cover' style={IconStyles.Blight} source={require('./assets/icons/BlightIcon.png')} />
                                {' sitting next to the card from the first game. (This will often be less than the printed amount, because some '}
                                <Image resizeMode='cover' style={IconStyles.Blight} source={require('./assets/icons/BlightIcon.png')} />
                                {' has been left on the island.)'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 Do not place pre-printed tokens, '}
                                <Image resizeMode='cover' style={IconStyles.Blight} source={require('./assets/icons/BlightIcon.png')} />
                                {' or '}
                                <Image resizeMode='cover' style={IconStyles.Dahan} source={require('./assets/icons/DahanIcon.png')} />
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 Pre-printed Invaders start closer to the coast: any which would go into land #6 + '}
                                {'instead go into the land numbered 3 lower. (So a '}
                                <Image resizeMode='cover' style={IconStyles.Town} source={require('./assets/icons/TownIcon.png')} />
                                {' printed on land #7 would instead be put into land #4.)'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 On each board: Add 1 '}
                                <Image resizeMode='cover' style={IconStyles.Town} source={require('./assets/icons/TownIcon.png')} />
                                {' to land #5.'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 Adversary Setup changes: apply normally, but any extra '}
                                <Image resizeMode='cover' style={IconStyles.Blight} source={require('./assets/icons/BlightIcon.png')} />
                                {' is added from the Blight Pool.'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 '}
                                <Image resizeMode='cover' style={IconStyles.Fear} source={require('./assets/icons/FearIcon.png')} />
                                {' , Events, the Invader Deck, and Spirits are all setup up normally.'}
                            </Text>
                        </CollapsibleSection>

                        <CollapsibleSection sectionTitle='Later Waves'>
                            <Text style={Styles.sectionText}>
                                {'If you want to play further waves, most rules from the reverse side remain the same. The only changes are:'}
                            </Text>
                            <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                                <Row data={tableHead} style={Styles.tableHead} textStyle={Styles.text} />

                                <TableWrapper style={Styles.tableWrapper}>
                                    <Col data={tableCol} style={Styles.tableCol}/>

                                    <Rows data={tableData} style={Styles.tableData} flexArr={[1,1,1,1,1]}/>
                                </TableWrapper>

                            </Table>
                        </CollapsibleSection>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default SecondScreen;