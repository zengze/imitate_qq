import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

const marginTop = Platform.OS === 'ios' ? 20 : 0;

class ContactPage extends Component {

  componentDidMount() {
    this.props.navigation.setParams({
      headerTitle: '联系人',
      headerLeft: (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="个人信息"
        />
      ),
      headerRight: (
        <Button
          onPress={() => this.props.navigation.navigate('Home')}
          title="添加"
        />
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
