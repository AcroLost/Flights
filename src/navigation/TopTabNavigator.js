import React, { useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View } from 'react-native';
import FlightsList from '../components/FlightsList';
import { LinearGradient } from 'expo-linear-gradient';
import FlightsFavouritesList from '../components/FlightsFavouritesList';
import { useDispatch } from 'react-redux';
import { REQUEST_FLIGHTS } from '../redux/constants';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigation = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: REQUEST_FLIGHTS });
  }, []);

  return (
    <Tab.Navigator initialRouteName="Browse"
      tabBarOptions={{
        labelStyle: {
          fontSize: 17,
          fontWeight: '700',
          textTransform: 'none',
          marginBottom: 0
        },
        inactiveTintColor: '#000',
        renderIndicator: (route) => {
          if (!route.getTabWidth()) {
            return null;
          }
          return (
            <View style={{
              width: route.getTabWidth(),
              height: '100%',
              left: route.navigationState.index * route.getTabWidth(),
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
              <LinearGradient start={[0.1, 1]} end={[0.9, 1]} colors={['#3C4CAD', '#00C3FF']} style={{
                width: '80%',
                borderRadius: 2,
                height: 3,
                bottom: 3
              }}></LinearGradient>
            </View>
          )
        },
      }}>

      <Tab.Screen name="Favourites" initialParams={{ favourites: true }} component={FlightsFavouritesList} />
      <Tab.Screen name="Browse" initialParams={{ favourites: false }} component={FlightsList} />
    </Tab.Navigator>
  );
}