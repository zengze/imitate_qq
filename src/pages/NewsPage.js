import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

const marginTop = Platform.OS === 'ios' ? 20 : 0;

class NewsPage extends Component {

  componentDidMount() {
    this.props.navigation.setParams({
      headerTitle: '消息',
      headerLeft: (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="个人信息"
        />
      ),
      headerRight: (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="更多"
        />
      ),
    });
  }

  render() {

    return (
      <View style={styles.container}>
        <Text>
          我是消息
        </Text>
        <Button
          onPress={() => this.props.navigation.navigate('Home')}
          title="Go to Home"
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

export {
  NewsPage,
}
