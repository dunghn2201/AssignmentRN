import {StyleSheet} from 'react-native';
import Colors from '../../assets/colors/colors';

export default StyleSheet.create({
  bgcontainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 100,
    resizeMode: 'cover',
  },
  Viewlogo: {
    flex: 1.5,
    justifyContent: 'space-around',
  },
  formlogin: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  TextInput: {
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    fontFamily: 'FredokaOne-Regular',
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25,
  },
  InputIcon: {
    position: 'absolute',
    top: 5,
    left: 37,
  },
  inputContainer: {
    marginTop: 10,
  },
  btnEye: {
    position: 'absolute',
    top: 8,
    right: 37,
  },
  btnLogin: {
    height: 45,
    borderRadius: 25,
    backgroundColor: '#432577',
    justifyContent: 'center',
    marginTop: 20,
  },
  textbtnLogin: {
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    fontFamily: 'FredokaOne-Regular',
    fontSize: 16,
  },
  textLogin: {
    color: Colors.white,
    fontSize: 50,
    fontFamily: 'FredokaOne-Regular',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 2, height: 4},
    textShadowRadius: 10,
  },
  textSignUp: {
    fontSize: 16,
    color: Colors.white,
    marginTop: 30,
    fontFamily: 'FredokaOne-Regular',
  },
});
