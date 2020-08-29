import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import BookTransactionScreen from './screens/BookTransactionScreen';
import SearchScreen from './screens/SearchScreen';
export default class App extends React.Component{
  render(){
    return(
      <View>
        <AppContainer/  >
      </View>
    )
  }
}
const tabNavigator=createBottomTabNavigator({
  BookTransactionScreen:{screen:BookTransactionScreen},
  SearchScreen:{screen:SearchScreen}
});

const AppContainer= createAppContainer(tabNavigator);