import React, {useState} from 'react';
import {Text, TouchableOpacityProps, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
    text: String;
}

export function PressableButton({text, ...other}: Props) {
  return (
        <TouchableOpacity style={styles.button} {...other}>
          <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
  );
}