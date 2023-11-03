import React, { useCallback } from 'react';
import { FlatList, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

import { Colors } from '../../constants/colors';
import Place from '../../models/place';
import PlaceItem from './PlaceItem';

type Props = { places: Place[] };

const PlacesList: React.FC<Props> = ({ places }) => {
  const pressHandler = useCallback(() => {}, []);

  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>No Places added yet</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={places}
      renderItem={({ item }) => <PlaceItem item={item} onPress={pressHandler} />} // prettier-ignore
      keyExtractor={item => item.id!}
    />
  );
};

export default PlacesList;

const styles = StyleSheet.create({
  fallbackContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  fallbackText: {
    color: Colors.primary200,
    fontFamily: 'LatoBold',
    fontSize: 16,
  },
});
