import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Tambahkontak, Detail, Edit, Splash} from '../pages';

const Stack = createStackNavigator();

const Route = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Tambahkontak"
        component={Tambahkontak}
        options={{title: 'Tambah Lokasi Wisata'}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{title: 'Detail Data'}}
      />
      <Stack.Screen
        name="Edit"
        component={Edit}
        options={{title: 'Edit Data'}}
      />
    </Stack.Navigator>
  );
};

export default Route;
