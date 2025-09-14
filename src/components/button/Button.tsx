import React, {useState} from 'react';
import {Text, View, TouchableOpacity } from 'react-native';
import { styles } from './Style';

type Props = {
    onPress: Function;
}

export const PressableButton = (onPress: Function) => {
  return (
        <TouchableOpacity style={styles.button} onPress= {() => {onPress}}>
          <Text style={styles.buttonText}>Generate</Text>
        </TouchableOpacity>
  );
}