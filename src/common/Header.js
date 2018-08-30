import React, { Component } from 'react';
import { View } from 'react-native';
import { Header as HeaderComponent } from 'react-native-elements';

import Colors from '../constants/colors';

class Header extends Component {
    render() {
        return (
            <View style={{ height: 56 }}>
                <HeaderComponent
                    leftComponent={
                        {
                            icon: 'menu',
                            color: 'black',
                            onPress: () => this.props.navigation.openDrawer()
                        }
                    }
                    centerComponent={
                        {
                            text: this.props.title,
                            style: {
                                color: 'black',
                                fontSize: 24,
                                fontFamily: 'ReemKufi',
                                height: 29
                            }
                        }
                    }
                    backgroundColor={Colors.darkYellow}
                    innerContainerStyles={{ marginBottom: 12 }}
                />
            </View>
        )
    }
}

export default Header;