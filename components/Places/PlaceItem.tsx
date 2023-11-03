import React, { useCallback } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { Platform, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import Place from '../../models/place';
import { RootStackParamList } from '../../types/navigation';

type Props = { item: Place; onPress: () => void };

const PlaceItem: React.FC<Props> = ({ item, onPress }) => {
  const { address, imageUri, location, title, id } = item;
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Pressable
      android_ripple={{ color: '#ccc' }}
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}
    >
      <View>
        <Image source={{ uri: imageUri }} />
        <View>
          <Text>{title}</Text>
          <Text>{address}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({
  pressed: { opacity: Platform.OS === 'ios' ? 0.75 : 1 },
});
