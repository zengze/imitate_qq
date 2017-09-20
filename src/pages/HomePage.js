import React,  { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

const marginTop = Platform.OS === 'ios' ? 20 : 0;

export default class HomePage extends Component {

  render() {

    return (
      <View style={styles.container}>
        <Text>
          我是首页
        </Text>
        <Button
          onPress={() => this.props.navigation.navigate('Xiao')}
          title="Go to Xiao"
        />
      </View>
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
  }
});
