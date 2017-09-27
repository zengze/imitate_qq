import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

class ContactPage extends Component {

  componentDidMount() {
    this.props.navigation.setParams({
      headerTitle: '联系人',
      headerRight: (
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={{ marginRight: 10, fontSize: 16 }}>
            添加
          </Text>
        </TouchableOpacity>
      ),
    });
  }

  render() {

    return (
      <View style={styles.container}>
        <Text>
          我是联系人
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
  ContactPage,
}
