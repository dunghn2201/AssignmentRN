import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../assets/images/anhdaidien.jpg')}
            style={{width: 200, height: 200, borderRadius: 200 / 2}}
          />
          <Text
            style={{
              fontFamily: 'Roboto-Bold',
              marginTop: 15,
              fontSize: 19,
              color: '#001F45',
            }}>
            Ho Ngoc Dung
          </Text>
          <Text
            style={{
              fontFamily: 'Roboto-Regular',
              fontSize: 14,
              color: '#001F45',
            }}>
            PD02792
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('login')}
            style={{
              width: 192,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#5A7B8D',
              borderRadius: 23,
              marginTop: 31,
            }}>
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 16,
                color: '#FFF',
              }}>
              Đăng xuất
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
