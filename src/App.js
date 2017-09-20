import React, { Component } from 'react';

import {
  StyleSheet,
  Image,
} from 'react-native';

import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
} from 'react-navigation';

import HomeScreen from './pages/HomePage';
import MineScreen from './pages/MinePage';
import XiaoScreen from './pages/XiaoPage';

import * as Pages from './pages';

import homeO from './img/home-o.png';
import home from './img/home.png';

class App extends Component {

  render() {
    return (
      <Stack />
    );
  }
}

//底部导航栏
const Tab = TabNavigator(
  {
    News: {
      //screen：对应界面名称，需要填入import之后的页面，可以在其他页面通过这个screen传值和跳转。
      screen: Pages.NewsPage,
      //配置TabNavigator的一些属性
      navigationOptions: ({navigation}) => ({
        //设置标签栏的title
        tabBarLabel: '消息',
        //设置标签栏的图标。需要给每个都设置
        tabBarIcon: ({focused,tintColor}) => (
          //focused是否选中标签
          //tintColor选中时的颜色
          <Image
            style={styles.icon}
            source={focused ? home : homeO}
          />
        )
      }),
    },
    Contact: {
      screen: Pages.ContactPage,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '联系人',
        tabBarIcon: ({focused,tintColor}) => (
          //focused是否选中标签
          //tintColor选中时的颜色
          <Image
            style={styles.icon}
            source={focused ? home : homeO}
          />
        )
      }),
    },
    Action: {
      screen: Pages.ActionPage,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '动态',
        tabBarIcon: ({focused,tintColor}) => (
          //focused是否选中标签
          //tintColor选中时的颜色
          <Image
            style={styles.icon}
            source={focused ? home : homeO}
          />
        )
      }),
    },
  },
  {
    tabBarComponent: TabBarBottom,
    //设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom'）
    tabBarPosition: 'bottom',
    //是否允许在标签之间进行滑动
    swipeEnabled: true,
    //是否在更改标签时显示动画
    animationEnabled: false,
    //是否根据需要懒惰呈现标签，而不是提前，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐为true
    lazy: true,
    //tabBarOptions：配置标签栏的一些属性iOS属性
    tabBarOptions: {
      activeTintColor: '#06c1ae',
      inactiveTintColor: '#979797',
      style: { backgroundColor: '#ffffff' },
      labelStyle: {
        fontSize: 14, // 文字大小
      },
    }
  }
);

const Stack = StackNavigator(
  {
    Tab: {
      screen: Tab,
      navigationOptions: ({navigation}) => {
        let headerTitle = '';
        if(navigation.state.index == 0) {
          headerTitle = '消息';
        }
        if(navigation.state.index == 1) {
          headerTitle = '联系人';
        }
        if(navigation.state.index == 2) {
          headerTitle = '动态';
        }
        return ({
          headerTitle: headerTitle,
        });
      }
    },
    Home: {
      //screen：对应界面名称，需要填入import之后的页面，可以在其他页面通过这个screen传值和跳转。
      screen: HomeScreen,
      //配置StackNavigator的一些属性
      navigationOptions: ({navigation}) => ({
        headerTitle: '首页',
      }),
    },
    Xiao: {
      screen: XiaoScreen,
      navigationOptions: ({navigation}) => ({
        headerTitle: '肖',
      }),
    },
    Mine: {
      screen: MineScreen,
      navigationOptions: ({navigation}) => ({
        headerTitle: '我',
      }),
    },
  },
  {
    headerMode: 'screen',
  }
);

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  }
});

export default App;
