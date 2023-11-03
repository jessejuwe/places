import * as Location from 'expo-location';
import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Alert, StyleSheet } from 'react-native';

import { Colors } from '../../constants/colors';
import { getMapPreview } from '../../utils/location';
import OutlinedButton from '../UI/OutlinedButton';

type Props = {};
type LocationObject = Location.LocationObject;

const LocationPicker: React.FC<Props> = props => {
  // const [location, setLocation] = useState<LocationObject | null>(null);
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [status, requestPermission] = Location.useForegroundPermissions();

  const verifyPermissions = async () => {
    if (status?.status === Location.PermissionStatus.UNDETERMINED) {
      const response = await requestPermission();

      return response.granted;
    }

    if (status?.status === Location.PermissionStatus.DENIED) {
      Alert.alert('Permission error', 'Failed to grant location permission');

      return false;
    }

    return true;
  };

  const getLocationHandler = async () => {
    const isPermitted = await verifyPermissions();

    // GUARD CLAUSE
    if (!isPermitted) return;

    let location = await Location.getCurrentPositionAsync();

    const lat = location.coords.latitude;
    const long = location.coords.longitude;

    const imageUri = getMapPreview(lat, long);
    setImageUri(imageUri);
  };

  const pickLocationHandler = async () => {};

  return (
    <View>
      <View style={styles.preview}>
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
        {!imageUri && (
          <Text style={styles.fallback}>No location picked yet</Text>
        )}
      </View>

      <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          Locate me
        </OutlinedButton>

        <OutlinedButton icon="map" onPress={pickLocationHandler}>
          Pick location
        </OutlinedButton>
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  actions: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fallback: {
    color: Colors.primary800,
    fontFamily: 'Lato',
    fontSize: 16,
    textAlign: 'center',
  },
  image: { height: '100%', width: '100%' },
  preview: {
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    height: 200,
    justifyContent: 'center',
    overflow: 'hidden',
    marginVertical: 8,
    width: '100%',
  },
  text: { color: 'black' },
});
