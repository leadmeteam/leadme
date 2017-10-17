/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import {
  FeedScreen,
  GuideScreen,
  LoginScreen,
  MypageScreen
} from './containers'

const TabNav = TabNavigator(
  {
    Guide: {
      screen: GuideScreen,
      path: 'guide',
      navigationOptions: {
        header: null,
        title: '가이드'
      }
    },
    Feed: {
      screen: FeedScreen,
      path: 'feed',
      navigationOptions: {
        header: null,
        title: '피드'
      }
    },
    Mypage: {
      screen: MypageScreen,
      path: 'mypage',
      navigationOptions: {
        header: null,
        title: '마이페이지'
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
      labelStyle: {
        fontSize: 14
      },
      showIcon: false,
      animationEnabled: true
    }
  }
);

const App = StackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
      }
    },
    TabNavigator: {
      screen: TabNav
    }
  },
  {
    headerMode: 'float'
  }
);

export default App;