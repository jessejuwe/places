import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { Colors } from '../constants/colors';
import AddPlace from '../screens/Place/AddPlace';
import AllPlaces from '../screens/Place/AllPlaces';
import { RootStackParamList } from '../types/navigation';
import IconButton from '../components/UI/IconButton';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

type Props = {};

const RootStack: React.FC<Props> = props => {
  return (
    <Navigator
      initialRouteName="AllPlaces"
      screenOptions={{
        contentStyle: {
          backgroundColor: Colors.gray700,
        },
        headerStyle: {
          backgroundColor: Colors.primary500,
        },
        headerTitleStyle: { fontFamily: 'LatoBold' },
        headerTintColor: Colors.gray700,
      }}
    >
      <Screen
        name="AllPlaces"
        component={AllPlaces}
        options={({ navigation }) => ({
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="add"
              color={tintColor!}
              size={24}
              onPress={() => navigation.navigate('AddPlace')}
            />
          ),
          title: 'Your Favorites Places',
        })}
      />
      <Screen
        name="AddPlace"
        component={AddPlace}
        options={{ title: 'Add a New Place', headerBackTitleVisible: false }}
      />
    </Navigator>
  );
};

export default RootStack;
