import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

const INITIAL_REGION = {
  latitude: 6.4878674,
  longitude: 3.85332,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export default function TabFiveScreen() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      initialRegion={INITIAL_REGION}
      showsMyLocationButton
      showsUserLocation
      provider={PROVIDER_GOOGLE}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
