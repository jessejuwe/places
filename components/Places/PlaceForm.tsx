import { Formik, FormikErrors } from 'formik';
import React, { useCallback } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { StyleSheet } from 'react-native';

import { Colors } from '../../constants/colors';
import ImagePicker from './ImagePicker';
import LocationPicker from './LocationPicker';
import Place from '../../models/place';

type Props = {
  onCancel: () => void;
  onSubmit: (placeData: Place) => void;
};

interface InitialValues {
  address: string;
  imageUri: string;
  lat: number;
  long: number;
  title: string;
}

const PlaceForm: React.FC<Props> = ({ onCancel, onSubmit }) => {
  const initialValues: InitialValues = {
    address: '',
    imageUri: '',
    title: '',
    lat: 0,
    long: 0,
  };

  const submitHandler = useCallback((data: Place) => onSubmit(data), []);

  return (
    <ScrollView style={styles.container}>
      <Formik
        initialValues={initialValues}
        validate={values => {
          const errors: FormikErrors<InitialValues> = {};

          const addressIsValid = values.address.trim().length > 8;
          const imageUriIsValid = values.imageUri.trim().length > 0;
          const latIsValid = !isNaN(+values.lat);
          const longIsValid = !isNaN(+values.long);
          const titleIsValid = values.title.trim().length > 4;

          if (!addressIsValid) errors.address = 'invalid';
          if (!imageUriIsValid) errors.imageUri = 'invalid';
          if (!latIsValid) errors.lat = 'invalid';
          if (!longIsValid) errors.long = 'invalid';
          if (!titleIsValid) errors.title = 'invalid';

          return errors;
        }}
        onSubmit={(values, action) => {
          action.setSubmitting(true);

          const address = values.address;
          const imageUri = values.imageUri;
          const location = { lat: values.lat, long: values.long };
          const title = values.title;

          const expenseData = new Place(title, imageUri, address, location);

          submitHandler(expenseData);

          action.setSubmitting(false);
          action.resetForm();
        }}
      >
        {({ errors, handleSubmit, handleChange, touched, values }) => {
          return (
            <View>
              <Text style={styles.label}>Title</Text>
              <TextInput
                onChangeText={handleChange('title')}
                value={values.title}
                style={styles.input}
              />
            </View>
          );
        }}
      </Formik>
      <ImagePicker />
      <LocationPicker />
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  input: {
    backgroundColor: Colors.primary100,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    borderRadius: 4,
    fontSize: 16,
    paddingHorizontal: 4,
    paddingVertical: 8,
    marginVertical: 8,
  },
  label: {
    color: Colors.primary500,
    fontFamily: 'LatoBold',
    fontSize: 18,
    marginBottom: 4,
  },
});
