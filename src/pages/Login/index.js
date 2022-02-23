import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { AuthContext } from '../../contexts/auth';

export default function Home() {
  const { nome, user } = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <Text>Pagina Home</Text>
      <Text>Nome: {nome}</Text>
      <Text>Email logado: {user.email}</Text>
      <Text>Status: {user.status}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
