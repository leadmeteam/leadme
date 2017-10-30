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
    Feed: {
      screen: FeedScreen,
      path: 'feed',
      navigationOptions: {
        header: null,
        title: 'FEED'
      }
    },
    Guide: {
      screen: GuideScreen,
      path: 'guide',
      navigationOptions: {
        header: null,
        title: 'GUIDE'
      }
    },
    Mypage: {
      screen: MypageScreen,
      path: 'mypage',
      navigationOptions: {
        header: null,
        title: 'MY'
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? '#ffa751' : '#fff',
      labelStyle: {
        fontSize: 12
      },
      showIcon: false,
      animationEnabled: true,
      tabStyle: {
        // borderTopColor: '#ffa751',
        // borderTopWidth: 0
      }
    },
    lazy: true
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