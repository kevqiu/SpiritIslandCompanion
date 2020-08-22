import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';

class ListItem extends Component {
    render() {
        let { name, screen, difficulty, expansion, image } = this.props.data;
        let { imageStyle } = this.props;
        let { navigate } = this.props.navigation;
        let expansionIcon = null;
        if (expansion === 'BranchAndClaw') {
            expansionIcon = (
                <Image style={Styles.BranchAndClawIcon} source={require('../Assets/Icons/BranchAndClawIcon.png')} />
            )
        }
        if (expansion === 'JaggedEarth') {
            expansionIcon = (
                <Image style={Styles.JaggedEarthIcon} source={require('../Assets/Icons/JaggedEarthIcon.png')} />
            )
        }

        return (
            <TouchableOpacity onPress={() => navigate(screen)}>
                <View style={Styles.container}>
                    <View style={Styles.textContainer}>
                        <Text style={Styles.nameText}>{name}</Text>
                        <View style={Styles.bottomTextContainer}>
                            <Text style={Styles.difficultyText}>Difficulty: {difficulty}</Text>
                            {expansionIcon}
                        </View>
                    </View>
                    <Image style={imageStyle} source={image} />
                </View>
            </TouchableOpacity>
        )
    }
}

class ListDivider extends Component {
    render() {
        return (
            <View style={{ height: 1, backgroundColor: '#EDEDED' }} />
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        height: 80
    },
    textContainer: {
        marginTop: 14,
        marginLeft: 12,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    bottomTextContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    nameText: {
        fontSize: 22,
        fontFamily: 'ReemKufi',
        color: 'black'
    },
    difficultyText: {
        fontSize: 16,
        fontFamily: 'ReemKufi'
    },
    image: {
        width: 85,
        height: 140,
        marginTop: -20
    },
    BranchAndClawIcon: {
        width: 20,
        height: 18,
        opacity: 0.5,
        marginLeft: 7,
        marginTop: 1
    },
    JaggedEarthIcon: {
        width: 20,
        height: 20,
        opacity: 0.5,
        marginLeft: 7,
        marginTop: 1
    }
});

export { ListItem, ListDivider };