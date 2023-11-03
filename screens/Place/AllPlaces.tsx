import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import PlacesList from '../../components/Places/PlacesList';
import { RootStackParamList } from '../../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'AllPlaces'>;

const AllPlaces: React.FC<Props> = ({ route, navigation }) => {
  return <PlacesList places={[]} />;
};

export default AllPlaces;

const styles = StyleSheet.create({});
