import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Tasks from '../components/tasks/Tasks';
import History from '../components/history/History';
import Settings from '../components/settings/Settings';
import TaskDetail from '../components/tasks/TaskDetail';

export const TaskStack = StackNavigator({
  Tasks: {
    screen: Tasks,
    navigationOptions: {
        title: 'Tasks'
    }
  },
  TaskDetail: {
    screen: TaskDetail,
  }
});

export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings'
    }
  }
});

export const HistoryStack = StackNavigator({
  History: {
    screen: History,
    navigationOptions: {
      title: 'History'
    }
  }
});

var MainScreenNavigator = TabNavigator({
    Tasks: {screen: TaskStack},
    History: {screen: HistoryStack},
    Settings: {screen: SettingsStack}
}, {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: 'grey',
      // activeBackgroundColor: 'darkblue',
      // inactiveTintColor: 'black',
      // inactiveBackgroundColor: 'blue',
      labelStyle: {
        fontSize: 12,
        padding: 0
      }
    }
});

MainScreenNavigator.navigationOptions = {
  title: "Root Navigation"
}

export default MainScreenNavigator;