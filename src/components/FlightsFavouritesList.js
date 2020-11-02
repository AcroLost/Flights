import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeFavouriteAC } from '../redux/flightReducer';
import Flight from './Flight';

const FlightsFavouritesList = ({ navigation, route }) => {

    const flights = useSelector(state => state.flights);
    const places = useSelector(state => state.places);

    const dispatch = useDispatch();

    const [flightsList, setFlightsList] = useState([]);

    useEffect(() => {
        if (flights.length) {
            setFlightsList(flights)
        }
    }, [flights])

    const { favourites } = route.params;

    return (
        <View style={styles.flightsContainer}>
            {flightsList.length
                ? favourites && <FlatList
                    data={flightsList}
                    renderItem={({ item }) => {
                        return item.checked && <Flight {...item} places={places} navigation={navigation} changeFavourite={(id) => dispatch(changeFavouriteAC(id))} />
                    }}
                    keyExtractor={(item, index) => item + index}
                />
                : null
            }
            <StatusBar style="inverted" />
        </View>
    );
}

export default FlightsFavouritesList;

const styles = StyleSheet.create({
    flightsContainer: {
        backgroundColor: '#F8F8F8',
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 20
    },
});