import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from './LoginScreen.style';
import LinearGradient from 'react-native-linear-gradient';

const {width: WIDTH} = Dimensions.get('window');
export default class Logindemo extends Component {
  constructor() {
    super();
    this.state = {
      showPass: true,
      pressTrigger: false,
      username: '',
      password: '',
      userlogin: 'admin',
      passwordlogin: 'admin',
    };
  }
  showPass = () => {
    if (this.state.pressTrigger == false) {
      this.setState({showPass: false, pressTrigger: true});
    } else {
      this.setState({showPass: true, pressTrigger: false});
    }
  };
  render() {
    return (
      <LinearGradient
        style={Styles.bgcontainer}
        start={{x: 0.05, y: 0.05}}
        end={{x: 2, y: 0.05}}
        colors={['#6c1fc7', '#f4a73d']}>
        <View style={Styles.Viewlogo}>
          <Text style={Styles.textLogin}>LOGIN</Text>
        </View>
        <View style={Styles.formlogin}>
          <View style={Styles.inputContainer}>
            <Icon
              name={'ios-person'}
              size={28}
              color={'rgba(255, 255, 255, 0.7)'}
              style={Styles.InputIcon}
            />
            <TextInput
              style={[Styles.TextInput, {width: WIDTH - 55}]}
              placeholder={'Username'}
              placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
              underlineColorAndroid="transparent"
              keyboardType={'email-address'}
              onChangeText={username => {
                this.setState({username});
              }}
              value={this.state.username}
            />
          </View>
          <View style={Styles.inputContainer}>
            <Icon
              name={'ios-lock'}
              size={28}
              color={'rgba(255, 255, 255, 0.7)'}
              style={Styles.InputIcon}
            />
            <TextInput
              style={[Styles.TextInput, {width: WIDTH - 55}]}
              placeholder={'Password'}
              placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
              underlineColorAndroid="transparent"
              secureTextEntry={this.state.showPass}
              onChangeText={password => {
                this.setState({password});
              }}
              value={this.state.password}
            />
            <TouchableOpacity
              style={Styles.btnEye}
              onPress={this.showPass.bind(this)}>
              <Icon
                name={
                  this.state.pressTrigger == false ? 'ios-eye' : 'ios-eye-off'
                }
                size={26}
                color={'rgba(255, 255, 255, 0.7)'}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[Styles.btnLogin, {width: WIDTH - 55}]}
            onPress={() =>
              this.state.username == this.state.userlogin &&
              this.state.password == this.state.passwordlogin
                ? this.props.navigation.navigate('home')
                : Alert.alert('Thông báo', 'Tài khoản hoặc mật khẩu sai')
            }>
            <Text style={Styles.textbtnLogin}>LOGIN</Text>
          </TouchableOpacity>
          <Text
            style={Styles.textSignUp}
            onPress={() => {
              return Alert.alert('Thông báo', 'Something went wrong !');
            }}>
            Don't have an account ?
            <Text style={{fontWeight: 'bold', fontSize: 17}}> Sign Up</Text>
          </Text>
        </View>
      </LinearGradient>
    );
  }
}
