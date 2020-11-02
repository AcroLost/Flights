import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { dateDefinition } from '../helpers/dateDefinition';

const Flight = ({ checked, navigation, MinPrice, OutboundLeg, id, places, changeFavourite }) => {

  return (

    <TouchableOpacity onPress={() => navigation.navigate('FlightsInfo', { checked, places, MinPrice, OutboundLeg, id })}>

      <View style={styles.flight}>
        {checked
          ? <TouchableOpacity onPress={() => changeFavourite(id)} style={styles.flightFavourite}>
            <Image source={require('../images/favourite.png')} />
          </TouchableOpacity>
          : <TouchableOpacity onPress={() => changeFavourite(id)} style={styles.flightFavourite}>
            <Image source={require('../images/unfavourite.png')} />
          </TouchableOpacity>
        }
        <View style={styles.flightWrapper}>
          <View style={styles.flightImage}>
            <Image source={require('../images/plane.png')} />
          </View>
          <View>
            <View style={styles.flightCityWrapper}>
              <Text style={styles.flightCity}>{places.length && places[1].CityName}</Text>
              <Image style={styles.flightArrow} source={require('../images/arrow.png')} />
              <Text style={styles.flightCity}>{places.length && places[0].CityName}</Text>
            </View>
            <Text style={styles.flightInfo}>{places.length && dateDefinition('fullMonth', OutboundLeg.DepartureDate, places)}</Text>

            <Text style={styles.flightInfo}>Aeroflot</Text>
          </View>
        </View>
        <Text style={styles.priceText}>Price: <Text style={styles.priceValue}>{MinPrice} ₽</Text></Text>
      </View>
    </TouchableOpacity >
  )
}

export default Flight;

const styles = StyleSheet.create({
  flight: {
    backgroundColor: '#fff',
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 16,
    paddingTop: 20,
    paddingBottom: 15,
    borderRadius: 8
  },
  flightFavourite: {
    position: 'absolute',
    top: 15,
    right: 12,
    zIndex: 1
  },
  flightWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'rgba(196, 196, 196, 0.5)',
    borderBottomWidth: 1,
    paddingBottom: 14
  },
  flightImage: {
    padding: 14,
    borderRadius: 100,
    backgroundColor: 'rgba(0, 119, 255, 0.05)',
    marginRight: 20
  },
  flightCityWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  flightCity: {
    fontSize: 17
  },
  flightArrow: {
    marginHorizontal: 12
  },
  flightInfo: {
    fontSize: 13,
    color: '#878787'
  },
  priceText: {
    alignSelf: 'flex-end',
    marginTop: 7,
    color: '#878787'
  },
  priceValue: {
    color: '#000',
    fontSize: 17
  }
});