import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Icon,
} from 'antd-mobile';

class NewsPage extends Component {

  componentDidMount() {
    this.props.navigation.setParams({
      headerTitle: '消息',
      headerRight: (
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={{ marginRight: 10 }}>
            <Icon type={'\ue647'} size={25} />
          </Text>
        </TouchableOpacity>
      ),
    });
  }

  render() {

    return (
      <View style={styles.container}>
        <Text>
          我是消息
        </Text>
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
