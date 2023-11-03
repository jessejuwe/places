import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import { Pressable, StyleSheet } from 'react-native';

import { Colors } from '../../constants/colors';

type Props = {
  children: string;
  icon: any;
  onPress: () => void;
};

const OutlinedButton: React.FC<Props> = ({ children, onPress, icon }) => {
  return (
    <Pressable
      android_ripple={{ color: '#ccc' }}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons name={icon} size={18} color={Colors.primary500} />
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
};

export default OutlinedButton;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderColor: Colors.primary500,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'center',
    marginVertical: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  buttonText: { color: Colors.primary500, textAlign: 'center' },
  pressed: { opacity: 0.75 },
});
