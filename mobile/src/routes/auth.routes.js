import React from 'react';
import { RegisterProvider } from '../contexts/register';

import Register from '../pages/Register';
import NameRegister from '../pages/Register/Name';
import UsernameRegister from '../pages/Register/Username';
import EmailRegister from '../pages/Register/Email';
import PasswordRegister from '../pages/Register/Password';

import SignIn from '../pages/SignIn';

import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
  return (
    <RegisterProvider>
      <AuthStack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}
      >
        <AuthStack.Screen name="SignIn" component={SignIn} />
        <AuthStack.Screen name="Register" component={Register} />

        <AuthStack.Screen name="Name" component={NameRegister} />
        <AuthStack.Screen name="Username" component={UsernameRegister} />
        <AuthStack.Screen name="Email" component={EmailRegister} />
        <AuthStack.Screen name="Password" component={PasswordRegister} />
      </AuthStack.Navigator>
    </RegisterProvider>
  );
}
