import React, { Component } from 'react';

import {
  StyleSheet,
  Platform,
  View,
  Text,
  FlatList,
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

const marginTop = Platform.OS === 'ios' ? 20 : 0;

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
      navigationOptions: (props) => ({
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
      navigationOptions: (props) => ({
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
      navigationOptions: (props) => ({
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
    // 是否允许在标签之间进行滑动
    swipeEnabled: false,
    //是否在更改标签时显示动画
    animationEnabled: false,
    //是否根据需要懒惰呈现标签，而不是提前，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐为true
    lazy: true,
    //tabBarOptions：配置标签栏的一些属性iOS属性
    tabBarOptions: {
      //label和icon的前景色 活跃状态下
      activeTintColor: '#06c1ae',
      //label和icon的前景色 不活跃状态下
      inactiveTintColor: '#979797',
      //tabbar的样式
      style: {
        //背景色，默认为白色
        backgroundColor: '#ffffff',
      },
      //label的样式
      labelStyle: {
        // 文字大小
        fontSize: 14,
      },
    }
  }
);

//侧滑菜单导航栏的顶部页面跳转和传递参数
const Stack2 = StackNavigator(
  {
    Tab: {
      screen: Tab,
      navigationOptions: (props) => {
        const { state, navigate } = props.navigation;
        const { routes, index } = state;
        let params = routes[index].params;
        return ({
          //设置导航栏标题
          headerTitle: params && params.headerTitle,
          //设置跳转页面后左侧返回箭头后面的文字，默认是本页面的标题。
          headerBackTitle: '返回',
          //设置导航条左侧。可以是按钮或者其他视图控件
          headerLeft: (
            <TouchableOpacity onPress={() => navigate('DrawerOpen')}>
              <FontAwesome
                size={20}
                style={{ marginLeft: 10, color: 'red' }}
                name={'address-card-o'} />
            </TouchableOpacity>
          ),
          //设置导航条右侧。可以是按钮或者其他视图控件
          headerRight: params && params.headerRight,
          //设置导航条的样式
          headerStyle: {
            backgroundColor: '#34bce7',
          },
          //设置导航条文字样式
          headerTitleStyle: {
            //文字居中
            alignSelf: 'center',
          }
        });
      }
    },
    Mine: {
      screen: MineScreen,
      navigationOptions: (props) => ({
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
    },
  },
  {
    // 抽屉宽度
    drawerWidth: 250,
    // 抽屉在左边还是右边，默认left
    drawerPosition: 'left',
    // 自定义抽屉显示内容
    contentComponent: (props) => {
      const data = [
        {
          key: '1',
          iconNm: 'star',
          textNm: '我的超级会员',
        },
        {
          key: '2',
          iconNm: 'star',
          textNm: 'QQ钱包',
        },
      ];
      return (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.name}>
            <FontAwesome
              size={30}
              name={'star'}>
              <Text>
                &nbsp;&nbsp;肖雪丽是猪
              </Text>
            </FontAwesome>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sign}>
            <Text numberOfLines={1}>
              眼泪在眸角，仰着头，泪就不会涌出来
            </Text>
          </TouchableOpacity>
          <FlatList
            style={styles.list}
            data={data}
            renderItem={({item}) => {
              return (
                <TouchableOpacity style={styles.drawers}>
                  <FontAwesome
                    size={18}
                    name={item.iconNm}>
                    <Text>
                      &nbsp;&nbsp;{item.textNm}
                    </Text>
                  </FontAwesome>
                </TouchableOpacity>
              )
            }}
          />
        </View>
      )
    },
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
      navigationOptions: (props) => ({
        //设置导航栏标题
        headerTitle: '首页',
      }),
    },
    Xiao: {
      screen: XiaoScreen,
      navigationOptions: (props) => ({
        headerTitle: '肖',
      }),
    },
    Mine: {
      screen: MineScreen,
      navigationOptions: (props) => ({
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
  container: {
    flex: 1,
    marginTop: marginTop,
    margin: 20,
    //按照屏幕自适应
    width: null,
    height: null,
    //祛除内部元素的白色背景
    backgroundColor: 'rgba(0,0,0,0)',
  },
  name: {
    marginTop: 50,
  },
  list: {
    marginTop: 100,
  },
  drawers: {
    marginVertical: 10,
  },
});

export default App;
