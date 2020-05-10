import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import Styles from './SneakerScreen.style';
import CardView from 'react-native-cardview';
import {SearchBar, Rating, AirbnbRating} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {shuffle} from 'lodash';
import NumberFormat from 'react-number-format';
export default class NewsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Sneakers: [],
      Sneakers2: [],
      isLoading: true,
      searchInput: '',
      filterData: null,
    };
  }
  updateSearch = search => {
    this.setState({search});
  };
  componentDidMount() {
    const url =
      'https://gist.githubusercontent.com/meokonz/58450dabc970ef5c6f71685dc01ae905/raw/580415b84c06f2262f023af8d9f798b6412d09e3/SneakerAss2792';
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          Sneakers: shuffle(responseJson.sneakers),
          Sneakers2: responseJson.sneakers,
          isLoading: false,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  _searchItem = text => {
    this.setState({searchInput: text}, () => {
      let newData = this.state.Sneakers.filter(
        item => item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1,
      );
      this.setState({filterData: newData});
    });
  };
  render() {
    console.disableYellowBox = true;
    const {searchInput, filterData, Sneakers, Sneakers2} = this.state;

    if (this.state.isLoading) {
      return (
        <View
          style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
          <ActivityIndicator size="large" color="red" />
        </View>
      );
    }
    return (
      <ScrollView style={Styles.container}>
        <HeaderComponent title="Sneakers" />
        <SearchBar
          placeholder="Type here..."
          lightTheme
          round
          onChangeText={this._searchItem}
          value={searchInput}
        />
        <View style={{flex: 1}}>
          <Text
            style={[
              Styles.cardText,
              {
                fontSize: 22,
                fontFamily: 'FredokaOne-Regular',
                color: 'black',
                marginTop: 10,
              },
            ]}>
            TOP COLLECTION
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={filterData || Sneakers2}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('sneakerdetail', {
                      item,
                      Sneakers,
                    });
                  }}>
                  <NewsItem items={item} index={index} />
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
            style={[Styles.container, {marginBottom: 0}]}
          />
        </View>
        <View style={{flex: 2}}>
          <Text
            style={[
              Styles.cardText,
              {
                fontSize: 22,
                fontFamily: 'FredokaOne-Regular',
                color: 'black',
                marginTop: 10,
              },
            ]}>
            NEW SHOES
          </Text>
          <FlatList
            data={filterData || Sneakers}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('sneakerdetail', {
                      item,
                      Sneakers,
                    });
                  }}>
                  <NewsItem2 items={item} index={index} />
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>
    );
  }
}

export class NewsItem extends Component {
  render() {
    const {index} = this.props;
    return (
      <CardView
        style={Styles.cardview}
        cardElevation={4}
        cardMaxElevation={4}
        cornerRadius={10}>
        <LinearGradient
          style={{
            borderRadius: 10,
            width: 200,
            height: 270,
            justifyContent: 'space-between',
          }}
          start={{x: 0.05, y: 0.05}}
          end={{x: 2, y: 0.05}}
          colors={
            index % 6 == 0
              ? ['#ff00ff', '#00ffff']
              : index % 5 == 0
              ? ['#00ff7f', '#00ff00']
              : index % 4 == 0
              ? ['#552da6', '#dc143c']
              : index % 3 == 0
              ? ['#808080', '#f4a73d']
              : index % 2 == 0
              ? ['#800080', '#000080']
              : index % 1 == 0
              ? ['#ff69b4', '#228b22']
              : ['#dc143c', '#ffd700']
          }>
          <View>
            <Text
              style={[
                Styles.cardText,
                {
                  fontSize: 35,
                  fontFamily: 'JosefinSans-MediumItalic',
                  textShadowColor: 'rgba(0, 0, 0, 0.75)',
                  textShadowOffset: {width: 2, height: 4},
                  textShadowRadius: 10,
                },
              ]}>
              {this.props.items.silhouette}
            </Text>

            <NumberFormat
              value={this.props.items.retail_price_cents}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
              renderText={value => (
                <Text
                  style={[
                    Styles.cardText,
                    {
                      color: '#FFFFFF',
                      textDecorationLine: 'underline',
                      textDecorationStyle: 'solid',
                      textDecorationColor: '#FFFFFF',
                    },
                  ]}>
                  {value}
                </Text>
              )}
            />
          </View>

          <Image
            style={Styles.cardImage}
            source={{uri: this.props.items.main_picture_url}}
            resizeMode="cover"
          />
        </LinearGradient>
      </CardView>
    );
  }
}
export class NewsItem2 extends Component {
  render() {
    const {index} = this.props;
    return (
      <CardView
        style={Styles.cardview2}
        cardElevation={4}
        cardMaxElevation={4}
        corner={10}>
        <LinearGradient
          style={{borderRadius: 10, padding: 10, width: 120}}
          start={{x: 0.05, y: 0.05}}
          end={{x: 2, y: 0.05}}
          colors={
            index % 6 == 0
              ? ['#ff00ff', '#00ffff']
              : index % 5 == 0
              ? ['#00ff7f', '#00ff00']
              : index % 4 == 0
              ? ['#552da6', '#dc143c']
              : index % 3 == 0
              ? ['#808080', '#f4a73d']
              : index % 2 == 0
              ? ['#800080', '#000080']
              : index % 1 == 0
              ? ['#ff69b4', '#228b22']
              : ['#dc143c', '#ffd700']
          }>
          <Image
            style={Styles.cardImage2}
            source={{uri: this.props.items.grid_picture_url}}
            resizeMode="cover"
          />
        </LinearGradient>

        <View style={Styles.viewText}>
          <Text
            style={[
              Styles.cardText2,
              {fontSize: 20, fontFamily: 'Sriracha-Regular'},
            ]}>
            {this.props.items.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Rating
              style={Styles.Rating}
              imageSize={20}
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
              readonly={true}
            />
            <NumberFormat
              value={this.props.items.retail_price_cents}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
              renderText={value => (
                <Text
                  style={[
                    Styles.cardText,
                    {
                      color: '#000000',
                      textDecorationLine: 'underline',
                      textDecorationStyle: 'solid',
                      textDecorationColor: '#000000',
                      fontSize: 15,
                      fontFamily: 'Sriracha-Regular',
                      marginRight: 30,
                    },
                  ]}>
                  {value}
                </Text>
              )}
            />
          </View>
        </View>
      </CardView>
    );
  }
}
