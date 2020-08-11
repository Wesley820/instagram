import React from 'react';
import Feed from '../pages/Feed';

import { createStackNavigator } from '@react-navigation/stack';

const Apptack = createStackNavigator();

export default function AppRoutes() {
  return (
    <Apptack.Navigator>
      <Apptack.Screen name="Feed" component={Feed} />
    </Apptack.Navigator>
  );
}
