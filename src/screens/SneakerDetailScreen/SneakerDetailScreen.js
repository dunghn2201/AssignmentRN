import React, {Component} from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Styles from './SneakerDetailScreen.style';
import Styles2 from '../SneakerScreen/SneakerScreen.style';
import CardView from 'react-native-cardview';
import {Rating, Button} from 'react-native-elements';
import NumberFormat from 'react-number-format';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class NewsDetailScreen extends Component {
  render() {
    const {index} = this.props;
    let {item} = this.props.route.params;
    let {Sneakers} = this.props.route.params;
    var infoString = item.story_html;
    try {
      var infoFormatString = infoString
        .replace('<p>', '')
        .replace('</p>', '')
        .replace('#39;', '')
        .replace('&#39;', '')
        .replace('\n', '');
    } catch (error) {
      console.log(error);
    }

    return (
      <ScrollView>
        <HeaderComponent
          backBtn={true}
          title="Detail"
          goBack={() => this.props.navigation.goBack()}
        />
        <CardView
          cardElevation={4}
          cardMaxElevation={4}
          cornerRadius={40}
          style={Styles.detailStyleScreen}>
          <Image
            source={{uri: item.main_picture_url}}
            style={{width: '100%', height: 250}}
          />

          <Text style={Styles.nameDetail}>{item.name}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Rating
              showRating
              style={Styles2.Rating}
              imageSize={25}
              startingValue={
                index % 6 == 0
                  ? 5
                  : index % 5 == 0
                  ? 4
                  : index % 4 == 0
                  ? 3
                  : index % 3 == 0
                  ? 2
                  : index % 2 == 0
                  ? 1
                  : 4
              }
            />
            <NumberFormat
              value={item.retail_price_cents}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
              renderText={value => (
                <Text
                  style={[
                    Styles2.cardText,
                    {
                      color: '#ff0000',
                      textDecorationLine: 'underline',
                      textDecorationStyle: 'solid',
                      textDecorationColor: '#000000',
                      fontSize: 30,
                      fontFamily: 'FredokaOne-Regular',
                      marginRight: 30,
                    },
                  ]}>
                  {value}
                </Text>
              )}
            />
          </View>
          <Text style={Styles.nameDetail}>Size</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: 150,
            }}>
            <Button title={item.size_range[0]} type="outline" />
            <Button title={item.size_range[1]} type="outline" />
            <Button title={item.size_range[2]} type="outline" />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: 150,
              marginTop: 10,
            }}>
            <Button title={item.size_range[3]} type="outline" />
            <Button title={item.size_range[4]} type="outline" />
            <Button title={item.size_range[5]} type="outline" />
          </View>

          <Text
            style={[
              Styles.nameDetail,
              {
                fontFamily: 'Sriracha-Regular',
                fontSize: 15,
              },
            ]}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'FredokaOne-Regular',
                color: 'black',
              }}>
              Description:{' '}
            </Text>{' '}
            {infoFormatString}
          </Text>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 200,
                backgroundColor: '#00ffff',
                height: 50,
                borderRadius: 20,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Icon name={'cart-plus'} size={30} color="#01a699" />
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'FredokaOne-Regular',
                  color: 'black',
                  marginLeft: 10,
                }}>
                Add to cart
              </Text>
            </TouchableOpacity>
          </View>
        </CardView>
        <View style={{flex: 1, marginTop: 10}}>
          <Text
            style={[
              Styles.cardText,
              {
                fontSize: 22,
                fontFamily: 'FredokaOne-Regular',
                color: 'black',
                marginTop: 10,
                marginLeft: 10,
              },
            ]}>
            SEE MORE
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={Sneakers}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity>
                  <CardView
                    style={[Styles2.cardview, {marginTop: 10}]}
                    cardElevation={4}
                    cardMaxElevation={4}
                    cornerRadius={10}>
                    <Image
                      style={[Styles2.cardImage, {width: 120}]}
                      source={{uri: item.main_picture_url}}
                      resizeMode="cover"
                    />
                  </CardView>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
            style={[Styles.container, {marginBottom: 0}]}
          />
        </View>
      </ScrollView>
    );
  }
}
