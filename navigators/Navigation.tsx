import React, { useLayoutEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { PERSISTENCE_KEY } from '../helpers/keys';
import RootStack from './RootStack';

type Navigation = { initialState: any };

const Navigation: React.FC<Navigation> = ({ initialState }) => {
  return (
    <NavigationContainer
      initialState={initialState}
      onStateChange={state =>
        AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
      }
    >
      <RootStack />
    </NavigationContainer>
  );
};

export default Navigation;
