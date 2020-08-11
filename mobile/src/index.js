import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';
import { AuthProvider } from './contexts/auth';

export default function Main() {
  return (
    <AuthProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      <Routes />
    </AuthProvider>
  );
}
