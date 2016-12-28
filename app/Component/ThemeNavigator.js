/**
 * Created by Justfor on 2016/12/27.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Navigator,
} from 'react-native'


let NavigationBarRouteMapper = {
    //左边Button
    /**
     * @return {null}
     */
    LeftButton: function(route, navigator, index, navState) {
        if (index > 0) {
            return (
                <View style={styles.navBarLeftButton}>
                    <TouchableOpacity
                        underlayColor='transparent'
                        onPress = {() => {
                            if (index > 0) {
                            navigator.pop();
                            }
                        }}>
                        <Text style={styles.navBarButtonText}>返回</Text>
                    </TouchableOpacity>
                </View>
            )
        }else {
            return null;
        }
    },
    //右边Button
    /**
     * @return {null}
     */
    RightButton: function(route, navigator, index, navState) {
        if (route.id === 'detail') {
            return null;
        }
        return (
            <TouchableOpacity
                onPress={() => navigator.push({id:'detail',title:'Detail'})}
                style={styles.navBarRightButton}>
                <Text style={[styles.navBarText, styles.navBarButtonText]}>

                </Text>
            </TouchableOpacity>
        );
    },
    //标题
    Title: function(route, navigator, index, navState) {
        return (
            <Text style={[styles.navBarText, styles.navBarTitleText]}>
                {route.title}
            </Text>
        );
    },
};

export default class ThemeNavigator extends Component {
    render(){
        const {component,title} = this.props;
        return (
            <Navigator
                initialRoute= {{component: component, title: title}}
                configureScene={(route) => {
                            return null;
                        }}
                renderScene={(route, navigator) => {
                            return <route.component {...route.params} navigator={navigator}/>
                        }}
                navigationBar={
                            <Navigator.NavigationBar style={styles.navBar}
                                routeMapper = { NavigationBarRouteMapper }
                            />
                        }
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navBar: {
        backgroundColor: 'rgb(19,21,106)',
    },
    navBarText: {
        fontSize: 18,
        marginVertical: 10,
    },
    navBarTitleText: {
        color: '#FFF',
        fontWeight: '500',
        marginVertical: 9,
        marginHorizontal: 0,
    },
    navBarLeftButton: {
        paddingLeft: 10,
    },
    navBarRightButton: {
        paddingRight: 10,
    },
    navBarButtonText: {
        color: '#5890FF',
    },
});