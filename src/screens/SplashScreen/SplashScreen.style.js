import {StyleSheet} from 'react-native';
import Colors from '../../assets/colors/colors';

export default StyleSheet.create({
  container: {
    // backgroundColor: Colors.background,
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  View_main: {
    alignItems: 'center',
  },
  text_logo: {
    color: Colors.white,
    fontSize: 40,
    fontFamily: 'Righteous-Regular',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10,
  },
  loading_icon: {
    marginTop: 36,
  },
});
