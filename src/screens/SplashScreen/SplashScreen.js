import React, {Component} from 'react';
import {Text, View, Animated, Image} from 'react-native';
import Styles from './SplashScreen.style';
import Icon from 'react-native-vector-icons/AntDesign';
import Colors from '../../assets/colors/colors';
import LinearGradient from 'react-native-linear-gradient';

export default class SplashScreen extends Component {
  animatedValue = new Animated.Value(0);

  componentDidMount = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.animatedValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: 2,
      },
    ).start(() => {
      this.props.navigation.navigate('login');
    });
  };

  render() {
    console.disableYellowBox = true;
    const anim = {
      transform: [
        {
          rotate: this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
          }),
        },
      ],
    };
    return (
      <LinearGradient
        style={Styles.container}
        start={{x: 0.05, y: 0.05}}
        end={{x: 2, y: 0.05}}
        colors={[
          '#6c1fc7',
          // '#e43544',
          // '#ef5531',
          // '#bd256e',
          // '#dc2a4e',
          // '#a41a89',
          // '#e3114d',
          // '#bc0d82',
          // '#d6145a',
          '#f4a73d',
        ]}>
        <View style={Styles.View_main}>
          <Text style={Styles.text_logo}>SneakerShop - PD2792</Text>
          <Text style={[Styles.text_logo, {fontSize: 20}]}>
            Assignment React Native PT14308
          </Text>
          <Animated.View style={[Styles.loading_icon, anim]}>
            <Icon name="loading1" size={28} color={Colors.white} />
          </Animated.View>
        </View>
      </LinearGradient>
    );
  }
}
