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
	1: '10 (3/4/3)',
	2: '11 (4/4/3)',
	3: '13 (4/5/4)',
	4: '14 (5/5/4)',
	5: '15 (5/6/4)',
	6: '16 (6/6/4)'
}

class ScotlandScreen extends Component {
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
				<Header title={'Scotland'} navigation={navigation} navStyle={'back'} />
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
								<Text style={Styles.sectionTextBold}>{'Trade Hub: '}</Text>
								{'If the number of Coastal lands with '}
								<Image resizeMode='cover' style={IconStyles.City} source={require('../Assets/Icons/CityIcon.png')} />
								{' is ever greater than (2 x # of boards), the Invaders win. '}
							</Text>
							<Divider />
							<Text style={Styles.sectionTextBold}>
								{'Stage II Escalation '}
								<Image resizeMode='cover' style={IconStyles.Escalation} source={require('../Assets/Icons/Escalation.png')} />
							</Text>
							<Text style={Styles.sectionText}>
								<Text style={Styles.sectionTextBold}>{'Ports Sprawl Outward:: '}</Text>
								{'On the single board with the most Coastal '}
								<Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
								{' / '}
								<Image resizeMode='cover' style={IconStyles.City} source={require('../Assets/Icons/CityIcon.png')} />
								{', add 1 '}
								<Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
								{' to the N lands with the fewest '}
								<Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
								{' (N = # of players).'}
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
									<Text style={Styles.sectionTextBold}>{'(2) Seize Opportunity: '}</Text>
									{'Add 1 '}
									<Image resizeMode='cover' style={IconStyles.City} source={require('../Assets/Icons/CityIcon.png')} />
									{' to land #2. Place "Coastal Lands" as the 3rd Stage II card, and move the two Stage II Cards above it up by one. (New Deck Order: 11-22-1-C2-33333, where C is the Stage II Coastal Lands Card.)'}
								</Text>
							}
							{
								difficulty >= 4 &&
								<Text style={Styles.sectionText}>
									<Text style={Styles.sectionTextBold}>{'(4) Ambition of a Minor Nation: '}</Text>
									{'Replace the bottom Stage I Card with the bottom Stage III Card. (New Deck Order: 11-22-3-C2-3333)'}
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
								difficulty === 0 && <Text style={Styles.sectionText}>{'No changes.'}</Text>
							}
							{
								difficulty >= 1 &&
								<Text style={Styles.sectionText}>
									<Text style={Styles.sectionTextBold}>{'(1) Trading Port: '}</Text>
									{'After Setup, in Coastal lands, Explore Cards add 1 '}
									<Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
									{' instead of '}
									<Image resizeMode='cover' style={IconStyles.Explorer} source={require('../Assets/Icons/ExplorerIcon.png')} />
									{'. "Coastal Lands" Invader cards do this for maximum 2 lands per board. '}
								</Text>
							}
							{
								difficulty >= 3 &&
								<Text style={Styles.sectionText}>
									<Text style={Styles.sectionTextBold}>{'(3) Chart the Coastline: '}</Text>
									{' In Coastal lands, Build Cards affect lands without Invaders, so long as there is an adjacent '}
									<Image resizeMode='cover' style={IconStyles.City} source={require('../Assets/Icons/CityIcon.png')} />
									{'.'}
								</Text>
							}
							{
								difficulty >= 5 &&
								<Text style={Styles.sectionText}>
									<Text style={Styles.sectionTextBold}>{'(5) Runoff and Bilgewater: '}</Text>
									{'After a Ravage Action adds '}
									<Image resizeMode='cover' style={IconStyles.Blight} source={require('../Assets/Icons/BlightIcon.png')} />
									{' to a Coastal Land, add 1 '}
									<Image resizeMode='cover' style={IconStyles.Blight} source={require('../Assets/Icons/BlightIcon.png')} />
									{' to that board\'s Ocean (without cascading). Treat the Ocean as a Coastal Wetland for this rule and for '}
									<Image resizeMode='cover' style={IconStyles.Blight} source={require('../Assets/Icons/BlightIcon.png')} />
									{' removal/movement.'}
								</Text>
							}
							{
								difficulty >= 6 &&
								<Text style={Styles.sectionText}>
									<Text style={Styles.sectionTextBold}>{'(6) Exports Fuel Inward Growth: '}</Text>
									{' After the Ravage step, add 1 '}
									<Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />

									{' to each Inland land that matches a Ravage card and is within 1 '}
									<Image resizeMode='cover' style={IconStyles.Range} source={require('../Assets/Icons/Range_1.png')} />

									{' of '}
									<Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
									{' / '}
									<Image resizeMode='cover' style={IconStyles.City} source={require('../Assets/Icons/CityIcon.png')} />
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

export default ScotlandScreen;