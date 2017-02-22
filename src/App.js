'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
      	<Text>我是首页</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	viewStyle:{
		flex:1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});


export default App;