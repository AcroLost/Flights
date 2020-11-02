import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeFavouriteAC } from '../redux/flightReducer';
import Flight from './Flight';

const FlightsList = ({ navigation, route }) => {

  const flights = useSelector(state => state.flights);
  const places = useSelector(state => state.places);
  const loading = useSelector(state => state.loading);

  const dispatch = useDispatch();

  const [flightsList, setFlightsList] = useState([]);

  useEffect(() => {
    if (flights.length) {
      setFlightsList(flights)
    }
  }, [flights])

  const { favourites } = route.params;

  if (loading) {
    return <ActivityIndicator style={{ alignItems: 'center', height: '90%' }} size="large" color="skyblue" />
  }

  return (
    <View style={styles.flightsContainer}>

      {flightsList.length
        ? !favourites && <FlatList
          data={flightsList}
          renderItem={({ item }) => <Flight {...item} places={places} navigation={navigation} changeFavourite={(id) => dispatch(changeFavouriteAC(id))} />}
          keyExtractor={(item, index) => item + index}
        />
        : null
      }

      <StatusBar style="inverted" />
    </View>
  );
}

export default FlightsList;

const styles = StyleSheet.create({
  flightsContainer: {
    backgroundColor: '#F8F8F8',
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20
  },
});