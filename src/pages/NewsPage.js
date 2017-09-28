import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

class NewsPage extends Component {

  componentDidMount() {
    this.props.navigation.setParams({
      headerTitle: '消息',
      headerRight: (
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
          <FontAwesome name="ellipsis-h" size={20} style={{ marginRight: 10 }}/>
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
