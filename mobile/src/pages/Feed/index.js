import React from 'react';
import { useAuth } from '../../contexts/auth';
import { Button } from 'react-native';

export default function Feed() {
  const { signOut } = useAuth();

  async function handleSignIn() {
    signOut();
  }

  return <Button title="Sair" onPress={handleSignIn} />;
}
