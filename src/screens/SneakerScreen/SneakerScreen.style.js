import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
  },
  cardview: {
    flex: 1,
    padding: 5,
    marginBottom: 10,
    marginHorizontal: 5,
  },

  cardImage: {
    width: '100%',
    height: 130,
    borderRadius: 10,
    transform: [{scale: 1.2}],
  },

  cardText: {
    paddingBottom: 5,
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'Sriracha-Regular',
    marginHorizontal: 10,
  },
  cardview2: {
    flexDirection: 'row',
    width: 405,
    height: 130,
    padding: 5,
    marginBottom: 10,
    marginHorizontal: 10,
  },

  cardImage2: {
    position: 'relative',
    left: 30,
    transform: [{rotate: '30deg'}, {scale: 1.6}],
    width: 100,
    height: 100,
    marginBottom: 10,
  },

  cardText2: {
    fontSize: 12,
    color: 'black',
    fontFamily: 'Sriracha-Regular',
  },
  viewText: {
    width: 265,
    marginLeft: 15,
    marginRight: 5,
  },
  Rating: {
    alignItems: 'flex-start',
    marginLeft: 10,
    width: 100,
  },
});
