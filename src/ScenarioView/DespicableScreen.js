import React, { Component } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';

import { ScenarioStyles as Styles } from './ScenarioStyles';
import { IconStyles } from '../common/IconStyles';
import Header from '../common/Header';
import { CollapsibleSection } from '../common/CollapsableSection';

class DespicableScreen extends Component {
	constructor(props) {
		super(props);

		this.scrollView = React.createRef();
	}
	render() {
		let { navigation } = this.props;

		return (
			<View style={Styles.container} >
				<Header title={'Despicable Theft'} navigation={navigation} navStyle={'back'} />
				<ScrollView style={Styles.scrollContainer} ref={this.scrollView}>
					<View style={Styles.contentContainer}>
						<CollapsibleSection sectionTitle='Background'>
							<View>
								<Text style={Styles.sectionText}>
									{'Small groups of Invaders have been searching the island - and a few have found wonders. '}
									{'If they make it home, their people will stop at nothing to seek out more such fantastic treasures. '}
									{'Even those without wonders have tales and trophies that may bolster the Invaders\' resolve to stay. '}
								</Text>
								<View style={Styles.sectionSpacer} />
								<Text style={Styles.sectionTextBold}>{'THIS SCENARIO IS NOTABLY EASIER'}</Text>
								<Text style={Styles.sectionText}>
									{'\u2022 for Spirits with strong movement and Isolate abilities (e.g., Finder of Paths Unseen).'}
								</Text>
								<Text style={Styles.sectionTextBold}>{'THIS SCENARIO IS NOTABLY HARDER'}</Text>
								<Text style={Styles.sectionText}>
									{'\u2022 for Spirits with poor ability to move '}
									<Image resizeMode='cover' style={IconStyles.Dahan} source={require('../Assets//Icons/DahanIcon.png')} />
								</Text>
								<Text style={Styles.sectionText}>
									{'\u2022 for Spirits with poor ability to Damage or move Invaders'}
								</Text>
								<Text style={Styles.sectionText}>
									{'\u2022 on the Thematic Boards, as more lands with spawn Thieves'}
								</Text>
							</View>
						</CollapsibleSection>

						<CollapsibleSection sectionTitle='Rule Changes'>
							<Text style={Styles.sectionTextBold}>{'WHAT THIEVES DO'}</Text>
							<View style={Styles.sectionSpacer} />
							<Text style={Styles.sectionTextBold}>
								{'Arrive with '}
								<Image resizeMode='cover' style={IconStyles.Explorer} source={require('../Assets//Icons/ExplorerIcon.png')} />
								{': '}
							</Text>
							<Text style={Styles.sectionText}>
								{'After Setup, when Invaders successfully Explore into a land numbered 6 or higher, also add 1 Thief there from the pool.'}
							</Text>
							<View style={Styles.sectionSpacer} />
							<Text style={Styles.sectionTextBold}>{'Seek to Escape by Ship:'}</Text>
							<Text style={Styles.sectionText}>
								{'Before the Ravage Step, all Thieves on the island move:'}
							</Text>
							<Text style={Styles.sectionText}>
								{'\u2022 Thieves adjacent to the Ocean escape: For each, lose 4 earned '}
								<Image resizeMode='cover' style={IconStyles.Fear} source={require('../Assets/Icons/FearIcon.png')} />
								{' (if possible). If the Thief has a number, also Accelerate the Invader Deck that many times. '}
								{'(Remove the topmost card of the lowest Invader Stage remaining in the deck.)'}
							</Text>
							<Text style={Styles.sectionText}>
								{'\u2022 Other Thieves move 1 land towards their board\'s Ocean, if possible.'}
							</Text>
							<Text style={Styles.sectionText}>
								{'Thieves do not count as Invaders, and do not participate in Invader Actions.'}
							</Text>
							<View style={Styles.sectionSpacer} />
							<Text style={Styles.sectionTextBold}>{'THWARTING THE SNEAKY THIEVES'}</Text>
							<Text style={Styles.sectionText}>
								{'\u2022 Thieves may be affected by players\' Actions (only) as if they were '}
								<Image resizeMode='cover' style={IconStyles.Explorer} source={require('../Assets//Icons/ExplorerIcon.png')} />
								{'. They are not '}
								<Image resizeMode='cover' style={IconStyles.Explorer} source={require('../Assets//Icons/ExplorerIcon.png')} />
								{' for any other rule or purpose. (Including Fear Cards, Event Cards, etc.) They have 1 Health.'}
							</Text>
							<Text style={Styles.sectionText}>
								{'\u2022 Thieves are face-down by default, but face-up while in lands with 2 or more '}
								<Image resizeMode='cover' style={IconStyles.Dahan} source={require('../Assets/Icons/DahanIcon.png')} />
								{'. If multiple face-down Thieves are in a single land, mix them up. '}
							</Text>
							<Text style={Styles.sectionText}>
								{'\u2022 Thieves can only be Destroyed/Removed/Replaced in lands with no '}
								<Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
								{' / '}
								<Image resizeMode='cover' style={IconStyles.City} source={require('../Assets/Icons/CityIcon.png')} />
								{' and 2 or more '}
								<Image resizeMode='cover' style={IconStyles.Dahan} source={require('../Assets/Icons/DahanIcon.png')} />
								{'. Otherwise, they elude you, and are instead Pushed. You may check this condition either before or after the Action so a Power that Destroys the last '}
								<Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
								{' / '}
								<Image resizeMode='cover' style={IconStyles.City} source={require('../Assets/Icons/CityIcon.png')} />
								{' in a land could also Destroy a face-up Thief there). '}
							</Text>
							<View style={Styles.sectionSpacer} />
							<Text style={Styles.sectionText}>
								{'Generate 1 '}
								<Image resizeMode='cover' style={IconStyles.Fear} source={require('../Assets/Icons/FearIcon.png')} />
								{' per Destroyed Thief. Mix Thieves no longer on the island into the supply at end of turn. '}
							</Text>
						</CollapsibleSection>

						<CollapsibleSection sectionTitle='Setup Changes'>
							<Text style={Styles.sectionText}>
								{'Make a pool of 18 Scenario Markers: 12 blank ones and (1,1,1,2,2,3). They represent small groups of Thieves trying to escape with knowledge or treasure. Mix them to form a face-down supply.'}
							</Text>
						</CollapsibleSection>
					</View>
				</ScrollView>
			</View >
		);
	}
}

export default DespicableScreen;