/**
 * Created by Justfor on 2016/12/27.
 */

import React,{ Component } from 'react';
import {
    Image,
    StyleSheet,
    StatusBar,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import HomePage from './layout/HomePage';
import NotificationPage from './layout/NotificationPage';
import ThemeNavigator from './Component/ThemeNavigator';

StatusBar.setBarStyle('light-content', true);

export default class Launcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: '首页'
        }
    }


    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected = { this.state.selectedTab === '首页' }
                    renderIcon = { () => <Image style={styles.tabIcon} source={require('./resources/images/B-Icon_19.jpg')}/> }
                    renderSelectedIcon = { () => <Image style={styles.tabIcon} source={require('./resources/images/icon_19.jpg')}/> }
                    title = "首页"
                    titleStyle = { styles.tabText }
                    selectedTitleStyle = { styles.selectedTabText }
                    onPress = { () => this.setState( {selectedTab: '首页'} )}>
                    <ThemeNavigator component={HomePage} title="DEMO"/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected = { this.state.selectedTab === '通知' }
                    renderIcon = { () => <Image style={styles.tabIcon} source={require('./resources/images/B-Icon_21.jpg')}/> }
                    renderSelectedIcon = { () => <Image style={styles.tabIcon} source={require('./resources/images/icon_21.jpg')}/> }
                    title = "通知"
                    titleStyle = { styles.tabText }
                    selectedTitleStyle = { styles.selectedTabText }
                    onPress = { () => this.setState( {selectedTab: '通知'} )}>
                    <ThemeNavigator component={NotificationPage} title="通知"/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected = { this.state.selectedTab === '通讯录' }
                    renderIcon = { () => <Image style={styles.tabIcon} source={require('./resources/images/B-Icon_24.jpg')}/> }
                    renderSelectedIcon = { () => <Image style={styles.tabIcon} source={require('./resources/images/icon_24.jpg')}/> }
                    title = "通讯录"
                    titleStyle = { styles.tabText }
                    selectedTitleStyle = { styles.selectedTabText }
                    onPress = { () => this.setState( {selectedTab: '通讯录'} )}>
                    <ThemeNavigator component={HomePage} title="通讯录"/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected = { this.state.selectedTab === '我的' }
                    renderIcon = { () => <Image style={styles.tabIcon} source={require('./resources/images/B-Icon_26.jpg')}/> }
                    renderSelectedIcon = { () => <Image style={styles.tabIcon} source={require('./resources/images/icon_26.jpg')}/> }
                    title = "我的"
                    titleStyle = { styles.tabText }
                    selectedTitleStyle = { styles.selectedTabText }
                    onPress = { () => this.setState( {selectedTab: '我的'} )}>
                    <ThemeNavigator component={HomePage} title="我的"/>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    tabIcon: {
        width: 20,
        height: 20,
    },
    tabText: {
        fontSize: 13,
        color: "#000",
    },
    selectedTabText: {
        fontSize: 13,
        color: 'rgb(19,21,106)',
    },
});