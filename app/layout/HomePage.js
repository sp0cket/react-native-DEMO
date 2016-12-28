/**
 * Created by Justfor on 2016/12/27.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import Banner from 'react-native-banner';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.title = "DEMO"
    }
    // _pressButton() {
    //     const { navigator } = this.props;
    // }
    render(){
        return(
            <View style={styles.container}>
                <Banner
                    banners={this.banners}
                    defaultIndex={this.defaultIndex}
                    onMomentumScrollEnd={this.onMomentumScrollEnd.bind(this)}
                    intent={this.clickListener.bind(this)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop: 64,
        flex: 1,
    },
});