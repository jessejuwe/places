import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import PlaceForm from '../../components/Places/PlaceForm';
import { RootStackParamList } from '../../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'AddPlace'>;

const AddPlace: React.FC<Props> = ({ route, navigation }) => {
  const cancelHandler = useCallback(() => navigation.goBack(), []);

  const submitHandler = useCallback(() => {}, []);

  return <PlaceForm onCancel={cancelHandler} onSubmit={submitHandler} />;
};

export default AddPlace;

const styles = StyleSheet.create({});
