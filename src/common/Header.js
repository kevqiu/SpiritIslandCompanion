import React, { Component } from 'react';
import { View } from 'react-native';
import { Header as HeaderComponent } from 'react-native-elements';

import Colors from '../constants/colors';

class Header extends Component {
    render() {
        let { navStyle } = this.props;
        return (
            <View style={{ height: 56 }}>
                <HeaderComponent
                    leftComponent={
                        navStyle === 'drawer' 
                        ? {
                            icon: 'menu',
                            color: 'black',
                            onPress: () => this.props.navigation.openDrawer()
                        }
                        : navStyle === 'back' 
                        ? {
                            icon: 'arrow-back',
                            color: 'black',
                            onPress: () => this.props.navigation.goBack()
                        }
                        : null
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