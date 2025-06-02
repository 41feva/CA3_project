import { StyleSheet, Button, TextInput, Image } from 'react-native';
import React, { useState } from 'react';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabTwoScreen() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [submittedName, setSubmittedName] = useState('');
  const [submittedAge, setSubmittedAge] = useState('');

  function handleUpdate() {
    setSubmittedName(name);
    setSubmittedAge(age);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <Image source={require('../../assets/images/Suitguy.jpg')}
      style={styles.image} />
         
              
    
      <TextInput
        style={styles.input}
        placeholder="Enter your full name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />

      <Button title="Update Profile" onPress={handleUpdate} />

      {submittedName || submittedAge ? (
        <View style={styles.output}>
          <Text style={styles.resultTitle}>Updated Info:</Text>
          <Text style={styles.resultText}>Name: {submittedName}</Text>
          <Text style={styles.resultText}>Age: {submittedAge}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  output: {
    marginTop: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  resultTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  resultText: {
    fontSize: 16,
    marginTop: 5,
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 75,
    marginBottom: 20,
    alignSelf: 'center',
  },
});
 
