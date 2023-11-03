import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { StyleSheet } from 'react-native';

type Props = {
  color: string;
  icon: any;
  onPress: () => void;
  size: number;
};

const IconButton: React.FC<Props> = ({ color, icon, onPress, size }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    margin: 4,
    justifyContent: 'center',
  },
  pressed: { opacity: 0.75 },
});
