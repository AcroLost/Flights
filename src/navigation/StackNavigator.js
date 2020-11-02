import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { TopTabNavigation } from './TopTabNavigator';
import FlightInfo from '../components/FlightInfo';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}>
            <Stack.Screen name="Flights" component={TopTabNavigation}
                options={{
                    headerTitleStyle: { alignSelf: 'center' },
                    headerStyle: { elevation: 0, shadowOffset: { height: 0 } }
                }} />
            <Stack.Screen name="FlightsInfo" component={FlightInfo}
                options={{ headerShown: false }}
                initialParams={{}}
            />
        </Stack.Navigator>
    );
}