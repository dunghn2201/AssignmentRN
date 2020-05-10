import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class HeaderComponent extends Component {
  render() {
    const {title, backBtn} = this.props;
    return (
      <View
        style={[
          {
            paddingVertical: 10,
            paddingHorizontal: 21,
            justifyContent: 'center',
          },
          backBtn && {alignItems: 'center'},
        ]}>
        {backBtn ? (
          <TouchableOpacity
            onPress={() => this.props.goBack()}
            style={{position: 'absolute', left: 21, top: 15}}
            name="chevron-left"
            size={20}
            color="#001F45">
            <FontAwesome5 name="chevron-left" size={23} color="#001F45" />
          </TouchableOpacity>
        ) : null}
        <Text
          style={{
            fontFamily: 'FredokaOne-Regular',
            fontSize: 28,
            color: '#001F45',
          }}>
          {title}
        </Text>
      </View>
    );
  }
}
