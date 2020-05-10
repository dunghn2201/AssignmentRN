import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import SplashScreen from './screens/SplashScreen/SplashScreen';
import LoginScreen from './screens/LoginTabScreen/LoginScreen';
import SneakerScreen from './screens/SneakerScreen/SneakerScreen';
import SneakerDetailScreen from './screens/SneakerDetailScreen/SneakerDetailScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import GoogleMapScreen from './screens/GoogleMapTabScreen/GoogleMapScreen';
import ProfileScreen from './screens/ProfileTabScreen/ProfileScreen';

const Stack = createStackNavigator();

const BottomTabs = createBottomTabNavigator();
export default class Routes extends Component {
  createScreenStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="home" children={this.createBottomTab} />
        <Stack.Screen name="sneakerdetail" component={SneakerDetailScreen} />
      </Stack.Navigator>
    );
  };

  createBottomTab = () => {
    return (
      <BottomTabs.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName;
            if (route.name == 'Home') {
              iconName = 'shopping-basket';
            } else if (route.name == 'Location') {
              iconName = 'map-marked-alt';
            } else if (route.name == 'Profile') {
              iconName = 'user';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{activeTintColor: 'tomato', inactiveTintColor: 'black'}}>
        <BottomTabs.Screen name="Home" component={SneakerScreen} />

        <BottomTabs.Screen name="Location" component={GoogleMapScreen} />

        <BottomTabs.Screen name="Profile" component={ProfileScreen} />
      </BottomTabs.Navigator>
    );
  };
  render() {
    return (
      <NavigationContainer>{this.createScreenStack()}</NavigationContainer>
    );
  }
}
