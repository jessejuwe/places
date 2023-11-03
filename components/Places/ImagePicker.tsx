import React, { useState } from 'react';
import { Button, Image, Text, View } from 'react-native';
import { Alert, StyleSheet } from 'react-native';
import * as ImgPicker from 'expo-image-picker';

import { Colors } from '../../constants/colors';
import OutlinedButton from '../UI/OutlinedButton';

type Props = {};

const ImagePicker: React.FC<Props> = props => {
  const [imageUri, setImageUri] = useState<string | null>(null);

  const [status, requestPermission] = ImgPicker.useCameraPermissions();

  const verifyPermissions = async () => {
    if (status?.status === ImgPicker.PermissionStatus.UNDETERMINED) {
      const response = await requestPermission();

      return response.granted;
    }

    if (status?.status === ImgPicker.PermissionStatus.DENIED) {
      Alert.alert('Permission error', 'Failed to grant camera permission');

      return false;
    }

    return true;
  };

  const pressHandler = async () => {
    const isPermitted = await verifyPermissions();

    // GUARD CLAUSE
    if (!isPermitted) return;

    const image = await ImgPicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    if (image) setImageUri(image.assets![0].uri);
  };

  return (
    <View>
      <View style={styles.preview}>
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
        {!imageUri && <Text style={styles.fallback}>No image taken yet</Text>}
      </View>
      <OutlinedButton icon="camera" onPress={pressHandler}>
        Take Image
      </OutlinedButton>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
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
});
