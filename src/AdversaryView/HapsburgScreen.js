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
	2: '11 (4/5/2)',
	3: '12 (4/5/3)',
	4: '12 (4/5/3)',
	5: '13 (4/6/3)',
	6: '14 (5/6/3)'
}

class HapsburgScreen extends Component {
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
				<Header title={'Hapsburg Dynasty'} navigation={navigation} navStyle={'back'} />
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
								<Text style={Styles.sectionTextBold}>{'Irreparable Damage: '}</Text>
								{'Track how many '}
								<Image resizeMode='cover' style={IconStyles.Blight} source={require('../Assets/Icons/BlightIcon.png')} />
								{' come off the Blight Card during Ravages that do 8+ Damage to the land. If that number ever exceeds players, the Invaders win.'}
							</Text>
							<Divider />
							<Text style={Styles.sectionTextBold}>
								{'Stage II Escalation '}
								<Image resizeMode='cover' style={IconStyles.Escalation} source={require('../Assets/Icons/Escalation.png')} />
							</Text>
							<Text style={Styles.sectionText}>
								<Text style={Styles.sectionTextBold}>{'Seek Prime Territory: '}</Text>
								{'After Exploring: On each board with 4 or fewer '}
								<Image resizeMode='cover' style={IconStyles.Blight} source={require('../Assets/Icons/BlightIcon.png')} />
								{', add 1 '}
								<Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
								{' to a land without '}
								<Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
								{' / '}
								<Image resizeMode='cover' style={IconStyles.Blight} source={require('../Assets/Icons/BlightIcon.png')} />
								{'. On each board with 2 or fewer '}
								<Image resizeMode='cover' style={IconStyles.Blight} source={require('../Assets/Icons/BlightIcon.png')} />
								{', do so again.'}
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
									<Text style={Styles.sectionTextBold}>{'(2) More Rural Than Urban: '}</Text>
									{'On each board, add 1 '}
									<Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
									{' to land #2 and 1 '}
									<Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
									{' to the highest-numbered land without Setup symbols. During play, when Invaders would build 1 '}
									<Image resizeMode='cover' style={IconStyles.City} source={require('../Assets/Icons/CityIcon.png')} />
									{' in an Inland land, they instead build 2 '}
									<Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
									{'. '}
								</Text>
							}
							{
								difficulty >= 3 &&
								<Text style={Styles.sectionText}>
									<Text style={Styles.sectionTextBold}>{'(3) Fast Spread: '}</Text>
									{'When making the Invader Deck, Remove 1 additional Stage I Card. (New deck order: 11-2222-33333)'}
								</Text>
							}
							{
								difficulty >= 5 &&
								<Text style={Styles.sectionText}>
									<Text style={Styles.sectionTextBold}>{'(5) Wave of Immigration: '}</Text>
									{'Before the initial Explore, put the Habsburg Reminder Card under the top 5 Invader Cards. When Revealed, on each board, add 1 '}
									<Image resizeMode='cover' style={IconStyles.City} source={require('../Assets/Icons/CityIcon.png')} />
									{' to a Coastal land without '}
									<Image resizeMode='cover' style={IconStyles.City} source={require('../Assets/Icons/CityIcon.png')} />
									{' and 1 '}
									<Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
									{' to the 3 Inland lands with the fewest '}
									<Image resizeMode='cover' style={IconStyles.Blight} source={require('../Assets/Icons/BlightIcon.png')} />
									{'. '}
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
									<Text style={Styles.sectionTextBold}>{'(1) Migratory Herders: '}</Text>
									{'After the normal Build Step: In each land matching a Build Card, Gather 1 '}
									<Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
									{' from a land not matching a Build Card. (In board/land order.) '}
								</Text>
							}
							{
								difficulty >= 4 &&
								<Text style={Styles.sectionText}>
									<Text style={Styles.sectionTextBold}>{'(4) Herds Thrive in Verdant Lands: '}</Text>
									<Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
									{' in lands without '}
									<Image resizeMode='cover' style={IconStyles.Blight} source={require('../Assets/Icons/BlightIcon.png')} />
									{' are Durable: they have +2 Health, and "Destroy '}
									<Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
									{'" effects instead deal 2 Damage (to '}
									<Image resizeMode='cover' style={IconStyles.Blight} source={require('../Assets/Icons/BlightIcon.png')} />
									{' only) per '}
									<Image resizeMode='cover' style={IconStyles.Blight} source={require('../Assets/Icons/BlightIcon.png')} />
									{' they could Destroy. ("Destroy all '}
									<Image resizeMode='cover' style={IconStyles.Blight} source={require('../Assets/Icons/BlightIcon.png')} />
									{'" works normally.)'}
								</Text>
							}
							{
								difficulty >= 6 &&
								<Text style={Styles.sectionText}>
									<Text style={Styles.sectionTextBold}>{'(6) Far-Flung Herds: '}</Text>
									{'Ravages do +2 Damage (total) if any adjacent lands have '}
									<Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
									{'. (This does not cause lands without Invaders to Ravage.) '}
								</Text>
							}
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}

export default HapsburgScreen;