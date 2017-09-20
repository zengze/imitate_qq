import React,  { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from 'react-native';

import LiHua from '../img/li-hua.jpeg';

const marginTop = Platform.OS === 'ios' ? 20 : 0;

export default class MinePage extends Component {

  render() {

    return(
      <Image source={LiHua} style={styles.container}>
        <Text>
          肖雪丽是猪吗
        </Text>
        <Button
          onPress={() => this.props.navigation.navigate('Mine')}
          title="Go to Mine"
        />
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // 设置主轴对齐方式
    justifyContent: 'center',
    // 设置侧轴对齐方式
    alignItems: 'center',
    //按照屏幕自适应
    width: null,
    height: null,
    //祛除内部元素的白色背景
    backgroundColor: 'rgba(0,0,0,0)',
  },
});
