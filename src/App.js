import React, { Component } from 'react';

import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {
  StackNavigator,
  TabNavigator,
  DrawerNavigator,
  TabBarBottom,
} from 'react-navigation';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './pages/HomePage';
import MineScreen from './pages/MinePage';
import XiaoScreen from './pages/XiaoPage';

import * as Pages from './pages';

class App extends Component {

  render() {
    return (
      <Stack1 />
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
          <FontAwesome
            size={25}
            color={tintColor}
            name={focused ? 'commenting-o' : 'comment-o'} />
        )
      }),
    },
    Contact: {
      screen: Pages.ContactPage,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '联系人',
        tabBarIcon: ({focused,tintColor}) => (
          <FontAwesome
            size={25}
            color={tintColor}
            name={focused ? 'user-circle-o' : 'user-o'} />
        )
      }),
    },
    Action: {
      screen: Pages.ActionPage,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '动态',
        tabBarIcon: ({focused,tintColor}) => (
          <FontAwesome
            size={25}
            color={tintColor}
            name={focused ? 'star' : 'star-o'} />
        )
      }),
    },
  },
  {
    tabBarComponent: TabBarBottom,
    //设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom'）
    tabBarPosition: 'bottom',
    //是否允许在标签之间进行滑动
    // swipeEnabled: true,
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

//侧滑菜单导航栏的顶部页面跳转和传递参数
const Stack2 = StackNavigator(
  {
    Tab: {
      screen: Tab,
      navigationOptions: ({navigation}) => {
        const { routes, index } = navigation.state;
        let params = routes[index].params;
        return ({
          headerTitle: params && params.headerTitle,
          headerBackTitle: '返回',
          headerLeft: (
            <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
              <FontAwesome
                size={20}
                style={{ marginLeft: 10 }}
                name={'address-card-o'} />
            </TouchableOpacity>
          ),
          headerRight: params && params.headerRight,
        });
      }
    },
    Mine: {
      screen: MineScreen,
      navigationOptions: ({navigation}) => ({
        headerTitle: '我',
      }),
    },
  },
  {
    //定义跳转风格
    mode: 'card',
    //返回上级页面时动画效果
    //screen：滑动过程中，整个页面都会返回
    headerMode: 'screen',
  }
);

//侧滑菜单导航栏
const Drawer = DrawerNavigator(
  {
    Setting: {
      screen: Stack2,
      navigationOptions: {
        drawerLabel: '设置',
      },
    },
    Mine: {
      screen: MineScreen,
      navigationOptions: {
        drawerLabel: '我',
      },
    },
  },
  {
    drawerWidth: 250,
  }
);

//底部导航栏的顶部页面跳转和传递参数
const Stack1 = StackNavigator(
  {
    Drawer: {
      screen: Drawer,
      navigationOptions: {
        header: null,
      },
    },
    Home: {
      //screen：对应界面名称，需要填入import之后的页面，可以在其他页面通过这个screen传值和跳转。
      screen: HomeScreen,
      //配置StackNavigator的一些属性
      navigationOptions: ({navigation}) => ({
        //设置导航栏标题
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
    //定义跳转风格
    mode: 'card',
    //返回上级页面时动画效果
    //screen：滑动过程中，整个页面都会返回
    headerMode: 'screen',
  }
);

const styles = StyleSheet.create({

});

export default App;
