import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { useDispatch } from 'react-redux';
import { dateDefinition } from '../helpers/dateDefinition';
import { changeFavouriteAC } from '../redux/flightReducer';

const FlightInfo = ({ navigation, route }) => {

  const dispatch = useDispatch();
  const { checked, places, MinPrice, OutboundLeg, id } = route.params;

  const [favourite, setFavourite] = useState(false);

  useEffect(() => {
    setFavourite(checked);
  }, [])

  const onSwipeRight = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <GestureRecognizer style={{ flex: 1 }} onSwipeRight={onSwipeRight}>
        <Image style={{ width: '100%' }} source={require('../images/background.png')} />
      </GestureRecognizer>

      <View style={styles.infoWrapper}>

        {favourite
          ? <TouchableOpacity onPress={() => {
            dispatch(changeFavouriteAC(id))
            setFavourite((prev) => !prev);
          }} style={styles.infoFavourite}>
            <Image source={require('../images/favourite.png')} />
          </TouchableOpacity>
          : <TouchableOpacity onPress={() => {
            dispatch(changeFavouriteAC(id))
            setFavourite((prev) => !prev);
          }} style={styles.infoFavourite}>
            <Image source={require('../images/unfavourite.png')} />
          </TouchableOpacity>
        }

        <GestureRecognizer style={{ height: 'auto', marginBottom: 23 }} onSwipeRight={onSwipeRight}>
          <View style={styles.info}>
            <View>
              <Text style={styles.infoText}>{dateDefinition('month', OutboundLeg.DepartureDate)}</Text>
              <Text style={styles.infoPlace}>{places[1].IataCode}</Text>
              <Text style={styles.infoText}>{places[1].CityName}</Text>
            </View>
            <Image source={require('../images/vector.png')} />
            <View>
              <Text style={styles.infoText}>{dateDefinition('arrival', OutboundLeg.DepartureDate)}</Text>
              <Text style={styles.infoPlace}>{places[0].IataCode}</Text>
              <Text style={styles.infoText}>{places[0].CityName}</Text>
            </View>
          </View>

          <LinearGradient start={[0.1, 1]} end={[1, 1]} colors={['#3162bc', '#159be3']} style={styles.board}>
            <View style={{ width: '50%' }}>
              <Text style={styles.boardText}>Price</Text>
              <Text style={styles.boardInfo}>{MinPrice} ₽</Text>
            </View>
            <View style={{ borderLeftWidth: 1, borderLeftColor: '#fff', width: '50%' }}>
              <Text style={styles.boardText}>Boarding</Text>
              <Text style={styles.boardInfo}>{dateDefinition('departure', OutboundLeg.DepartureDate)}</Text>
            </View>
          </LinearGradient>
        </GestureRecognizer>

        <View style={styles.scrollContainer}>
          <ScrollView
            horizontal
            pagingEnabled
            snapToInterval={150}
            showsHorizontalScrollIndicator={false}>

            <Image style={styles.image} source={require('../images/slide1.png')} />
            <Image style={styles.image} source={require('../images/slide2.png')} />
            <Image style={styles.image} source={require('../images/slide1.png')} />
            <Image style={styles.image} source={require('../images/slide2.png')} />
            <Image style={styles.image} source={require('../images/slide1.png')} />
            <Image style={styles.image} source={require('../images/slide2.png')} />
            <Image style={styles.image} source={require('../images/slide1.png')} />
            <Image style={styles.image} source={require('../images/slide2.png')} />
            <Image style={styles.image} source={require('../images/slide1.png')} />
          </ScrollView>
          <Image style={{ position: 'absolute', right: 0 }} source={require('../images/shadow.png')} />
        </View>
      </View>
    </View>

  );
}

export default FlightInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoWrapper: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 5,
    position: 'absolute',
    bottom: 0,
  },
  infoFavourite: {
    position: 'absolute',
    top: 25,
    right: 23
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  infoText: {
    color: '#878787',
    fontSize: 13
  },
  infoPlace: {
    color: '#404040',
    fontSize: 36,
    fontWeight: '700'
  },
  board: {
    flexDirection: 'row',
    paddingVertical: 16,
    justifyContent: 'center',
    marginTop: 17,
    borderRadius: 10
  },
  boardText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 13
  },
  boardInfo: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center'
  },
  scrollContainer: {
    marginRight: -30,
  },
  image: {
    marginRight: 5,
  },
})